import React from 'react';
import Link from './link/Link';
import '../style/Navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='navbar' style={{border: '2px solid black', 
                                                color: 'black',
                                                padding: 20,
                                                height: '100px'}}>
                    <Link linkName='About' link='' />
                    <Link linkName='Projects' link='' />
                    <Link linkName='Contacts' link='' />
                    <Link linkName='Resume' link='' />
                </div>
            </React.Fragment>
        ) 
    }
}

export default Navbar;
