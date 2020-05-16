import React from 'react';
import './App.css';
import { format } from 'url';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="What do you have to do?"/>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    )
  }
}

export default App;
