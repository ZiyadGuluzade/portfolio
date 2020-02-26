import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import Link from '../link/Link';
import './header.css';


class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='header' className='hero is-fullheight'>
                        <div className='hero-head'>
                            <Navbar />
                        </div>
                        {/* <header className='hero-body'>
                            <div className='is-overlay has-text-centered'>
                                <h1 class='title is-1' id='welcome'>Welcome</h1>
                            </div>   
                        </header> */}
                </section>
            </React.Fragment>
        )
    }
}

export default Header;