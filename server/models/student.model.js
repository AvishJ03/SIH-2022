const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const skillsSchema = new mongoose.schema({
    multipleSkills: {
        type: String,
        required: true,
        trim: true
    },
},{
    timestamps: true
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
        enum: [ 'M', 'F' ]
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
        required: true,
        // minlength: 0,
        // maxlength: 10
    },
    currentCity: {
        type: String,
        required: true,
        trim: true
    },
    graduation: {
        type: Number,
        required: true
    },
    seniorSecDiploma: {
        type: Number,
        required: true
    },
    secondary: {
        type: Number,
        required: true
    },
    gradStatus: {
        type: String,
        possibleValues: ['Pursuing', 'Completed'],
        required: true
    },
    startYear: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 4
    },
    endYear: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 4
    },
    degree: {
        type: String,
        required: true,
        trim: true
    },
    stream: {
        type: String,
        required: true,
        trim: true
    },
    performScale: {
        type: Number,
    },
    perform: {
        type: Number,
    },
    skillsStudent: [skillsSchema],
    blogLink: {
        type: String,
        trim: true,
        // required: true
    },
    githubLink: {
        type: String,
        trim: true,
        // required: true
    },
    playstoreLink: {
        type: String,
        trim: true,
        // required: true
    },
    behanceLink: {
        type: String,
        trim: true,
        // required: true
    },
    otherPortfolioLink: {
        type: String,
        trim: true,
        // required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
},    {
    timestamps: true
});

studentSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this.id.toString() }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token });
    console.log(this.tokens);
    await this.save();
    return token;
}

studentSchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
}

studentSchema.statics.findByCredentials = async (email, password) => {
    const user = await Student.findOne({ email });
    if(!user) {
        throw new Error('Invalid email.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        throw new Error('Unable to login.');
    }
    return user;
}

studentSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next()
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;