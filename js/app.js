'use strict';



var answer;
var correctAnswerCounter = 0;
var firstName;

function question1() {
  // Question 1
  answer = prompt('Can I speak French (please enter yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer ==='yes') {
    alert('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
    console.log('The user guessed "' + answer + '" that I can speak French.  Oops wrong answer.');
  } else { // User answered either no or n
    alert('The user guessed "' + answer + '" that I cannot speak French.  You are correct!');
    console.log('The user guessed "' + answer + '" I cannot speak French.  You are correct!');
    correctAnswerCounter++;
  }
}  

function question2() {
  // Question 2
  answer = prompt('Do I like to watch science fiction movies (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes') {
    alert('The user guessed "' + answer + '" that I watch science fiction.  Correct!  I love science fiction flicks.');
    console.log('The user guessed "' + answer + '" that I watch science fiction movies.  Correct!');
    correctAnswerCounter++;
  } else {
    alert('The user guessed "' + answer + '" that I don\'t watch science fiction.  Oops wrong answer. I\'m a science fiction junky.');
    console.log('The user guessed "' + answer + '" that I don\'t watch science fiction movies.  Oops wrong answer.  I\'m a science fiction junky.');
  }
}

function question3() {
  // Question 3
  answer = prompt('Have I ever snorkled (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes') {
    alert('The user guessed "' + answer + '" that I have snorkled.  Correct!');
    console.log('The user guessed "' + answer + '" that I have snorked.  Correct!');
    correctAnswerCounter++;
  } else {
    alert('The user guessed "' + answer + '" that I have not snorkled.  Oops wrong answer.');
    console.log('The user guessed "' + answer + '" that I have not snorkled.  Oops wrong answer.');
  }
}

function question4() {
  // Question 4
  answer = prompt('Have I gone zip lining (please answer yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'n' || answer === 'no') {
    alert('The user guessed "' + answer + '" I have not zip lined.  Wrong answer.  I love to zip line.');
    console.log('The user guessed "' + answer + '" I have not zip lined.  Wrong answer.  I love to zip line.');
  } else {
    alert('The user guessed correctly.  I have zip lined.  It was a blast!');
    console.log('The user guessed correctly.  I have zip lined.  It was a blast!');
    correctAnswerCounter++;
  }
}

function question5() {
  // Question 5
  answer = prompt('Do I know how to fix a leaky faucet (please enter yes or no)?');
  answer = answer.toLowerCase();

  if(answer === 'y' || answer === 'yes') {
    alert('The user guessed "' + answer + '" that I can fix a leaky faucet.  Unfortunately, I cannot. My husband takes care of this.');
    console.log('The user guessed "' + answer + '" that I can fix a leaky faucet.  Unfortunately, I cannot. My husband takes care of this.');
  } else if (answer === 'n' || answer === 'no') {
    alert('The user guessed "' + answer + '" that I cannot fix a leaky faucet.  Correct!  My husband takes care of this.');
    console.log('The user guessed "' + answer + '" that I cannot fix a leaky faucet.  Correct!  My husband takes care of this.');
    correctAnswerCounter++;
  }
}

function question6() {
  // Question 6
  // This is the number to be guessed.
  var myNumber = 3;
  // This is the number of guesses the user is given.
  var numberOfGuessesLeft = 4;
  var numberGuessed = 0;
  
  for(var i = 0; i < 4; i++) {
    numberGuessed = prompt('I\'m thinking of a number between 1 to 10.  Please guess my number.');
    numberGuessed = parseInt(numberGuessed);

    if(numberGuessed === myNumber) {
      alert('You guessed my number!');
      correctAnswerCounter++;
      break;
    } else if(numberGuessed > myNumber) {
      numberOfGuessesLeft--;
      alert('Your guess is too high. You have ' + numberOfGuessesLeft + ' guesses left.');
      //continue;
    } else if(numberGuessed < myNumber) {
      numberOfGuessesLeft--;
      alert('Your guess is too low. You have ' + numberOfGuessesLeft + ' guesses left.');
    }
  } 
}

function question7() {
  // Question 7
  var colorArray = ['orange', 'blue', 'gray', 'red'];
  var numberOfGuessesLeft = 6;
  var guessedColor = false;

  // The user will be given six chances to guess a color in color array.
  while(numberOfGuessesLeft > 0) {
    answer = prompt('Guess the color of one of my raincoats:');
    answer = answer.toLowerCase();

    for(var i = 0; i < colorArray.length; i++) {
      if(answer === colorArray[i]) {
        alert('Your guess is correct!');
        // Keep track of correct number of guesses by increment counter
        guessedColor = true;
        correctAnswerCounter++;
        // User guessed correctly.  Break out of for loop.
        break;
      }
    }

    if(guessedColor) {
      // Guessing a color in array breaks out of the while loop
      break;
    } else {
      numberOfGuessesLeft--;
      alert('Wrong guess.  You have ' + numberOfGuessesLeft + ' guesses left.');
      //Subtract one from the number of guesses left variable.
    }
  }

  // Output the content of color array 
  alert('The colors of my raincoats are: ' + colorArray);
}

var playGame = prompt('Would you like to play my guessing game (please enter yes or no)?');

// Convert response to all lower case
playGame = playGame.toLowerCase();

if(playGame === 'y' || playGame === 'yes') {
  firstName = prompt('Great!  Please enter you name: ');
  console.log('Hooray! The user answered "' + playGame + '" and will play my guessing game.');
    
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();

  // Output a message for user to know how she did.
  var gameResultMessage;
  if(correctAnswerCounter === 7) {
    gameResultMessage = 'You guessed all correctly!';
  } else if(correctAnswerCounter > 4 && correctAnswerCounter < 7) {
    gameResultMessage = 'That\'s pretty good!';
  } else {
    gameResultMessage = 'Better luck next time.';
  }

  // Output the number of correct guesses.
  alert(firstName + ', thanks for playing.  You got ' + correctAnswerCounter + ' out of 7 questions correct. ' + gameResultMessage);
} else {
  alert('Okay.  Try again next time.');
  console.log('Oh well.  The user does not want to play my guessing game.');
}

