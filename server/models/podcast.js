const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PodcastSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  author: {
    type: String,
    required: true
  },
  genres: [ String ],
  languague: String,
  rating: Number,
  image: String
});

module.exports = mongoose.model('Podcast', PodcastSchema);