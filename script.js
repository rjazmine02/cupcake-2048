const tiles = document.querySelectorAll('.tile');

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

// Listen for arrow key presses
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowLeft":
      moveLeft();
      break;
    // We'll add ArrowRight, ArrowUp, and ArrowDown later
  }
}

// Very basic move left logic
function moveLeft() {
  const values = [];

  // Collect values from the tiles
  tiles.forEach(tile => {
    if (tile.textContent !== '') {
      values.push(Number(tile.textContent));
    }
  });

  // Add zeros to fill the rest
  while (values.length < 16) {
    values.push('');
  }

  // Redistribute values to tiles
  tiles.forEach((tile, i) => {
    tile.textContent = values[i] || '';
  });

  // Add new tile
  addRandomTile();
}

startGame();
