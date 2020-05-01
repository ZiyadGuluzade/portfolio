import React from 'react';
import './img.css';


class Img extends React.Component {
    render() {
        const src = this.props.src;
        return(
            <React.Fragment>
                <figure className='image is-5by3'>
                    <img src={src} alt='project' className='project-image'></img>
                </figure>
            </React.Fragment>
        )
    }
}

export default Img;