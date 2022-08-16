const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Invalid email.');
            }
        }
    },
    contactNo: {
        type: Number,
        trim: true,
        required: true,
        validate(value) {
            if(!validator.isMobilePhone(`${value}`)) {
                throw new Error('Invalid phone number.');
            }
        }
    },
    noOfEmp: {
        type: Number,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    typeOfCompany: {
        type: String,
        trim: true,
        enum: [ 'PbLC', 'PrLC', 'JVC', 'PF', 'OPC', 'SP', 'BO', 'NGO' ]
    },
    website: {
        type: String,
        trim: true,
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid website URL.');
            }
        }
    },
    logo: {
        type: String
    },
    companyInfo: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

companySchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
}

companySchema.methods.toJSON = function() {
    const companyObject = this.toObject();
    delete companyObject.password;
    delete companyObject.tokens;
    delete companyObject.logo;
    return companyObject;
}

companySchema.statics.findByCredentials = async (email, password) => {
    const company = await Company.findOne({ email });
    if(!company) {
        throw new Error('Invalid email.');
    }
    const isMatch = await bcrypt.compare(password, company.password);
    if(!isMatch) {
        throw new Error('Unable to login.');
    }
    return company;
}

companySchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
