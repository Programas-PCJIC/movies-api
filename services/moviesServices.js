const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {

    async getAllMovies(){
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }

    async getMovie( movieId ){
        console.log("MI ID DE PELICULA en SERVICES", movieId );
        const movie = await Promise.resolve(
            moviesMock.find( movie => movie.id === movieId )
        );
        return movie || {};
    }

}

module.exports = MoviesService;