import React from 'react';
import './burger.css';

class Burger extends React.Component {
    render() {
        return(
            <React.Fragment>
                <figure className='center navbar-item'>
                    <i class="fas fa-bars" id='burger'></i>
                </figure> 
            </React.Fragment>
        )
    }
}

export default Burger;