const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {
    app.get('/api', PlayerController.index);
    app.get('/api/players', PlayerController.findPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.put('/api/players/edit/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}