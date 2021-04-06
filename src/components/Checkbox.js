import React, { useState, useRef, useEffect} from "react";
import ContactForm from './ContactForm.js'

export const ConfigContext = React.createContext();

const configValue = {
    testing: true
};



function Checkbox(){

    const [checked, setChecked] = useState(true)
    const checkboxRef = useRef();
    
      useEffect(() => {       
        if(checked){
         configValue.showAll = false;
        }
        else{
         configValue.showAll = true
        }
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
        <ContactForm />
        <form>
        <label htmlFor="checkbox">
          Show all submitters?
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onClick={handleCheckBox}
            ref={checkboxRef}
          />
        </label>
        </form>
        </ConfigContext.Provider>
        </>
  
  
    )
}

export default Checkbox
