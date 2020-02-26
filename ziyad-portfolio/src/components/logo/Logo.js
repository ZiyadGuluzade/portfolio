import React from 'react';
import './logo.css';

class Logo extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='navbar-item center'>
                    <h2 className='title' id='not-mobile'>Ziyad Guluzade</h2>
                    <h2 className='title' id='mobile'> ZG </h2>
                </div>
            </React.Fragment>
            
        )
    }
}

export default Logo;