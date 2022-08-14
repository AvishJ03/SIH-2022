const jwt = require('jsonwebtoken');
const Student = require('../models/student.model');

const studentAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Student.findOne({ _id: decoded._id, 'tokens.token': token });
        if(!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    } catch(error) {
        res.status(401).send({error: 'Please authenticate.'});
    }
}

module.exports = studentAuth;