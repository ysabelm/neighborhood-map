import React, { Component } from 'react'
import './AsideMenu.css'

class AsideMenu extends Component {

  render() {

    return (

      <div className="aside-menu">
        <div className="my-favorite-places">
          <h2 aria-level="2">My Favorite Theatres</h2>
          <ul id="list-favorite-places" aria-label="List favorite places">
            <li><a role="menuitem" href="#">Le Monfort Théâtre</a></li>
            <li><a role="menuitem" href="#">Théâtre Gérard Philippe</a></li>
            <li><a role="menuitem" href="#">Les Bouffes du Nord</a></li>
            <li><a role="menuitem" href="#">Comédie-Française</a></li>
            <li><a role="menuitem" href="#">Théâtre de la Ville</a></li>
          </ul>
        </div>
        <div className="search-form" aria-label="Search place">
          <label>Find Your Theatre</label>
          <input
            id="searchQuery"
            type="text"
            placeholder="Enter your query..."
          />
        </div>
      </div>
    )
  }
}

export default AsideMenu