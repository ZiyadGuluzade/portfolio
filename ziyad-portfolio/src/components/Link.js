import React from 'react';

class Link extends React.Component {
    render() {
        
        const link = this.props.linkName;

        return(
            <React.Fragment>
                <a href='#' style={{margin: '20px'}}>{link}</a>
            </React.Fragment>
        )
    }
}

export default Link;