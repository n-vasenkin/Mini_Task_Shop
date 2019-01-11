import React, { Component } from 'react';
import IconImg from '../../Static/img/news/icon.png';

class Content extends Component{

    render(){
        return(
            <div className="content_box">
                <div className="author_box">
                    <img src={IconImg} alt="icon" className="author_icon"/>
                        <p className="author_name">{this.props.author_name}</p>
                        <p className="author_surname">{this.props.author_surname}</p>
                </div>
                <div className="text_box">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }

}

export default Content;
