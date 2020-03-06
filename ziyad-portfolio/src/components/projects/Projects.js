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
                        <Card number={1} name='Name 1' button='Project'/>
                        <Card number={2} name='Name 2' button='Project'/>
                        <Card number={3} name='Name 3' button='Project'/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Projects;