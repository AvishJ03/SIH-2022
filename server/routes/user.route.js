const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch(e) {
        res.status(400).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user)
    } catch(e) {
        res.status(401).send({
            error: e,
            message: "Something went wrong"
        });
    }
});

module.exports = router;
