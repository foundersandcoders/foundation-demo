import { forEach } from 'cypress/types/lodash';

describe('The home page', () => {
  forEach('successfully loads', () => {
    cy.visit('/e2e-testing/index.html');
  });

  it('adds a new todo', () => {
    cy.get('input.todo-input').type('Water the plants!');
    cy.get('button.input-button').click();

    cy.get('li').should('contain', 'Water the plants!');
  });

  it('marks a todo complete', () => {
    cy.get('input.todo-input').type('Water the plants!');
    cy.get('button.input-button').click();

    cy.get('.list-item').find('input[type="checkbox"]').check();
    cy.get('.list-item').find('input[type="checkbox"]').should('be.checked');
  });
});

//Solution
// beforeEach('successfully loads', () => {
//   cy.visit('/e2e-testing/index.html');
// });

// it('adds a new todo', () => {
//   cy.visit('/e2e-testing/index.html');
//   cy.get('input.todo-input').type('Water the plants!');

//   cy.get('button.input-button').click();
//   cy.get('li').should('contain', 'Water the plants!');
// });

// it('marks a todo complete', () => {
// cy.get('input.todo-input').type('Water the plants!');
// cy.get('button.input-button').click();

// cy.get('.list-item').find('input[type="checkbox"]').check();
// cy.get('.list-item').find('input[type="checkbox"]').should('be.checked');
// });
