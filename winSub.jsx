import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const videos = [
    "https://www.youtube.com/embed/cp5aCt_pGyk",
    "https://www.youtube.com/embed/65IfBn_uq-w",
    "https://www.youtube.com/embed/QSVcRbNPrbw",
    "https://www.youtube.com/embed/6Jfk1hZCIr4",
    "https://www.youtube.com/embed/PruRq94Klck",
    "https://www.youtube.com/embed/My5EidGQTFg",
    "https://www.youtube.com/embed/49RrFAX6BHY",
];

const max = 7;
let rand = Math.floor(Math.random() * (max + 1));

class Win extends Component {
    state = {  } 
    render() { 
        return (
        <div className='main-bg-sub-win main-bg-allx'>
            <div className='still still-sub still-sized'>
                <h1 className="win-head">Congratulations!</h1>
                <h2 className="win-head2">You are a hero in subtracting two numbers</h2>
                <h2 className='win-head2'>Enjoy your prize! You deserve it.</h2>
                <div className="prize">
                    <iframe
                        className="video"
                        src={videos[rand]}
                        frameborder="0"
                        allow="autoplay; encrypted-media; fullscreen;"
                        title="video"
                    />
                </div>
                <button className="btn-tg" onClick={() => window.location.reload()}>Wanna Try Again?</button>
                <h2>Also consider doing other tests.</h2>
                <table>
                    <thead>
                    <tr>
                        <td>
                            <li className="circle circle-win addc winAdd-btn-margin">
                                <Link to="/add" style={{ color: 'rgb(45, 45, 45)' }}><FontAwesomeIcon icon={faPlus} size="2x"/></Link>
                            </li>
                        </td>
                        <td>
                            <li className="circle circle-win multc winAdd-btn-margin">
                                <Link to="/mult" style={{ color: 'rgb(45, 45, 45)' }}><FontAwesomeIcon icon={faXmark} size="2x"/></Link>
                            </li>
                        </td>
                    </tr>
                    </thead>
                </table>
            </div>
            <a className="ref" style={{top: "130%"}} href='https://www.freepik.com/vectors/neon-city'>Neon city vector created by vectorpocket - www.freepik.com</a>
        </div>
        );
    }
}
 
export default Win;