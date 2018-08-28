import React, { Component } from 'react'
import './AsideMenu.css'

class AsideMenu extends Component {

  render() {

    return (

      <div className="aside-menu">
        <div className="my-favorite-places">
          <h2 role="heading">My favorite places</h2>
          <ul id="list-favorite-places" role="menubar">
            <li><a href="#">Vin Au Verre</a></li>
            <li><a href="#">A La Bière Comme A La Bière</a></li>
            <li><a href="#">La Cave des Abbesses</a></li>
            <li><a href="#">De Verre en Vers</a></li>
            <li><a href="#">Paris Saint-Bière</a></li>
          </ul>
        </div>
        <div className="search-form">
          <label htmlFor="searchQuery">Find Your Place</label>
          <input
            id="searchQuery"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    )
  }
}

export default AsideMenu