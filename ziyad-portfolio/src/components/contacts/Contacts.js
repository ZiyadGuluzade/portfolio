import React from 'react';
import Contact from '../contact/Contact';
import './contacts.css';

class Contacts extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='contacts'>
                    <h2 className='subtitle is-2 has-text-centered' id='contacts-title'>WHERE TO FIND ME</h2>
                    <div className='columns'>
                            <Contact logo="fab fa-linkedin fa-3x" contactName='LinkedIn' link='#'/>
                            <Contact logo="fab fa-github fa-3x" contactName='Github' link='#'/>
                            <Contact logo="fas fa-at fa-3x" contactName='Email' link='#'/>
                            <Contact logo="fas fa-mobile fa-3x" contactName='Phone' link='#'/>
                    </div>
                </section>    
            </React.Fragment>
        )
    }
}

export default Contacts;