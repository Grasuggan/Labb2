import React, { useEffect } from 'react'



function SearchResult(props){

return(
    <div className="info">
    <div>{props.result.firstName } {props.result.lastName}</div>
    <div className="description"><span>Description:</span> {props.result.desc}</div>
    </div>
)
}

export default SearchResult