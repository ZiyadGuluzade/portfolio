import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import keyboard from '../style/images/keyboard.jpg';


class Header extends React.Component {
    render() {
        const background = keyboard;
        return(
            <React.Fragment>
                <div className='header' style={{ backgroundImage: `url(${background})`}}>
                <Navbar />
                <h1 className='name' style={{ padding: 30, color: '#001321'}}>ZIYAD GULUZADE</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;