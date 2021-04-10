import React, { useState, useEffect, useContext} from 'react'
import { getSubmitters } from '../api/submittersApi';
import SubmitCounts from './SubmitCounts.js'
import { FooterContext } from "./shared/FooterContext.js";
import {FooterStyle, FooterInner} from '../css/Styles.js'


function Submitters(){

    const footer = useContext(FooterContext);
    
    const [allsubs, setAllSubs] = useState([]);
 
    useEffect(() => {
        getSubmitters().then(_submitters =>  setAllSubs(_submitters));
       
     }, []);
  
    return (
        <div>
            <h1>Welcome to the other site!</h1>
              <SubmitCounts submitters={allsubs} />
              <FooterStyle><FooterInner><h1>{footer.heading}</h1><a href={footer.link.url} className="footer-link" >{footer.link.title}</a></FooterInner></FooterStyle>
        </div>
    )
}

export default Submitters