require('dotenv').config();
require('./db/mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route')

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('App route');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
