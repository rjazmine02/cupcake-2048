const tiles = document.querySelectorAll('.tile');

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

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (event.key === "ArrowLeft") {
    moveLeft();
    addRandomTile();
  } else if (event.key === "ArrowRight") {
    moveRight();
    addRandomTile();
  } else if (event.key === "ArrowUp") {
    moveUp();
    addRandomTile();
  } else if (event.key === "ArrowDown") {
    moveDown();
    addRandomTile();
  }
}

// Merge logic shared by all directions
function mergeAndPad(values) {
  values = values.filter(val => val !== '');
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] === values[i + 1]) {
      values[i] = String(Number(values[i]) * 2);
      values[i + 1] = '';
    }
  }
  values = values.filter(val => val !== '');
  while (values.length < 4) {
    values.push('');
  }
  return values;
}

function moveLeft() {
  const grid = getGrid();
  for (let row of grid) {
    const values = row.map(tile => tile.textContent);
    const newValues = mergeAndPad(values);
    row.forEach((tile, i) => tile.textContent = newValues[i]);
  }
}

function moveRight() {
  const grid = getGrid();
  for (let row of grid) {
    const values = row.map(tile => tile.textContent).reverse();
    const newValues = mergeAndPad(values).reverse();
    row.forEach((tile, i) => tile.textContent = newValues[i]);
  }
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
}

startGame();
