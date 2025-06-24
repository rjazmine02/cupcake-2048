function moveLeft() {
  const grid = getGrid();

  for (let row of grid) {
    let values = row.map(tile => tile.textContent).filter(val => val !== '');

    // Merge matching tiles
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] === values[i + 1]) {
        values[i] = String(Number(values[i]) * 2);
        values[i + 1] = '';
      }
    }

    // Remove empty and pad the row
    values = values.filter(val => val !== '');
    while (values.length < 4) {
      values.push('');
    }

    row.forEach((tile, i) => {
      tile.textContent = values[i];
    });
  }
}
