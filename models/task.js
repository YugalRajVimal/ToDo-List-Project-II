const mongoose = require('mongoose');

//Database Schema for Tasks
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String
    },
    due_date:{
        type: String
    }
});

const task_list = mongoose.model('Task', taskSchema);

// Exporting the Task List 
module.exports = task_list;