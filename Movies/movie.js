class movies {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  //  b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

  static getPg(movie) {
    let moviePg = [];
    movie.forEach((element) => {
      if (element.rating == "PG13") {
        moviePg.push(element);
      } else if ((element.rating = "PG")) {
        moviePg.push(element);
      }
    });
    return moviePg;
  }
}
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

let Movie1 = new movies("Casino Royale", "Eon Productions", "PG13");
let Movie2 = new movies("Beast", "SunPictures");
let Movie3 = new movies("Doctor", "AGS Entertainment");

//   c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input
//    array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

let arr = [Movie1, Movie2, Movie3];
let PGMovies = movies.getPg(arr);
console.log(arr);
