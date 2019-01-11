import React, {Component} from 'react';
import './style.css';

/**** Img ****/
import HomeImg from "../../../Static/img/header/home.png";
import TaskImg from "../../../Static/img/header/task.svg";
import ShopImg from "../../../Static/img/header/shop.png";
import NewsImg from "../../../Static/img/header/news.svg";
import WeatherImg from "../../../Static/img/header/weather.png";

import SearchImg from "../../../Static/img/header/search.png";
import NotificationImg from "../../../Static/img/header/notification.png";
import UserIconImg from "../../../Static/img/header/user_icon.png";
import ArrowImg from "../../../Static/img/header/arrow_icon.png";

export default class Header extends Component{
    render(){
        return(
            <div>
                <header className="align_center">
                    <a href="#/" className="vasenkin">Test</a>
                    <div className="header_panel align_center">
                        <div>
                            <img src={SearchImg} alt="search" id="search"/>
                            <div id="notification">
                                <img src={NotificationImg} alt="notification"/>
                                <div className="ball"></div>
                            </div>
                        </div>
                        <div id="user_panel">
                            <img src={UserIconImg} alt="user_icon" id="user_icon"/>
                            <img src={ArrowImg} alt="arrow" id="arrow_icon"/>
                        </div>
                    </div>
                </header>
                <nav>
                    <a href="#/"><img src={HomeImg} alt="home"/></a>
                    <a href="#/products"><img src={TaskImg} alt="home"/></a>
                    <a href="#/shop"><img src={ShopImg} alt="home"/></a>
                    <a href="#/news"><img src={NewsImg} alt="home"/></a>
                    <a href="#/weather"><img src={WeatherImg} alt="home"/></a>
                </nav>
            </div>

        )
    }
}