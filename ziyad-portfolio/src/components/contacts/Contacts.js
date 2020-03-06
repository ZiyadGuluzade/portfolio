import React from 'react';
import Contact from '../contact/Contact';

class Contacts extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='block'>
                <Contact title='LinkedIn'/>
                <Contact title='Github'/>
                <Contact title='Email'/>
                <Contact title='Phone'/>
                </div>
                
                
            </React.Fragment>
        )
    }
}

export default Contacts;