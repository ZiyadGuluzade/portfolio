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
                        <div className='column'></div>
                            <Contact logo="fab fa-linkedin fa-5x" contactName='LinkedIn' link='#'/>
                            <Contact logo="fab fa-github fa-5x" contactName='Github' link='#'/>
                            <Contact logo="fas fa-at fa-5x" contactName='Email' link='#'/>
                            <Contact logo="fas fa-mobile fa-5x" contactName='Phone' link='#'/>
                        <div className='column'></div>
                    </div>
                </section>    
            </React.Fragment>
        )
    }
}

export default Contacts;