const Joke = require('../models/joke.model');

module.exports.findAll = (req, res) => {
        Joke.find()
                .then((allDaUsers) => {res.json({ users: allDaUsers })})
                .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}

module.exports.findOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleUser => {res.json({ user: oneSingleUser })})
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}

module.exports.createNew = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedUser => {res.json({ user: newlyCreatedUser })})
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}

module.exports.updateExisting = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {res.json({ user: updatedUser })})
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
}

module.exports.deleteExisting = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {res.json({ result: result })})
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })});
};

