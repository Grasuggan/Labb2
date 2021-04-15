import React from "react";
import Navigation from "./shared/Navigation.js";
import { Route, Switch } from "react-router-dom";
import Submitters from './Submitters'
import { FooterContext } from "./shared/FooterContext.js";
import ContactForm from "./ContactForm.js";


export const footer = {
    heading: 'Submit form site footer',
    link: {
        title: 'learn more by clicking this link',
        url: 'https://www.google.se'
    },
    
  };

function App() {
   
    
    return (
      
        <div className="App">
            
            <Navigation />
            
            <Switch> 
            <FooterContext.Provider value={footer}>
                <Route exact path="/" component={ContactForm} key={1}/>
                <Route path="/submitters" component={Submitters} key={2}/>
                </FooterContext.Provider>
            </Switch>
        
            </div>  

            
    )
}

export default App 