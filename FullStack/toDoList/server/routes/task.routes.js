const TaskController = require('../controllers/task.controller');

module.exports = (app) => {
    app.get('/api', TaskController.index);
    app.post('/api/tasks', TaskController.createTask);
}