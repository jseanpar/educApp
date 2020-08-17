import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { StatusBar, View, ActivityIndicator, FlatList } from 'react-native'
import { Container } from 'native-base'

import API from '../../../utils/api'
import Header from '../../sections/containers/header'
import Empty from '../../sections/components/empty'
import Student from '../../sections/containers/student'
 
class StudentList extends Component {

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        //this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null, drawerLockMode: 'locked-closed', } }

    async componentDidMount () {
        this.setState ( { loading: true } )
        await API.getAuth()
        .then( ( auth ) => {
            if (this.props.user.userId) {
                API.getStudentListByUser ( auth, this.props.user.userId )
                .then ( ( studentList ) => { 
                    this.props.dispatch( { type: 'SET_STUDENT_LIST', payload: { studentList } } )
                    this.setState ( { loading: false } )
                })
            }
            else {
                this.props.dispatch( { type : 'REMOVE_USER', })
                this.props.navigation.navigate('Loading');
            }
        })        
        //BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
    }

    keyExtractor = item => item.pers_sec_alum.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros" />
    studentPress = ( item ) => { 
        this.props.dispatch ( { type: 'SET_SELECTED_STUDENT', payload: { student: item } } )
        this.props.dispatch ( NavigationActions.navigate ( { routeName: 'PeriodList', params: { backToStudentList: true } } ) )
    }

    renderItem =  ( { item } ) => { 
        return (
            <Student { ...item } onPress = { () => { this.studentPress ( item ) } } />  
        )
    }

    render () {
        StatusBar.setBarStyle('light-content', true)
        return (
            <Container>
                <StatusBar backgroundColor = "#0A74BC" barStyle = "light-content" /> 
                <Header title = 'Seleccion de alumno' navigation = { this.props.navigation } showMenu = { false } /> 
                <View style={{ flex: 1, margin: 10 }}>
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                    : (
                        <FlatList keyExtractor = { this.keyExtractor } data = { this.props.studentList } ListEmptyComponent = { this.renderEmpty } 
                            renderItem = { this.renderItem } />) 
                    }
                </View>
            </Container>
        )
    } 
}

function mapStateToProps ( state ) { return { user: state.userReducer, studentList: state.studentReducer.studentList } }

export default connect ( mapStateToProps ) ( StudentList )