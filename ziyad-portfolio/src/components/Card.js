import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='project-card'>
                    <h3>Project {this.props.number}</h3>
                    <figure>
                        <img href="#" alt=''/>
                    </figure>
                </div>
            </React.Fragment>
        ) 
    }
}

export default Card;