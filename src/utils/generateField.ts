const generateField = (length: number): boolean[][] => {
  const field: boolean[][] = [];

  for (let i = 0; i < length; i++) {
    let rowMap: boolean[] = [];

    for (let j = 0; j < length; j++) {
      rowMap[j] = Math.random() >= 0.5;
    }

    field[i] = rowMap;
  }

  return field;
};

export default generateField;
