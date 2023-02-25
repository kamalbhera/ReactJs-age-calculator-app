import logo from './logo.svg';
import './App.css';
import AgeCalculator from './components/AgeCalculator'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AgeCalculator />
      </header>
    </div>
  );
}

export default App;
