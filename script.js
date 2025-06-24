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
    '2': 'https://i.imgur.com/dxjd7FB.png',
    '4': 'https://i.imgur.com/59fuk5l.png',
    '8': 'https://i.imgur.com/1G6Xsg3.png',
    '16': 'https://i.imgur.com/YazrZFb.png',
    '32': 'https://i.imgur.com/YFgEuMn.png',
    '64': 'https://i.imgur.com/DZG4ANl.png',
    '128': 'https://i.imgur.com/Cy7o4cE.png',
    '256': 'https://i.imgur.com/fTSwhht.png',
    '512': 'https://i.imgur.com/BfY3yZr.png',
    '1024': 'https://i.imgur.com/ENuHaWD.png',
    '2048': 'https://i.imgur.com/HfKpOal.png'
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
    } else {
      tile.textContent = value || '';
    }
  });
}
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
