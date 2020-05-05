import React from 'react';
import Link from '../link/Link';
import './navbar.css';
import Logo from '../logo/Logo';
import Pdf from './resume.pdf';

class Navbar extends React.Component {
    
    state = {
        isClicked: false
    }
    
    render() {
        // event handler
        const isOn = this.state.isClicked;
        return(
            <React.Fragment>
                <nav>
                    <div className='logo'>
                        <Logo />
                    </div>

                    <ul className={isOn ? 'nav-links nav-active': 'nav-links'}>
                        <li><Link name='Portfolio' href='#projects' /></li>
                        <li><Link name='Contacts' href='#contacts' /></li>
                        <li><Link name='Resume' href={Pdf} /></li> 
                    </ul>
                                
                    <div className='nav-burger' onClick={() => this.setState({isClicked: !isOn })}>
                        <div className='line-1'></div>
                        <div className='line-2'></div>
                        <div className='line-3'></div>
                    </div>
                </nav>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
