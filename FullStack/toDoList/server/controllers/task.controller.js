const Task = require('../models/task.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createTask = (req, res) => {
    Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err));
}