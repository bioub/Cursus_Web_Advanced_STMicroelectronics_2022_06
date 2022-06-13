import { Todo } from "./model.js";
import { createTodoInput, createTodoRow, createTodoSpan } from "./todos.js";

const formEl = document.querySelector('.todos-form') as HTMLFormElement;
const inputEl = document.querySelector('.todos-input') as HTMLInputElement;
const containerEl = document.querySelector('.todos-container') as HTMLDivElement;
const toggleEl = document.querySelector('.todos-toggle') as HTMLInputElement;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const divEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  containerEl.prepend(divEl);
});

toggleEl.addEventListener('click', (event) => {
  const checkboxEls = containerEl.querySelectorAll<HTMLInputElement>('.todo-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});

containerEl.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('todo-delete')) {
    // l'ancêtre le plus proche dont la classe contient todo-row
    target.closest('.todo-row')?.remove();
  }

  if (target.classList.contains('todo-title')) {
    const title = target.innerText;
    const inputEl = createTodoInput(title);
    target.replaceWith(inputEl);
    event.stopPropagation();
  }

  if (target.classList.contains('todo-title-edit')) {
    event.stopPropagation();
  }
});

// window.addEventListener('click', (event) => {
//   const inputEl = document.querySelector('.todo-title-edit');

//   if (inputEl) {
//     const title = inputEl.value;
//     const spanEl = createTodoSpan(title);
//     inputEl.replaceWith(spanEl);
//   }
// }, { capture: true });

window.addEventListener('click', (event) => {
  const inputEl = document.querySelector('.todo-title-edit') as HTMLInputElement;

  if (inputEl) {
    const title = inputEl.value;
    const spanEl = createTodoSpan(title);
    inputEl.replaceWith(spanEl);
  }
});


// Exercice Reseau et Storage

// Exercice 1 : Réseau
// Envoyer avec l'API fetch ou XMLHttpRequest une requête GET
// vers https://jsonplaceholder.typicode.com/todos
// parser le JSON reçu en réponse
// pour chaque élément du tableau appeler la méthode createTodoRow
// et ajouter les lignes créé au container

// function fetchTodos() {
//   return fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json());
// }

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('http://localhost:3000/api/todos');
  return await res.json();
}

async function main() {
  const todos = await fetchTodos();

  for (const todo of todos) {
    const rowEl = createTodoRow(todo);
    containerEl.prepend(rowEl);
  }
}

main();

// Exercice 2 : Storage
// Ecouter la saisi dans le champs .todos-input avec l'événement input
// stocker la valeur saisie dans le localStorage à la clé de votre choix
// (exemple slide 51)
// Au chargement de la page remplir le champs avec le contenu du storage

