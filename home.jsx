import React, { Component } from 'react';
import Main from "./components/main"
import Footer from "./components/footer"

class Home extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Main />
            <Footer />
        </div>);
    }
}
 
export default Home;