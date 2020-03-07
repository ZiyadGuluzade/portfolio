import React from  'react';

class Contact extends React.Component {
    render() {
        const logo = this.props.logo;
        const contactName= this.props.contactName;
        return(
            <React.Fragment>
                <div className='column is-one-quarter'>
                    <div className='content has-text-centered'>{logo}</div>
                    <div className='content has-text-centered'>{contactName}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;