import React from 'react';
import Link from '../link/Link';
import './navbar.css';
import Logo from '../logo/Logo';
import Pdf from './resume.pdf';

class Navbar extends React.Component {
    
    state = {
        isClicked: false
    }
    // navClickHandler() {
    //     // nav.classList.toggle('.nav-active');
    // }
    
    render() {
        console.log(this.state.isClicked);
        const isOn = this.state.isClicked;
        return(
            <React.Fragment>

                <nav>
                    {/* <div className='columns is-mobile heading has-text-weight-bold'> */}
                        <div className='logo'>
                            <Logo />
                        </div>
                            
                            {/* </div> */}

                            {/* <div className='column right' > */}
                            <ul className='nav-links'>
                                {/* <li><Link name='About' href='#about' /></li> */}
                                <li><Link name='Portfolio' href='#projects' /></li>
                                <li><Link name='Contacts' href='#contacts' /></li>
                                <li><Link name='Resume' href={Pdf} /></li> 
                            </ul>
                                
                            <div className={isOn ? 'nav-burger nav-active': 'nav-burger'} onClick={() => this.setState({isClicked: !isOn })}>
                                <div className='line-1'></div>
                                <div className='line-2'></div>
                                <div className='line-3'></div>
                            </div>
                    {/* </div> */}
                </nav>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
