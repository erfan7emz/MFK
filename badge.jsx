import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

class Badge extends Component {
    state = {  } 
    render() { 
        return (<div className='badge'><Link to="/" style={{ color: 'rgb(45, 45, 45)' }}><FontAwesomeIcon icon={faHouse} size="2x"/></Link></div>);
    }
}
 
export default Badge;