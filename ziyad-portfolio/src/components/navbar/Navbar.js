import React from 'react';
import Link from '../link/Link';
import './navbar.css';
import Logo from '../logo/Logo';
import Burger from '../navbarburger/Burger';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='hero-head'>
                    <div className='columns is-mobile is-marginless heading has-text-weight-bold'>
                        <div className='column left' style={{border: '2px solid black'}}>
                            <Logo />
                        </div>
                        <div className='column center' style={{border: '2px solid black'}}>
                            
                        </div>
                        <div className='column right' style={{border: '2px solid black'}}>
                            <Link name='About' />
                            <Link name='Projects'/>
                            <Link name='Contacts'/>
                            <Link name='Resume'/>
                            <Burger />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
