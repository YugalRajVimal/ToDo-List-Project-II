const express = require("express");
const app = express();

const port = 8000;

//Use Express Router 
app.use('/',require('./routes'));

app.listen(port,function(error){
    if(error){
        //console.log("Error in running the server : ",error);
        console.log(`Error in running the server : ${error}`);
    }
    console.log(`Server is running on Port : ${port}`);
});
