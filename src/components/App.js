import React from "react";
import Navigation from "./shared/Navigation.js";
import ContactForm from './ContactForm.js'
import { Route, Switch } from "react-router-dom";
import Submitters from './Submitters'

export const ConfigContext = React.createContext();

const configValue = {
    shootme: true
};


function App() {
   

    return (
        <ConfigContext.Provider value={configValue}>
        <div className="App">
            <Navigation />
            
            <Switch> 
                <Route exact path="/" component={ContactForm} />
                <Route path="/submitters" component={Submitters} />
            </Switch>
            </div>  
            </ConfigContext.Provider>
    )
}

export default App 