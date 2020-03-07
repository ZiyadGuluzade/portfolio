import React from 'react';
import Contact from '../contact/Contact';
import './contacts.css';

class Contacts extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='contacts'>
                    <h2 className='subtitle is-2 has-text-centered' id='contacts-title'>CONTACTS</h2>
                    <div className='columns'>
                        <div className='column'></div>
                            <Contact logo={<i class="fab fa-linkedin fa-5x"></i>} contactName='LinkedIn' />
                            <Contact logo={<i class="fab fa-github fa-5x"></i>} contactName='Github' />
                            <Contact logo={<i class="fas fa-at fa-5x"></i>} contactName='Email' />
                            <Contact logo={<i class="fas fa-mobile fa-5x"></i>} contactName='Phone' />
                        <div className='column'></div>
                    </div>
                </section>    
            </React.Fragment>
        )
    }
}

export default Contacts;