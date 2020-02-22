import React from 'react';
import Link from './Link';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h2>Navbar</h2>
                <Link linkName='About' />
                <Link linkName='Projects' />
                <Link linkName='Contacts' />
            </React.Fragment>
        ) 
    }
}

export default Navbar;
