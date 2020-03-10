import React, { Component } from 'react';
import { connect } from 'react-redux'

import API from '../../../utils/api';
import LoadingLayout from '../../sections/components/loading'

class Loading extends Component {
  
    componentDidMount () {
        if ( this.props.user ) { 
            this.props.navigation.navigate ( 'StudentList' )
        }
        else {
            this.props.navigation.navigate ( 'Login' )
        }
    }
    render () {
        return (
            <LoadingLayout />
        )   
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer } }

export default connect ( mapStateToProps ) ( Loading )