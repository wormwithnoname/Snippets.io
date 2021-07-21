import './App.css';
import Logo from '../assets/snippetslogo.png';
import bg1 from '../assets/wavesbg1.png';

function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${bg1})` }}>
        <img className="App-logo" src={Logo} alt="" />
        <title className="App-title">
          Snippets.io
        </title>
      </div>

    </div>
  );
}

export default App;
