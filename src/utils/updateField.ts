const updateField = (field: boolean[][]): boolean[][] => {
  const updatedField: boolean[][] = [];

  field.forEach((row, rowIndex) => {
    const updatedRow: boolean[] = [];

    row.forEach((cell, cellIndex) => {
      const rowAbove = field[rowIndex - 1];
      const rowBelow = field[rowIndex + 1];
      const neighbourCells = [
        rowAbove ? rowAbove[cellIndex - 1] : undefined,
        rowAbove ? rowAbove[cellIndex] : undefined,
        rowAbove ? rowAbove[cellIndex + 1] : undefined,
        row[cellIndex - 1],
        row[cellIndex + 1],
        rowBelow ? rowBelow[cellIndex - 1] : undefined,
        rowBelow ? rowBelow[cellIndex] : undefined,
        rowBelow ? rowBelow[cellIndex + 1] : undefined,
      ];

      const { length: aliveNeighboursCount } = neighbourCells.filter(item => item);

      if (cell) {
        if (aliveNeighboursCount >= 2 && aliveNeighboursCount <= 3) {
          updatedRow[cellIndex] = true;
        } else if (aliveNeighboursCount < 2) {
          updatedRow[cellIndex] = false;
        } else if (aliveNeighboursCount > 3) {
          updatedRow[cellIndex] = false;
        }
      } else {
        updatedRow[cellIndex] = aliveNeighboursCount === 3 ? true : cell;
      }
    });

    updatedField[rowIndex] = updatedRow;
  });

  return updatedField;
};

export default updateField;
