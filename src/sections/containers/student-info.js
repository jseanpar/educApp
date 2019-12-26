import React, { Component } from 'react'
import { connect } from 'react-redux'

import StudentInfoLayout from '../components/student-info-layout'
 
class StudentInfo extends Component {
    render () {
        return (
            <StudentInfoLayout studentSelected = { this.props.student } />
        )
    }
}

function mapStateToProps ( state ) { return { student: state.studentReducer.selectedStudent } }

export default connect ( mapStateToProps ) ( StudentInfo )