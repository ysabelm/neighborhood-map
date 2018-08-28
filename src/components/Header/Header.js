import React from 'react'
import './Header.css'

class Header extends React.Component {

    render() {

        return (
            <header>
                <h1 className="neighborhood-app-title" role="heading" aria-level="1">Find your place: Wine or Beer?</h1>
            </header>
        )
    }
}

export default Header