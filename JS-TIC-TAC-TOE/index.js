const X_CLASS = "x";
const CIRCLE_CLASS = "o";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [1, 4, 6],
];
//creating an array for winning combination

let circleTurn; //assign varible to determine turns

const CellElements = document.querySelectorAll("[data-cell]");

const board = document.getElementById("board");

const winning_message = document.getElementById("winningMessage");

const winningMessageTextElemnt = document.querySelector(
  "[data-winning-message-text]"
);

const restartbutton = document.getElementById("restartButton");

restartbutton.addEventListener("click", startGame);

//start Game function
startGame();

function startGame() {
  circleTurn = false;
  CellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winning_message.classList.remove("show");
}

//code to determine functionality of each click

function handleClick(e) {
  const cell = e.target;

  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  placeMark(cell, currentClass); //placing x and 0 class in each cells on the board

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

// check for draw
// switch turn

function endGame(draw) {
  if (draw) {
    winningMessageTextElemnt.innerHTML = "Draw!";
  } else {
    winningMessageTextElemnt.innerHTML = `${circleTurn ? "O's" : "X's "} wins`;
  }
  console.log("class added");
  winning_message.classList.add("show");
}

function isDraw() {
  return [...CellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

//function that assign hover effect to board class
function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

//after a click event circle turns  0(false)
function swapTurns() {
  circleTurn = !circleTurn;
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return CellElements[index].classList.contains(currentClass);
    });
  });
}
