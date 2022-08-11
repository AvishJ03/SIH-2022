const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
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
