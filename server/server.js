require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const Student = require("./models/student.model");
const Company = require("./models/company.model");

const studentRouter = require("./routes/student.route");
const companyRouter = require("./routes/company.route");
const jobRouter = require("./routes/job.route");
const applicationRouter = require("./routes/application.route");

app.use(cors());
app.use(express.json());
app.use(studentRouter);
app.use(companyRouter);
app.use(jobRouter);
app.use(applicationRouter);

app.post("/login", async (req, res) => {
  try {
    const student = await Student.findByCredentials(
      req.body.email,
      req.body.password
    );
    if (student) {
      const studentToken = await student.generateAuthToken();
      res.status(200).send({ studentUser: student, studentToken });
    } else {
      const company = await Company.findByCredentials(
        req.body.email,
        req.body.password
      );
      if (company) {
        const companyToken = await company.generateAuthToken();
        res.status(200).send({ companyUser: company, companyToken });
      } else {
        res.status(200).send({ message: "No user found." });
      }
    }
  } catch (error) {
    res.status(400).send({
      error,
      message: "Error while logging in.",
    });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
