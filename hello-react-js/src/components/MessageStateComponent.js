import React, {Component} from 'react'

class MessageStateComponent extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Subscribe to NewsLetter'
        }
    }

    changeMessage = () =>{

        this.setState({
            message: 'Thank You'
        })

    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {this.changeMessage}>Subscribe</button>
            </div>
        )
    }

}

export default MessageStateComponent