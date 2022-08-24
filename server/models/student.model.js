const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const skillsSchema = new mongoose.Schema({
    multipleSkills: {
        type: String,
        required: true,
        trim: true
    }
});

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        enum: [ 'M', 'F' ],
        trim: true
    },
    age: {
        type: Number,
        trim: true,
        min: 18,
        max: 60
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
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    mobileNo: {
        type: Number,
        validate(value) {
            if(!validator.isMobilePhone(`${value}`)) {
                throw new Error('Invalid phone number.');
            }
        }
    },
    currentCity: {
        type: String,
        trim: true
    },
    graduation: {
        type: Number
    },
    seniorSecDiploma: {
        type: Number
    },
    secondary: {
        type: Number
    },
    gradStatus: {
        type: String,
        possibleValues: ['Pursuing', 'Completed']
    },
    startYear: {
        type: Number,
        minlength: 0,
        maxlength: 4
    },
    endYear: {
        type: Number,
        minlength: 0,
        maxlength: 4
    },
    degree: {
        type: String,
        trim: true
    },
    stream: {
        type: String,
        trim: true
    },
    performScale: {
        type: Number,
    },
    perform: {
        type: Number,
    },
    skillsStudent: [skillsSchema],
    profile: {
        type: String
    },
    blogLink: {
        type: String,
        trim: true,
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid website URL.');
            }
        }
    },
    githubLink: {
        type: String,
        trim: true,
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid website URL.');
            }
        }
    },
    playstoreLink: {
        type: String,
        trim: true,
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid website URL.');
            }
        }
    },
    behanceLink: {
        type: String,
        trim: true,
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid website URL.');
            }
        }
    },
    otherPortfolioLink: {
        type: String,
        trim: true,
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid website URL.');
            }
        }
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

studentSchema.virtual('applications', {
    ref: 'Application',
    localField: '_id',
    foreignField: 'applicant'
});

studentSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
}

studentSchema.methods.toJSON = function() {
    const studentObject = this.toObject();
    delete studentObject.password;
    delete studentObject.tokens;
    return studentObject;
}

studentSchema.statics.findByCredentials = async (email, password) => {
    const student = await Student.findOne({ email });
    if(!student) {
        next();
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if(!isMatch) {
        next();
    }
    return student;
}

studentSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next()
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
