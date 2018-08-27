import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import { MAP_KEY } from './data/credentials';
import { mapStyles } from './data/mapStyles.js';
import './App.css';

import Map from './components/Map/Map'
import Header from './components/Header/Header'
import AsideMenu from './components/AsideMenu/AsideMenu'


class App extends Component {

  state = {
    map: {},
    mapCenter: {
      lat: 48.855215,
      lng: 2.347154
    }
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {

    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: this.state.mapCenter,
      styles: mapStyles
    });

  }


  render() {
    return (
      <div>
        <Header />
        <main>
          <AsideMenu />
          <Map />
        </main>
      </div>
    )
  }
}

export default scriptLoader(
  [`https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&libraries:places`]
)(App);