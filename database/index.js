const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const meowSchema = mongoose.Schema({
  noteName: String,
  soundPath: String
});

const Meow = mongoose.model('Meow', meowSchema);

const getMeows = () => {
  return Meow.find({});
}

module.exports = { getMeows: getMeows };