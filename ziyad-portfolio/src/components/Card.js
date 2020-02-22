import React from 'react';

class Card extends React.Component {
    render() {
        const number = this.props.number;
        const name = this.props.name;
        const button = this.props.button;
        return(
            <React.Fragment>
                <div className='project-card'>
                    <h3>Project {number}</h3>
                    <h4>{name}</h4>
                    <p>Description</p>
                    <button type='button'>{button}</button>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Card;