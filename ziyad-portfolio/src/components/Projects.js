import React from 'react';
import Card from './Card';

class Projects extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h2>Projects Component</h2>
                <Card number={1} />
                <Card number={2} />
                <Card number={3} />
            </React.Fragment>
        )
    }
}

export default Projects;