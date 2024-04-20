import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

let todos: Todo[] = [];

const todosContainer = <HTMLDivElement>document.querySelector(".todoContainer");

const todosInput = <HTMLInputElement>document.querySelector(".formInput");

const form = <HTMLFormElement>document.querySelector(".form");

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    title: todosInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };
  todos.push(todo);
  todosInput.value = "";
  console.log(todos);
  renderTodo(todos);
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  //creating checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      item.id === id ? (item.isCompleted = checkBox.checked) : null;
    });

    todoTitle.className = checkBox.checked ? "textcut" : "todoTitle";
  };

  //creating title
  const todoTitle: HTMLParagraphElement = document.createElement("p");
  todoTitle.className = checkBox.checked ? "textcut" : "todoTitle";
  todoTitle.innerText = title;

  //creating delete button
  const deleteBtn: HTMLButtonElement = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerText = "X";
  deleteBtn.onclick = () => {
    //with filter function
    todos = todos.filter((item) => item.id !== id);
    renderTodo(todos);

    //with splice
    // const idx = todos.findIndex((item) => item.id == id);
    // todos.splice(idx, 1);
    // renderTodo(todos);
  };

  //Appending
  todo.append(checkBox, todoTitle, deleteBtn);
  todosContainer.append(todo);
};

const renderTodo = (todos: Todo[]) => {
  todosContainer.innerText = "";
  todos.forEach((item) =>
    generateTodoItem(item.title, item.isCompleted, item.id)
  );
};
