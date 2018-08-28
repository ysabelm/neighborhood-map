import React, { Component } from 'react';
import { mapStyles } from './data/mapStyles.js';
import './App.css';

import Map from './components/Map/Map'
import Header from './components/Header/Header'
import AsideMenu from './components/AsideMenu/AsideMenu'
import { pointsOfInterest } from './data/poi.js'


class App extends Component {


  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDUjgOkGFM4wo-D5tiFSihOZnJwyk4M8zg&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const venuesEndPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "30HUM4RXCRADFSCC1NFO4YQWL54T41NKHR5SN43LKTHGAWI5",
      client_secret: "W0OSXW2J3RLORN5VFGGQR2Q0FJWTPJCK1QGUH5MMXBLOUI53",
      query: "théâtre",
      near: "Paris",
      v: "20182008"
    }



    fetch(venuesEndPoint + new URLSearchParams(parameters), {
      method: 'GET'
    })
      .then(response => response.json()).then(response => {
        this.setState({
          venues: response.response.groups[0].items
        }, this.renderMap())

      })
      .catch(error => {
        console.log("fetch error" + error)
      })

  }

  initMap = () => {

    // Create A Map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 48.855215, lng: 2.347154 },
      zoom: 13,
      styles: mapStyles
    })

    // Create An InfoWindow
    const infowindow = new window.google.maps.InfoWindow({maxWidth: 300})

    // Display Dynamic Markers
    this.state.venues.map(myVenue => {

      const contentString = `${myVenue.venue.name}
      ${myVenue.venue.location.formattedAddress[0]}
      ${myVenue.venue.location.formattedAddress[1]}`

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng },
        map: map,
        title: myVenue.venue.name,
      })

      // Click on A Marker!
      marker.addListener('click', function () {

        // Change the content
        infowindow.setContent(contentString)

        // Open An InfoWindow
        infowindow.open(map, marker)
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

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;