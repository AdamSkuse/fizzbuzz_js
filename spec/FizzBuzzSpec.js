describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {

  fizzBuzz = new FizzBuzz();
  });

  it('returns "fizzbuzz" when passed multiples of 3 and 5', function() {
    expect(fizzBuzz.play(15)).toEqual('FizzBuzz')
  });

  it('returns "fizz" when passed multiples of 3', function() {
    expect(fizzBuzz.play(3)).toEqual('Fizz')

  });

   it('returns "buzz" when passed multiples of 5', function() {
    expect(fizzBuzz.play(5)).toEqual('Buzz')

  });

    it('returns the number if not divisible by 3 or 5', function() {
    expect(fizzBuzz.play(2)).toEqual(2)

  });

});
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
