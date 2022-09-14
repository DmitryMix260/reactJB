import { MessageList } from './MessageList';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageList', () => {
  beforeEach(() => {
    const messages = [
      { autor: 'User', message: 'First message' },
      { autor: 'User2', message: 'Second message' },
    ];
    render(<MessageList messages={messages} />);
  });
  it('Render message list', () => {
    expect(screen.getAllByTestId('li').length).toBe(2);
  });
  it('Check first li> expect First message', () => {
    expect(screen.getAllByTestId('li')[0].innerHTML).toBe(
      'User: First message'
    );
  });
});
