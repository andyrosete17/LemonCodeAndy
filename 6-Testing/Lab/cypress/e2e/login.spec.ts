import { literals } from '../../src/core/i18n';

describe('Login specs', () => {
  const userTag = `${literals.components.fields.user} *`;
  const passwordTag = `${literals.components.fields.password} *`;

  it('visit the login page', () => {
    // Act
    cy.visit('/');
  });

  it('should name input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText(userTag).click();

    // Assert
    cy.findByLabelText(userTag).should('have.focus');
  });

  it('should show an error with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';

    // Act
    cy.visit('/');
    cy.findByLabelText(userTag).as('userInput');
    cy.findByLabelText(passwordTag).as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByText('Usuario y/o password no válidos');
  });

  it('should navigate to submodule when credentials are valid', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.findByLabelText(userTag).as('userInput');
    cy.findByLabelText(passwordTag).as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/submodule-list');
  });
});
