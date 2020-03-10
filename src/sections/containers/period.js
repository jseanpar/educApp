import React, { Component } from 'react'

import PeriodLayout from '../components/period-layout'
 
class Period extends Component {
    render () {
        return (
            <PeriodLayout {...this.props} onPress = { this.props.onPress }  />
        )
    }
}

export default Period 