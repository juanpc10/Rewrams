const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ig-msges_db', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;