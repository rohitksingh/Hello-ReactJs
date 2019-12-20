import React, {Component} from 'react'

class MessageStateComponent extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Hit subscribe button'
        }
    }

    render(){
        return <h1>{this.state.message}</h1>
    }

}

export default MessageStateComponent;