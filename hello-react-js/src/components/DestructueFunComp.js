import React from 'react'

const DestructureFunComp = ({name, age, uid}) => {
    
    return (
        <div>
            <h1>
                Name: {name}, Age: {age}, UID: {uid}
            </h1>
        </div>
    )

}

export default DestructureFunComp