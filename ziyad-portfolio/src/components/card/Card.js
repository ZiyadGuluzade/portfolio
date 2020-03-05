import React from 'react';
import './card.css';

class Card extends React.Component {
    render() {
        const number = this.props.number;
        const name = this.props.name;
        const button = this.props.button;
        return(
            <React.Fragment>   
                <div className='project-card tile is-4'>
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