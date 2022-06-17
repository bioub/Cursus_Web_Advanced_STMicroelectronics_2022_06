import './App.css';
import Clock from './Clock';
import ExButtonGroup from './ExButtonGroup';
import ExHelloworld from './ExHelloworld';
import ExMultiStateButton from './ExMultiStateButton';
import ExTodoList from './ExTodoList';
import Hello from './Hello';
import LikeButton from './LikeButton';
import Select from './Select';
import UserForm from './UserForm';

function App() {
  return (
    <div className="App">
      {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Hello name="Toto" />
      <Clock format="HH:mm" />
      <LikeButton />
      <LikeButton />
      <LikeButton />
      <ExHelloworld />
      <ExMultiStateButton items={['Rouge', 'Vert', 'Bleu']} />
      <UserForm />
      <Select items={['Rouge', 'Vert', 'Bleu']} />
      <ExButtonGroup items={['Rouge', 'Vert', 'Bleu']} />
      <ExTodoList />
    </div>
  );
}

export default App;
