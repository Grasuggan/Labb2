import React from 'react'
import {Info} from '../css/Styles.js'


function SearchResult(props){

return(
   
    <Info>
    <div>{props.result.firstName } {props.result.lastName}</div>
    <div className="description"><span>Description:</span> {props.result.desc}</div>
    </Info>

)
}

export default SearchResult