import React, { Component } from 'react'
import { FlatList, BackHandler, ActivityIndicator, View } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'

import API from '../../../utils/api'
import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import SudentInfo from '../../sections/containers/student-info'
import Empty from '../../sections/components/empty'
import Note from '../components/note'

class NotesList extends Component { 

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null,  } }

    async componentDidMount () {
        await API.getAuth()
        .then( ( auth ) => {
            API.getNotesListByStudent ( auth, this.props.student.grcu_sec, this.props.student.fial_sec_alum )
            .then( ( notesList ) => {
                this.props.dispatch ( { type: 'SET_NOTES_LIST', payload: { notesList } } )
                this.setState ( { loading: false } )
            } )
        })
                
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
        
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }

    handleBackButtonClick () {
        this.props.navigation.goBack ( null )
        return true
    }

    keyExtractor = item => item.obal_sec.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros"/>

    renderItem = ( { item } ) => { 
        const dateTime = String(item.obal_fec_ing).split('T')
        const date = String(dateTime[0]).split('-');
        const dateFormat = parseInt(date[2]) + '-' + parseInt(date[1]) + '-' + parseInt(date[0])
        return ( <Note { ...item } date = { dateFormat } /> ) 
    }
    
    render() {
        return (
            <Container>
                <Header title = 'Anotaciones' navigation = { this.props.navigation } showMenu = { true } >
                    <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                </Header>
                <View style={{ flex: 1, margin: 10 }}>
                    <SudentInfo navigation = { this.props.navigation } />
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                    : 
                        (<FlatList keyExtractor = { this.keyExtractor } data = { this.props.notesList } ListEmptyComponent = { this.renderEmpty } 
                            renderItem = { this.renderItem } />) 
                    } 
                </View>
            </Container>
        )
    }
}

function mapStateToProps ( state ) { return { student : state.studentReducer.selectedStudent, notesList: state.studentReducer.notesList } }

export default connect ( mapStateToProps ) ( NotesList )