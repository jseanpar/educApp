import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { SafeAreaView, FlatList } from 'react-native'
import { Container, Content } from 'native-base'

import Header from '../../sections/containers/header'
import Empty from '../../videos/components/empty'
import Student from '../../sections/containers/student'
 
class StudentList extends Component {

    static navigationOptions = () => { return { header: null, drawerLockMode: 'locked-closed' } }

    keyExtractor = item => item.pers_sec_alum.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros" />
    
    studentPress = ( item ) => { 
        this.props.dispatch ( { type: 'SET_SELECTED_STUDENT', payload: { student: item, } } )
        this.props.dispatch ( NavigationActions.navigate ( { routeName: 'Dashboard' } ) )
    }

    renderItem =  ( { item } ) => {   
        return (
            <Student { ...item } onPress = { () => { this.studentPress ( item ) } } />  
        )
    }

    render () {
        return (
            <SafeAreaView style = { { flex:1 } } >
                <Container>
                    <Header title = 'Seleccion de alumno' />
                    <Content padder>
                        <FlatList keyExtractor = { this.keyExtractor } data = { this.props.studentList } ListEmptyComponent = { this.renderEmpty } renderItem = { this.renderItem } />
                    </Content>
                </Container>
            </SafeAreaView>
        )
    } 
}

function mapStateToProps ( state ) { 
    return { studentList : state.studentReducer.studentList } 
}

export default connect ( mapStateToProps ) ( StudentList )