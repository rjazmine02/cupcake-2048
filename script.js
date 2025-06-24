// Get all tiles
const tiles = document.querySelectorAll('.tile');

// Add a number to two random tiles when the page loads
function startGame() {
  addRandomTile();
  addRandomTile();
}

// Pick a random empty tile and set it to 2
function addRandomTile() {
  const emptyTiles = Array.from(tiles).filter(tile => tile.textContent === '');
  if (emptyTiles.length === 0) return;

  const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  randomTile.textContent = '2';
}

// Start the game when the page loads
startGame();
