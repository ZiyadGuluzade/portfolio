import React from 'react';
import './link.css';

class Link extends React.Component {
    render() {
        const linkName = this.props.name;
        const link = this.props.link;
        return(
            <React.Fragment>
                <a href={link}>{linkName}</a>
            </React.Fragment>
        )
    }
}

export default Link;