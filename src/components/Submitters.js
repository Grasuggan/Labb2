import React, { useState, useRef, useEffect, useContext, useReducer } from 'react'
import { getSubmitters } from '../api/submittersApi';
import SubmitCounts from './SubmitCounts.js'


function Submitters(){

    // function something()  {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => {
    //       const persons = res.data;
    //       this.setState({ persons });
    //     })
    // }


   const [submitters, setSubmitters] = useState([]);

   useEffect(() => {
    
    getSubmitters().then(_submitters => setSubmitters(_submitters));

  }, []);

    return (
        <div>
            <h1>Welcome to the other site!</h1>
            <SubmitCounts submitters={submitters} />
        </div>
    )
}

export default Submitters