describe('template spec', () => {
  it('successfully loads', () => {
    cy.visit('/e2e-testing/index.html');
  });

  it('h1 tag contains correct text', () => {
    // Write a test to check the contents of the h1 tag
  });

  it('adds a new todo', () => {
    // Write test to generate new todo
  });

  it('marks a todo complete', () => {
    // Write new test to tick off a todo
  });
});

//Solution before refactor

// describe('template spec', () => {
//   beforeEach('successfully loads', () => {
//     cy.visit('/e2e-testing/index.html');
//   });

//   it('adds a new todo', () => {
//     cy.visit('/e2e-testing/index.html');
//     cy.get('input.todo-input').type('Water the plants!');

//     cy.get('button.input-button').click();
//     cy.get('li').should('exist').contains('Water the plants!');
//   });

//   it('marks a todo complete', () => {
//     cy.get('input.todo-input').type('Water the plants!');
//     cy.get('button.input-button').click();

//     cy.get('.list-item').find('input[type="checkbox"]').check();
//     cy.get('.list-item').find('input[type="checkbox"]').should('be.checked');
//   });
// });

// describe('template spec', () => {
//   beforeEach('successfully loads', () => {
//     cy.visit('/e2e-testing/index.html');
//   });

//   it('h1 tag contains correct text', () => {
//     cy.getByData('main-heading').contains(/testing todos!/i);
//   });

//   it('adds a new todo', () => {
//     cy.getByData('todo-input').type('Water the plants!');
//     cy.getByData('submit-button').click();
//     cy.get('li').should('exist').contains('Water the plants!');
//   });

//   it('marks a todo complete', () => {
//     cy.getByData('todo-input').type('Water the plants!{enter}');

//     cy.get('.list-item').find('input[type="checkbox"]').check();
//     cy.get('.list-item').find('input[type="checkbox"]').should('be.checked');
//   });
// });
