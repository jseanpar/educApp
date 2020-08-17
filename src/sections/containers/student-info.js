import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import API from '../../../utils/api'
import StudentInfoLayout from '../components/student-info-layout'
 
class StudentInfo extends Component {

    state = { studentImage: '' }

    async componentDidMount () {
        await API.getAuth()
        .then( ( auth ) => {
            API.getStudentImageBystudent ( auth, this.props.student.fafo_cod_clave )
            .then ( ( studentImage ) => {
                this.setState ( { studentImage: studentImage } )
            } )
        })
    }

    periodPress = ( ) => { 
        this.props.dispatch ( NavigationActions.navigate ( { routeName: 'PeriodList', params: { backToStudentList: false } } ) )
    }

    render () {
        return (
            <StudentInfoLayout studentSelected = { this.props.student } studentImage = { this.state.studentImage } navigation = { this.props.navigation } 
                selectedPeriod = { this.props.selectedPeriod } onPress = { () => { this.periodPress ( ) } }  /> 
        )
    }
}

function mapStateToProps ( state ) { return { student : state.studentReducer.selectedStudent, selectedPeriod : state.studentReducer.selectedPeriod } }

export default connect ( mapStateToProps ) ( StudentInfo )