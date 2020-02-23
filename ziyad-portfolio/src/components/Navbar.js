import React from 'react';
import Link from './Link';
import '../style/Navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='navbar' style={{backgroundColor: '#2E5877', color: 'black', padding: 20}}>
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
