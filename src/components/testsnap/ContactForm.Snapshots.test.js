import React from "react";
import Greeting from "../Greeting.js";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import JustSubmitted from "../JustSubmitted.js"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("should match Greet snapshot", () => {
    const greet = renderer.create(  
         <Greeting first="Test" last="Testsson"/>
    );
    expect(greet).toMatchSnapshot();
});

it("should render a submitter first name", () => {
    const fakesubmitters =[ {
        
        firstName: "Test",
        lastName: "Testsson",
        desc: "Some description of mr Testsson",
        time: "10.1.10" ,
    }]
    act(() => {
        render(<JustSubmitted subs={fakesubmitters}/>, container);
    });

    expect(container.querySelector(".subFirstName").textContent).toBe("Test");
});




