function userReducer ( state = {}, action) {
   
    switch ( action.type ) {
        
        case 'SET_USER' : {
            return {...action.payload}
        }

        case 'REMOVE_USER' : {
            return false
        }

        case 'SET_MESSAGE_LIST' : {
            return { ...state, messageList: action.payload.messageList }
        }
        
        default:
            return state
    }
}

export default userReducer;