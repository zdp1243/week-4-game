$(document).ready(function() {
 

  var winCounter = 0;
  var lossCounter = 0;

  //Generate randomNumber and link to #random to display in HTML.
  var randomNumber = Math.floor(Math.random() * 101) + 19;

  $("#random").text(randomNumber);

  //Generate red, blue, yellow and green crystal random numbers and write code for adding
  //to crystalSum and displaying when button is pushed.

  var rCrysRand = Math.floor(Math.random() * 11) + 1;
  var bCrysRand = Math.floor(Math.random() * 11) + 1;
  var yCrysRand = Math.floor(Math.random() * 11) + 1;
  var gCrysRand = Math.floor(Math.random() * 11) + 1;

  $("#winloss").html(winCounter);
  $("#winloss").html(lossCounter);

  var counter = 0;
  $("#curTotal").text(counter);
  
  
  function restartGame() {
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random").text(targetNumber);

    var rCrysRand = Math.floor(Math.random() * 11) + 1;
    var bCrysRand = Math.floor(Math.random() * 11) + 1;
    var yCrysRand = Math.floor(Math.random() * 11) + 1;
    var gCrysRand = Math.floor(Math.random() * 11) + 1;

    var counter = 0;
    $("curTotal").text(counter);
  }

  function wins() {
    winCounter++;
    $("#winloss").text(winCounter);
    restartGame();
  }

  function loss() {
    lossCounter++;
    $("#winloss").text(lossCounter);
    restartGame();
  }
for (var i=0 i<4; i++) {

  $("#rCrysRand").on("click", function() {
    counter = counter + rCrysRand;

    if (counter === targetNumber) {
      win();
    } else if (counter > targetNumber) {
      lose();
    }
  });

  $("#bCrysRand").on("click", function() {
    counter = counter + bCrysRand;

    if (counter === targetNumber) {
      win();
    } else if (counter > targetNumber) {
      lose();
    }
  });

  $("#yCrysRand").on("click", function() {
    counter = counter + yCrysRand;

    if (counter === targetNumber) {
      win();
    } else if (counter > targetNumber) {
      lose();
    }
  });

  $("#gCrysRand").on("click", function() {
    counter = counter + gCrysRand;

    if (counter === targetNumber) {
      win();
    } else if (counter > targetNumber) {
      lose();
    }
  });
}
});

//Note:  This was as far as I got.  I couldn't figure out exactly why $document.ready wasn't working and
//I couldn't console.log, so I couldn't check anything.  I know it is missing elements, and it doesn't run.

// Code for game tallying wins and losses isn't set up the way I had wanted in HTML yet, because
//I wanted to show wins/losses in the same form space.

//Couldn't get the style.css to load my background image.

 //id# tags in HTML:
  //# random
  //# winloss
  //# red
  //# blue
  //# yellow
  //# green
  //# curTotal