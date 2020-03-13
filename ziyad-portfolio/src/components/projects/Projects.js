import React from 'react';
import Card from '../card/Card';
import Hr from '../hr/Hr';
import './projects.css';

class Projects extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='projects' className='container-fluid'>
                    <div className='subtitle-box'>
                        <h2 className='subtitle is-2 has-text-centered'>PORTFOLIO</h2>
                        <Hr />
                    </div>
                    <div className='block'>
                        <Card name='Azerbaijani Canadian Multiculturtal Center' button1='Project' button2='Github' src={require('../../images/projects/acmc.jpg')} technologies='WordPress'/>
                        <Card name='Jeopardy Game' button1='Project' button2='Github' src={require('../../images/projects/jeopardy-game.jpeg')} technologies='React, Javascript, MongoDB, Node, Express, CSS3' />
                        <Card name='Crystal Collector' button1='Project' button2='Github' src={require('../../images/projects/amatista.jpg')} technologies='HTML5, CSS3, Javascript, jQuery'/>
                        <Card name='Personal Expense Tracker' button1='Project' button2='Github' src={require('../../images/projects/expense_tracker_app.jpg')} technologies='React, Javascript, Node, Express, Mongo DB, CSS3'/>
                        <Card name='Google Books App ' button1='Project' button2='Github' src={require('../../images/projects/google_books_app.jpg')} technologies='React, Javascript, Node, Express, Mongo DB, CSS3'/>
                        <Card name='Memory Cards Game' button1='Project' button2='Github' src={require('../../images/projects/memory_cards_game.jpg')}/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Projects;