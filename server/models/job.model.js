const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const jobSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: [ 'Job', 'Internship' ],
        required: true
    },
    noOfPos: {
        type: Number,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },
    skills: [{
        type: String,
        required: true
    }],
    empType: {
        type: String,
        enum: [ 'PartTime', 'FullTime' ],
        required: true
    },
    minExp: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        enum: [ 'Remote', 'In-Office' ],
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    token: {
        type: String
    }
}, {
    timestamps: true
});

jobSchema.virtual('applicants', {
    ref: 'Application',
    localField: '_id',
    foreignField: 'job'
});

jobSchema.methods.generateJobToken = async function() {
    const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);
    this.token = token;
    await this.save();
    return token;
}

jobSchema.methods.toJSON = function() {
    const jobObject = this.toObject();
    delete jobObject.token;
    return jobObject;
}

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
