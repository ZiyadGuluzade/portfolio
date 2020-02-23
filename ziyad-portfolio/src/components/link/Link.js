import React from 'react';

class Link extends React.Component {
    render() {
        const linkName = this.props.linkName;
        const link = this.props.link;
        return(
            <React.Fragment>
                <a href={link} style={{margin: 20, color: 'black'}} >{linkName}</a>
            </React.Fragment>
        )
    }
}

export default Link;