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
  delay: number;
  format: string;
  showClock: boolean;
};

class App extends Component<{}, State> {
  state: State = {
    count: 10,
    color: 'Rouge',
    delay: 1000,
    format: 'HH:mm:ss',
    showClock: true,
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
    const { count, color, delay, format, showClock } = this.state;
    return (
      <div className="App">
        {/* React.createElement(Hello, { name: 'Toto' }) */}
        <Hello name="Toto" />
        <Clock />

        <h2>Clock with controls</h2>
        <div>Délai : <input value={delay} onChange={(e) => this.setState({ delay: +e.target.value})} /></div>
        <div>Format : <input value={format} onChange={(e) => this.setState({ format: e.target.value})} /></div>
        <div><button onClick={() => this.setState({showClock: !showClock})}>On/Off</button></div>
        {showClock && <Clock delay={delay} format={format} />}

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
        <UserForm />
        <ExHelloworld />
        <ExMultiStateButton
          items={['Rouge', 'Vert', 'Bleu']}
          value={color}
          onSelection={this.handleColorSelection}
        />
        <Select
          items={['Rouge', 'Vert', 'Bleu']}
          value={color}
          onSelection={this.handleColorSelection}
        />
        <ExButtonGroup
          items={['Rouge', 'Vert', 'Bleu']}
          value={color}
          onSelection={this.handleColorSelection}
        />
        <ExTodoList />
        {/*
        Exercice Lifting State Up :
        https://reactjs.org/docs/lifting-state-up.html

        En vous inspirant de Select, remonter value du state de App
        dans les composants ExButtonGroup et ExMultiStateButton
        (vous pouvez garder les variables color et handleColorSelection)
        */}

        <p>Couleur sélectionnée : {color}</p>

        <Button>
          <span>Go</span>
        </Button>
      </div>
    );
  }
}

export default App;
