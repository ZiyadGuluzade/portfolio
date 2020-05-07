import React from 'react';
import './card.css';
import Img from '../img/Img';

class Card extends React.Component {
    render() {
        const name = this.props.name;
        const description = this.props.description;
        const imgSrc = this.props.src;
        const projectLink = this.props.projectLink;
        const githubLink = this.props.githubLink;
        const target = this.props.target;
        return(
            <React.Fragment>
                <div className='column project-column'>
                    <div className='project-card is-12-mobile is-half-tablet is-one-third-desktop'>
                        <div className='img-div'>
                            <Img src={imgSrc}/>
                            <div className='overlay'> 
                                <div className='card-info'>
                                    <p className='description'>{description}</p>
                                    <a href={githubLink} className='github-link' target={target}>Github <i className="fab fa-github"></i></a>
                                    <a href={projectLink} className='demo-link' target={target}>Demo <i className="fas fa-chevron-right"></i></a>
                                </div>
                            </div>   
                        </div>
                    </div>

                    <p className='name'>{name}</p>
                </div>   
            </React.Fragment>
        ) 
    }
}

export default Card;