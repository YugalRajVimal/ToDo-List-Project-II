// const mongoose = require('mongoose');

var task_list = [
    {
        description:"abc",
        category:"home",
        due_date:'2023-08-29'
    },
    {
        description:"def",
        category:"personal",
        due_date:'2022-07-20'
    },
    {
        description:"ghi",
        category:"home",
        due_date:'2023-04-01'
    },
    {
        description:"jkl",
        category:"others",
        due_date:'2023-08-23'
    }
]

// const taskSchema = new mongoose.Schema({

//     name: {
//         description: String,
//         required: true,
//         due_date:String
//     },
//     category: {
//         type: String
//     },
//     due_date:{
//         type: String
//     }

// })


// const Task = mongoose.model('Task', contactSchema);

module.exports = task_list;