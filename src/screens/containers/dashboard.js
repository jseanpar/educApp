import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Icon, Subtitle } from 'native-base';

import StudentInfo from '../../sections/containers/student-info';
import Header from '../../sections/containers/header'

class Dashboard extends Component {

    viewModule = ( screen ) => { this.props.navigation.navigate ( screen ) }

    static navigationOptions = () => { return { header: null } }

    render() {
        return (
            <SafeAreaView style = { { flex:1 } } >
                <Container>
                    <Header title = 'Inicio' navigation={this.props.navigation}/>
                    <Content padder>
                        <StudentInfo />
                        <View style = { styles.containerFirst } >
                            <TouchableOpacity  style = { styles.btn_notas } onPress = { () => { this.viewModule ( 'SubjectList' ) } } >
                                <Icon name="md-school" style = { { fontSize: 40, color: '#fff' } } />
                                <Subtitle>Notas</Subtitle>
                            </TouchableOpacity >
                            <TouchableOpacity style = { styles.btn_asistencia } onPress = { () => { this.viewModule ( 'Attendance' ) } } >
                                <Icon name="md-calendar" style = { { fontSize: 40, color: '#fff' } } />
                                <Subtitle>Asistencia</Subtitle>
                            </TouchableOpacity>
                        </View>
                        <View style = { styles.container } >
                            <TouchableOpacity style = { styles.btn_anotaciones } onPress = { () => { this.viewModule ( 'NotesList' ) } } >
                                <Icon name="ios-list-box" style = { { fontSize: 40, color: '#fff' } } />
                                <Subtitle>Anotaciones</Subtitle>
                            </TouchableOpacity>
                            <TouchableOpacity style = { styles.btn_alum_curso } onPress = { () => { this.viewModule ( 'CourseStudentList' ) } } >
                                <Icon name="ios-people" style = { { fontSize: 40, color: '#fff' } } />
                                <Subtitle>Alumnos del curso</Subtitle>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Container>
            </SafeAreaView>   
        )
    }
}

const styles = StyleSheet.create ( {
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
        backgroundColor: '#00B4D6',  
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
        backgroundColor: '#41C08B',
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
        backgroundColor: '#50BEF8',
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

function mapStateToProps ( state ) { return { student: state.studentReducer.selectedStudent } }

export default connect ( mapStateToProps ) ( Dashboard )