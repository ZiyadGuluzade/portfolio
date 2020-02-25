import React from 'react';
import './burger.css';

class Burger extends React.Component {
    render() {
        return(
            <React.Fragment>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </React.Fragment>
        )
    }
}

export default Burger;