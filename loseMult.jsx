import React, { Component } from 'react'

class Lose extends Component {
    state = {  } 
    render() { 
        return (
            <div className='main-bg-mult-lose main-bg-allx'>
                <div className='still still-mult'>
                    <h1 className="win-head">Try watching this video before continuing the practice test again!</h1>
                    <div className="prize">
                        <iframe
                            className="video"
                            src="https://www.youtube.com/embed/eW2dRLyoyds"
                            frameborder="0"
                            allow="autoplay; encrypted-media fullscreen;"
                            title="video"
                        />
                    </div>
                    <button className="btn-tg btn-tg-lose" onClick={() => window.location.reload()}>Try Again</button>
                </div>
                <a className="ref" style={{top: "130%"}} href='https://www.freepik.com/vectors/platform-game'>Platform game vector created by upklyak - www.freepik.com</a>
            </div>
        );
    }
}
 
export default Lose;