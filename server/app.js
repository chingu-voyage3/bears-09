const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');

// DATABASE SETUP
const mongoDB = process.env.DATABASE || 'mongodb://localhost/podcast-search';

mongoose.connect(mongoDB, {
  useMongoClient: true
});

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connectior error:'));
database.once('open', () => {
  console.log('Connected to the database');
});

// Use native promises
mongoose.Promise = global.Promise;

// APP SETUP
const app = express();

// Express middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Error finding what you asked' });
});

// PORT SETUP
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});