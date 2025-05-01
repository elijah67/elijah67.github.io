const board = document.getElementById('board');
const status = document.getElementById('status');
let currentPlayer = 'X';
let cells = Array(9).fill('');
let gameOver = false;

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

function createBoard() {
  board.innerHTML = '';
  cells.forEach((cell, index) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.dataset.index = index;
    div.innerText = cell;
    div.addEventListener('click', handleClick);
    board.appendChild(div);
  });
}

function handleClick(e) {
  const index = e.target.dataset.index;

  if (cells[index] || gameOver) return;

  cells[index] = currentPlayer;
  e.target.innerText = currentPlayer;

  if (checkWin()) {
    status.innerText = `Player ${currentPlayer} wins!`;
    gameOver = true;
    return;
  }

  if (cells.every(cell => cell)) {
    status.innerText = "It's a draw!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.innerText = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return cells[a] && cells[a] === cells[b] && cells[b] === cells[c];
  });
}

function resetGame() {
  cells = Array(9).fill('');
  currentPlayer = 'X';
  gameOver = false;
  status.innerText = "Player X's turn";
  createBoard();
}

createBoard();
