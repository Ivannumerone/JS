let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
	personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
let lastFilm = prompt('Один из последних просмотренных фильмов?'),
    rateFilm = prompt('Насколько вы оцениваете фильм?');
    personalMovieDB.movies[lastFilm] = rateFilm;

let lastFilm2 = prompt('Один из последних просмотренных фильмов?'),
    rateFilm2 = prompt('Насколько вы оцениваете фильм?');
    personalMovieDB.movies[lastFilm2] = rateFilm2;
console.log(personalMovieDB);
