const Player = require('../models/player.model');

module.exports.index = (request, response) => {
    response.json({ message: "Team Manager Application" })
}

module.exports.findPlayers = (request, response) => {
    Player.find({})
    .then(players => response.json(players))
    .catch(err => response.status(400).json({err}))
}

module.exports.createPlayer = (request, response) => {
    Player.create(request.body) 
    .then(createdPlayer => response.json(createdPlayer))
    .catch(err => response.status(400).json({err}))
}

module.exports.findOnePlayer = (request, response) => {
    Player.findOne({ _id: request.params.id })
    .then(player => response.json(player))
    .catch(err => response.status(400).json({err}))
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({ _id: request.params.id}, request.body, {new:true, runValidators: true})
    .then(updatedPlayer => response.json(updatedPlayer))
    .catch(err => response.status(400).json({err}))
}

module.exports.deletePlayer = (request, response) => {
    Player.findOneAndDelete({ _id: request.params.id })
    .then(deletedPlayer => response.json(deletedPlayer))
    .catch(err => response.status.json({err}))
}

