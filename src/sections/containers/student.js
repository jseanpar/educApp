import React, { Component } from 'react'

import StudentLayout from '../components/student-layout'
 
class Student extends Component {
    render () {
        return (
            <StudentLayout { ...this.props } onPress = { this.props.onPress } />  
        )
    }
}

export default Student 