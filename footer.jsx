import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

class Footer extends Component {
    render() {
      return (
        <>
          <div className="footer">
            <p>
              <FontAwesomeIcon icon={faCopyright}/> 2022 By Erfan Saraj
            </p>
          </div>
        </>
      );
    }
}

export default Footer;