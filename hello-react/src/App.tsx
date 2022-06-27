import { Component } from 'react';
import './App.css';
import Button from './Button';
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
  color: string;
};

class App extends Component<{}, State> {
  state: State = {
    count: 10,
    color: 'Rouge',
  };
  handleIncrement = (newCount: number) => {
    this.setState({
      count: newCount,
    });
  };
  handleColorSelection = (color: string) => {
    this.setState({
      color, // color: color
    });
  };
  render() {
    const { count, color } = this.state;
    return (
      <div className="App">
        {/* React.createElement(Hello, { name: 'Toto' }) */}
        <Hello name="Toto" />
        <Clock />
        <Clock format="HH:mm" />
        <LikeButtonUncontrolled />
        <LikeButtonUncontrolled />
        <LikeButtonUncontrolled />
        <p>Count: {count}</p>
        <LikeButtonControlled
          count={count}
          onIncrement={this.handleIncrement}
        />
        <LikeButtonControlled
          count={count}
          onIncrement={this.handleIncrement}
        />
        <LikeButtonControlled
          count={count}
          onIncrement={this.handleIncrement}
        />
        <ExHelloworld />
        <ExMultiStateButton items={['Rouge', 'Vert', 'Bleu']} />
        <UserForm />
        <Select
          items={['Rouge', 'Vert', 'Bleu']}
          value={color}
          onSelection={this.handleColorSelection}
        />
        <ExButtonGroup items={['Rouge', 'Vert', 'Bleu']} />
        <ExTodoList />

        <p>Couleur sélectionnée : {color}</p>

        <Button>
          <span>Go</span>
        </Button>
      </div>
    );
  }
}

export default App;
