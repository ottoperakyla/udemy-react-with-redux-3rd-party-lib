import React, { Component } from 'react';

export default class GoogleMap extends Component {
  // never rerender the component,
  // since googlemaps.js is in charge of this component
  // we dont want react to manage it at all.
  shouldComponentUpdate() {
    return false;
  }

  // componentWillReceiveProps will fire always
  // when passing props to component
  // so we can use it to interface with the googlemaps library
  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })
  }

  // this.refs is used to reference the map div in render
  // the init code is done in componentDidMount
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    })
  }
  
  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}
