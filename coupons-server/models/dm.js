const mongoose = require('../db');

const Schema = mongoose.Schema;

const DmSchema = new Schema ({
  username: {type: String, required: true},
  full_name: {type: String, required: true},
  lastMessage: {type: String, required: true},
});

module.exports = mongoose.model('Dm', DmSchema);

