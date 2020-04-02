import React from 'react';
import './link.css';

class Link extends React.Component {
    render() {
        const name = this.props.name;
        const href = this.props.href;
        const target = this.props.target;
        return(
            <React.Fragment>
                <a className="button navbar-item tablet" href={href} target={target}>
                    {name}
                </a>
            </React.Fragment>
        )
    }
}

export default Link;