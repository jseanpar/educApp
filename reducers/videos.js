function videos(state = {}, action){
    switch(action.type){
        case 'SET_SUGGESTION_LIST' : {
            return {...state, ...action.payload}
        }
        case 'SET_CATEGORY_LIST' : {
            return {...state, ...action.payload}
        }
        case 'SET_CURSO_LIST' : {
            return {...state, ...action.payload}
        }
        case 'SET_SELECTED_MOVIE' : {
            return {...state, selectedMovie: action.payload.movie}
        }
        // case 'SET_SELECTED_ALUMNO' : {
        //     return {...state, selectedMovie: action.payload.movie}
        // }
        case 'SET_SELECTED_NOTAS' : {
            return {...state, selectedMovie: action.payload.movie}
        }
        default : 
            return state
    }
    
}
export default videos;