import React from 'react';
import Card from '../card/Card';

class Projects extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='projects' className='is-primary'>
                    <h2>Projects Component</h2>
                    <div className='tile is-ancestor'>
                        <Card number={1} name='Name 1' button='Project'/>
                        <Card number={2} name='Name 2' button='Project'/>
                        <Card number={3} name='Name 3' button='Project'/>
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