import React from 'react';
import Card from '../card/Card';
import './projects.css';

class Projects extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='projects' className='container-fluid'>
                    <h2 className='subtitle is-2 has-text-centered'>PROJECTS</h2>
                    <div className='block'>
                        <Card name='Book Project' button='Project' src={require('../../images/projects/book-pages.jpg')} />
                        <Card name='Jeopardy Game' button='Project' src={require('../../images/projects/jeopardy-game.jpeg')}/>
                        <Card name='Rocks' button='Project'src={require('../../images/projects/amatista.jpg')}/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Projects;