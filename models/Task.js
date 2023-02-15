const mongoose = require('mongoose');

const taskSchema =  mongoose.Schema({
    name:{
        type: String
    },
    created_date:{

    },
    due_date:{
        type: Date
    },
    user_id:{
        type:String
    }
})


const Task = mongoose.model('task', taskSchema);
module.exports = Task;