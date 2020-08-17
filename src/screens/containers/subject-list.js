import React, { Component } from 'react'
import { BackHandler, FlatList, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'

import API from '../../../utils/api'
import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import SudentInfo from '../../sections/containers/student-info'
import Empty from '../../sections/components/empty'
import Subject from '../../sections/components/subject'


class SubjectList extends Component {

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null, } }

    async componentDidMount () {
        await API.getAuth()
        .then ( ( auth ) => {
            API.getSubjectListByStudent ( auth, this.props.student.grcu_sec, this.props.student.fial_sec_alum, this.props.selectedPeriod.id )
            .then( ( subjectList ) => {
                this.props.dispatch ( { type: 'SET_SUBJECT_LIST', payload: { subjectList } } )
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
    
    keyExtractor = item => item.asig_cod.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros" />
    subjectPress = ( item ) => { 
        this.props.dispatch ( { type: 'SET_SELECTED_SUBJECT', payload: { subject: item, } } )
        this.props.dispatch ( NavigationActions.navigate ( { routeName: 'SubjectDetail' } ) )
    }

    renderItem = ( { item } ) => { 
        return(
            <Subject {...item} onPress = { () => { this.subjectPress ( item ) } } />
        ) 
    }

    render () {
        return (
            <Container>
                <Header title = 'Asignaturas' navigation = { this.props.navigation } showMenu = { true } >
                    <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                </Header>
                <View style={{ flex: 1, margin: 10 }}>
                    <SudentInfo navigation = { this.props.navigation } />
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = { { flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 } } />
                    : 
                        (<View style = { { marginTop: 10 } } >
                            <FlatList keyExtractor = { this.keyExtractor } data = { this.props.subjectList } ListEmptyComponent = { this.renderEmpty } 
                                renderItem = { this.renderItem } />
                        </View>) 
                    } 
                </View>
            </Container>
        )
    } 
}

function mapStateToProps ( state ) { return { student : state.studentReducer.selectedStudent, subjectList: state.studentReducer.subjectList, selectedPeriod: state.studentReducer.selectedPeriod } }

export default connect ( mapStateToProps ) ( SubjectList )