import React, { useContext, useMemo}  from 'react'
import { ConfigContext } from "./Checkbox.js"


function JustSubmitted(props) {

    
    const context = useContext(ConfigContext);


    let submitter = null;
    let allsubmitters = null;

    
    let lastsubmitterList = lastSubmitter(props.subs);
    
    let allsubmittersList  = useMemo(() => {
        return submittersList(props.subs)
    }, [props.subs]);

    submitter = props.subs.length ? lastsubmitterList : null
    allsubmitters = props.subs.length ? allsubmittersList : null;


    function lastSubmitter(subsList){
        
         const subLen = props.subs.length;
         let result = null;

        subsList.map((sub, i) => {
            if(subLen === (i + 1)){
            
              result = <div className="profile" key={sub.id}> <h3>Last one to submit</h3>
                  <div className="info">
                    <div>{sub.firstName } {sub.lastName} 
                    <span>submitted {sub.time}</span>
                    .</div>
                    <div className="description"><span>Description:</span> {sub.desc}</div>
                 </div>
                 <p>-------------------------------------------------</p>
             </div>
            }
        })
        return result
    }


function submittersList(subsList){

        return subsList.map(sub=> (
         <div className="profile" key={sub.id}> 
            <div className="info">
              <div> {sub.firstName } {sub.lastName} 
              <span>submitted {sub.time}</span>
              .</div>
              <div className="description"><span>Description:</span> {sub.desc}</div>
           </div>
       </div>
        ))
    
}

     return( 
         <>
             { context.showAll === true ? 
             <div>
                
             {submitter}
            {allsubmitters} </div>  : <div> {submitter} </div>

               
            } 
          
        </>
     )
 }
 
 export default JustSubmitted