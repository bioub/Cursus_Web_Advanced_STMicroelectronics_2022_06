import { Component } from 'react';
import { fetchTodos, postTodo } from './api';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

type Props = {};
type State = {
  readonly loading: boolean;
  readonly todos: Todo[];
  readonly newTodo: string;
};

class Todos extends Component<Props, State> {
  state: State = {
    loading: false,
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
  handleAdd = async () => {
    const { todos, newTodo } = this.state;
    this.setState({
      loading: true,
    });

    const createdTodo = await postTodo({ title: newTodo, completed: false })

    this.setState({
      loading: false,
      todos: [
        ...todos,
        createdTodo,
      ],
      newTodo: '',
    });
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const todos = await fetchTodos();
    this.setState({
      loading: false,
      todos,
    });
  }
  render() {
    const { todos, newTodo, loading } = this.state;

    return (
      <div className="Todos">
        {loading && <p>Loading...</p>}
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
