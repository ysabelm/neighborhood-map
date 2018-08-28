import React from 'react'
import './Header.css'

class Header extends React.Component {

    render() {

        return (
            <header>
                <h1 className="neighborhood-app-title" aria-level="1">Find your Theatre: Shakespeare or Molière?</h1>
            </header>
        )
    }
}

export default Header