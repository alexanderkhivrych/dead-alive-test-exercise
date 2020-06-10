import React from 'react';
import { render } from '@testing-library/react';
import Cell from '../../../components/Cell';

describe('<Cell />', () => {
  test('should render cell with alive class if isAlive is true', () => {
    const { container } = render(<Cell isAlive={true} />);
    expect(container).toMatchSnapshot();
  });

  test('should render white if isAlive prop is false', () => {
    const { container } = render(<Cell />);
    expect(container).toMatchSnapshot();
  });

  test('should render white if isAlive prop is false', () => {
    const { container } = render(<Cell isAlive={false} />);
    expect(container).toMatchSnapshot();
  });
});
