import React from 'react';
import Hr from '../hr/Hr';
import Rellax from 'rellax';
import './aboutme.css';

class Aboutme extends React.Component {
    componentDidMount() {
        this.rellax = new Rellax('.rellax');
    }

    render() {
        return(
            <React.Fragment>
                <section id='about' className='section subtitle is-4'>
                    <div className='about block'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle has-text-centered is-2 rellax' 
                            data-rellax-speed='1'
                            id='about-subtitle'>WHO IS THIS GUY ?</h2>
                            <div className='rellax' data-rellax-speed='1'>
                                <Hr />
                            </div>
                        </div>
                        <p className='about-text content is-large rellax' data-rellax-speed='1'>Hi, I am Ziyad.<br></br>I am Full Stack Web Developer with a background in Hotel Business, based in Toronto ON, Canada.
                        The complexity and endless varieties of opportunities of this industry attract and make me passionate about technology. Self-development and desire to learn are the main forces pushing me forward into the field and helping me to attain my highest goals. <br></br>
                        Please contact me if you would like to work on a project together or just want to have a friendly chat.</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Aboutme;