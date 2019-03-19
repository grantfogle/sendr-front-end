import React, { Component } from 'react';
import Filter from './components/Filter';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      clicked: false
    }
  }

  clickedFilter = () => {
    return this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="App">
        <Filter filter={this.state.filter} clicked={this.state.clicked} clickedFilter={this.clickedFilter} />
      </div>
    );
  }
}

export default App;
