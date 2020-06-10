import generateField from '../../utils/generateField';

test('generate field array', () => {
  const fieldLength = 10;

  expect(generateField(fieldLength)).toHaveLength(fieldLength);
});
