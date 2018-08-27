import React, { Component } from 'react'
import './AsideMenu.css'

class AsideMenu extends Component {

  render() {

    return (

      <aside>
        <ul id="my-favorite-places">
          <li><a href="#">Vin Au Verre</a></li>
          <li><a href="#">A La Bière Comme A La Bière</a></li>
          <li><a href="#">La Cave des Abbesses</a></li>
          <li><a href="#">De Verre en Vers</a></li>
          <li><a href="#">Paris Saint-Bière</a></li>
        </ul>
        <div className="search-form">
          <label htmlFor="searchQuery">Find Another Place</label>
          <input
            id="searchQuery"
            type="text"
            placeholder="Search..."
          />
        </div>
      </aside>
    )
  }
}

export default AsideMenu