// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sports_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const playerSchema = new mongoose.Schema({
  // Define your Player schema here
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
