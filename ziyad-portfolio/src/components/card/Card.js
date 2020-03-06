import React from 'react';
import './card.css';
import Img from '../img/Img';

class Card extends React.Component {
    render() {
        const number = this.props.number;
        const name = this.props.name;
        const button = this.props.button;
        return(
            <React.Fragment> 
                <div className='box project-card'>
                    <div className='columns'>
                        <div className='column is-one-third'>
                            <Img />
                        </div>
                        <div className='column auto'>
                            <h3>Project {number}</h3>
                            <h4>{name}</h4>
                            <p>Description</p>
                            <button type='button'>{button}</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Card;