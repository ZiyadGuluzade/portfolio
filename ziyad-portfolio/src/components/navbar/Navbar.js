import React from 'react';
import Link from '../link/Link';
import './navbar.css';
import Logo from '../logo/Logo';
import Burger from '../navbarburger/Burger';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Logo />
                        {/* Navbar burger */}
                        <Burger />
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link name='About' />
                                <Link name='Projects' />
                                <Link name='Contacts' />
                                <Link name='Resume' />
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
