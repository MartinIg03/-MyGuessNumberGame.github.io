'use strict';

// document.querySelector('.message').textContent = 'Correct Number.🍾';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//Emplementing the game logic
let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);
let score = 50;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('No Number.⛔');
    //When player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🍾Correct Number.🍾');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      //When player loses
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 50;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  //New secretNumber
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  //console.log(secretNumber);
  displayGuess('');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
