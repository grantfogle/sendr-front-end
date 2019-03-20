import React, { Component } from 'react';
import Filter from './components/Filter';
import Trails from './components/Trails';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      clicked: false,
      trails: [
        { id: '1', name: 'Apex', region: 'Front Range', location: 'Golden, CO', status: 'Closed', reason: 'snow/wet/mud', trailDay: 'March 25th, 2019' },
        { id: '2', name: 'Apex', region: 'Front Range', location: 'Golden, CO', status: 'Closed', reason: 'snow/wet/mud', trailDay: 'March 25th, 2019' },
        { id: '3', name: 'Apex', region: 'Front Range', location: 'Golden, CO', status: 'Closed', reason: 'snow/wet/mud', trailDay: 'March 25th, 2019' },
        { id: '4', name: 'Apex', region: 'Front Range', location: 'Golden, CO', status: 'Closed', reason: 'snow/wet/mud', trailDay: 'March 25th, 2019' }
      ]
    }
  }


  clickedFilter = () => {
    return this.setState({ clicked: !this.state.clicked });
  }

  render() {
    library.add(faCircle);

    return (
      <div className="App">
        <Filter filter={this.state.filter} clicked={this.state.clicked} clickedFilter={this.clickedFilter} />
        <Trails trails={this.state.trails} />
      </div>
    );
  }
}

export default App;
