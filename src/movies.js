// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesPar) {
  let directorArr = moviesPar.map ((eachMovies) => {
    return eachMovies.director;
  })
  return directorArr;
};

// console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesPar) {
  let stevenDrama = moviesPar.filter ((eachMovies) => {
    return (eachMovies.director === "Steven Spielberg") && (eachMovies.genre.includes("Drama"));
  })
  return stevenDrama.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesPar) {
  if (moviesPar.length === 0){
    return 0;
  };
  let scoresArr = moviesPar.reduce ((acc, elemScore) => {
    if (elemScore.score === undefined) {
      return acc
    } else {
      return acc + elemScore.score
    }
  }, 0)
  
  let avg = scoresArr / moviesPar.length;
  let twoDigit = avg.toFixed(2);
  let twoDigitNum = parseFloat(twoDigit)

  return twoDigitNum;

};

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesPar) {

  let filterDrama = moviesPar.filter ((eachMovies) => {
      return (eachMovies.genre.includes("Drama"))
  });

  let scoresDrama = filterDrama.reduce ((acc, elemScore) => {
    if (elemScore.score === undefined) {
      return acc;
    } else {
      return acc + elemScore.score
    }
  }, 0)

  let avg = scoresDrama / filterDrama.length;
  let twoDigit = avg.toFixed(2);
  let twoDigitNum = parseFloat(twoDigit)

  return twoDigitNum;

}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesPar) {
  let moviesCopy = JSON.parse( JSON. stringify(movies) );

  moviesCopy.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem1.year < elem2.year) {
      return -1;
    } else {

      if (elem1.title[0] > elem2.title[0] ) {
        return 1;
      } else if (elem1.title[0] < elem2.title[0] ) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  
  return moviesCopy;

};

// console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesPar) {

  if (moviesPar.length < 20){
    return moviesPar;
  };
  
  let moviesCopy = movies.slice(0, 20);

  titleFilter = moviesCopy.sort((elem1, elem2) => {
    if (elem1.title[0] > elem2.title[0]) {
      return 1;
    } else if (elem1.title[0] < elem2.title[0]){
      return -1;
    }
  
  });

  let titleMovies = titleFilter.map((eachMovie) => {
    return eachMovie.title;
  });

  return titleMovies;
  
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
