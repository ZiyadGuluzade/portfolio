import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import Rellax from 'rellax';
import './header.css';


class Header extends React.Component {
    componentDidMount() {
        this.rellax = new Rellax('.rellax');
    }

    render() {
        return(
            <React.Fragment>
                <section id='header' className='hero is-fullheight'>
                            <Navbar />
                        <div className='hero-body rellax'>
                            <div className='is-overlay rellax'>
                                <h1 className='title is-2 welcome rellax' data-rellax-speed='9' id='welcome'>I'm Ziyad Guluzade</h1>
                                <span>
                                <p className='is-4 subtitle rellax' data-rellax-speed='6'>I enjoy creating interactive, modern web applications.</p>
                                </span>
                                <div>
                                    <hr className='header-line rellax' data-rellax-speed='5'></hr>
                                </div>
                            </div> 
                        </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;