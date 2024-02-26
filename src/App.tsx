import React from "react";
import Button from "./components/Button";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button> Hello </Button>
        <Button btnType="link" href="#">
          World
        </Button>
      </header>
    </div>
  );
};

export default App;
