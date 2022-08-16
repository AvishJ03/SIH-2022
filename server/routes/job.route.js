const express = require('express');
const router = express.Router();
const Job = require('../models/job.model');
const companyAuth = require('../middleware/companyAuth');
const jobAuth = require('../middleware/jobAuth');

router.get('/jobs/self', companyAuth, async (req, res) => {
    try {
        const jobs = await Job.find({ company: req.companyUser._id });
        res.status(200).send(jobs);
    } catch(error) {
        res.status(400).send(error);
    }
});

/*
    {
    "title": "Web Developer",
    "noOfPos": 2,
    "skills": ["html", "css", "js"],
    "empType": "PartTime",
    "minExp": 2,
    "desc": "Good Web Developer needed",
    "salary": 1000,
    "location": "Remote",
    "duration": 1
    }
*/
router.post('/jobs', companyAuth, async(req, res) => {
    const job = new Job({ ...req.body, company: req.companyUser._id });
    try {
        await job.save();
        const jobToken = await job.generateJobToken();
        res.status(201).send({ job, jobToken });
    } catch (error) {
        res.status(400).send(error);
    }
});

/*
    {
        "title": "Full Stack Developer",
        "noOfPos": 1,
        "skills": ["react", "node"],
        "empType": "FullTime",
        "minExp": 3,
        "desc": "Pull Stack Web Developer needed",
        "salary": 10000,
        "location": "Remote",
        "duration": 3
    }
*/
router.patch('/jobs/:id', companyAuth, jobAuth, async (req, res) => {
    const updates = Object.keys(req.body);
    const validOperations = [ 'title', 'noOfPos', 'skills', 'empType', 'minExp', 'desc', 'salary', 'location', 'duration' ];
    const isUpdateValid = updates.every((update) => validOperations.includes(update));
    if(!isUpdateValid) {
        return res.status(400).send('Invalid Update Request');
    }
    try {
        updates.forEach((update) => req.job[update] = req.body[update]);
        await req.job.save();
        res.status(200).send(req.job);
    } catch(error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

router.delete('/jobs/:id', companyAuth, jobAuth, async (req, res) => {
    try {
        await req.job.remove();
        res.status(200).send(req.job);
    } catch(error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

module.exports = router;
