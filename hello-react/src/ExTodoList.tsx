import { ChangeEvent, Component, SyntheticEvent } from 'react';

type Props = {};
type State = {
  readonly newTodo: string;
  readonly todos: string[];
};

class ExTodoList extends Component<Props, State> {
  state: State = {
    newTodo: '',
    todos: ['Value 1', 'Value 2', 'Value 3'],
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: event.target.value,
    });
  };
  handleSubmit = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();

    const { newTodo, todos } = this.state;

    // todos.push(newTodo);
    // this.forceUpdate();
    this.setState({
      newTodo: '',
      todos: [...todos, newTodo],
    });
  };
  render() {
    const { newTodo, todos } = this.state;
    return (
      <div className="ExTodoList">
        <form onSubmit={this.handleSubmit}>
          <input value={newTodo} onChange={this.handleChange} />
          <button>+</button>
        </form>
        <div>
          {todos.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ExTodoList;

// Exercice 4 : TodoList
// Afficher le tableau d'items dans la balise div (un ensemble de balise div)
// Au submit du form ajouter un élément au tableau
// (pensez à event.preventDefault())
