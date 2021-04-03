import React, { useContext}  from 'react'
import { ConfigContext } from "./Checkbox.js"


function JustSubmitted(props) {

    //Move this to Contact form js!
    const context = useContext(ConfigContext);

    let submitter = null;
    let allsubmitters = null;
    if(props.subs.length){
        var today = new Date();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const subLen = props.subs.length;

        props.subs.map((sub, i) => {
            if(subLen === (i + 1)){
              submitter = <div className="profile" key={sub.id}> <h3>Last one to submit</h3>
                  <div className="info">
                    <div>{sub.firstName } {sub.lastName} <span>submitted {time}</span>.</div>
                    <div className="description"><span>Description:</span> {sub.desc}</div>
                 </div>
                 <p>-------------------------------------------------</p>
             </div>
            }
        })

        allsubmitters = props.subs.map(sub=> (
         <div className="profile" key={sub.id}> 
            <div className="info">
              <div> {sub.firstName } {sub.lastName} <span>submitted {time}</span>.</div>
              <div className="description"><span>Description:</span> {sub.desc}</div>
           </div>
       </div>
        ))
    }

     return( 
         <>
             { context.showAll == true ? 
             <div>
             {submitter}
            {allsubmitters} </div>  : <div> {submitter} </div>

               
            } 
          
        </>
     )
 }
 
 export default JustSubmitted