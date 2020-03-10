import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'native-base'
import Loading from './screens/containers/loading'
import Login from './screens/containers/login'
import MessageList from './screens/containers/message-list'
import StudentList from './screens/containers/student-list'
import ChangePassword from './screens/containers/change-password'
import CloseSession from './screens/containers/close-session' 
import PeriodList from './screens/containers/period-list'
import Dashboard from './screens/containers/dashboard'
import SubjectList from './screens/containers/subject-list'
import SubjectDetail from './screens/containers/subject-detail'
import Attendance from './screens/containers/attendance'
import NotesList from './screens/containers/notes-list'
import CourseStudentList from './screens/containers/course-student-list'
import NursingList from './screens/containers/nursing-list'
import DocumentList from './screens/containers/document-list'
import DrawerComponent from './sections/components/drawer'

const Main = createStackNavigator ( {
    StudentList: StudentList,
    MessageList: MessageList,
    PeriodList: PeriodList,
    Dashboard : Dashboard,
    SubjectList : SubjectList,
    SubjectDetail : SubjectDetail, 
    Attendance: Attendance, 
    NotesList: NotesList,
    CourseStudentList: CourseStudentList,
    NursingList: NursingList,
    DocumentList: DocumentList
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
            //drawerIcon: <Icon name="ios-home" style = { { fontSize: 16, color: '#0098D0' } } />,
            drawerLabel: () => null
        }
    }, 
    StudentList: {
        screen: StudentList,
        navigationOptions:{
            title: 'Alumnos',
            drawerIcon: <Icon name = "ios-people" style = { { fontSize: 16, color: '#0098D0' } } />
        }
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions:{
            title: 'Cambiar Password',
            drawerIcon: <Icon name = "md-key" style = { { fontSize: 16, color: '#0098D0' } } />
        }
    },
    Login: {
        screen: CloseSession,
        navigationOptions: {
            title: 'Cerrar sesión',
            drawerIcon: <Icon name = "md-power" style = { { fontSize: 16, color: '#0098D0' } } />
        }
    }
},
{
    drawerWidth: 180,
    drawerBackgroundColor: '#fff',
    drawerPosition: 'right',
    drawerType: 'slide',
    keyboardDismissMode: 'none',
    contentComponent: DrawerComponent,
    contentOptions: {
        activeBackgroundColor: '#eaeaeb', 
        activeTintColor: '#0098D0',
        inactiveTintColor: '#8e8e93',
        inactiveBackgroundColor: '#fff',
        itemStyle: {
            //borderBottomWidth: .5,
            //borderBottomColor: '#eaeaeb',
        }, 
        labelStyle: {
            fontFamily: 'Roboto',
            
            marginHorizontal: 0,
        },
        iconContainerStyle: {
            marginHorizontal: 4,
        }
    }
})

const SwitchNavigator = createSwitchNavigator (
    {
        App: DrawerNavigation,
        Login: Login,
        Loading: Loading,
    },
    {
        initialRouteName: 'Login', 
    }
)

export default createAppContainer ( SwitchNavigator )