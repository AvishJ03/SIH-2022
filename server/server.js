require('dotenv').config();
require('./db/mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const studentRouter = require('./routes/student.route')

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
app.use(studentRouter);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('App route');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
