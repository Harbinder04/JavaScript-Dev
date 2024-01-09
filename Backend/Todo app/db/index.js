const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harbindersingh04:QrxhoHl013MW62yk@cluster0.nrjrnet.mongodb.net/user');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {todo}