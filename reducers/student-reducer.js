function studentReducer ( state = {}, action ) {
    switch( action.type ) {
        
        case 'SET_STUDENT_LIST' : {
            return { ...state, ...action.payload }
        }

        case 'SET_SELECTED_STUDENT' : {
            return { ...state, selectedStudent: action.payload.student }
        }

        case 'SET_PERIOD_LIST' : {
            return { ...state, periodList: action.payload.periodList }
        }

        case 'SET_SELECTED_PERIOD' : {
            return { ...state, selectedPeriod: action.payload.selectedPeriod }
        }

        case 'SET_AVERAGE' : {
            return { ...state, average: action.payload.average }
        }

        case 'SET_SUBJECT_LIST' : {
            return { ...state, subjectList: action.payload.subjectList }
        }

        case 'SET_SELECTED_SUBJECT' : {
            return { ...state, subject: action.payload.subject }
        }

        case 'SET_ATTENDANCE_LIST' : {
            return { ...state, attendanceList: action.payload.attendanceList }
        }

        case 'SET_NOTES_LIST' : {
            return { ...state, notesList: action.payload.notesList }
        }

        case 'SET_COURSE_STUDENT_LIST' : {
            return { ...state, ...action.payload }
        }

        case 'SET_NURSING_LIST' : {
            return { ...state, nursingList: action.payload.nursingList }
        }

        case 'SET_DOCUMENT_LIST' : {
            return { ...state, documentList: action.payload.documentList }
        }

        default : 
            return state
    }
}

export default studentReducer;