import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topspots: [],
    }
  }

  componentWillMount() {
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }, () => {
      console.log(this.state);
    }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container mt-4'>
          <div className='row'>
            <div className="col-md-12 jumbotron">
              <h1 className="display-4" >San Diego Top Spots</h1>
              <p className="lead" >A list of the top 30 places in San Diego, Califirnia</p>
            </div>
          </div>
          {this.state.topspots.map(topspot => (
        <TopSpot key={topspot.id} name={topspot.name} description={topspot.description} location={topspot.location} />))}          
        </div>
      </div>
    );
  }
}

export default App;
