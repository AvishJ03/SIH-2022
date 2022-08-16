const express = require('express');
const router = express.Router();
const Company = require('../models/company.model');
const auth = require('../middleware/companyAuth');

router.get('/company', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.status(200).send({ companyUsers: companies });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/company', async (req, res) => {
    const company = new Company(req.body);
    try {
        await company.save();
        const token = await company.generateAuthToken();
        res.status(201).send({ companyUser: company, companyToken: token });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/company/login', async (req, res) => {
    try {
        const company = await Company.findByCredentials(req.body.email, req.body.password);
        const token = await company.generateAuthToken();
        res.status(200).send({ companyUser: company, companyToken: token });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get('/company/self', auth, async (req, res) => {
    res.status(200).send(req.companyUser);
});

router.post('/company/logout', auth, async (req, res) => {
    try {
        req.companyUser.tokens = [];
        await req.companyUser.save();
        res.status(200).send({message: 'Successfully logged out.'});
    } catch(error) {
        res.status(400).send({
            error,
            message: "Something went wrong"
        });
    }
});

router.patch('/company/self', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const validOperations = ['name', 'email', 'contactNo', 'noOfEmp', 'location', 'typeOfCompany', 'website', 'companyInfo', 'password'];
    const isUpdateValid = updates.every((update) => validOperations.includes(update));
    if(!isUpdateValid) {
        return res.status(400).send();
    }
    try {
        updates.forEach((update) => req.companyUser[update] = req.body[update]);
        await req.companyUser.save();
        res.status(200).send(req.companyUser);
    } catch(error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

router.delete('/company/self', auth, async (req, res) => {
    try {
        await req.companyUser.remove();
        res.status(200).send(req.companyUser);
    } catch(error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

module.exports = router;
