const express = require('express');
const router = express.Router();
const Application = require('../models/application.model');
const studentAuth = require('../middleware/studentAuth');
const Job = require('../models/job.model');
const jwt = require('jsonwebtoken');
const companyAuth = require('../middleware/companyAuth');
const jobAuth = require('../middleware/jobAuth');

router.post('/applications/:id', studentAuth, async (req, res) => {
    try {
        const decoded = jwt.verify(req.params.id, process.env.JWT_SECRET);
        const job = await Job.findOne({ _id: decoded._id, token: req.params.id });
        if(!job) {
            throw new Error('No job with given data.');
        }
        const application = new Application({ applicant: req.studentUser._id, job });
        await application.save();
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get('/applications/jobs/:id', async (req, res) => {
    try {
        const decoded = jwt.verify(req.params.id, process.env.JWT_SECRET);
        const applications = await Application.findOne({ job: decoded._id }).populate('job').populate('applicant');
        res.status(200).send(applications);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get('/applications/students/:id', async (req, res) => {
    try {
        const decoded = jwt.verify(req.params.id, process.env.JWT_SECRET);
        const applications = await Application.findOne({ applicant: decoded._id }).populate('applicant').populate('job');
        res.status(200).send(applications);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.patch('/applications/jobs/:id/students/:appId', companyAuth, jobAuth, async (req, res) => {
    try {
        const application = await Application.findById(req.params.appId);
        res.status(200).send({ company: req.companyUser, job: req.job, application });
    } catch(error) {
        res.status(400).send(error);
    }
});

module.exports = router;
