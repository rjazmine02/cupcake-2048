const tiles = document.querySelectorAll('.tile');

// Convert NodeList to 2D array (4x4 grid)
function getGrid() {
  const grid = [];
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      row.push(tiles[i * 4 + j]);
    }
    grid.push(row);
  }
  return grid;
}

function startGame() {
  addRandomTile();
  addRandomTile();
}

function addRandomTile() {
  const emptyTiles = Array.from(tiles).filter(tile => tile.textContent === '');
  if (emptyTiles.length === 0) return;

  const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  randomTile.textContent = '2';
}

// Handle arrow keys
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (event.key === "ArrowLeft") {
    moveLeft();
    addRandomTile();
  }
}

// Move left logic
function moveLeft() {
  const grid = getGrid();

  for (let row of grid) {
    let values = row.map(tile => tile.textContent).filter(val => val !== '');
    while (values.length < 4) {
      values.push('');
    }

    row.forEach((tile, i) => {
      tile.textContent = values[i];
    });
  }
}

startGame();
