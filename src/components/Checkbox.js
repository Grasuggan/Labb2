import React, { useState, useRef, useEffect, useContext, useReducer } from "react";
import ContactForm from './ContactForm.js'

export const ConfigContext = React.createContext();

const configValue = {
    testing: true
};



function Checkbox(){

    function handleCheckBox(event){
        if(event.target.checked){
          configValue.showAll = true
        }
        else{
          configValue.showAll = false
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
            onChange={handleCheckBox}
          />
        </label>
        </form>
        </ConfigContext.Provider>
        </>
  
  
    )
}

export default Checkbox
