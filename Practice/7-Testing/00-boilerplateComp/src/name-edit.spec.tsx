import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NameEdit } from './name-edit';
import userEvent from '@testing-library/user-event';

describe('NameEdit component specs', () => {
  it('should display heading and input elements with empty userName value', () => {
    // Arrange

    // Act
    render(<NameEdit />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;

    // Assert
    expect(h3Element).toBeInTheDocument();
    expect(h3Element.textContent).toEqual('');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toEqual('');
  });

  it('should update h3 text when input changes', async () => {
    // Arrange

    // Act
    render(<NameEdit />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    const h3Element = screen.getByRole('heading', { level: 3 });

    await userEvent.type(inputElement, 'John');

    // Assert
    expect(h3Element).toBeInTheDocument();
    expect(h3Element.textContent).toEqual('John');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toEqual('John');
  });

  it('should update h3 text when input changes with fireEvent', () => {
    // Arrange

    // Act
    render(<NameEdit />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    const h3Element = screen.getByRole('heading', { level: 3 });

    fireEvent.change(inputElement, {
      target: {
        value: 'John',
      },
    });

    // Assert
    expect(h3Element).toBeInTheDocument();
    expect(h3Element.textContent).toEqual('John');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toEqual('John');
  });
});
