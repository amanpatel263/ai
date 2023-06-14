const board = document.getElementById('board');
const cells = document.getElementsByClassName('cell');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameActive = true;

// Add click event listeners to cells
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

// Reset the game
resetButton.addEventListener('click', resetGame);

function cellClicked() {
  if (!gameActive || this.textContent !== '') {
    return;
  }

  this.textContent = currentPlayer;
  this.classList.add(currentPlayer);

  if (checkWin()) {
    endGame(false);
    return;
  }

  if (checkDraw()) {
    endGame(true);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].textContent === '') {
        return false;
      }
    }
    return true;
  }
  
  function endGame(draw) {
    gameActive = false;
    if (draw) {
      alert('The game is a draw!');
    } else {
      alert(`Player ${currentPlayer} wins!`);
    }
  }
  
  function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
      cells[i].classList.remove('X', 'O');
    }
  }
  
  
