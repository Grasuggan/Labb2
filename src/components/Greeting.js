import React from 'react'

function Greeting(props){
    return(
      <div>
         <h1>Welcome {props.first} {props.last}</h1>
     </div>
    )
}

export default Greeting