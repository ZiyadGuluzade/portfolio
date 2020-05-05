import React from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';


class Header extends React.Component {

    render() {
        return(
            <React.Fragment>
                <section id='header' className='hero is-fullheight'>
                            <Navbar />
                        <div className='hero-body'>
                            <div className='is-overlay'>
                                <h1 className='title is-2 welcome' id='welcome'>
                                    Hey, I am Ziyad
                                </h1>

                                <p className='is-4 subtitle' id='about'>I enjoy creating interactive, modern web applications. if you have a desire to work on a project together or just want to have a friendly chat please contact me <a href='#contacts' className='contacts-link'>here</a>
                                </p>

                                <div>
                                    <hr className='header-line'></hr>
                                </div>
                            </div> 
                        </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;