import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather default="New York" />
      </header>
      <footer>
        <a href="https://github.com/sailorbunni/weather-react">
          Open-source code
        </a>{" "}
        by Donna Dinh <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
