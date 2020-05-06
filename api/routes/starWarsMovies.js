module.exports = app => {
  const controller = require('../controllers/starWarsMovies')();

  app.route('/api/v1/star-wars-movies')
    .get(controller.listStarWarsMovies);
}