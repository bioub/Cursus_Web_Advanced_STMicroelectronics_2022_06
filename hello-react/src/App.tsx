import { Component } from 'react';
import './App.css';
import Clock from './Clock';
import ExButtonGroup from './ExButtonGroup';
import ExHelloworld from './ExHelloworld';
import ExMultiStateButton from './ExMultiStateButton';
import ExTodoList from './ExTodoList';
import Hello from './Hello';
import LikeButtonControlled from './LikeButtonControlled';
import LikeButtonUncontrolled from './LikeButtonUncontrolled';
import Select from './Select';
import UserForm from './UserForm';

type State = {
  count: number;
}

class App extends Component<{}, State> {
  state: State = {
    count: 10,
  };
  handleIncrement = (newCount: number) => {
    this.setState({
      count: newCount
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        {/* React.createElement(Hello, { name: 'Toto' }) */}
        <Hello name="Toto" />
        <Clock format="HH:mm" />
        <LikeButtonUncontrolled />
        <LikeButtonUncontrolled />
        <LikeButtonUncontrolled />
        <LikeButtonControlled count={count} onIncrement={this.handleIncrement} />
        <LikeButtonControlled count={count} onIncrement={this.handleIncrement} />
        <LikeButtonControlled count={count} onIncrement={this.handleIncrement} />
        <ExHelloworld />
        <ExMultiStateButton items={['Rouge', 'Vert', 'Bleu']} />
        <UserForm />
        <Select items={['Rouge', 'Vert', 'Bleu']} />
        <ExButtonGroup items={['Rouge', 'Vert', 'Bleu']} />
        <ExTodoList />
      </div>
    );
  }
}

export default App;
