import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { Container, Content } from 'native-base'

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

    static navigationOptions = () => { return { header: null } }

    async componentDidMount () {
        //console.log('1')
        await API.getAuth()
        .then( ( auth ) => {
            API.getStudentListByUser ( auth, this.props.user.userId )
            .then ( ( studentList ) => { 
                this.props.dispatch( { type: 'SET_STUDENT_LIST', payload: { studentList } } )
            })
        })        
        //BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
        this.setState ( { loading: false } )
    }

    keyExtractor = item => item.pers_sec_alum.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros" />
    studentPress = ( item ) => { 
        this.props.dispatch ( { type: 'SET_SELECTED_STUDENT', payload: { student: item } } )
        this.props.dispatch ( NavigationActions.navigate ( { routeName: 'PeriodList' } ) )
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
                    <Header title = 'Seleccion de alumno' navigation = { this.props.navigation } />
                    <Content padder>
                        { this.state.loading ? 
                            <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                        : (
                            <FlatList keyExtractor = { this.keyExtractor } data = { this.props.studentList } ListEmptyComponent = { this.renderEmpty } 
                                renderItem = { this.renderItem } />) 
                        }
                    </Content>
                </Container>
            </SafeAreaView>
        )
    } 
}

function mapStateToProps ( state ) { return { user: state.userReducer, studentList : state.studentReducer.studentList } }

export default connect ( mapStateToProps ) ( StudentList )