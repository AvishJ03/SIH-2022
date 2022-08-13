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
    number: {
        type: Number,
        trim: true,
        required: true
    },
    noOfEmp: {
        type: Number,
        trim: true,
        required: true
    },
    location: {
        type: String,
        trim: true,
        required: true
    },
    typeOfCompany: {
        type: String,
        enum: [ 'PbLC', 'PrLC', 'JVC', 'PF', 'OPC', 'SP', 'BO', 'NGO' ],
        required: true,
    },
    website: {
        type: String,
        trim: true,
        // required: true
    },
    logo: {
        type: String,
        // required: true
    },
    companyInfo: {
        type: String,
        trim: true,
        required: true
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
    const token = jwt.sign({ _id: this.id.toString() }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token });
    console.log(this.tokens);
    await this.save();
    return token;
}

companySchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
}

companySchema.statics.findByCredentials = async (email, password) => {
    const user = await Company.findOne({ email });
    if(!user) {
        throw new Error('Invalid email.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        throw new Error('Unable to login.');
    }
    return user;
}

companySchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next()
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
