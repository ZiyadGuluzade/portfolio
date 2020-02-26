import React from 'react';
import './burger.css';

class Burger extends React.Component {
    render() {
        return(
            <React.Fragment>
                <i class="fas fa-bars" id='burger'></i>
            </React.Fragment>
        )
    }
}

export default Burger;