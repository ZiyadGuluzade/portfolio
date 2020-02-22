import React from 'react';

class Link extends React.Component {
    render() {
        return(
            <React.Fragment>
              <a href='#'>{this.props.name}</a>  
            </React.Fragment>
        )
    }
}

export default Link;