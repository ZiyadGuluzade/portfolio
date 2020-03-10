import React from 'react';
import './logo.css';

class Logo extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='navbar-item center'>
                    <div className='logo-initials'>
                        <a href='#header'>
                            <h2 className='title content has-text-centered' id='initials'>ZG</h2>
                        </a> 
                    </div>
                    <div className='full-logo'>
                        <h2 className='subtitle is-3' >Ziyad Guluzade</h2>
                    </div>
                    
                </div>
            </React.Fragment>
            
        )
    }
}

export default Logo;