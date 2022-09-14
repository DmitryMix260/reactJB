import { App } from './App';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  let input, button;
  beforeEach(() => {
    render(<App />);
    input = screen.getByRole('input');
    button = screen.getByRole('button');
  });
  it('send user message', async () => {
    await userEvent.type(input, 'Hello, world!');

    await userEvent.click(button);

    expect(screen.getAllByTestId('li').length).toBe(1);
  });

  it('bot answer', async () => {
    await userEvent.type(input, 'Hello, world!');

    await userEvent.click(button);

    expect(
      await screen.findByText(/Im bot/, undefined, { timeout: 1600 })
    ).toBeInTheDocument();
  });
});
