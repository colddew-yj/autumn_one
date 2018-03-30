import {createAction} from 'redux-actions'
import {fetchPromise} from  'Common/common'

//同步dispatch
export const getStep = (data={}) => {
    return (dispatch)=>{
        dispatch(createAction('changeLoginStatus')(data));
    }
};
export const setNum = (data={}) => {
    return (dispatch)=>{
        dispatch(createAction('setNum')(data));
    }

};
//异步dispatch
export const  asySend = (url,data,method) =>{
    return (dispatch)=>{
        fetchPromise(url,data,method).then((res)=>{
            handleDispatch(res,'sendObj',dispatch)
        })
    }
};

 const handleDispatch =(res,successType,dispatch)=>{
         if(res.status===1){
             dispatch(createAction(successType)(res.data))
         }else{
             dispatch(createAction('error')(res.message))
         }
}
