const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/product-man2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connectiong to the database", err));