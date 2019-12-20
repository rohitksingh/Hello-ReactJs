import React from 'react'

const WelcomeClassComponent = () =>{
    // return (
    //     <div id ='mainId' className='main'>
    //         <h1 id='hello'>
    //             This component is written in JSX
    //         </h1>
    //     </div>

    // )

    // This is equivalent of the above code// It is necessary to import React because JSX calls internally
    // React.createElement method to change JSX code to pure JS code
    // class -> className

    return React.createElement( 'div', {id: 'mainId', className: 'main'},
        React.createElement( 'h1', {id: 'hello'}, 'This component is not written is JSX')
    )
}



export default WelcomeClassComponent;
