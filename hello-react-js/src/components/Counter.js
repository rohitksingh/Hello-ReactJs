import React, {Component} from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    incrementCounter = () =>{

        this.setState({
            counter: this.state.counter + 1
        }, () => {console.log('Callback Value', this.state.counter)})
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick = {this.incrementCounter}>Click me</button>
            </div>
        )
    }

}

export default Counter