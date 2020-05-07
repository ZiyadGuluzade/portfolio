import React from 'react';
import Card from '../card/Card';
import Hr from '../hr/Hr';
import './projects.css';

class Projects extends React.Component {

    state ={

    }

    render() {
        return(
            <React.Fragment>
                <section id='projects' className='container-fluid'>
                    <div className='subtitle-box'>
                        <h3 className='subtitle is-3 has-text-centered' id='portfolio'>PORTFOLIO</h3>
                        <Hr />
                    </div>

                    <div className='block'>
                        <div className='columns is-desktop project-columns'>
                            <Card name='Crystal Collector' projectLink='https://ziyadguluzade.github.io/crystal-collector/' githubLink='https://github.com/ZiyadGuluzade/crystal-collector' target='_blank' src={require('../../images/projects/crystall_collector.jpg')} description='A simple game where the goal is to hit the target number '/>

                            <Card name='Rock Paper Scissors' projectLink='https://ziyadguluzade.github.io/rock-paper-scissors/' githubLink='https://github.com/ZiyadGuluzade/rock-paper-scissors.git' target='_blank' src={require('../../images/projects/rock_paper_scissors.png')} description='A perfect time killer classic'/>
                        
                            <Card name='ATP Tennis Cards' projectLink='https://ziyadguluzade.github.io/atptennis/' githubLink='https://github.com/ZiyadGuluzade/atptennis.git' target='_blank' src={require('../../images/projects/atp_tour_logo.jpg')} description='A memory cards game for tennis fans' /> 
                        </div>

                        <div className='columns is-desktop project-columns'>
                            <Card name='Google Books' projectLink='https://zguluzade-google-book-search.herokuapp.com/' githubLink='https://github.com/ZiyadGuluzade/google-books-app' target='_blank'  src={require('../../images/projects/google_books_app.jpg')} description='An application that  finds/ saves books for later purchase'/>
                            
                            <Card name='Jeopardy Game' projectLink='https://jeopardy-tribute.herokuapp.com/' githubLink='https://github.com/kmajor1/jeopardy' target='_blank' src={require('../../images/projects/jeopardy-game.jpeg')} description='A tribute to the world famous Jeopary Game TV show' />

                            <Card name='Password generator' projectLink='https://ziyadguluzade.github.io/generatepassword/' githubLink='https://github.com/ZiyadGuluzade/generatepassword.git' target='_blank' src={require('../../images/projects/password_generator.jpg')} description='A website with the purpose to generate solid passwords'/>
                        </div>   
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Projects;