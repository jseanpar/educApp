import React, { Component } from 'react'
import { BackHandler, FlatList, ActivityIndicator, View } from 'react-native'
import { Container, ListItem, Body, Text } from 'native-base'
import { connect } from 'react-redux'

import API from '../../../utils/api'
import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import Empty from '../../sections/components/empty'
import Student from '../../sections/containers/student'

class CourseStudentList extends Component {

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null, } }

    async componentDidMount () {
        await API.getAuth()
        .then( ( auth ) => {  
            API.getStudentListByCourse ( auth, this.props.student.grcu_sec )
            .then( ( courseStudentList ) => {
                this.props.dispatch ( { type: 'SET_COURSE_STUDENT_LIST', payload: { courseStudentList } } )
                this.setState ( { loading: false } )
            } )
        } )
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }

    handleBackButtonClick () {
        this.props.navigation.goBack ( null )
        return true
    }
    
    keyExtractor = item => item.pers_sec.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros" />
    renderItem = ( { item } ) => {
        return (
            <Student { ...item } />  
        )
    }
    
    render() {
        return (
            <Container>
                <Header title = 'Alumnos del curso' navigation = { this.props.navigation } showMenu = { true } >
                    <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                </Header>
                <View style={{ flex: 1, margin: 10 }}>
                    <ListItem>
                        <Body style = { { justifyContent: 'center', alignItems: 'center' } } >
                            <Text>{this.props.student.esed_descripcion}</Text>
                            <Text note>{this.props.student.grte_descrip} - {this.props.student.grcu_letra_curso}</Text>
                        </Body>
                    </ListItem>
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                    : (
                        <FlatList keyExtractor = { this.keyExtractor } data = { this.props.courseStudentList } ListEmptyComponent = { this.renderEmpty } 
                            renderItem = { this.renderItem } /> ) 
                    }
                </View>
            </Container>
        )
    }
}

function mapStateToProps ( state ) { return { student: state.studentReducer.selectedStudent, courseStudentList : state.studentReducer.courseStudentList } }

export default connect ( mapStateToProps ) ( CourseStudentList )