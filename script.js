const boardSize = 4;
let board = [];
let tiles = [];

window.onload = function () {
    initializeBoard();
    generateTile();
    generateTile();
    document.addEventListener("keydown", handleInput);
};

function initializeBoard() {
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = "";
    tiles = [];

    for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
            const tile = document.createElement("div");
            tile.id = `${r}-${c}`;
            tile.classList.add("tile");
            boardElement.appendChild(tile);
            tiles.push(tile);
        }
    }
    updateTileImages();
}

function generateTile() {
    let emptyTiles = [];
    for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
            if (board[r][c] === 0) {
                emptyTiles.push({ r, c });
            }
        }
    }

    if (emptyTiles.length === 0) return;

    let { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[r][c] = 2;
    updateBoard();
}

function updateBoard() {
    for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
            const tile = document.getElementById(`${r}-${c}`);
            tile.textContent = board[r][c] === 0 ? "" : board[r][c];
        }
    }
    updateTileImages();
}

function handleInput(e) {
    switch (e.key) {
        case "ArrowLeft":
            slideLeft();
            break;
        case "ArrowRight":
            slideRight();
            break;
        case "ArrowUp":
            slideUp();
            break;
        case "ArrowDown":
            slideDown();
            break;
    }
    generateTile();
}

function filterZero(row) {
    return row.filter(num => num !== 0);
}

function slide(row) {
    row = filterZero(row);

    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] === row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
        }
    }

    return filterZero(row).concat(Array(boardSize - row.length).fill(0));
}

function slideLeft() {
    for (let r = 0; r < boardSize; r++) {
        board[r] = slide(board[r]);
    }
    updateBoard();
}

function slideRight() {
    for (let r = 0; r < boardSize; r++) {
        board[r] = slide(board[r].reverse()).reverse();
    }
    updateBoard();
}

function slideUp() {
    for (let c = 0; c < boardSize; c++) {
        let col = [];
        for (let r = 0; r < boardSize; r++) {
            col.push(board[r][c]);
        }
        col = slide(col);
        for (let r = 0; r < boardSize; r++) {
            board[r][c] = col[r];
        }
    }
    updateBoard();
}

function slideDown() {
    for (let c = 0; c < boardSize; c++) {
        let col = [];
        for (let r = 0; r < boardSize; r++) {
            col.push(board[r][c]);
        }
        col = slide(col.reverse()).reverse();
        for (let r = 0; r < boardSize; r++) {
            board[r][c] = col[r];
        }
    }
    updateBoard();
}

// ✅ Cupcake image map
function updateTileImages() {
    const cupcakeImages = {
        '2': 'https://i.imgur.com/1Jk9Wqj.png',
        '4': 'https://i.imgur.com/jzNfQzr.png',
        '8': 'https://i.imgur.com/VJ8CQNn.png',
        '16': 'https://i.imgur.com/OB0y6MR.png',
        '32': 'https://i.imgur.com/rHRpeia.png',
        '64': 'https://i.imgur.com/cE5X4B2.png',
        '128': 'https://i.imgur.com/MWcvkPs.png',
        '256': 'https://i.imgur.com/NTDjL3Y.png',
        '512': 'https://i.imgur.com/SgxXnxc.png',
        '1024': 'https://i.imgur.com/EjlnVRG.png',
        '2048': 'https://i.imgur.com/4zNa1qU.png'
    };

    tiles.forEach(tile => {
        const value = tile.textContent;
        if (cupcakeImages[value]) {
            tile.style.backgroundImage = `url(${cupcakeImages[value]})`;
            tile.style.backgroundSize = "cover";
            tile.style.color = "transparent"; // Hide text
        } else {
            tile.style.backgroundImage = "";
            tile.style.color = "black"; // Show number
        }
    });
}
