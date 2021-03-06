import React, { Component } from 'react'
import { StatusBar, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { Container, Content, Icon, Subtitle } from 'native-base'

import StudentInfo from '../../sections/containers/student-info'
import Header from '../../sections/containers/header'

class Dashboard extends Component {

    viewModule = ( screen ) => { this.props.navigation.navigate ( screen ) }

    static navigationOptions = () => { return { header: null } }

    render() {
        StatusBar.setBarStyle('light-content', true)
        return (
            <Container>
                <StatusBar backgroundColor = "#0A74BC" barStyle = "light-content" /> 
                <Header title = 'Inicio' navigation = { this.props.navigation } showMenu = { true } />
                <Content padder>
                    <StudentInfo navigation = { this.props.navigation } />
                    <View style = { styles.containerFirst } >
                        <TouchableOpacity  style = { styles.btn_notas } onPress = { () => { this.viewModule ( 'SubjectList' ) } } >
                            <Subtitle style = { { color: '#fff' } }>Notas</Subtitle>
                            <Icon name="md-school" style = { { fontSize: 40, color: '#fff' } } />
                            <Subtitle style = { { color: '#fff' } }>Promedio</Subtitle>
                            <Subtitle style = { { color: '#fff' } }>{ this.props.average[0] ? this.props.average[0].nacu_prom_parc : '0' }</Subtitle>
                        </TouchableOpacity >
                        <TouchableOpacity style = { styles.btn_asistencia } onPress = { () => { this.viewModule ( 'Attendance' ) } } >
                            <Subtitle style = { { color: '#fff' } }>Asistencia</Subtitle>
                            <Icon name="md-calendar" style = { { fontSize: 40, color: '#fff' } } />
                            <Subtitle style = { { color: '#fff' } }>Promedio</Subtitle>
                            <Subtitle style = { { color: '#fff' } }>{ this.props.average[0] ? this.props.average[0].asist_alum : '0%' }</Subtitle>
                        </TouchableOpacity>
                    </View>
                    <View style = { styles.container } >
                        <TouchableOpacity style = { styles.btn_anotaciones } onPress = { () => { this.viewModule ( 'NotesList' ) } } >
                            <Icon name="ios-list-box" style = { { fontSize: 40, color: '#fff' } } />
                            <Subtitle style = { { color: '#fff' } }>Anotaciones</Subtitle>
                        </TouchableOpacity>
                        <TouchableOpacity style = { styles.btn_alum_curso } onPress = { () => { this.viewModule ( 'CourseStudentList' ) } } >
                            <Icon name="ios-people" style = { { fontSize: 40, color: '#fff' } } />
                            <Subtitle style = { { color: '#fff' } }>Alumnos del curso</Subtitle>
                        </TouchableOpacity>
                    </View>
                    <View style = { styles.container } >
                        <TouchableOpacity style = { styles.btn_nursing } onPress = { () => { this.viewModule ( 'NursingList' ) } } >
                            <Icon name="md-medkit" style = { { fontSize: 40, color: '#fff' } } />
                            <Subtitle style = { { color: '#fff' } }>Enfermeria</Subtitle>
                        </TouchableOpacity >
                        <TouchableOpacity style = { styles.btn_documents } onPress = { () => { this.viewModule ( 'DocumentList' ) } } >
                            <Icon name="md-document" style = { { fontSize: 40, color: '#fff' } } />
                            <Subtitle style = { { color: '#fff' } }>Documentos</Subtitle>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create ( {
    letra14Btn: {
        color: 'white',
        fontSize: 14,
    },
    containerFirst: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_notas: {
        backgroundColor: '#0098D0', 
        width: 140,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2, 
        marginLeft: 8,
        marginRight: 4,
        marginVertical: 4, 
    },
    btn_asistencia: { 
        backgroundColor: '#0098D0',  
        width: 140,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginLeft: 4,
        marginRight: 8,
        marginVertical: 4,
    },
    btn_anotaciones: {
        backgroundColor: '#0098D0',
        width: 140,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginLeft: 8,
        marginRight: 4,
        marginVertical: 4, 
    },
    btn_alum_curso: {
        backgroundColor: '#0098D0',
        width: 140,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginLeft: 4,
        marginRight: 8,
        marginVertical: 4,
    },
    btn_nursing: {
        backgroundColor: '#0098D0',
        width: 140,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginLeft: 8,
        marginRight: 4,
        marginVertical: 4, 
    },
    btn_documents: {
        backgroundColor: '#0098D0',
        width: 140,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginLeft: 4,
        marginRight: 8,
        marginVertical: 4,
    },
})

function mapStateToProps ( state ) { return {student : state.studentReducer.selectedStudent, average: state.studentReducer.average } }

export default connect ( mapStateToProps ) ( Dashboard )