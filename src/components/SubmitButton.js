import React, {Component} from 'react'
import {ButtonContext} from './button-context.js'



class SubmitButton extends React.Component{
 
  

    static contextType = ButtonContext;
    componentDidMount(){
        console.log(`didmount ${this.context.color}`)
    }
    componentDidUpdate(){
        console.log(`didupdate ${this.context.color}`)
    }
    componentWillUnmount(){
        console.log(`willupdate ${this.context.color}`)
    }
    
    render() {
        let btn = this.context;
        return (
            <div>
             <button type="submit" style={{backgroundColor: btn.color}}>{btn.text}</button>
            </div> 
            )
    }
}


export default React.memo(SubmitButton)