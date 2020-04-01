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
        const technologies = this.props.technologies;
        const projectLink = this.props.projectLink;
        const githubLink = this.props.githubLink;
        const target = this.props.target;
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
                            {/* project link */}
                            <a href={projectLink} target={target}>
                                <button type='button' className='project-btn button'><span><i class="fas fa-link"></i></span><span>{project}</span></button>
                            </a>
                            {/* github  link */}
                            <a href={githubLink} target={target}>
                                <button type='button' className='github-btn button'><span><i class="fab fa-github"></i></span><span>{github}</span></button>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Card;