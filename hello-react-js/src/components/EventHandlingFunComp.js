import React from 'react'

const EventHandlingFunComp = () => {

    function clickHandler() {
        console.log("Button", "This works")
    }

    return(
        <div>
            <h1>
                This is text
            </h1>
            <button onClick ={clickHandler}>Hit ME</button>
        </div>
    ) 
}

export default EventHandlingFunComp