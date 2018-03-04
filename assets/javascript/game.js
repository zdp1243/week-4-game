$(document).ready(function() {
  //Wrap logic for js
  var winCounter = 0;
  var lossCounter = 0;

  //Generate randomNumber and link to #random to display in HTML.
  var randomNumber = Math.floor(Math.random() * 101) + 19;
  console.log(randomNumber);

  //$("#random").text(randomNumber); This did not work.

  $("#random").attr("placeholder", randomNumber);

  //Generate red, blue, yellow and green crystal random numbers and write code for adding
  //to crystalSum and displaying when button is pushed.

  var rCrysRand = Math.floor(Math.random() * 11) + 1;
  var bCrysRand = Math.floor(Math.random() * 11) + 1;
  var yCrysRand = Math.floor(Math.random() * 11) + 1;
  var gCrysRand = Math.floor(Math.random() * 11) + 1;

  var counter = 0;

  $("#win").attr("placeholder", winCounter); //.html did not work with the form. This inserts the score
  $("#loss").attr("placeholder", lossCounter); //into the correct form space/display.
  $("#curTotal").attr("placeholder", counter);

  //Restart Game
  function restartGame() {
    randomNumber = Math.floor(Math.random() * 101) + 19;

    $("#random").attr("placeholder", randomNumber);

    rCrysRand = Math.floor(Math.random() * 11) + 1;
    bCrysRand = Math.floor(Math.random() * 11) + 1;
    yCrysRand = Math.floor(Math.random() * 11) + 1;
    gCrysRand = Math.floor(Math.random() * 11) + 1;

    counter = 0;
    $("#curTotal").attr("placeholder", counter);
  }

  //Win
  function win() {
    winCounter++;
    $("#win").attr("placeholder", winCounter);
    restartGame();
  }

  //Lose
  function lose() {
    lossCounter++;
    $("#loss").attr("placeholder", lossCounter);
    restartGame();
  }

  //Red button
  $("#red").on("click", function() {
    counter = counter + rCrysRand;

    $("#curTotal").attr("placeholder", counter);

    //console.log(counter);

    if (counter === randomNumber) {
      win();
    } else if (counter > randomNumber) {
      lose();
    }
  });

  //Blue button
  $("#blue").on("click", function() {
    counter = counter + bCrysRand;
    $("#curTotal").attr("placeholder", counter);

    //console.log(counter)

    if (counter === randomNumber) {
      win();
    } else if (counter > randomNumber) {
      lose();
    }
  });

  //Yellow Crystal

  $("#yellow").on("click", function() {
    counter = counter + yCrysRand;
    $("#curTotal").attr("placeholder", counter);

    //console.log(counter)
    if (counter === randomNumber) {
      win();
    } else if (counter > randomNumber) {
      lose();
    }
  });

  //Green Crystal
  $("#green").on("click", function() {
    counter = counter + gCrysRand;
    $("#curTotal").attr("placeholder", counter);

    //console.log(counter)

    if (counter === randomNumber) {
      win();
    } else if (counter > randomNumber) {
      lose();
      cosole.log(lose);
    }
  });
  //
});

//Note:  The original file submitted was as far as I got.  I couldn't figure out exactly why $document.ready wasn't working and
//I couldn't console.log, so I couldn't check anything.  I know it is missing elements, and it doesn't run.

//Trent went through my files line by line and we figured out why things weren't logging, and then he went over the logic with me.
//The only thing I can see that I didn't catch before was that the restartGame function does not kick in when the
//counter goes above the number to match in the game.  The logic looks correct...

//id# tags in HTML:
//# random
//# winloss
//# red
//# blue
//# yellow
//# green
//# curTotal
