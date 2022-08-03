const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/product-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('connected to the database!'))
    .catch(err => console.log("Something went wrong connecting to the database!", err));