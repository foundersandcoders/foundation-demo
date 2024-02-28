describe('The home page', () => {
  it('successfully loads', () => {
    //Add code here:
  });

  it('adds a new todo', () => {
    //Add code here:
  });

  it('marks a todo complete', () => {
    //Add code here:
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
  //   cy.get('input.todo-input').type('Water the plants!');
  //   cy.get('button.input-button').click();

  //   cy.get('.list-item').find('input[type="checkbox"]').check();
  //   cy.get('.list-item').find('input[type="checkbox"]').should('be.checked');
  // });
});
