import { render, screen } from '@testing-library/react';
import { AddMessage } from './AddMessage';
import '@testing-library/jest-dom';

describe(AddMessage, () => {
  it('render with snapshot', () => {
    const { asFragment } = render(<AddMessage disabled={false} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
