import React, { Component, Fragment } from 'react';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import CursoList from '../../videos/containers/curso-list';
import {connect} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome5";


class Curso extends Component {
     
  static navigationOptions = () => {
    return {
        title: 'Alumnos del Curso',
        tabBarIcon: <Icon
            name="user-friends"
            size={15}
            color='#92c93d'
        />,
        drawerIcon: <Icon
            name="user-friends" 
            size={15}
            color='#92c93d'
        />
    }
}

    async componentDidMount() {
        const cursoList = await API.getCurso();
        this.props.dispatch({
          type: 'SET_CURSO_LIST',
          payload: {
            cursoList
          }
        })
      }

    render() { 
        return (
            <Fragment> 
                <CursoList />
            </Fragment>
        )
    }
}

export default connect (null)(Curso)