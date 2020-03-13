import React from 'react';
import './card.css';
import Img from '../img/Img';
// import Tag from '../tag/Tag';


class Card extends React.Component {
    render() {
        const name = this.props.name;
        const project = this.props.button1;
        const github = this.props.button2;
        const imgSrc = this.props.src;
        const technologies = this.props.technologies;
        return(
            <React.Fragment> 
                <div className='box project-card'>
                    <div className='columns'>
                        <div className='column is-one-third'>
                            <Img src={imgSrc}/>
                        </div>
                        <div className='column auto'>
                            <h3 className='subtitle is-4'>{name}</h3>
                            <h6 className='subtitle is-5'>Overview: </h6>
                            <div className='tags'>
                                <h6 className='subtitle is-5'>Built with:</h6>
                                <p className='tech-list'>{technologies}</p>
                                
                            </div>
                            <button type='button' className='project-btn button'><span><i class="fas fa-link"></i></span><span>{project}</span></button>
                            <button type='button' className='github-btn button'><span><i class="fab fa-github"></i></span><span>{github}</span></button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Card;