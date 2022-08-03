const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authors2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the Database"))
    .catch((err) => console.log("Database connection failed", err));
