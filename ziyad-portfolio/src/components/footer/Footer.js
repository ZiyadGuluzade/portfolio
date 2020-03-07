import React from 'react';
import './footer.css';


class Footer extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='footer has-text-centered'>
                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" id="bulma" height="24" />
                    <div className='content has-text-centered subtitle is-4' id='footer-title'>Copyright 2020 <i className='fa fa-copyright'></i> Ziyad Guluzade | All Right Reserved</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;