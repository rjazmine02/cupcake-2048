const tiles = document.querySelectorAll('.tile');

// Convert tile NodeList to 2D array (4 rows of 4 tiles)
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

// Start game with two random tiles
function startGame() {
  addRandomTile();
  addRandomTile();
}

// Add a "2" to a random empty tile
function addRandomTile() {
  const emptyTiles = Array.from(tiles).filter(tile => tile.textContent === '');
  if (emptyTiles.length === 0) return;
  const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  randomTile.textContent = '2';
}

// Listen for key presses
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (event.key === "ArrowLeft") {
    moveLeft();
    addRandomTile();
  }
}

// Move all rows to the left
function moveLeft() {
  const grid = getGrid();

  for (let row of grid) {
    // Extract non-empty values
    let values = row.map(tile => tile.textContent).filter(val => val !== '');

    // Merge matching tiles
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] === values[i + 1]) {
        values[i] = String(Number(values[i]) * 2);
        values[i + 1] = '';
      }
    }

    // Remove blanks again and pad row
    values = values.filter(val => val !== '');
    while (values.length < 4) {
      values.push('');
    }

    // Set the updated values into the tiles
    row.forEach((tile, i) => {
      tile.textContent = values[i];
    });
  }
}

// 🔁 Start the game when the page loads
startGame();
