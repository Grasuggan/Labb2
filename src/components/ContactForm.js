import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useContext,
  useCallback,
} from "react";
import Greeting from "./Greeting.js";
import "../css/App.css";
import SubmitButton from "./SubmitButton.js";
import { ButtonContext, btnInfo } from "./button-context.js";
import JustSubmitted from "./JustSubmitted";
import { Input, Textarea, FooterStyle, FooterInner } from "../css/Styles.js";
import * as submittersApi from "../api/submittersApi";
import { FooterContext } from "./shared/FooterContext.js";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  desc: "",
  time: "",
};

function ContactForm() {
  const footer = useContext(FooterContext);

  const [inputName, setInputName] = useState(initialState);
  const [count, setCount] = useState(0);
  const [btnState, setBtnState] = useState(btnInfo.disabled);
  const [errors, setErrors] = useState({});
  const inputRef = useRef();

  

  function submittersReducer(state, action) {
    switch (action.type) {
      case "setSubmittedArray": {
        return action.data;
      }
      default:
        return state;
    }
  }

  const [submittedArray, dispatch] = useReducer(submittersReducer, []);


  function handleSubmit(event) {
    event.preventDefault();
    var today = new Date();
    var subTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const newData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      desc: inputRef.current.value,
      time: subTime,
    };

    if (!formIsValid(newData)) {
      alert(`${errors}`);
    } else {
      setCount((C) => C + 1);
      const newArray = submittedArray.slice();
      newArray.push(newData);

      submittersApi.saveSubmitters(newData);

      dispatch({
        type: "setSubmittedArray",
        data: newArray,
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

  const handleGreeting = useCallback(
    (event) => {
      const result = event.target.value;
      setInputName({
        ...inputName,
        [event.target.name]: result,
      });
    },
    [inputName]
  );

  useEffect(() => {
    if (inputName.firstName === "" || inputName.lastName === "") {
      setBtnState((btnState) => (btnState = btnInfo.disabled));
    } else {
      setBtnState((btnState) => (btnState = btnInfo.enabled));
    }
  }, [inputName]);

  useEffect(() => {
    function cleanForm() {
      setInputName(initialState);
      setBtnState(btnInfo.disabled);
    }
    if (count !== 0) {
      setTimeout(() => {
        alert(`Thank you for entering the form!`);
      }, 1000);
    }

    return () => {
      cleanForm();
    };
  }, [count]);

  return (
    <>
      <Greeting first={inputName.firstName} last={inputName.lastName} />
      <form onSubmit={handleSubmit} id="app-form" key={count}>
        <label htmlFor="firstName">
          Your firstname:
          <Input
            name="firstName"
            id="firstName"
            onChange={handleGreeting}
            autoComplete="false"
          />
        </label>
        <label htmlFor="lastName">
          Your lastname:
          <Input
            name="lastName"
            id="lastName"
            onChange={handleGreeting}
            autoComplete="false"
          />
        </label>
        <label htmlFor="desc">
          Describe yourself (optional):
          <Textarea ref={inputRef}></Textarea>
        </label>
        <label>Form submitted {count} times</label>

        {/* <SubmitButton inputState={inputName} /> */}

        <ButtonContext.Provider value={btnState}>
          <SubmitButton />
        </ButtonContext.Provider>
      </form>
      <JustSubmitted subs={submittedArray} />

      <FooterStyle>
        <FooterInner>
          <h1>{footer.heading}</h1>
          <a href={footer.link.url} className="footer-link">
            {footer.link.title}
          </a>
        </FooterInner>
      </FooterStyle>
    </>
  );
}

export default ContactForm;
