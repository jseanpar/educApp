//const BASE_API_PAD = 'http://10.71.249.55:8080/adm_educa/Med_get_lista_curso?p_grcu_sec=5016';
//const BASE_API_URL = 'http://10.71.249.55:8080/adm_educa/'
const BASE_API_URL = 'https://cmdseducapp.pad.cl:3443/'
const BASE_PATH_URL = 'cmdsrest/adm_educa/'

const CONTENT_TYPE = 'application/x-www-form-urlencoded;charset=UTF-8'
function getAccesEviroment ( ) {
    credentials = {
        'grant_type': 'client_credentials',
        'client_key': 'NfjL9uvoIejYLfr0GtnOwNFYOp4a',
        'client_secret': '3J7sfcBxkHn1bFYn7kw0RUP3CRMa'
    }
    var formBody = []
    for (var property in credentials ) {
        var encodedKey = encodeURIComponent ( property )
        var encodedValue = encodeURIComponent ( credentials [property] )
        formBody.push ( encodedKey + "=" + encodedValue )
    }
    return formBody.join( "&" )
}

class Api {
    //splash
    //Get app token
    async getAuth (  ) {
        const AUTHORIZATION = 'Basic M0o3c2ZjQnhrSG4xYkZZbjdrdzBSVVAzQ1JNYTpOZmpMOXV2b0llallMZnIwR3RuT3dORllPcDRh'
        const PATH = 'token'
        const result = await fetch( `${ BASE_API_URL }${ PATH }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) => await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result
    }
    
    //Login
    //Get user data by user name
    async getUserData ( p_auth, p_userName ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_datos_usuario'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_uspo_usuarios=${ p_userName }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Update password
    //Change user password 
    async postUserPassword ( p_auth, p_userName, p_password, p_usernew) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_upd_clave_usua_portal'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_uspo_usuarios=${ p_userName }&p_uspo_clave=${p_password}&p_uspo_es_nuevo=${p_usernew}`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result
    }

    //Messages list
    //Get message list by user
    async getMessageListByUser ( p_auth, p_userCardId ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_datos_mensajeria'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_usua_usuarios=${ p_userCardId }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) )
        return result.retorno
    }

    //Student list
    //Get student list by user
    async getStudentListByUser ( p_auth, p_userId ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_datos_alumnos'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_pers_sec=${ p_userId }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Student image
    //Get student image by student
    async getStudentImageBystudent ( p_auth, p_studentCode ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_imagb24_alumno'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_fafo_cod_clave=${ p_studentCode }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Period list
    //Get period list by period type
    async getPeriodListByPeriodType ( p_periodType ) {
        periodList = []
        switch ( p_periodType ) {
            case 'SM' : {
                periodList = [
                    { id: '01', text: '1er Semestre' },
                    { id: '02', text: '2do Semestre' },
                ]
            break
            }
            case 'TR' : {
                periodList = [
                    { id: '01', text: '1er Trimestre' },
                    { id: '02', text: '2do Trimestre' },
                    { id: '03', text: '3er Trimestre' },
                    { id: '04', text: '4to Trimestre' },
                ]
            break
            }
            default: {
                periodList = []
            break
            }
        }
        return periodList
    }

    //Dashboard
    //Get attendance average by student
    async getAverageByStudent ( p_auth, p_course, p_studentId, p_selectedPeriod ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_prom_asist_alum'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }&p_nacu_tipo_peri=${ p_selectedPeriod }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Subject list
    //Get subject list by student
    async getSubjectListByStudent ( p_auth, p_course, p_studentId, p_selectedPeriod ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_notas_alumno'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }&p_nacu_tipo_peri=${ p_selectedPeriod }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Attendance list
    //Get attendance list by student
    async getAttendanceListByStudent ( p_auth, p_course, p_studentId ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_asist_alumno'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Notes list
    //Get notes list by student
    async getNotesListByStudent ( p_auth, p_course, p_studentId ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_obser_alumno'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Course student list
    //Get student list by course
    async getStudentListByCourse ( p_auth, p_course ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_lista_curso'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_grcu_sec=${ p_course }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno 
    }

    //Nursing list
    //Get nursing list by student
    async getNursingListByStudent ( p_auth, p_esed_sec, p_course, p_studentId ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_datos_enfermeria'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_esed_sec=${ p_esed_sec }&p_grcu_sec=${ p_course }&p_fial_sec=${ p_studentId }`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

    //Documents list
    //Get documents list by student
    async getDocumentListByStudent ( p_auth, p_course ) {
        const AUTHORIZATION = `${p_auth.token_type} ${p_auth.access_token}`
        const PATH = 'Med_get_datos_documentos'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }?p_grcu_sec=${ p_course }&p_peri_sec=41`, {
            method: 'POST',
            headers: { Authorization: AUTHORIZATION, 'Content-Type': CONTENT_TYPE },
            body: getAccesEviroment ( )
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) ) 
        return result.retorno
    }

}

export default new Api();     