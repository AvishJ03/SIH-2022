const jwt = require('jsonwebtoken');
const Job = require('../models/job.model');

const jobAuth = async (req, res, next) => {
    try {
        const jobToken = req.params.id;
        const decoded = jwt.verify(jobToken, process.env.JWT_SECRET);
        const job = await Job.findOne({ _id: decoded._id, company: req.companyUser, token: jobToken });
        if(!job) {
            throw new Error('No job found');
        }
        req.jobToken = jobToken;
        req.job = job;
        next();
    } catch(error) {
        res.status(401).send({error: 'Job does not belong to the your company.'});
    }
}

module.exports = jobAuth;
