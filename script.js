const grid = document.querySelector('.grid');
const tiles = Array.from(grid.children);

function startGame() {
  tiles.forEach(tile => {
    tile.dataset.value = '';
    tile.innerHTML = '';
  });
  addNumber();
  addNumber();
  updateTileImages();
}

function addNumber() {
  const emptyTiles = tiles.filter(tile => !tile.dataset.value);
  if (emptyTiles.length === 0) return;

  const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  randomTile.dataset.value = '2';
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowLeft':
    case 'ArrowRight':
      move();
      break;
  }
}

function move() {
  // Simple logic for testing (does not merge yet)
  addNumber();
  updateTileImages();
}

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
    '2048': 'https://cupcake2048.com/img/11.png'
  };

  tiles.forEach(tile => {
    const value = tile.dataset.value;
    tile.innerHTML = '';

    if (value && cupcakeImages[value]) {
      const img = document.createElement('img');
      img.src = cupcakeImages[value];
      img.alt = value;
      img.style.width = '100%';
      img.style.height = '100%';
      tile.appendChild(img);
    }
  });
}

startGame();
