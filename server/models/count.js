const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    "date": Date,
    "count": Number,
}, { collection : 'rocbloc' });

const Count = mongoose.model('count', countSchema);

module.exports = Count;