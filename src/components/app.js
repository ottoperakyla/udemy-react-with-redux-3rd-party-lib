import React, { Component } from 'react';
import GoogleMap from './GoogleMap'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {lat:-34.397, lng: 150.644}
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <p>Map me</p>
        <button onClick={() => this.setState({lat: 40.7128, lng: -74.0059 })}>
          New York
        </button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
} 
 