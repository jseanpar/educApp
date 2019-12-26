import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'

import Loading from './screens/containers/loading'
import Login from './screens/containers/login'
import StudentList from './screens/containers/student-list'
import Dashboard from './screens/containers/dashboard'
import SubjectList from './screens/containers/subject-list'
import SubjectDetail from './screens/containers/subject-detail'
import Attendance from './screens/containers/attendance'
import NotesList from './screens/containers/notes-list'
import CourseStudentList from './screens/containers/course-student-list'
import DrawerComponent from './sections/components/drawer';

const Main = createStackNavigator ( {
    Dashboard : Dashboard,
    StudentList: StudentList,
    SubjectList : SubjectList,
    SubjectDetail : SubjectDetail, 
    Attendance: Attendance, 
    NotesList: NotesList,
    CourseStudentList, CourseStudentList
},
{
    defaultNavigationOptions: {
        gesturesEnabled: true,
        title: 'Inicio',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#0098D0',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
    },
    mode: 'modal',
} )

const DrawerNavigation = createDrawerNavigator ( {
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'Inicio',
         // drawerIcon: <Icon
         // name="home"
         // size={15} 
         // color='#92c93d' 
      ///>
        }
    }, 
    StudentList: {
        screen: StudentList,
        navigationOptions:{
            title: 'Seleccion de alumno',
            drawerLockMode: 'locked-closed',
        }
    },
    Dashboard: {
        screen: Dashboard
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Cerrar sesión',
           // drawerIcon: <Icon
           // name="home"
           // size={15} 
           // color='#92c93d' 
        ///>
        }
    }
},
{
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    drawerPosition: 'right',
    drawerType: 'slide',
    keyboardDismissMode: 'none',
    contentComponent: DrawerComponent,
    contentOptions: {
        activeBackgroundColor: '#36a3f7', 
        activeTintColor: 'white',
        inactiveTintColor: '#828282',
        inactiveBackgroundColor: 'white',
        itemStyle: {
            borderBottomWidth: .5,
            borderBottomColor: '#eaeaeb',
        }, 
        labelStyle: {
            marginHorizontal: 0,
        },
        iconContainerStyle: {
            marginHorizontal: 5,
        }
    }
})

const SwitchNavigator = createSwitchNavigator (
    {
        App: DrawerNavigation,
        StudentList: StudentList,
        Login: Login,
        Loading: Loading,
    },
    {
        initialRouteName: 'Loading',
    }
)

export default createAppContainer ( SwitchNavigator )