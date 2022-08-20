require('dotenv').config();
require('./db/mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

const studentRouter = require('./routes/student.route');
const companyRouter = require('./routes/company.route');
const jobRouter = require('./routes/job.route');
const applicationRouter = require('./routes/application.route');

app.use(cors());
app.use(express.json());
app.use(studentRouter);
app.use(companyRouter);
app.use(jobRouter);
app.use(applicationRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
