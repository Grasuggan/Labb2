import React, { useState, useRef, useEffect, useContext, useReducer } from 'react'
import { getSubmitters } from '../api/submittersApi';
import SubmitCounts from './SubmitCounts.js'


function Submitters(){
    
    const [allsubs, setAllSubs] = useState([]);
 
    useEffect(() => {
        getSubmitters().then(_submitters =>  setAllSubs(_submitters));
       
     }, []);
  
    return (
        <div>
            <h1>Welcome to the other site!</h1>
              <SubmitCounts submitters={allsubs} />
        </div>
    )
}

export default Submitters