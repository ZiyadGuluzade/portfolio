import React from 'react';
import Contact from '../contact/Contact';

class Contacts extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Contact title='LinkedIn'/>
                <Contact title='Github'/>
                <Contact title='Email'/>
                <Contact title='Phone'/>
            </React.Fragment>
        )
    }
}

export default Contacts;