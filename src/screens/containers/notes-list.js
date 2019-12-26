import React, { Component } from 'react'
import { SafeAreaView, FlatList, BackHandler, ActivityIndicator } from 'react-native'
import { Container, Content } from 'native-base';
import { connect } from 'react-redux'

import API from '../../../utils/api';
import Header  from '../../sections/containers/header';
import HeaderBackButton from '../../sections/components/header-back-button'
import SudentInfo from '../../sections/containers/student-info';
import Empty from '../../videos/components/empty'
import Note from '../components/note'

class NotesList extends Component { 

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null,  } }

    async componentDidMount () {
        const notesList = await API.getNotesListByStudent ( this.props.student.grcu_sec, this.props.student.fial_sec_alum )
        this.props.dispatch ( { type: 'SET_NOTES_LIST', payload: { notesList } } )
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
        this.setState ( { loading: false } )
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
            <SafeAreaView style = { { flex:1 } } >
                <Container>
                    <Header navigation = { this.props.navigation } title = 'Anotaciones' >
                        <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                    </Header>
                    <Content padder>
                        <SudentInfo />
                        { this.state.loading ? 
                            <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                        : 
                            (<FlatList keyExtractor = { this.keyExtractor } data = { this.props.notesList } ListEmptyComponent = { this.renderEmpty } 
                                renderItem = { this.renderItem } />) 
                        } 
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}

function mapStateToProps ( state ) { return { student : state.studentReducer.selectedStudent, notesList: state.studentReducer.notesList } }

export default connect ( mapStateToProps ) ( NotesList );