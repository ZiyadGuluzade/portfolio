import React from 'react';
import './card.css';
import Img from '../img/Img';


class Card extends React.Component {
    render() {
        const name = this.props.name;
        const button = this.props.button;
        const imgSrc = this.props.src;
        return(
            <React.Fragment> 
                <div className='box project-card'>
                    <div className='columns'>
                        <div className='column is-one-third'>
                            <Img src={imgSrc}/>
                        </div>
                        <div className='column auto'>
                            <h3 className='subtitle is-4'>{name}</h3>
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