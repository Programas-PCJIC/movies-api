const express = require('express');
//const { moviesMock } = require('../utils/mocks/movies');
const MoviesService = require('../services/moviesServices');

function moviesApi(app) {
  const router = express.Router();
  //Definir la ruta principal de consumo
  app.use('/api/movies', router);
  //Crear el objeto de la clase MoviesService
  const moviesService = new MoviesService();
  //Definir mis rutas de consumo
  router.get('/', async function(req, res, next) {
    try {
      const movies = await moviesService.getAllMovies();
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });
  //Para obtener una película estamos pasando información
  //por parametro (params)
  router.get('/:movieId', async function(req, res, next) {

    console.log("MI ID DE PELICULA", req.params );
    const { movieId } = req.params;
    console.log("MI ID DE PELICULA DESTRUCTURADA", movieId );
    
    try {

      const movie = await moviesService.getMovie( movieId );

      res.status(200).json({
        data: movie,
        message: 'movie retrieved'
      });
    } catch (err) {
      next(err);
    }
  });


  router.post('/', async function(req, res, next) {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(201).json({
        data: createdMovieId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });


  router.put('/:movieId', async function(req, res, next) {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async function(req, res, next) {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;