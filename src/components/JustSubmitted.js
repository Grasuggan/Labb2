import React, { useContext, useMemo}  from 'react'
import { ConfigContext } from "./Checkbox.js"
import styled, { css } from 'styled-components'
import {FirstSubmitterFrame, Info, SubmitterFrame} from '../css/Styles.js'




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
                  {/* <div className="info"> */}
                      <Info>
                    <div>{sub.firstName } {sub.lastName} 
                    <span> submitted {sub.time}</span>
                    .</div>
                    <div className="description"><span>Description:</span> {sub.desc}</div>
                    </Info>
            
             </div>
            }
        })
        return result
    }


function submittersList(subsList){

        return subsList.map(sub=> (
         <div className="profile" key={sub.id}> 
            <Info>
              <div> {sub.firstName } {sub.lastName} 
              <span> submitted {sub.time}</span>
              .</div>
              <div className="description"><span>Description: </span> {sub.desc}</div>
              </Info>
       </div>
        ))
    
}

     return( 
         <>
        {submitter != null ? <FirstSubmitterFrame>
             {submitter} 
           </ FirstSubmitterFrame> : <div></div> } 
             
             { context.showAll === true && submitter != null ? 
              <SubmitterFrame>
                  <h3>All submitters</h3>
            {allsubmitters} </SubmitterFrame>  : <div ></div>

               
            } 
          
        </>
     )
 }
 
 export default JustSubmitted