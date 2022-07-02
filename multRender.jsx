import React, { Component } from 'react';
import Mult from "./components/mult"
import Footer from './components/footer';

class MultR extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Mult />
            <Footer />
        </div>);
    }
}
 
export default MultR;