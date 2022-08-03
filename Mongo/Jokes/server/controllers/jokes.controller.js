const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find() 
        .then((allTheJokes) => {
            res.json({ jokes: allTheJokes })
        })
        .catch((err) => {
            res.json({ message: 'Error getting all the jokes', error: err })
        });
}

module.exports.findJokeById = (req, res) => {
    Joke.findJoke({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Error getting the joke', error: err })
        });
}

module.exports.createAJoke = (req, res) => {
    Joke.create(req.body)
        .then((createJoke) => {
            res.json({ joke: createJoke })
        })
        .catch((err) => {
            res.json({ message: 'Error creating a joke', error: err })
        });
}

module.exports.updateAJoke = (req, res) => {
    Joke.findJokeAndUpdate(
        { _id: req.params.id },
        req.body, 
        {new: true, runValidators: true}
    )
        .then((updateJoke) => {
            res.json({ joke: updateJoke })
        })
        .catch((err) => {
            res.json({ message: 'Error updating an existing joke', error: err })
        });
}

module.exports.deleteAJoke = (req, res) => {
    Joke.deleteExistingJoke({ _id: req.params.id })
        .then( result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Error Deleting Joke', error: err })
        });
}