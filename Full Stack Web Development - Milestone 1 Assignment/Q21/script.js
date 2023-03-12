const input = document.getElementById('todo-input');
const button = document.getElementById('add-todo');
const list = document.getElementById('todo-list');
let todos = [];
function addTodo() {
  const todoText = input.value;
  if (todoText.trim() === '') {
    return;
  }
  const newTodo = {
    text: todoText,
    completed: false,
  };
  todos.push(newTodo);
  input.value = '';
  renderTodos();
}
function renderTodos() {
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerText = todo.text;
    list.appendChild(li);
  });
}
button.addEventListener('click', addTodo);