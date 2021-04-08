import React from "react";
import Greeting from "../Greeting.js";
import renderer from "react-test-renderer";


it("should match Greet snapshot", () => {
    const greet = renderer.create(  
         <Greeting first="Test" last="Testsson"/>
    );
    expect(greet).toMatchSnapshot();
});