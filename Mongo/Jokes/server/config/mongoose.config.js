const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Established a connection!'))
    .catch(err => console.log('Something went wrong!', err));