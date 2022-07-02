import React, { Component } from 'react';
import Add from "./components/add"
import Footer from './components/footer';

class AddR extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Add />
            <Footer />
        </div>);
    }
}
 
export default AddR;