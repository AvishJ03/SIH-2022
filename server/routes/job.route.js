const express = require('express');
const router = express.Router();
const Job = require('../models/job.model');


router.get('/jobs', async (req, res) => {
    try {
        const job = await Job.find({company: req.body.id});
        res.send(job);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/jobs', async(req, res) => {
    try {
        const job = new Job(req.body)
        await job.save()
        res.send(job)
    } catch (error) {
        res.status(400).send(error);        
    }
})

module.exports = router;
