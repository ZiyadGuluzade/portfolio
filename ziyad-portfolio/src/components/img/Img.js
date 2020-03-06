import React from 'react';
import './img.css';


class Img extends React.Component {
    render() {
        return(
            <React.Fragment>
                <figure className='image is-600x480'>
                    <img src='' alt='pic-1'></img>
                </figure>
            </React.Fragment>
        )
    }
}

export default Img;