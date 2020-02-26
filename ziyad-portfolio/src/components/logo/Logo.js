import React from 'react';
import './logo.css';

class Logo extends React.Component {
    render() {
        return(
            <React.Fragment>
                <a class="navbar-item block" href="#header">
                    <h2 className='title' id='not-mobile'>Ziyad Guluzade</h2>
                    <h2 className='title' id='mobile'> ZG </h2>
                </a>
            </React.Fragment>
            
        )
    }
}

export default Logo;