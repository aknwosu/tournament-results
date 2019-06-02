import React, { Component } from 'react';
import './App.css';
import HomePage from './home'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobileView: false
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()

  }
  onResize = (e) => {
    this.setState({ isMobileView: window.innerWidth < 768 });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomePage isMobileView={this.state.isMobileView}/>
        </header>
      </div>
    )
  }
}

export default App;
