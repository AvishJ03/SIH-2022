const express = require('express');
const router = express.Router();
const Company = require('../models/company.model');
const auth = require('../middleware/companyAuth');
var mongoose = require('mongoose');
const Job = require('../models/job.model');

/*
    request body
    {
    "name": "SIH 4",
    "email": "sih4@gmail.com",
    "password": "sihcoimbatore",
    "contactNo": 9876543210
    }
*/
router.post('/company', async (req, res) => {
    const company = new Company(req.body);
    try {
        await company.save();
        const token = await company.generateAuthToken();
        res.status(201).send({ companyUser: company, companyToken: token });
    } catch (error) {
        res.status(400).send(error);
        console.log(error.message);
    }
});

/*
    request body
    {
    "email": "sih4@gmail.com",
    "password": "sihcoimbatore"
    }
*/
// router.post('/company/login', async (req, res) => {
//     try {
//         const company = await Company.findByCredentials(req.body.email, req.body.password);
//         const token = await company.generateAuthToken();
//         res.status(200).send({ companyUser: company, companyToken: token });
//     } catch(error) {
//         res.status(400).send(error);
//     }
// });

router.get('/company/self', auth, async (req, res) => {
    res.status(200).send(req.companyUser);
});
router.get('/company/:id', async (req, res) => {
    try {
        // const id = mongoose.Types.ObjectId(req.params.id);
        console.log(req.params.id);
        const comp = await Company.find({ _id: req.params.id });
        res.status(200).send(comp);
    } catch (error) {
        console.log(req.params.id);
        res.status(400).send(error);
    }
});

router.post('/company/logout', auth, async (req, res) => {
    try {
        req.companyUser.tokens = [];
        await req.companyUser.save();
        res.status(200).send({ message: 'Successfully logged out.' });
    } catch (error) {
        res.status(400).send({
            error,
            message: "Something went wrong"
        });
    }
});

/*
    request body
    {
    "noOfEmp": 8,
    "location": "Coimbatore",
    "website": "www.sih.com",
    "typeOfCompany": "PF",
    "companyInfo": "My Company"
    }
*/
router.patch('/company/self', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const validOperations = ['name', 'email', 'contactNo', 'noOfEmp', 'location', 'typeOfCompany', 'website', 'companyInfo', 'password'];
    const isUpdateValid = updates.every((update) => validOperations.includes(update));
    if (!isUpdateValid) {
        return res.status(400).send();
    }
    try {
        updates.forEach((update) => req.companyUser[update] = req.body[update]);
        await req.companyUser.save();
        res.status(200).send(req.companyUser);
    } catch (error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"

        });
        // console.log(error.message);
    }
});

router.delete('/company/self', auth, async (req, res) => {
    try {
        await req.companyUser.remove();
        res.status(200).send(req.companyUser);
    } catch (error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

router.get('/company/self/jobs', auth, async (req, res) => {
    try {
        await req.companyUser.populate('jobs');
        res.status(200).send(req.companyUser.jobs);
    } catch (error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

router.get('/company/self/applicants', auth, async (req, res) => {
    try {
        await req.companyUser.populate('jobs');
        const companyJobs = req.companyUser.jobs;
        const applicants = [];
        companyJobs.forEach(async (j) => {
            const job = await Job.findById(j._id);
            job.populate('applicants');
            applicants.concat(job.applicants);
        });
        res.status(200).send(applicants);
    } catch (error) {
        res.status(400).send({
            error,
            message: error.message
        });
    }
});

module.exports = router;
