import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
// import Link from '../link/Link';
import './header.css';


class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='header' className='hero is-fullheight'>
                            <Navbar />
                        <div className='hero-body'>
                            <div className='is-overlay has-text-centered'>
                                <h1 className='title is-1 welcome'id='welcome'>Welcome</h1>
                                <span>
                                <h3 className='is-4 subtitle welcome'>Click to see more</h3>
                                <i className="fas fa-angle-down welcome"></i>
                                </span>
                            </div> 
                        </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;