import React from 'react';
import Link from '../link/Link';
import './navbar.css';
import Logo from '../logo/Logo';
// import Burger from '../navbarburger/Burger';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='hero-head'>
                    <div className='columns is-mobile is-marginless'>
                        <div className='column' style={{border: '2px solid black'}}>
                            <Logo />
                        </div>
                        <div className='column' style={{border: '2px solid black'}}>
                            
                        </div>
                        <div className='column' style={{border: '2px solid black'}}>
                            <Link name='About'/>
                            <Link name='Projects'/>
                            <Link name='Contacts'/>
                            <Link name='Resume'/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
