import React, { Component } from 'react';
import LikeImg from '../../Static/img/news/thumbs-up.svg';

class Comments extends Component{

    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
            array_comments: this.props.comments,
            comment: "",
        };
        this.addCommit = this.addCommit.bind(this);
    }

    addCommit(){
        if(this.state.comment === "") return;
        let new_comment = {name: "You", comment: this.state.comment};
        this.state.array_comments.push(new_comment);
        this.setState({
            array_comments: this.state.array_comments,
            comment: ""
        })
    }

    handleKeyEnter(event){
        if(event.charCode === 13){
            this.addCommit();
            event.preventDefault();
        }
    }

    render(){

        const _comments_list = this.state.array_comments.map((item,index) => {
            return (
                <div className="comment" key={index}>
                    <p>- <b>{item.name}: </b>{item.comment}</p>
                </div>
            )
        });

        return(
            <div>
                <div className="like_box">
                    <img src={LikeImg}
                         alt="plus"
                         className="plus"
                         onClick={() => this.setState({likes: this.state.likes + 1})}/>
                    <p className="likes">Лайков: <i> {this.state.likes}</i></p>
                </div>
                <div className="comments_box">
                    <h1>Отзывы: <i>{this.state.array_comments.length}</i></h1>
                    {_comments_list}
                </div>
                <div className="your_comments_box">
                    <h1>Ваш комментарий:</h1>
                    <textarea
                        value={this.state.comment}
                        onChange={(event) => {this.setState({comment: event.target.value})}}
                        onKeyPress={this.handleKeyEnter.bind(this)}
                    />
                    <button className="add_comment" onClick={this.addCommit}>Отправить</button>
                </div>
            </div>
        )
    }
}

export default Comments;
