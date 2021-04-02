import React from 'react'
// import tomatoAv from './tomatoAv.jpg'

function Submitted(props) {

    //Move this to Contact form js!

    let submitter = null;
    let allsubmitters = null;
    if(props.subs.length){
        var today = new Date();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const subLen = props.subs.length;

        props.subs.map((sub, i) => {
            if(subLen === (i + 1)){
              submitter = <div className="profile"> <h3>Last one to submit</h3>
                  <div className="info">
                    <div>{sub.firstName } {sub.lastName} <span>submitted {time}</span>.</div>
                    <div className="description"><span>Description:</span> {sub.desc}</div>
                 </div>
                 <p>-------------------------------------------------</p>
             </div>
            }
        })

        allsubmitters = props.subs.map(sub=> (
         <div className="profile"> 
            <div className="info">
              <div>{sub.firstName } {sub.lastName} <span>submitted {time}</span>.</div>
              <div className="description"><span>Description:</span> {sub.desc}</div>
           </div>
       </div>
        ))
    }

     return(
         <>
           {submitter}
           {allsubmitters}
        </>
     )
 }
 
 export default Submitted