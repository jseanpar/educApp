import React, { Component } from 'react'
import { FlatList, BackHandler, ActivityIndicator, Linking, View } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import FileViewer from 'react-native-file-viewer'

import API from '../../../utils/api'
import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import SudentInfo from '../../sections/containers/student-info'
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

    keyExtractor = item => item.dado_sec.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros"/>
    documentPress = async ( item ) => { 
        await API.getAuth()
        .then( ( auth ) => {
            if(item.docu_cod_clave == null) {
                Linking.openURL(item.dado_url)
            }
            else {
                API.getDocumentByCode ( auth, item.docu_cod_clave, item.dado_sec, item.dado_nom_docto, item.dado_ext_docto )
                .then( ( document ) => {
                    FileViewer.open(document, { showOpenWithDialog: true })
                    .then(() => {
                        // success
                    })
                    .catch(error => {
                        // error
                        console.log(error)
                    });
                } )
            }
        })
    }

    renderItem = ( { item } ) => { 
        return ( <Document { ...item } onPress = { () => { this.documentPress ( item ) } } /> )
    }
    
    render() {
        return (
            <Container>
                <Header title = 'Documentos' navigation = { this.props.navigation } showMenu = { true } >
                    <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                </Header>
                <View style={{ flex: 1, margin: 10 }}>
                    <SudentInfo navigation = { this.props.navigation } />
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                    : 
                        (<FlatList keyExtractor = { this.keyExtractor } data = { this.props.documentList } ListEmptyComponent = { this.renderEmpty } 
                            renderItem = { this.renderItem } />) 
                    } 
                </View>
            </Container>
        )
    }
}

function mapStateToProps ( state ) { return { student : state.studentReducer.selectedStudent, documentList: state.studentReducer.documentList } }

export default connect ( mapStateToProps ) ( DocumentList )