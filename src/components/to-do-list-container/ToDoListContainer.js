import React from 'react'
import Item from '../item/Item'
import './ToDoListContainer.css'

class ToDoListContainer extends React.Component{
    constructor(props){
        super(props)

        if (!localStorage.getItem("items"))
            localStorage.setItem("items",'[]');

        this.state = {
            items: JSON.parse(localStorage.getItem("items"))
        }
        this.selectedItemNumber = 0;

        props.messages.addListener(message =>{
            if (message.action === 'NEW_COMMENT'){
                this.forceUpdate();
            }
        });

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.openComments = this.openComments.bind(this);
    }

    getItems(){
        return this.state.items.map((item, index) => <Item
            number={index} 
            delete={this.deleteItem} 
            key={index.toString()} 
            name={item.name}
            selected={this.selectedItemNumber === index}
            click={() => this.openComments(index)}
         />);
    }

    openComments(index){
        this.selectedItemNumber = index;
        this.props.openComments(index + 1);
    }

    deleteItem(number){
        const items = this.state.items.filter((item, index) => index !== number);
        localStorage.setItem("items", JSON.stringify(items));
        localStorage.setItem('comments' + (number + 1), '');
        this.setState({items});
    }

    addItem(){
        if (!this.input) return;
        const newItems = this.state.items;
        newItems.push({
            name: this.input.value,
            count: 0,
        });
        localStorage.setItem("items", JSON.stringify(newItems));
        this.setState({items: newItems});
    }

    render(){
        return (
            <div className="to-do-list-container">
                <div>
                    <p className="name-items">Items</p>
                </div>
                <div className="item">
                    <input ref={el => this.input = el} type="text" placeholder="Type name here..." className="name-comment-in-to-do"></input>
                    <button className="add-new" onClick={this.addItem}>Add new</button>
                </div>
                <div className="items">
                    {this.getItems()}
                </div>
            </div>

        )
    }
} 

export default ToDoListContainer