import React from 'react';
import Card from './Card';

class Projects extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h2>Projects Component</h2>
                <Card number={1} name='Name 1' button='Project'/>
                <Card number={2} name='Name 2' button='Project'/>
                <Card number={3} name='Name 3' button='Project'/>
            </React.Fragment>
        )
    }
}

export default Projects;