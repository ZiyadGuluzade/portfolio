import React from 'react';
import './link.css';

class Link extends React.Component {
    render() {
        const name = this.props.name;
        const href = this.props.href;
        return(
            <React.Fragment>
                <a className="button navbar-item tablet" href={href}>
                    {name}
                </a>
            </React.Fragment>
        )
    }
}

export default Link;