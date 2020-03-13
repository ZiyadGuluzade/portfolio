import React from 'react';
import './tag.css';

class Tag extends React.Component {
    render() {
        const name = this.props.name;
        const color = this.props.color;
        return(
            <React.Fragment>
                <p className={`tagname ${color}`}>{name}</p>
            </React.Fragment>
        )
    }
}

export default Tag;
