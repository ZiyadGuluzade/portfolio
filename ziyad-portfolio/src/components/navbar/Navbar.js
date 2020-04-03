import React from 'react';
import Link from '../link/Link';
import './navbar.css';
import Logo from '../logo/Logo';
import Pdf from './resume.pdf';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        }
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    
    render() {
        return(
            <React.Fragment>
                <div className='hero-head'>
                    <div className='columns is-mobile is-marginless heading has-text-weight-bold'>
                        <div className='column left'>
                            <Logo />
                        </div>

                        <div className='column center'></div>

                        <div className='column right' onClick={this.toggleNavbar}>
                            <div className='navbar-burger'>
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className='navbar-end'>
                                <Link name='About' href='#about' />
                                <Link name='Portfolio' href='#projects' />
                                <Link name='Contacts' href='#contacts' />
                                <Link name='Resume' href={Pdf} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
