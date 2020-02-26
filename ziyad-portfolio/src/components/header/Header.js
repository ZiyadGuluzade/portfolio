import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import './header.css';


class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='header'>
                    <div className='wrapper header block'>
                        <Navbar />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;