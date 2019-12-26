import React, { Component } from 'react'
import { Container, Header, Content, Picker, Form, Icon } from "native-base"

import PeriodLayout from '../components/period-layout'

class Period extends Component {

    constructor ( props ) {
        super ( props )
        this.state = {
            selected: "key2"
        }
    }

    onValueChange ( value: string ) {
        this.setState ( {
            selected: value
        })
    }

    render () {
        return (
            <Form style = { { flex: 1, justifyContent: 'center', alignItems: 'center' } } >
                <Picker note mode = "dropdown" style = { { width: 95 } } selectedValue = { this.state.selected } onValueChange = { this.onValueChange.bind(this) } 
                >
                    <Picker.Item label="2017" value="key0" />
                    <Picker.Item label="2018" value="key1" />
                    <Picker.Item label="2019" value="key2" />
                    <Picker.Item label="2020" value="key3" />
                    <Picker.Item label="2021" value="key4" />
                </Picker>
            </Form>
        )
    }
}

export default Period