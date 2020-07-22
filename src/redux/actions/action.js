export const GET_MARK = 'GET_MARK'
export const GET_RESULT = 'GET_RESULT'


export const getMark = payload=>dispatch=>{
    return dispatch({
        type:GET_MARK,
        payload
    })
}

export const getResult = payload =>dispatch =>{
    return dispatch({
        type:GET_RESULT,
        payload
    })
}