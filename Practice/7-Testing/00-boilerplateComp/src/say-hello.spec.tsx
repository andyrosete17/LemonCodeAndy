import React from 'react';
import { render, screen } from '@testing-library/react';
import { SayHello } from './say-hello';

describe('SayHello component', () => {
  it('should display the person name', () => {
    // Arrange
    const person = 'Jhon';

    // Act
    render(<SayHello person={person} />);

    // Assert
    const element = screen.getByRole('heading', { level: 1 });
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H1');
  });

  it('should display the person name using snapshot testing', () => {
    // Arrange
    const person = 'Jhon';

    // Act
    const { asFragment } = render(<SayHello person={person} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

//   it('should display the person name using snapshot testing', () => {
//     // Arrange
//     const person = 'Jhon';

//     // Act
//     const { asFragment } = render(<SayHello person={person} />);

//     // Assert
//     expect(asFragment()).toMatchInlineSnapshot(`
// <DocumentFragment>
//   <h1>
//     Hello
//     <strong>
//       Jhon
//     </strong>
//   </h1>
// </DocumentFragment>
// `);
//   });

  it('should display the person name using jest-dom', () => {
    // Arrange
    const person = 'John';

    // Act
    render(<SayHello person={person} />);

    // Assert
    const element = screen.getByRole('heading', { name: 'Hello John' });
    expect(element).toBeInTheDocument();
  });
});
