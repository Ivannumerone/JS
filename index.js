let numberOfFilms = window.prompt('Сколько фильмов вы уже посмотрели?'),
	personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
let lastFilm = window.prompt('Один из последних просмотренных фильмов?'),
    rateFilm = window.prompt('Насколько вы оцениваете фильм?');

personalMovieDB['movies'] = {[lastFilm]: rateFilm};
console.log(personalMovieDB);
