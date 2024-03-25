import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kiza"
    }
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome {this.state.name}
          </p>
          <button 
          onClick={() => {
            this.setState({name: 'David'})
          }}>
            Change the name
            </button>
        </header>
      </div>
    );
  }

}

export default App;
