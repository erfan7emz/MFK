import React, { Component } from 'react';
import Sub from "./components/sub"
import Footer from './components/footer';

class SubR extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Sub />
            <Footer />
        </div>);
    }
}
 
export default SubR;