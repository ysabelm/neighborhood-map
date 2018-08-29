import React, { Component } from 'react'
import './AsideMenu.css'
import escapeRegExp from 'escape-string-regexp'

class AsideMenu extends Component {

  state = {
    query: '',
    venues: this.props.venues
  }

  searchVenue = (query) => {
    this.setState({ query })
    let searchResult
    let venues = this.props.venues

    if (this.state.query && (this.state.query !== '')) {
      const match = new RegExp(escapeRegExp(query), 'i');
      searchResult = venues.filter(venue => match.test(venue.venue.name))
      this.setState({ venues: searchResult })
      this.props.updatePlaces(searchResult)
    } else {
      this.setState({ venues: venues })
    }
  }

  handleOnClickMarker = (venueTitle) => {
    this.props.markers.map((marker) => {
      if (marker.title === venueTitle) {
        window.google.maps.event.trigger(marker, 'click');
      }
    })
  }

  render() {

    return (

      <div className="aside-menu">
        <div className="search-form" aria-label="Search theatre">
          <label>Find Your Theatre</label>
          <input
            id="searchPlace"
            type="text"
            placeholder="Search a place..."
            onChange={event => this.searchVenue(event.target.value)}
            value={this.state.query}
          />
        </div>
        <div className="my-favorite-places">
          <h2 aria-level="2">My favorite places</h2>
          {this.state.venues.length !== 0 && (
            <ul id="list-favorite-places" aria-label="List favorite places">
              {this.state.venues.map((venue, index) => (
                <li
                  key={index}
                  tabIndex={index}
                  className="item"
                  onClick={() => this.handleOnClickMarker(venue.venue.name)}
                >
                  {venue.venue.name}
                </li>
              ))}
            </ul>
          )}
          {this.state.venues === 0 && (
            <p>No Places Found...</p>
          )}
        </div>
      </div>
    )
  }
}

export default AsideMenu