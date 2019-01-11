import React, { Component } from 'react';
import Comments from './Comments';
import Content from './Content';
import "./style.css"

export default class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [
                {
                    show: true,
                    title: "Название новости",
                    author_name: "Имя автора",
                    text: "Текст, который будет виден пользователю в новостном блоке.",
                    likes: 1,
                    comments: [
                        {name: "Имя комментатора", comment: "Сам комментарий"}
                    ]
                },
                {
                    show: true,
                    title: "Внимание!",
                    author_name: "Nikolay Vasenkin",
                    text: "Товарищи! консультация проводиться под присмотром кого-то",
                    likes: 1,
                    comments: [
                        {name: "Heater", comment: "The best information!"}
                    ]
                },
            ],
        };
        this.showNews = this.showNews.bind(this);
    }

    showNews(index){
        let new_arr = [...this.state.news];
        new_arr[index].show = !new_arr[index].show;
        this.setState({news: new_arr})
    }

    componentWillMount(){document.title="News"}
    render(){
        return (
            <main>
                {this.state.news.map((item,index) => {
                    return(
                        <div className="news" key={index}>
                            <div className="setting_panel">
                                <h3>{item.title.toUpperCase()}</h3>
                                <button onClick={() => this.showNews(index)}>{item.show ? "Скрыть" : "Показать"}</button>
                            </div>
                            {item.show &&
                            <div>
                                <Content author_name={item.author_name} author_surname={item.author_surname} text={item.text}/>
                                <Comments likes={item.likes} comments={item.comments}/>
                            </div>
                            }
                        </div>
                    )
                })}
            </main>
        )
    }
}
