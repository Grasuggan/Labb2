import React from 'react'
import {Info} from '../css/Styles.js'
import "../css/App.css";


function SearchResult(props){

return(
   
    <Info>
    <div>{props.result.firstName } {props.result.lastName}</div>

    <div className="description"><span>Description:</span> {props.result.desc}</div>
    <div><span>submitted</span> {props.result.time}</div>
    <button className="remove"
        onClick={() => {props.removeSubmitter(props.result.id)} }
      >Ta bort denna person</button>
    </Info>

)
}

export default React.memo(SearchResult)