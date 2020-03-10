import React, { Component, Fragment } from 'react';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestion-list';
import {connect} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";


class Home extends Component {
     
    static navigationOptions = () => {
        return {
            header :  Header,
        }
    }

    async componentDidMount() {
        const suggestionList = await API.getSuggestion();
        const categoryList = await API.getMovies();
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: {
            categoryList
          }
        })
        this.props.dispatch({
          type: 'SET_SUGGESTION_LIST',
          payload: {
            suggestionList
          }
        })
      }

    render() {
        return (
            <Fragment> 
                <SuggestionList />
            </Fragment>
        )
    }
}

export default connect (null)(Home)