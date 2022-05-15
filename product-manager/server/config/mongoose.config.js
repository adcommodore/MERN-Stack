const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productmanager", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to the database established."))
    .catch(err => console.log("Error occurred when connecting to the database", err));

