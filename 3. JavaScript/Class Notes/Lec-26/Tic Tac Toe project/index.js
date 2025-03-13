const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winArray = new Array(9).fill("E");

function checkWinner() {
  for (let [index0, index1, index2] of winner) {
    if (
      winArray[index0] != "E" &&
      winArray[index0] === winArray[index1] &&
      winArray[index1] === winArray[index2]
    ) {
      return 1;
    }
  }
  return 0;
}

const board = document.querySelector(".board");
let turn = "O";
let totalTurn = 0;

const boardLogic = (event) => {
  const element = event.target;
  if (winArray[element.id] == "E") {
    totalTurn++;
    if (turn === "O") {
      element.textContent = "O";
      winArray[element.id] = "O";
      turn = "X";

      if (checkWinner()) {
        document.getElementById("winningMessage").innerHTML = "Winner is O";
        board.removeEventListener("click", boardLogic);
        return;
      }
    } else {
      element.textContent = "X";
      winArray[element.id] = "X";
      turn = "O";

      if (checkWinner()) {
        document.getElementById("winningMessage").innerHTML = "Winner is X";
        board.removeEventListener("click", boardLogic);
        return;
      }
    }

    if (totalTurn == 9) {
      document.getElementById("winningMessage").innerHTML = "Match is Draw";
      board.removeEventListener("click", boardLogic);
      return;
    }
  }
};

board.addEventListener("click", boardLogic);

const restartGame = document.getElementById("restartButton");

restartGame.addEventListener("click", (event) => {
  const cells = document.querySelectorAll(".cell");
  totalTurn = 0;
  turn = "O";

  Array.from(cells).forEach((data) => {
    data.innerHTML = "";
    winArray[data.id] = "E";
  });

  document.getElementById("winningMessage").innerHTML = "";

  board.addEventListener("click", boardLogic);
});
