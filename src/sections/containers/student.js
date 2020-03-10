import React, { Component } from 'react'

import API from '../../../utils/api'
import StudentLayout from '../components/student-layout'
 
class Student extends Component {

    state = { studentImage: '' }

    async componentDidMount () {
        await API.getAuth()
        .then( ( auth ) => {
            API.getStudentImageBystudent ( auth, this.props.fafo_cod_clave )
            .then( ( studentImage ) => {
                this.setState ( { studentImage: studentImage } )
             })
        } )
    }

    render () {
        return (
            <StudentLayout { ...this.props } onPress = { this.props.onPress } studentImage = { this.state.studentImage } />
        )
    }
}

export default Student 