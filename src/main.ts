import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todosContainer = <HTMLDivElement>document.querySelector(".todoContainer");

const todosInput = <HTMLInputElement>document.querySelector(".formInput");

const form = <HTMLFormElement>document.querySelector(".form");
