import './App.css';
import Clock from './Clock';
import ExHelloworld from './ExHelloworld';
import ExMultiStateButton from './ExMultiStateButton';
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
    </div>
  );
}

export default App;
