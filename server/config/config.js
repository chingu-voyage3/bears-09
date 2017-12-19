module.exports = {
  PORT: process.env.PORT || 8080,
  mongoDB: process.env.DATABASE || 'mongodb://localhost/podcast-search',
  jwtSecret: process.env.JWT_SECRET || 'secret'
};
