const showHit = document.querySelector("#hit");
const showTime = document.querySelector("#timer");
const showScore = document.querySelector("#score");
const gameBoard = document.querySelector("#gameBoard");
const playGame = document.querySelector("#playGame");

let boardCell = 0;
let score = 0;
let time = 60;
let hit = 0;

function makeBubble() {
  for (let i = 1; i < 210; i++) {
    boardCell = Math.floor(Math.random() * 9) + 1;
    gameBoard.innerHTML += `<span class="border shadow text-green-800 inline-flex items-center flex-wrap justify-center rounded-full h-12 w-12 cursor-pointer hover:bg-green-800 hover:text-white duration-300"> ${boardCell} </span>`;
  }
}

function makeHit() {
  hit = Math.round(Math.random() * 10) + 1;
  showHit.innerHTML = hit;
}

function makeTimer() {
  timeDecrease = setInterval(() => {
    time--;
    showTime.innerHTML = +time;
  }, 1000);
}

function makeScore() {
  score += 10;
  showScore.innerHTML = score;
}

makeScore();
makeTimer();
makeHit();
makeBubble();
