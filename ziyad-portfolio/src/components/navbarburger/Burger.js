import React from 'react';
import './burger.css';
import Link from '../link/Link';

class Burger extends React.Component {
    render() {
        return(
            <React.Fragment>
                <figure className='center navbar-item'>
                    <i class="fas fa-bars" id='burger'>
                        <Link />
                    </i>
                </figure> 
            </React.Fragment>
        )
    }
}

export default Burger;