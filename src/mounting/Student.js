import React, { Component } from 'react'
import Marks from '../mounting/Marks'
export default class Student extends Component {
    render() {
        console.log("student - rendered [child to Mounting ]")
        return (
            <div>
               <h1> Hello {this.props.name} </h1>
               <Marks />
            </div>
        )
    }
}
