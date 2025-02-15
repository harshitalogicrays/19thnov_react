import React from 'react'

const ErrorComp = ({name}) => {
    if(name=='Joker')
        throw new Error("Invalid Name")
    else {
        return (
            <div> <h1>{name}</h1> </div>
          )
    }
 
}

export default ErrorComp
