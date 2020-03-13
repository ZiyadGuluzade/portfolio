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
                            <div className='is-overlay'>
                                <h1 className='title is-2 welcome' id='welcome'>I'm Ziyad Guluzade</h1>
                                <span>
                                <p className='is-4 subtitle'>I enjoy creating interactive, modern web applications.</p>
                                </span>
                            </div> 
                        </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;