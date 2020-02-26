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
                        <div className='column left'>
                            <Logo />
                        </div>
                        <div className='column center'>
                            
                        </div>
                        <div className='column right'>
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
