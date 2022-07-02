import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Animation} from 'react-animate-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faMinus} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

class Main extends Component {
    render() {
        return (
        <div className='main-bg main-bg-all'>
            <div className="container">
                <Animation animationIn="heartBeat" animationInDuration="900" isVisible="true">
                    <div className="head-txt">Let's calculate!</div>
                </Animation>
                    <ul>
                        <Animation animationIn="fadeInLeft" animationInDelay="500" isVisible="true">
                            <li className="add">
                                <Link to="/add">Addition</Link>
                            </li>
                        </Animation>
                        <Animation animationIn="fadeInRight" animationInDelay="1000" isVisible="true">
                            <li className="sub">
                                <Link to="/sub">Subtraction</Link>
                            </li>
                        </Animation>
                        <Animation animationIn="fadeInLeft" animationInDelay="1500" isVisible="true">
                            <li className="mult">
                                <Link to="/mult">Multiplication</Link>
                            </li>
                        </Animation>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <Animation animationIn="fadeInUp" animationInDelay="2000" isVisible="true">
                                            <li className="circle addc">
                                                <Link to="/add"><FontAwesomeIcon icon={faPlus}/></Link>
                                            </li>
                                        </Animation>
                                    </td>
                                    <td>
                                        <Animation animationIn="fadeInUp" animationInDelay="2500" isVisible="true">
                                            <li className="circle subc">
                                                    <Link to="/sub"><FontAwesomeIcon icon={faMinus}/></Link>
                                            </li>
                                        </Animation>
                                    </td>
                                    <td>
                                        <Animation animationIn="fadeInUp" animationInDelay="3000" isVisible="true">
                                            <li className="circle multc">
                                                    <Link to="/mult"><FontAwesomeIcon icon={faXmark}/></Link>
                                            </li>
                                        </Animation>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Main;
