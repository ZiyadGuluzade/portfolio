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
                            <Link name='About' href='#about' />
                            <Link name='Portfolio' href='#projects' />
                            <Link name='Contacts' href='#contacts' />
                            <Link name='Resume' href='../../../src/docs/guluzade_resume.pdf' />
                            <Burger />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
