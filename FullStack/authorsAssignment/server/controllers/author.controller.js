const Author = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({ message: "Author Assignment" });
}

module.exports.getAllAuthors = ( request, response ) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.status(400).json({err}))
}

module.exports.createAuthor = ( request, response ) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json({err}))
}

module.exports.getAuthor = ( request, response ) => {
    Author.findOne({ _id: request.params.id })
        .then(oneAuthor => response.json(oneAuthor))
        .catch(err => response.status(400).json({err}))
}

module.exports.updateAuthor = ( request, response ) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, {new:true, runValidators: true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json({err}))
}

module.exports.deleteAuthor = ( request, response ) => {
    Author.deleteOne({_id: request.params.id})
        .then(deletedAuthor => response.json(deletedAuthor))
        .catch(err => response.status(400).json({err}))
}