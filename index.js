let numberOfFilms = window.prompt('Сколько фильмов вы уже посмотрели?'),
	personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
