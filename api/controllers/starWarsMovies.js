module.exports = () => {
  const starWarsMoviesDB = require('../data/starWarsMovies.json');
  const controller = {};

  controller.listStarWarsMovies = (req, res) => res.status(200).json(starWarsMoviesDB);

  return controller;
}