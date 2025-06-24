
document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tile");
    const cupcakeImages = {
        '2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cupcake_with_sprinkles_%28cropped%29.jpg/320px-Cupcake_with_sprinkles_%28cropped%29.jpg',
        '4': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chocolate_cupcake_with_white_frosting_and_sprinkles.jpg/320px-Chocolate_cupcake_with_white_frosting_and_sprinkles.jpg',
        '8': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Vanilla_cupcake_with_chocolate_frosting.jpg/320px-Vanilla_cupcake_with_chocolate_frosting.jpg'
    };

    function addRandomTile() {
        const emptyTiles = Array.from(tiles).filter(tile => tile.textContent === "");
        if (emptyTiles.length === 0) return;

        const tile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        tile.textContent = "2";
        updateTileImages();
    }

   function updateTileImages() {
  const cupcakeImages = {
    '2': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cupcake_1.svg',
    '4': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Cupcake_2.svg',
    '8': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Cupcake_3.svg',
    '16': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Cupcake_4.svg',
    '32': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Cupcake_5.svg',
    '64': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Cupcake_6.svg',
    '128': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cupcake_7.svg',
    '256': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Cupcake_8.svg',
    '512': 'https://upload.wikimedia.org/wikipedia/commons/1/14/Cupcake_9.svg',
    '1024': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Cupcake_10.svg',
    '2048': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Cupcake_11.svg'
  };

  tiles.forEach(tile => {
    const value = tile.textContent.trim();
    tile.innerHTML = ''; // Clear existing content

    if (cupcakeImages[value]) {
      const img = document.createElement('img');
      img.src = cupcakeImages[value];
      img.alt = value;
      img.style.width = '100%';
      img.style.height = '100%';
      tile.appendChild(img);
    } else if (value) {
      tile.textContent = value; // fallback if no image
    }
  });
}
    }

    // Start game
    addRandomTile();
    addRandomTile();
});
