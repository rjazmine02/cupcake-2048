const grid = document.querySelector('.grid');
const tiles = Array.from(grid.children);

// Set up a new game
function startGame() {
  tiles.forEach(tile => tile.textContent = '');
  addNumber();
  addNumber();
  updateTileImages();
}

// Add a random "2" tile
function addNumber() {
  const emptyTiles = tiles.filter(tile => tile.textContent === '');
  if (emptyTiles.length === 0) return;

  const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  randomTile.textContent = '2';
}

// Move tiles when arrow keys are pressed
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowLeft':
    case 'ArrowRight':
      move(e.key);
      break;
  }
}

function move(direction) {
  // Basic logic for combining tiles (simplified, can be expanded later)
  // You can replace this with full 2048 logic later
  addNumber();
  updateTileImages();
}

// Update tile images based on their values
function updateTileImages() {
  const cupcakeImages = {
    '2': 'https://cupcake2048.com/img/1.png',
    '4': 'https://cupcake2048.com/img/2.png',
    '8': 'https://cupcake2048.com/img/3.png',
    '16': 'https://cupcake2048.com/img/4.png',
    '32': 'https://cupcake2048.com/img/5.png',
    '64': 'https://cupcake2048.com/img/6.png',
    '128': 'https://cupcake2048.com/img/7.png',
    '256': 'https://cupcake2048.com/img/8.png',
    '512': 'https://cupcake2048.com/img/9.png',
    '1024': 'https://cupcake2048.com/img/10.png',
    '2048': 'https://cupcake2048.com/img/11.png',
  };

  tiles.forEach(tile => {
    tile.innerHTML = ''; // Clear tile content

    const value = tile.textContent;

    if (cupcakeImages[value]) {
      const img = document.createElement('img');
      img.src = cupcakeImages[value];
      img.alt = value;
      img.style.width = '100%';
      img.style.height = '100%';
      tile.appendChild(img);
    } else if (value) {
      tile.textContent = value;
    }
  });
}

startGame();
