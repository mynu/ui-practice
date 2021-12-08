import React, { Component } from 'react'
import Student from './Student'
export default class Mounting extends Component { 
    constructor(props){
        super(props);
        console.log('App- Constructor called');
        console.log(props);
        this.state = {
            roll: "pass",
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("Mounting-get Derived state from props");
        console.log(props, state);
        return  null; // no changes of state write null
    }
    componentDidMount(){
        //get data from server and set the data to state
        console.log("Mounting - componentDidMount-Mounted")
    }
    render() {
       console.log("Mounting - Rendored") //parent 
        return ( 
        <h1>hello kiran <Student name="shiva1"/></h1>
        
        
           
        )
    }
}
