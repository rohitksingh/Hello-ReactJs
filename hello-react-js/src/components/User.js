import React from 'react'

const User = props => {
    console.log(props);
    return <h1>Hello {props.name} Your age is {props.age }</h1>
} 

export default User;