import React from 'react';
import Card from '../card/Card';
import Hr from '../hr/Hr';
import Rellax from 'rellax';
import './projects.css';

class Projects extends React.Component {
    componentDidMount() {
        this.rellax = new Rellax('.rellax');
    }

    render() {
        return(
            <React.Fragment>
                <section id='projects' className='container-fluid'>
                    <div className='subtitle-box'>
                        <h3 className='subtitle is-3 has-text-centered'>PORTFOLIO</h3>
                        <Hr />
                    </div>
                    <div className='block'>
                        <div className='columns is-desktop project-columns'>

                            <div className='column project-column'>
                                <Card name='Crystal Collector' button1='Demo' button2='Github'  projectLink='https://ziyadguluzade.github.io/crystal-collector/' githubLink='https://github.com/ZiyadGuluzade/crystal-collector' target='_blank' src={require('../../images/projects/amatista.jpg')} technologies='HTML5, CSS3, Javascript, jQuery'/>
                            </div>
                            <div className='column project-column'>
                                <Card name='Crystal Collector' button1='Demo' button2='Github'  projectLink='https://ziyadguluzade.github.io/crystal-collector/' githubLink='https://github.com/ZiyadGuluzade/crystal-collector' target='_blank' src={require('../../images/projects/amatista.jpg')} technologies='HTML5, CSS3, Javascript, jQuery'/>
                            </div>
                            <div className='column project-column'>
                                <Card name='Personal Expense Tracker' button1='Demo' button2='Github' src={require('../../images/projects/expense_tracker_app.jpg')} technologies='React, Javascript, Materialize.CSS, CSS3'/>
                            </div>

                        </div>
                        <div className='columns is-desktop project-columns'>
                            <div className='column project-column'>
                                <Card name='Google Books App ' button1='Demo' button2='Github'  projectLink='https://zguluzade-google-book-search.herokuapp.com/' githubLink='https://github.com/ZiyadGuluzade/google-books-app' target='_blank'  src={require('../../images/projects/google_books_app.jpg')} technologies='React, Javascript, Node, Express, Mongo DB, CSS3'/>
                            </div>
                            <div className='column project-column'>
                                <Card name='Jeopardy Game' button1='Demo' button2='Github' projectLink='https://jeopardy-tribute.herokuapp.com/' githubLink='https://github.com/kmajor1/jeopardy' target='_blank' src={require('../../images/projects/jeopardy-game.jpeg')} technologies='React, Javascript, MongoDB, Node, Express, CSS3' />
                            </div>
                            <div className='column project-column'>
                                <Card name='Memory Cards Game' button1='Demo' button2='Github' src={require('../../images/projects/memory_cards_game.jpg')}/>
                            </div>
                        </div>   
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Projects;