const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, ()=> {
    console.log("conected to mongo");
});