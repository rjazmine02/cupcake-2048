const tiles = document.querySelectorAll('.tile');

// Convert flat tiles into a 2D grid (4x4)
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

// Cupcake image map
function updateTileImages() {
  const cupcakeImages = {
    '2': 'https://i.imgur.com/1Jk9Wqj.png',
    '4': 'https://i.imgur.com/jzNfQzr.png',
    '8': 'https://i.imgur.com/VJ8CQnN.png',
    '16': 'https://i.imgur.com/OB0y6MR.png',
    '32': 'https://i.imgur.com/rHRpeia.png',
    '64': 'https://i.imgur.com/cE5X4B2.png',
    '128': 'https://i.imgur.com/MWcvkPs.png',
    '256': 'https://i.imgur.com/NIDjL3Y.png',
    '512': 'https://i.imgur.com/SgxXnxC.png',
    '1024': 'https://i.imgur.com/EjlrVRG.png',
    '2048': 'https://i.imgur.com/4zN4lqU.png'
  };

  tiles.forEach(tile => {
    const rawValue = tile.textContent;
    tile.innerHTML = ''; // Clear anything that was there

    if (cupcakeImages[rawValue]) {
      tile.innerHTML = `<img src="${cupcakeImages[rawValue]}" alt="${rawValue}" style="width: 100%; height: 100%; border-radius: 5px;">`;
    }
  });
}

// Start game with two tiles
function startGame() {
  addRandomTile();
  addRandomTile();
  updateTileImages();
}

// Add a new "2" to a random empty tile
function addRandomTile() {
  const emptyTiles = Array.from(tiles).filter(tile => tile.textContent === '');
  if (emptyTiles.length === 0) return;

  const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  randomTile.textContent = '2';
  updateTileImages();
}

// Merge + pad helper
function mergeAndPad(values) {
  values = values.filter(val => val !== '');
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] === values[i + 1]) {
      values[i] = String(Number(values[i]) * 2);
      values[i + 1] = '';
    }
  }
  values = values.filter(val => val !== '');
  while (values.length < 4) values.push('');
  return values;
}

// Movement functions
function moveLeft() {
  const grid = getGrid();
  for (let row of grid) {
    const values = row.map(tile => tile.textContent);
    const newValues = mergeAndPad(values);
    row.forEach((tile, i) => tile.textContent = newValues[i]);
  }
  updateTileImages();
}

function moveRight() {
  const grid = getGrid();
  for (let row of grid) {
    const values = row.map(tile => tile.textContent).reverse();
    const newValues = mergeAndPad(values).reverse();
    row.forEach((tile, i) => tile.textContent = newValues[i]);
  }
  updateTileImages();
}

function moveUp() {
  const grid = getGrid();
  for (let col = 0; col < 4; col++) {
    const values = [];
    for (let row = 0; row < 4; row++) {
      values.push(grid[row][col].textContent);
    }
    const newValues = mergeAndPad(values);
    for (let row = 0; row < 4; row++) {
      grid[row][col].textContent = newValues[row];
    }
  }
  updateTileImages();
}

function moveDown() {
  const grid = getGrid();
  for (let col = 0; col < 4; col++) {
    const values = [];
    for (let row = 0; row < 4; row++) {
      values.push(grid[row][col].textContent);
    }
    const newValues = mergeAndPad(values.reverse()).reverse();
    for (let row = 0; row < 4; row++) {
      grid[row][col].textContent = newValues[row];
    }
  }
  updateTileImages();
}

// Listen for arrow keys
document.addEventListener('keydown', event => {
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
    event.preventDefault();
    if (event.key === "ArrowLeft") moveLeft();
    else if (event.key === "ArrowRight") moveRight();
    else if (event.key === "ArrowUp") moveUp();
    else if (event.key === "ArrowDown") moveDown();
    addRandomTile();
  }
});

// Start the game
startGame();
