import React, { Component } from 'react'
import { SafeAreaView, FlatList, BackHandler, ActivityIndicator } from 'react-native'
import { Container, Content } from 'native-base';
import { connect } from 'react-redux'

import API from '../../../utils/api';
import Header  from '../../sections/containers/header';
import HeaderBackButton from '../../sections/components/header-back-button'
import SudentInfo from '../../sections/containers/student-info';
import Empty from '../../sections/components/empty'
import Document from '../components/document'

class DocumentList extends Component { 

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null } }

    async componentDidMount () {
        await API.getAuth()
        .then( ( auth ) => {
            API.getDocumentListByStudent ( auth, this.props.student.grcu_sec )
            .then( ( documentList ) => {
                this.props.dispatch ( { type: 'SET_DOCUMENT_LIST', payload: { documentList } } )
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

    keyExtractor = item => item.dado_sec.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros"/>

    renderItem = ( { item } ) => { 
        // const dateTime = String(item.encu_fec_atencion).split('T')
        // const date = String(dateTime[0]).split('-');
        // const dateFormat = parseInt(date[2]) + '-' + parseInt(date[1]) + '-' + parseInt(date[0])
        return ( <Document { ...item } /> ) // date = { dateFormat } /> ) 
    }
    
    render() {
        console.log(this.props)
        return (
            <SafeAreaView style = { { flex:1 } } >
                <Container>
                    <Header navigation = { this.props.navigation } title = 'Documentos' >
                        <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                    </Header>
                    <Content padder>
                        <SudentInfo navigation = { this.props.navigation } />
                        { this.state.loading ? 
                            <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                        : 
                            (<FlatList keyExtractor = { this.keyExtractor } data = { this.props.documentList } ListEmptyComponent = { this.renderEmpty } 
                                renderItem = { this.renderItem } />) 
                        } 
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}

function mapStateToProps ( state ) { return { student : state.studentReducer.selectedStudent, documentList: state.studentReducer.documentList } }

export default connect ( mapStateToProps ) ( DocumentList );