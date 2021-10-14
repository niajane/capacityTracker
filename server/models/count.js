const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    "date": Number,
    "count": Number,
}, { collection : 'depotTest' });

const Count = mongoose.model('count', countSchema);

module.exports = Count;