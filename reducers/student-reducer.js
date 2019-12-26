function studentReducer ( state = {}, action ) {
    switch( action.type ) {
        
        case 'SET_STUDENT_LIST' : {
            return { ...state, ...action.payload }
        }

        case 'SET_SELECTED_STUDENT' : {
            return { ...state, selectedStudent: action.payload.student }
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
            return { ...state, courseStudentList: action.payload.courseStudentList }
        }

        default : 
            return state
    }
}

export default studentReducer;