import React from 'react'
import './Comment.css'

class Comment extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="avatar"></div>
                <p className="comment">{this.props.comment}</p>
            </div>
        )
    }
}

export default Comment