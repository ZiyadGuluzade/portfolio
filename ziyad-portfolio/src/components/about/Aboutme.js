import React from 'react';
import './aboutme.css';

class Aboutme extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section id='about' className='section subtitle is-4'>
                    <div className='about'>
                        <h2 className='subtitle has-text-centered is-2' id='about-subtitle'>A BIT ABOUT ME</h2>
                        <p className='about-text'>Hi, I am Ziyad.<br></br>I am Full Stack Web Developer with a background in Hotel Business, based in Toronto ON, Canada. responsive and well-designed web applications. That is what I do. That is what I am all about.
                        Throughout my education in University of Toronto, I have developed such skills as problem solving, working well under pressure, critical thinking, and collaborating with teams. Gaining experience in such a sensitive and dynamic workspace helped me to step up and chase my dream of being a developer. Mastering technologies like Javascript, Node.js and React.js helped me to truly understand core base of development. The complexity and endless varieties of opportunities of this industry attract and make me passionate about technology. Self-development and desire to learn are the main forces pushing me forward into the field and helping me to attain my highest goals.</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Aboutme;