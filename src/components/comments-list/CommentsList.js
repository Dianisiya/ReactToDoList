import React from 'react'
import Comment from '../comment/Comment'
import './CommentsList.css'

class CommentsList extends React.Component{
    constructor(props){
        super(props);

        this.getComments = this.getComments.bind(this);

        if (!localStorage.getItem('comments' + this.props.number))
            localStorage.setItem('comments' + this.props.number, '[]');

        this.state = {
            comments: JSON.parse(localStorage.getItem('comments' + this.props.number))
        };

        this.addComment = this.addComment.bind(this);
    }
    getComments(){
        return this.state.comments.map((item, index) => <Comment key={index.toString()} comment={item}></Comment>);
    }

    addComment(event){
        if(event.key == "Enter"){
           const comments = JSON.parse(localStorage.getItem('comments' + this.props.number));
           comments.push(event.target.value)
           this.props.messages.pushMessage({action: 'NEW_COMMENT'});
           localStorage.setItem('comments' + this.props.number, JSON.stringify(comments));
           this.setState({comments});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!localStorage.getItem('comments' + nextProps.number))
            localStorage.setItem('comments' + nextProps.number, '[]');
        this.setState ({
            comments: JSON.parse(localStorage.getItem('comments' + nextProps.number))
        })
      }

    render(){
        return(
            <div className="comments-container">
                <div>
                    <p className="comments">Comments #{this.props.number}</p>
                </div>
                <div>
                    {this.getComments()}
                </div> 
                <div className="new-coment">
                    <div className="neutral-avatar"></div>
                    <input type="text" onKeyUp={this.addComment} className="input-comment"></input>
                </div>
            </div>
        )
    }
}

export default CommentsList