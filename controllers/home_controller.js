// module.exports.home = function(request,response){
//     // return response.end('<h1>Express is up for ToDo List</h1>');
//     return response.render('home',{
//         "title" : "ToDo List",
//         "heading":"My ToDo List"
//     });
// }

const task_list = require('../models/task');

module.exports.home = async function(request,response){

        try {
            // const task = task_list.find();
            return response.render('home',{
                "title" : "ToDo List",
                "heading":"My ToDo List",
                "task":task_list
            });
        } catch (error) {
            console.log("Error in fetching contacts from DB",error);
            return;
        }
             
}

// module.exports.add = function(req,res){
//     try {
//         console.log(req.body);
//         task_list.push(
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
// }

