import React from  'react';

class Contact extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div>Contact {this.props.title}</div>
            </React.Fragment>
        )
    }
}

export default Contact;