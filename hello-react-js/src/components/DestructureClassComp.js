import React, {Component} from 'react'

class DestructureClassComp extends Component{

    render(){
        const {name, age, uid} = this.props
        return(
            <div>
                <h1>
                    Name: {name} Age: {age}
                </h1>
            </div>
        )
    }

}

export default DestructureClassComp