const tiles = document.querySelectorAll(".tile");

function getRandomEmptyTile() {
  const emptyTiles = Array.from(tiles).filter(tile => !tile.textContent);
  return emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
}

function spawnTile() {
  const tile = getRandomEmptyTile();
  if (tile) {
    tile.textContent = "2";
    updateTileImages();
  }
}

function updateTileImages() {
  const cupcakeImages = {
    '2': 'https://i.imgur.com/1Jk9Wqj.png',
    '4': 'https://i.imgur.com/jzNfQzr.png',
    '8': 'https://i.imgur.com/VJ8CQNn.png',
    '16': 'https://i.imgur.com/OB0y6MR.png',
    '32': 'https://i.imgur.com/rHRpeia.png',
    '64': 'https://i.imgur.com/cE5X4B2.png',
    '128': 'https://i.imgur.com/MWcvkPs.png',
    '256': 'https://i.imgur.com/MTDJL3Y.png',
    '512': 'https://i.imgur.com/SgxXnxc.png',
    '1024': 'https://i.imgur.com/EjlnVRG.png',
    '2048': 'https://i.imgur.com/4zN41qU.png'
  };

  tiles.forEach(tile => {
    const value = tile.textContent;
    if (cupcakeImages[value]) {
      tile.style.backgroundImage = `url(${cupcakeImages[value]})`;
      tile.style.color = "transparent";
    } else {
      tile.style.backgroundImage = "";
      tile.style.color = "#000";
    }
  });
}

// Initial tiles
spawnTile();
spawnTile();

// Arrow key movement (simple)
document.addEventListener("keydown", (e) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    moveTiles();
    spawnTile();
  }
});

function moveTiles() {
  // Basic random movement simulation for demo
  const values = Array.from(tiles).map(tile => tile.textContent).filter(v => v);
  tiles.forEach(tile => tile.textContent = "");
  values.forEach(value => {
    const tile = getRandomEmptyTile();
    if (tile) tile.textContent = value;
  });
  updateTileImages();
}
