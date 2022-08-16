const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');
const auth = require('../middleware/studentAuth');

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).send({ studentUsers: students });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/students', async (req, res) => {
    const student = new Student(req.body);
    try {
        await student.save();
        const token = await student.generateAuthToken();
        res.status(201).send({ studentUser: student, studentToken: token });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/students/login', async (req, res) => {
    try {
        const student = await Student.findByCredentials(req.body.email, req.body.password);
        const token = await student.generateAuthToken();
        res.status(200).send({ studentUser: student, studentToken: token });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get('/students/self', auth, async (req, res) => {
    res.status(200).send(req.studentUser);
});

router.post('/students/logout', auth, async (req, res) => {
    try {
        req.studentUser.tokens = [];
        await req.studentUser.save();
        res.status(200).send({message: 'Successfully logged out.'});
    } catch(error) {
        res.status(400).send({
            error,
            message: "Something went wrong"
        });
    }
});

router.patch('/students/self', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const validOperations = ['firstName', 'lastName', 'gender', 'email', 'age', 'password'];
    const isUpdateValid = updates.every((update) => validOperations.includes(update));
    if(!isUpdateValid) {
        return res.status(400).send();
    }
    try {
        updates.forEach((update) => req.studentUser[update] = req.body[update]);
        await req.studentUser.save();
        res.status(200).send(req.studentUser);
    } catch(error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

router.delete('/students/self', auth, async (req, res) => {
    try {
        await req.studentUser.remove();
        res.status(200).send(req.studentUser);
    } catch(error) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

module.exports = router;
