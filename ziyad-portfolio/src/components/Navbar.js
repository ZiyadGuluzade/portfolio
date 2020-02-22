import React from 'react';
import Link from './Link';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h2>Navbar</h2>
                <Link name='About' />
                <Link name='Projects' />
                <Link name='Contacts' />
            </React.Fragment>
        ) 
    }
}

export default Navbar;
