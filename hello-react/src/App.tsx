import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Hello name="Toto" />
    </div>
  );
}

export default App;
