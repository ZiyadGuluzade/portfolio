import React from 'react';
import Link from '../link/Link';
import './navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='nav'>
                    <div className='menu-icon'>
                        <i className='fa fa-bars fa-2x'></i>               
                    </div>
                    <div className='logo'>Logo</div>
                    <div className='menu'>
                        <ul>
                            <li><Link link='#' name='About' /></li>
                            <li><Link link='#' name='Projects'/></li>
                            <li><Link link='#' name='Contacts'/></li>
                            <li><Link link='#' name='Resume'/></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
