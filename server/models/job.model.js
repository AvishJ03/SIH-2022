const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
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
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    },
    skills: [{
        type: String,
        // required: true,
    }],
    empType: {
        type: String,
        enum: [ 'PartTime', 'FullTime'],
        // required: true,
    },
    minExp: {
        type: Number,
        // required: true,
    },
    desc: {
        type: String,
        // required: true,
    },
    salary: {
        type: Number,
        // required: true,
    },
    location: {
        type: String,
        enum: [ 'Remote', 'In-Office'],
        // required: true,
    },
    duration: {
        type: Number,
        // required: true,
    },
}, {
    timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
