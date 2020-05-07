import React from  'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        const logo = this.props.logo;
        const contactName= this.props.contactName;
        const link = this.props.link;
        const target = this.props.target;
        return(
            <React.Fragment>
                <div className='column is-one-quarter is-12-mobile has-text-centered'>
                    <a href={link} className='contact-column content has-text-centered' target={target}>
                        <span className='contactName'><i className={logo}></i></span><br></br>
                        {contactName}
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;