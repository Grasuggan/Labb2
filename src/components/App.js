import React from "react";
import Navigation from "./shared/Navigation.js";
import Checkbox from './Checkbox.js'
import { Route, Switch } from "react-router-dom";
import Submitters from './Submitters'



function App() {
   

    return (
      
        <div className="App">
            <Navigation />
            
            <Switch> 
                <Route exact path="/" component={Checkbox} />
                <Route path="/submitters" component={Submitters} />
            </Switch>
            </div>  

            
    )
}

export default App 