
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
        tiles.forEach(tile => {
            const value = tile.textContent;
            if (cupcakeImages[value]) {
                tile.innerHTML = `<img src="${cupcakeImages[value]}" alt="${value}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">`;
            }
        });
    }

    // Start game
    addRandomTile();
    addRandomTile();
});
