import React from 'react';
import { render } from '@testing-library/react';
import Field from '../../../components/Field';

describe('<Field />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('should render Cell component', () => {
    const { container } = render(<Field />);
    expect(container).toContainHTML('<div class="cell cell--alive"></div>');
  });

  test('should after sec should call setInterval and callback', () => {
    render(<Field />);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
