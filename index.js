const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const config = require('config');

mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedToplogy',true);

const app = express();

var corsOptions = {
    origin:"http://localhost:3000"
};
app.use(cors(corsOptions));


const port = process.env.PORT || 8080;
app.listen(port,()=>{
console.log(`Listening on port ${port}...`);
});