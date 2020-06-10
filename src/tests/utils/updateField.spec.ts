import updateField from '../../utils/updateField';

const fieldMock = [
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

const fieldMockUpdated = [
  [false, false, false, false, false],
  [true, true, true, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

test('update field', () => {
  expect(updateField(fieldMock)).toEqual(fieldMockUpdated);
});
