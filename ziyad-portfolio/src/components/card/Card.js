import React from 'react';
import './card.css';
import Img from '../img/Img';


class Card extends React.Component {
    render() {
        const name = this.props.name;
        const project = this.props.button1;
        const github = this.props.button2;
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
                            <h6 className='subtitle is-5'>Description</h6>
                            <h6 className='subtitle is-5'>Technology Used</h6>
                            <button type='button'>{project}</button>
                            <button type='button'>{github}</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Card;