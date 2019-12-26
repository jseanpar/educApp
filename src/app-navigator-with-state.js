import { connect } from'react-redux'
import { createReduxContainer } from 'react-navigation-redux-helpers'

import AppNavigator from'./app-navigator'

const AppNavigatorWithState = createReduxContainer ( AppNavigator, 'root' )
const mapStateToProps = state => ( { state: state.navigation } )

export default connect ( mapStateToProps ) ( AppNavigatorWithState )