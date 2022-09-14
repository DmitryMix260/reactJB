import { AddMessage } from './AddMessage';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AddMessage', () => {
  let addMessage, component, input, button;
  beforeEach(() => {
    addMessage = jest.fn();
    component = render(<AddMessage addMessage={addMessage} />);
    input = component.getByRole('input');
    button = component.getByRole('button');
  });
  it('render components', () => {
    render(<AddMessage />);
  });

  it('input change with fireevent', () => {
    fireEvent.change(input, {
      target: { value: 'message' },
    });
    expect(input.value).toBe('message');
  });

  it('button disable with fireevent.', () => {
    expect(button.disabled).toBeFalsy;
  });

  it('button change disable with fireevent, expect true', () => {
    fireEvent.change(button, {
      target: { disabled: true },
    });
    expect(button.disabled).toBeTruthy;
  });

  it('form submit with fireEvent', () => {
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');

    fireEvent.submit(component.getByTestId('addmessage'));
    fireEvent.click(button);
    expect(addMessage).toHaveBeenCalledTimes(1);
  });
});
