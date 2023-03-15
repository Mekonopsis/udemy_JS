'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [], 
  privat: false
};

let question_1 = prompt('Один из последних просмотренных фильмов?');
let question_2 = prompt('На сколько оцените его?');
personalMovieDB['movies'][question_1] = question_2;
console.log(personalMovieDB);