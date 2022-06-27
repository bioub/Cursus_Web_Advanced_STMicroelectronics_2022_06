import { Component } from 'react';
import { fetchTodos } from './api';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

type Props = {};
type State = {
  readonly todos: Todo[];
  readonly newTodo: string;
};

class Todos extends Component<Props, State> {
  state: State = {
    todos: [
      // { _id: String(Math.random()), title: 'ABC', completed: false },
      // { _id: String(Math.random()), title: 'DEF', completed: true },
    ],
    newTodo: 'XYZ',
  };
  handleNewTodoChange = (newTodo: string) => {
    this.setState({
      newTodo, // newTodo: newTodo
    });
  };
  handleAdd = () => {
    const { todos, newTodo } = this.state;
    this.setState({
      todos: [
        ...todos,
        { _id: String(Math.random()), title: newTodo, completed: false },
      ],
      newTodo: '',
    });
  };
  async componentDidMount() {
    const todos = await fetchTodos();
    this.setState({
      todos,
    });
  }
  render() {
    const { todos, newTodo } = this.state;

    return (
      <div className="Todos">
        <TodoForm
          newTodo={newTodo}
          onNewTodoChange={this.handleNewTodoChange}
          onAdd={this.handleAdd}
        />
        <TodosList todos={todos} />
      </div>
    );
  }
}

export default Todos;
