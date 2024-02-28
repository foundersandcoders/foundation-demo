const todoList = document.querySelector('#todo-list');
const addTodoForm = document.querySelector('form');

addTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  var formData = new FormData(addTodoForm);

  const itemLabel = document.createElement('label');
  const itemCheckBox = document.createElement('input');
  itemCheckBox.type = 'checkbox';

  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  itemLabel.textContent = formData.get('new-todo');

  listItem.append(itemCheckBox, itemLabel);

  todoList.append(listItem);
  addTodoForm.reset();
});
