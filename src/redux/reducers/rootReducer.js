import {GET_MARK,GET_RESULT} from '../actions/action'

const initState = {
    data:{
        q1:'',
        q2:'',
        q3:'',
        q4:''
    },
    result:{
        q1:'2003',
        q2:'375',
        q3:'Australia',
        q4:'49'
    }
}

export function rootReducer(state = initState,action){
    const {type,payload} = action
    switch(type){
        case GET_MARK:return {...state,data:{...state.data,[payload.id]:payload.o}}
        case GET_RESULT:return {...state,data:{...state.data,[payload.id]:payload.o}}
        default:return state
    }
}