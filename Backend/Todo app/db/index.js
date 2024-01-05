const mongoose = require('mongoose');

mongoose.connect('url');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
});

const todo = moongoose.model('todos', todoSchema);
module.exports = {todo}