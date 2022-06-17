import './App.css';
import Clock from './Clock';
import ExHelloworld from './ExHelloworld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import LikeButton from './LikeButton';

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
    </div>
  );
}

export default App;
