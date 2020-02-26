import React from 'react';
import './link.css';

class Link extends React.Component {
    render() {
        
        return(
            <React.Fragment>
                <a className="button navbar-item tablet">
                    {this.props.name}
                </a>
            </React.Fragment>
        )
    }
}

export default Link;