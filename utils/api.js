//https://mycolor.space/?hex=%230A74BC&sub=1

//const BASE_API = 'https://rickandmortyapi.com/api/character/?page=1';
//const BASE_API_PAD = 'http://10.71.249.55:8080/adm_educa/Med_get_lista_curso?p_grcu_sec=5016';
//const BASE_API_SEARCH = 'https://rickandmortyapi.com/api/character/';
const BASE_API_URL = 'http://10.71.249.55:8080/adm_educa/'

class Api {
    //Login
    //Get user data by user name
    async getUserData ( p_userName ) {
        try {
            const PATH = 'Med_get_datos_usuario'
            const query = await fetch(`${ BASE_API_URL }${ PATH }?p_uspo_usuarios=${ p_userName }`)
            const data = await query.json()
            console.log(data.retorno)
            return data.retorno
        }
        catch ( error ) {
            console.log( error.message )
        }
    }

    //Student list
    //Get student list by user
    async getStudentListByUser ( p_userId ) {
        try {
            const PATH = 'Med_get_datos_alumnos'
            const PATH_IMAGE = 'Med_get_imagb24_alumno'
            const query = await fetch(`${ BASE_API_URL }${ PATH }?p_pers_sec=${ p_userId }`)
            const data = await query.json()
            data.retorno.forEach( async (element) => {
                const queryImage = await fetch(`${ BASE_API_URL }${ PATH_IMAGE }?p_fafo_cod_clave=${ element.fafo_cod_clave }`)
                const dataImage = await queryImage.json()
                element.studentImage = dataImage.retorno
            })          
            return data.retorno
        }
        catch ( error ) {
            console.log( error.message )
        }
    }

    //Subject list
    //Get subject list by student
    async getSubjectListByStudent ( p_course, p_studentId ) {
        try {
            const PATH = 'Med_get_notas_alumno'
            const query = await fetch(`${ BASE_API_URL }${ PATH }?p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }&p_nacu_tipo_peri=01`)
            const data = await query.json()
            return data.retorno
        }
        catch ( error ) {
            console.log( error.message )
        }
    }

    //Attendance list
    //Get attendance list by student
    async getAttendanceListByStudent ( p_course, p_studentId ) {
        try {
            const PATH = 'Med_get_asist_alumno'
            const query = await fetch(`${ BASE_API_URL }${ PATH }?p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }`)
            const data = await query.json()
            return data.retorno
        }
        catch ( error ) {
            console.log( error.message )
        }
    }

    //Notes list
    //Get notes list by student
    async getNotesListByStudent ( p_course, p_studentId ) {
        try {
            const PATH = 'Med_get_obser_alumno'
            const query = await fetch(`${ BASE_API_URL }${ PATH }?p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }`)
            const data = await query.json()
            return data.retorno
        }
        catch ( error ) {
            console.log( error.message )
        }
    }

    //Course student list
    //Get student list by course
    async getStudentListByCourse ( p_course ) {
        try {
            const PATH = 'Med_get_lista_curso'
            const PATH_IMAGE = 'Med_get_imagb24_alumno'
            const query = await fetch(`${ BASE_API_URL }${ PATH }?p_grcu_sec=${ p_course }`)
            const data = await query.json()
            data.retorno.forEach ( async ( element ) => {
                const queryImage = await fetch(`${ BASE_API_URL }${ PATH_IMAGE }?p_fafo_cod_clave=${ element.fafo_cod_clave }`)
                const dataImage = await queryImage.json()
                element.studentImage = dataImage.retorno
            })      
            return data.retorno
        }
        catch ( error ) {
            console.log( error.message )
        }
    }







    async getSuggestion() { 
        //const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const query = await fetch(`${BASE_API}`);
        const data = await query.json();
        //console.log(data.results); 
        return data.results
    }
    async getMovies() { 
        const query = await fetch(`${BASE_API}`);
        const data = await query.json();
        //console.log(data.results); 
        return data.results
    }
    async searchMovie(title) {
        const query = await fetch(`${BASE_API_SEARCH}?name=${title}`);
        const data = await query.json();
        //console.log(data.results); 
        return data.results 
    }
    async getCurso() { 
        //console.log ( 'getcurso' )
        try {
            const query = await fetch(`${BASE_API_PAD}`);
            const data = await query.json();
            //console.log('data: ' + data)
            return data.retorno
        }
        catch ( error ) {
            console.log( error.message )
        }
    }
}

export default new Api();     