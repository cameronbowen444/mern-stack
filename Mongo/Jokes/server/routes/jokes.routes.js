const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findJokeById);
    app.put('/api/jokes/:id', JokeController.updateAJoke);
    app.post('/api/jokes', JokeController.createAJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAJoke);
}