import React, { FunctionComponent } from 'react';
import ExampleTitle from './styles';
const App: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ExampleTitle color="blue">
          Edit <code>srcf/App.js</code> and save to reload.
        </ExampleTitle>
        <a
          className="App-link"
          rel="noreferrer"
          href="https://reactjs.org"
          target="_blank"
        ></a>
      </header>
    </div>
  );
};

export default App;
