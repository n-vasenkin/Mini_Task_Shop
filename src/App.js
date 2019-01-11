import React, {Component} from 'react';
import './Static/css/index.css';

import Header from './Components/Static_Components/Header/';
import Profile from './Components/Profile/';
import Task from './Components/Products/';
import Shop from './Components/Shop/';
import News from './Components/News/';
import Weather from './Components/Weather/';

/**** Route ****/
import {Route,HashRouter} from 'react-router-dom';
export default class App extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Profile}/>
                    <Route path="/products" component={Task}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/news" component={News}/>
                    <Route path="/weather" component={Weather}/>
                </div>
            </HashRouter>
        )
    }
}