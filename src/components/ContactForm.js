import React, { useState, useRef, useEffect, useContext, useReducer } from "react";
import Greeting from "./Greeting.js";
import SubmitCounts from "./SubmitCounts.js";
import "../css/App.css";
import SubmitButton from "./SubmitButton.js";
import {ButtonContext, btnInfo} from './button-context.js'
import Submitted from './Submitted'
import { ConfigContext } from "./App"
import * as submittersApi from '../api/submittersApi';




function ContactForm() {

  
  const context = useContext(ConfigContext);

  const initialState = {
    id: null,
    firstName: "",
    lastName: "",
    desc: "",
  };

  const [inputName, setInputName] = useState(initialState);
  const [count, setCount] = useState(0);
    const [btnState, setBtnState] = useState(btnInfo.disabled);
    const [errors, setErrors] = useState({});
  const inputRef = useRef();


  function addtojsonfunc(data){
    console.log(`jsonfunc ${data.firstName} id ${data.id} `)
    submittersApi.saveSubmitters(data);
  };
  
  function submittersReducer(state, action) {
      switch (action.type) {
          case "setSubmittedArray": {
              return action.data;
          }
          //add new actiontype to store submitters into json file
          case "addToJson": {
            //   return state;
            
              return addtojsonfunc(action.data)

          }
          default:
              return state;
      }

     
  }
  
  //   const [submittedArray, setSubmittedArray] = useState([]);
  const [submittedArray, dispatch] = useReducer(submittersReducer, []);



  function handleSubmit(event) {
    event.preventDefault();

    const newData = {
        id: submittedArray.length + 1,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      desc: inputRef.current.value,
    };

    if(!formIsValid(newData)) {
      alert("oops you forgot something");
    } else {
      setCount((C) => C + 1);
      console.log(`Submitted ${count} times.`);
      const newArray = submittedArray.slice();
      newArray.push(newData);
    //   setSubmittedArray(newArray);
        dispatch({
            type: "setSubmittedArray",
            data: newArray
        });

        dispatch({
            type: "addToJson",
            data: newData
        });

    
    }
  }

  function formIsValid(newData) {
    const _errors = {};

    if (!newData.firstName) _errors.title = "Firstname is required";
    if (!newData.lastName) _errors.authorId = "Lastname is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleGreeting(event) {
    const result = event.target.value;
    setInputName({
      ...inputName,
      [event.target.name]: result,
    });
 

    if(inputName.firstName === "" || inputName.lastName === "" ){
        setBtnState(btnState => btnState = btnInfo.disabled);
        // subButton = <button type="submit" style={{backgroundColor: disabled.color}}>{disabled.text}</button>
        
    }
    else{
        
        setBtnState(btnState => btnState = btnInfo.enabled);
        //  subButton = <button type="submit" style={{backgroundColor: enabled.color}}>{enabled.text}</button>
      }

      // console.log(`Context color ${btnState.color}`)
      
   
  }

  useEffect(() => {
    function cleanForm() {
      setInputName(initialState);
      setBtnState(btnInfo.disabled);
    }
    if (count != 0) {
      setTimeout(() => {
        alert(`Thank you for entering the form!`);
      }, 1000);
    }

    return () => {
      cleanForm();
    };
  }, [count]);

  return (
    <div>
      <Greeting first={inputName.firstName} last={inputName.lastName} />
      <form onSubmit={handleSubmit} id="app-form" key={count}>
        <label htmlFor="firstName">
          Your firstname:
          <input
            name="firstName"
            id="firstName"
            onChange={handleGreeting}
            autoComplete="false"
          />
        </label>
        <label htmlFor="lastName">
          Your lastname:
          <input
            name="lastName"
            id="lastName"
            onChange={handleGreeting}
            autoComplete="false"
          />
        </label>
        <label htmlFor="desc">
          Describe yourself (optional):
          <textarea ref={inputRef}></textarea>
        </label>
        {/* <SubmitButton inputState={inputName} /> */}
       
      <ButtonContext.Provider value={btnState}>
            {/* <button type="submit" style={{backgroundColor: btnInfo.color}}>{btnInfo.text}</button> */}
            <SubmitButton />
        </ButtonContext.Provider>
      </form>
     <label>Form submitted {count} times</label>
        {/* <Submitted subs={submittedArray} /> */}
      {/* <SubmitCounts submitters={submittedArray} /> */}


      { context.shootme === false ? null : (
          <div> <h1>Okay to shoot me</h1> </div>
      )}
    </div>
  );
}



export default ContactForm;
