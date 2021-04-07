import React, { useState, useRef, useEffect} from "react";
import ContactForm from './ContactForm.js'
import {Checkboxstyled} from '../css/Styles.js'

export const ConfigContext = React.createContext();

const configValue = {
  showAll: false
};



function Checkbox(){

    const [checked, setChecked] = useState(true)
    const checkboxRef = useRef();
    
      useEffect(() => {       
        return () => {configValue.showAll = checked;}
      }, [checked]);
    
  

    function handleCheckBox(event){
        if(event.target.checked){
            setChecked(true);
        }
        else{
            setChecked(false);
        }
          
      }
    
    return (
        <>
    <ConfigContext.Provider value={configValue}>
        <form>
        <Checkboxstyled htmlFor="checkbox">
          Show all submitters?
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onClick={handleCheckBox}
            ref={checkboxRef}
          />
        </Checkboxstyled>
        </form>
        <ContactForm />
        </ConfigContext.Provider>
        </>
  
  
    )
}

export default Checkbox
