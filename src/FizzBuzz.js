function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleby(15,number)) {
  return 'FizzBuzz';
  }
}

FizzBuzz.prototype.isDivisibleby = function(divisor, number) {
  return number % divisor === 0;
}

// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// // };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };


// function hi(person) {
//   return 'Hi, ' + person + '!';
// }
