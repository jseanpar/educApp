function userReducer ( state = {}, action) {
   
    switch ( action.type ) {
        
        case 'SET_USER' : {
            return {...action.payload}
        }

        case 'SET_PROFILE' : {
            return { ...state, profile: action.payload.profile }
        }

        case 'SET_PROFILE_NAME' : {
            return { ...state, profileName: action.payload }
        }

        case 'REMOVE_USER' : {
            return false
        }

        case 'SET_NOTIFICATION' : {
            return { ...state, notification: action.payload.notification}
        }

        case 'REMOVE_NOTIFICATION' : {
            return { ...state, notification: undefined }
        }

        case 'SET_MESSAGE_LIST' : {
            return { ...state, messageList: action.payload.messageList }
        }
        
        default:
            return state
    }
}

export default userReducer