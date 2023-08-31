const task_list = require('../models/task');

// Rendering the Home page Controller
module.exports.home = async function(request,response){
        try {
            let tasks = await task_list.find({});
            return response.render('home',{
                "title" : "ToDo List",
                "heading":"My ToDo List",
                "task":tasks,
                "task_list_size":tasks.length
            });
        } catch (error) {
            console.log("Error in fetching contacts from DB",error);
            return;
        }  
}

//Inserting Task Controller
module.exports.add = async function(req,res){
    try {
        let task = await task_list.insertMany(
            {
                description:req.body.description,
                category:req.body.category,
                due_date:req.body.due_date
            }
        );
        return res.redirect('/');
    } catch (error) {
        console.log("Error in adding contacts in DB");
        return;
    }
}

// Deleting Task Controller
module.exports.delete = async function(req,res){
    try {
        let id = req.query.id;
        await task_list.deleteOne({_id : id});
        return res.redirect('/');
    } catch (error) {
        console.log("Error in deleting contacts from DB",error);
        return;
    }
}

