import React, {Component} from 'react'
import {ButtonContext} from './button-context.js'



class SubmitButton extends React.Component{
 
  

    static contextType = ButtonContext;
 
    
    render() {
        let btn = this.context;
        return (
            <div>
             <button type="submit" style={{backgroundColor: btn.color}}>{btn.text}</button>
            </div> 
            )
    }
}


// export default React.memo(SubmitButton)
export default SubmitButton