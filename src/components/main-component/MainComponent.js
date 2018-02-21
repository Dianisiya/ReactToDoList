import React from 'react'
import ComentsWithNoSense from '../comments-with-no-sense/CommentWithNoSense'
import ToDoListContainer from '../to-do-list-container/ToDoListContainer'
import CommentsList from '../comments-list/CommentsList'
import './MainComponent.css'

import MessagesService from '../../helpers/MessagesService'

class MainComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            number: 1
        }

        this.messages = new MessagesService();

        this.openComments = this.openComments.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        this.render();
    }

    openComments(number){
        console.log(number)
        this.setState({
            number
        });
    }

    render(){
        return (
            <div className="main-component">
                <ComentsWithNoSense />
                <ToDoListContainer messages={this.messages} openComments={this.openComments} />
                <CommentsList messages={this.messages} number={this.state.number}/>
            </div>
        )
    }
}

export default MainComponent 