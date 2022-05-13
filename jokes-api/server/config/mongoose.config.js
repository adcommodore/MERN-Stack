const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/myfirstdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection establishedto the database'))
    .catch(err => console.log('Error occured when connecting to the database ', err));

