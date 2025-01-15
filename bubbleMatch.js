const showHit = document.querySelector("#hit");
const showTime = document.querySelector("#timer");
const showScore = document.querySelector("#score");
const gameBoard = document.querySelector("#gameBoard");
const playGame = document.querySelector("#playGame");

let gameMode = false;
let score;
let time;
let hit;
let timeDecrease;

playGame.addEventListener("click", function startNewGame() {
  clearInterval(timeDecrease);
  gameMode = true;
  score = 0;
  time = 60;
  showScore.innerHTML = score;
  showTime.innerHTML = time;
  makeHit();
  makeBubble();
  makeTimer();
});

function makeBubble() {
  let boardCell = "";
  for (let i = 1; i < 210; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    boardCell += `<span disabled class="border shadow text-green-800 inline-flex items-center flex-wrap justify-center rounded-full h-12 w-12  duration-300 ${
      gameMode
        ? "cursor-pointer hover:bg-green-800 hover:text-white"
        : "cursor-not-allowed bg-gray-100"
    }"> ${gameMode ? randomNum : 0} </span>`;
  }
  gameBoard.innerHTML = boardCell;
}

function makeHit() {
  hit = Math.round(Math.random() * 9);
  showHit.innerHTML = hit;
}

function makeTimer() {
  timeDecrease = setInterval(() => {
    if (time > 0) {
      time--;
      showTime.innerHTML = time.toString().padStart(2, "0");
    } else {
      clearInterval(timeDecrease);
      gameBoard.innerHTML = `<div class="text-xl lg:text-4xl h-64 md:min-h-96 text-center gap-5 flex flex-col items-center justify-center text-green-800"> <h2 class="text-red-600">Game Over</h2> <h5>Your Score ${score}</h5></div>`;
      gameMode = false;
      showHit.innerHTML = "0";
    }
  }, 1000);
}
function makeScore() {
  score += 1;
  showScore.innerHTML = score;
}

gameBoard.addEventListener("click", (e) => {
  let cell = parseInt(e.target.innerText);
  if (gameMode && cell === hit) {
    makeScore();
    makeHit();
    makeBubble();
  }
});

makeBubble();
