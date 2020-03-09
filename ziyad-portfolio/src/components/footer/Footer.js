import React from 'react';
import './footer.css';


class Footer extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className='footer has-text-centered'>
                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="80" id="bulma" height="15" />
                    <div className='content has-text-centered subtitle is-4' id='footer-title'>Copyright 2020 <i className='fa fa-copyright'></i> - Ziyad Guluzade</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;