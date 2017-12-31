const express = require('express');
const router = express.Router();

// Require models
const Podcast = require('../models/podcast');

// INDEX - get all podcasts
router.get('/', (req, res, next) => {
  Podcast.find()
    .then(podcasts => res.json(podcasts))
    .catch(err => next(err));
});

// CREATE - create a podcast
router.post('/', (req, res, next) => {
  Podcast.create(req.body)
    .then(podcast => res.json(podcast))
    .catch(err => next(err));
});

// SHOW - show info about a podcast
router.get('/:id', (req, res, next) => {
  Podcast.findById(req.params.id)
    .then(podcast => res.json(podcast))
    .catch(err => next(err));
});

// EDIT - edit a podcast
router.patch('/:id', (req, res, next) => {
  Podcast.findByIdAndUpdate(req.params.id)
    .then(() => res.json({
      message: 'You have successfully updated the podcast!'
    }))
    .catch(err => next(err));
});

// DESTROY - remove podcast from database
router.delete('/:id', (req, res, next) => {
  Podcast.findByIdAndRemove(req.params.id)
    .then(() => res.json({
      message: 'You have successfully deleted the podcast!'
    }))
    .catch(err => next(err));
});

module.exports = router;