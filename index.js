const express = require("express");
const path = require('path');
const app = express();

const port = 8000;

//Use Express Router 
app.use('/',require('./routes'));

//body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));



const task_list =  require('./models/task');

//Add Task
// app.post('/add_task',async function(req,res){

//     try {
//         console.log(req.body);
//         await task_list.push(
//             {
//                 description:req.body.description,
//                 category:req.body.category,
//                 due_date:req.body.due_date
//             }
//         );
//         return res.redirect('/');
//     } catch (error) {
//         console.log("Error in adding contacts in DB",error);
//         return;
//     }

// });

app.listen(port,function(error){
    if(error){
        //console.log("Error in running the server : ",error);
        console.log(`Error in running the server : ${error}`);
    }
    console.log(`Server is running on Port : ${port}`);
});

