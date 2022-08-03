const personController = require('../controllers/person.controller');

module.exports = (app) => {
    app.get('/api', personController.index);
    app.get('/api/people', personController.getAllPeople);
    app.post('/api/people', personController.createPerson);
}