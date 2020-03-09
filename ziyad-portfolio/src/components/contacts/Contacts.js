import React from 'react';
import Contact from '../contact/Contact';
import Hr from '../hr/Hr';
import './contacts.css';

class Contacts extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='contacts'>
                    <div className='subtitle-box'>
                        <h2 className='subtitle is-2 has-text-centered' id='contacts-title'>WHERE TO FIND ME</h2>
                        <Hr />
                    </div>
                    <div className='columns'>
                            <Contact logo="fab fa-linkedin fa-3x" contactName='LinkedIn' link='https://www.linkedin.com/in/ziyad-guluzade-445939aa/' target='_blank'/>
                            <Contact logo='fas fa-phone-square fa-3x' contactName='Phone' link='tel:+16478311819' />
                            <Contact logo="far fa-envelope fa-3x" contactName='Email' link='mailto:ziyad_guluzade@outlook.com' target='_blank'/>
                            <Contact logo="fab fa-github fa-3x" contactName='Github' link='https://github.com/ZiyadGuluzade' target='_blank'/>
                    </div>
                </section>    
            </React.Fragment>
        )
    }
}

export default Contacts;