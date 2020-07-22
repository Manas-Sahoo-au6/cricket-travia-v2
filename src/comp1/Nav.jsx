import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <nav className="navbar col-12 navbar-dark shadow navbar-expand-sm bg-primary justify-content-between pt-2 pb-2 pl-5 ml-auto">
                <a href="/" className="navbar-brand">Cricket Trivia</a>
            </nav>
        )
    }
}

export default Nav
