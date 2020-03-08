import React from  'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        const logo = this.props.logo;
        const contactName= this.props.contactName;
        const link = this.props.link;
        return(
            <React.Fragment>
                <div className='column is-one-quarter has-text-centered'>
                    <a href={link} className='contact-column content has-text-centered'>
                        <span className='contactName'><i class={logo}></i></span><br></br>
                        {contactName}
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;