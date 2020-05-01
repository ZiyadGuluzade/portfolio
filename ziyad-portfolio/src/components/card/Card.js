import React from 'react';
import './card.css';
import Img from '../img/Img';
import Rellax from 'rellax';


class Card extends React.Component {
    componentDidMount() {
        this.rellax = new Rellax('.rellax');
    }
    render() {
        const name = this.props.name;
        const project = this.props.button1;
        const github = this.props.button2;
        const imgSrc = this.props.src;
        const projectLink = this.props.projectLink;
        const githubLink = this.props.githubLink;
        const target = this.props.target;
        return(
            <React.Fragment> 
                <div className='project-card is-12-mobile is-half-tablet is-one-third-desktop'>
                    <div className='img-column'>
                        <Img src={imgSrc}/>
                    </div>
                    <div className='description-column has-text-centered'>
                        <h3 className='subtitle is-5 name'>{name}</h3>
                        <a href={projectLink} target={target}>
                            <button type='button' className='project-btn button'><span><i className="fas fa-link"></i></span><span>{project}</span></button>
                        </a>
                        <a href={githubLink} target={target}>
                            <button type='button' className='github-btn button'><span><i className="fab fa-github"></i></span><span>{github}</span></button>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Card;