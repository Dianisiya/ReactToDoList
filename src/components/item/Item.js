import React from 'react'
import './Item.css'
import classNames from 'classnames'

class Item extends React.Component{
    render(){
        if (!localStorage.getItem('comments' + (this.props.number + 1))) {
            localStorage.setItem('comments' + (this.props.number + 1), '[]');
        }
        return(
            <div className={classNames(["one-item", {'selected': this.props.selected}])} onClick={this.props.click}>
                <div className="name">
                  {this.props.name}  
                  <div className="count">
                    {JSON.parse(localStorage.getItem('comments' + (this.props.number + 1))).length}
                  </div>
                </div>
                <button className="delete" onClick={() => this.props.delete(this.props.number)}>Delete</button>
            </div>
        )
    }
}

export default Item