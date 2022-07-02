import React, { Component } from 'react';
import Home from './home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddR from './addRender';
import SubR from './subRender';
import MultR from './multRender';
import ErrorPage from './errorPage';
import Badge from './components/badge';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <Router>
                <Badge />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/add' element={<AddR />}></Route>
                    <Route path='/sub' element={<SubR/>}></Route>
                    <Route path='/mult' element={<MultR/>}></Route>
                    <Route path='*' element={<ErrorPage />}></Route>
                </Routes>
            </Router>
        );
    }
}
 
export default App;