const mongoose = require('mongoose');

const { Schema } = mongoose;

const Subscriber = new Schema({
    subscriber: { type: String , require: true }
});

module.exports = mongoose.model('Subscriber', Subscriber);