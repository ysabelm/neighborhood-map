import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import { MAP_KEY } from './data/credentials';
import { mapStyles } from './data/mapStyles.js';
import './App.css';

import Map from './components/Map/Map'
import Header from './components/Header/Header'
import AsideMenu from './components/AsideMenu/AsideMenu'
import { pointsOfInterest } from './data/poi.js'
import { places, filteredPlaces } from './fourSquareAPI'


class App extends Component {

  state = {
    map: {},
    mapCenter: {
      lat: 48.855215,
      lng: 2.347154
    },
    markers: [],
    places: [],
    filteredPlaces: [],
    infoWindow: {},
    mapReady: false,
    mapError: false
  }

  componentWillReceiveProps({ isScriptLoadSucceed }) {
    if (isScriptLoadSucceed && !this.state.mapReady) {

      // Create a new map
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: this.state.mapCenter,
        styles: mapStyles
      });

      const infoWindow = new window.google.maps.InfoWindow();

      this.setState({
        map: map,
        infoWindow: infoWindow,
        mapReady: true
      })
    } else if (!this.state.mapReady) {
      console.log("The map couldn't load");
      this.setState({ mapError: true })
    }
    // Create an array of markers using the pointsOfInterest
    for (let i = 0; i < pointsOfInterest.length; i++) {
      // Get the position from the location array.
      let position = pointsOfInterest[i].location;
      let title = pointsOfInterest[i].title;
      // Create a marker per location, and put into markers array.
      let marker = new window.google.maps.Marker({
        position: position,
        title: title,
        animation: window.google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
      this.state.markers.push(marker);
    }
    this.state.places.map((place) => {

      // Create Markers
      let marker = new window.google.maps.Marker({
        position: { lat: place.venue.location.lat, lng: place.venue.location.lng },
        map: this.state.map,
        animation: window.google.maps.Animation.DROP,
        title: place.venue.name
      })

      // Add each created marker to the 'markers' array
      this.state.markers.push(marker)

      // Create InfoWindow
      let content = `
                      <h1>${place.venue.name}</h1>
                      <p>Address: ${place.venue.location.formattedAddress[0]} ${place.venue.location.formattedAddress[1]} ${place.venue.location.formattedAddress[2]}</p>
                      <p>lat: ${place.venue.location.lat}, long: ${place.venue.location.lng}</p>
                      `

      // Display the InfoWindow after clicking on the Marker
      marker.addListener('click', function () {

        // Update 'InfoWindow' content
        this.state.infowindow.setContent(content)

        // Open An 'InfoWindow'
        this.state.infowindow.open(this.state.map, marker)

        // Animate The Marker
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
      })
    })

    
  }








  render() {
    return (
      <div className="neighborhood-app">
        <Header />
        <main role="main">
          <AsideMenu />
          <Map />
        </main>
      </div>
    )
  }
}

// Load Googgle Map asynchronously
export default scriptLoader(
  [`https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&libraries:places`]
)(App);