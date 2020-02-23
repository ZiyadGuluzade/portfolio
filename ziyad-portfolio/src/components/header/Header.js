import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import './header.css';


class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='wrapper header'>
                    <Navbar />
                </div>
            </React.Fragment>
        )
    }
}

export default Header;