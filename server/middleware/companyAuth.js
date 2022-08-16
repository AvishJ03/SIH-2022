const jwt = require('jsonwebtoken');
const Company = require('../models/company.model');

const companyAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const company = await Company.findOne({ _id: decoded._id, 'tokens.token': token });
        if(!company) {
            throw new Error('No company found');
        }
        req.companyToken = token;
        req.companyUser = company;
        next();
    } catch(error) {
        res.status(401).send({error: 'Please authenticate.'});
    }
}

module.exports = companyAuth;
