const express = require("express");
const path = require('path');
const app = express();

// Port for running Server 
const port = 8000;

const db = require('./config/mongoose');
const task = require('./models/task');

//Use Express Router 
app.use('/',require('./routes'));

// Views and View Engine-"EJS" 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));

const task_list =  require('./models/task');

app.listen(port,function(error){
    if(error){
        console.log(`Error in running the server : ${error}`);
    }
    console.log(`Server is running on Port : ${port}`);
});

