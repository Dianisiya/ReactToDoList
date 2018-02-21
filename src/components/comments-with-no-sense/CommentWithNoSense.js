import React from 'react'
import KetPressListener from '../../helpers/KeyPressListener'
import './CommentWithNoSense.css'

class ComentsWithNoSense extends React.Component {
    constructor(props) {
        super(props)

        if (!localStorage.getItem('commentsWNS')){
            localStorage.setItem('commentsWNS','[]');
        }

        this.state = {
            comments: JSON.parse(localStorage.getItem('commentsWNS')),
            add: false
        }

        this.getComments = this.getComments.bind(this);
        this.addComment = this.addComment.bind(this);
        this.openAddComponent = this.openAddComponent.bind(this);

        KetPressListener(this.openAddComponent);
    }

    openAddComponent(){
        this.setState({
            add: true
        })
    }

    addComment(event){
        if (event.key === 'Enter'){
            const comments = this.state.comments;
            comments.push(event.target.value);
            this.setState({
                comments,
                add: false
            });
            localStorage.setItem('commentsWNS', JSON.stringify(comments));
        }
    }

    getComments() {
        return this.state.comments.map((comment, index) => (
            <div key={index.toString()}>{comment}</div>
        ));
    }

    render(){
        const addComponent = this.state.add && (
            <div className="add-comment">
                <input className="add-c" placeholder="Any comment..." type="text" onKeyUp={event =>this.addComment(event)}/>
            </div>
        );
        return ( 
        <div className="comment-with-no-sense-container">
            <div>
                <p className="name-app">DAIRY APP</p>
                <p className="name-comment">Comment with no sense</p>
            </div>
            <div className="comments-with-no-sense">
                {this.getComments()}
            </div>
            {addComponent}
        </div>
        )
    }
}

export default ComentsWithNoSense;