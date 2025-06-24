function moveLeft() {
  const grid = getGrid();

  for (let row of grid) {
    let values = row.map(tile => tile.textContent).filter(val => val !== '');

    // Merge matching numbers
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] === values[i + 1] && values[i] !== '') {
        values[i] = String(Number(values[i]) * 2);
        values[i + 1] = ''; // Clear the merged tile
      }
    }

    // Remove blanks again and pad to length 4
    values = values.filter(val => val !== '');
    while (values.length < 4) {
      values.push('');
    }

    // Put values back into the row
    row.forEach((tile, i) => {
      tile.textContent = values[i];
    });
  }
}
