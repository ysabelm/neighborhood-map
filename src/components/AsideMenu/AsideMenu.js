import React, { Component } from 'react'
import './AsideMenu.css'

class AsideMenu extends Component {

  render() {

    return (

      <div className="aside-menu">
        <div className="my-favorite-places">
          <h2 aria-level="2">My favorite places</h2>
          <ul id="list-favorite-places" aria-label="List favorite places">
            <li><a role="menuitem" href="#">Vin Au Verre</a></li>
            <li><a role="menuitem" href="#">A La Bière Comme A La Bière</a></li>
            <li><a role="menuitem" href="#">La Cave des Abbesses</a></li>
            <li><a role="menuitem" href="#">De Verre en Vers</a></li>
            <li><a role="menuitem" href="#">Paris Saint-Bière</a></li>
          </ul>
        </div>
        <div className="search-form" aria-label="Search place">
          <label>Find Your Place</label>
          <input
            id="searchPlace"
            type="text"
            placeholder="Enter your category..."
          />
        </div>
      </div>
    )
  }
}

export default AsideMenu