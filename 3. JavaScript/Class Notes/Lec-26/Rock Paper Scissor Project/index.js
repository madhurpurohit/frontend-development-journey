const moveSet = ["Rock", "Paper", "Scissor"];

function randomMoveGenerator() {
  //   const move = Math.floor(Math.random() * moveSet.length);

  //   return moveSet[move];

  let randomMove = [];

  for (let i = 0; i < 5; i++) {
    randomMove.push(moveSet[Math.floor(Math.random() * moveSet.length)]);
  }

  return randomMove[randomMove.length - 1];
}

const board = document.querySelector(".board");

const winArray = new Array(2).fill("E");

function findWinner() {
  if (winArray[0] === "Rock" && winArray[1] === "Scissor") {
    return 1;
  } else if (winArray[0] === "Scissor" && winArray[1] === "Rock") {
    return 2;
  } else if (winArray[0] === "Rock" && winArray[1] === "Paper") {
    return 2;
  } else if (winArray[0] === "Paper" && winArray[1] === "Rock") {
    return 1;
  } else if (winArray[0] === "Paper" && winArray[1] === "Scissor") {
    return 2;
  } else if (winArray[0] === "Scissor" && winArray[1] === "Paper") {
    return 1;
  } else if (winArray[0] === winArray[1]) {
    return 0;
  } else {
    return -1;
  }
}

const boardLogic = (event) => {
  const player = event.target;

  if (winArray[player.id] == "E") {
    let shuffleInterval = setInterval(() => {
      player.innerHTML = moveSet[Math.floor(Math.random() * moveSet.length)];
    }, 100);

    setTimeout(() => {
      clearInterval(shuffleInterval);

      const handMove = randomMoveGenerator();
      player.innerHTML = handMove;

      winArray[player.id] = handMove;

      if (findWinner() == 1) {
        document.getElementById("winnerMsg").innerHTML =
          "Player-1 is Winner 🏆";
        board.removeEventListener("click", boardLogic);
        return;
      } else if (findWinner() == 2) {
        document.getElementById("winnerMsg").innerHTML =
          "Player-2 is Winner 🏆";
        board.removeEventListener("click", boardLogic);
        return;
      } else if (findWinner() == 0) {
        document.getElementById("winnerMsg").innerHTML = "Match is draw 🤝";
        board.removeEventListener("click", boardLogic);
        return;
      }
    }, 800);
  }
};

board.addEventListener("click", boardLogic);

const restartGame = document.querySelector(".restart");

restartGame.addEventListener("click", (event) => {
  const element = document.querySelectorAll(".cell");

  Array.from(element).forEach((data) => {
    data.innerHTML = "";
    winArray[data.id] = "E";
  });

  document.getElementById("winnerMsg").innerHTML = "";

  board.addEventListener("click", boardLogic);
});
