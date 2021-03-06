import {createAction} from 'redux-actions'
import {fetchPromise} from  'Common/common'

//同步dispatch
export const getStep = (data={}) => {
    return (dispatch)=>{
        dispatch(createAction('changeLoginStatus')({value:data.status}));
    }
};
export const setNum = (data={}) => {
    return (dispatch)=>{
        dispatch(createAction('setNum')({value:data.num}));
    }

};
export const setType = (data={}) => {
    return (dispatch)=>{
        dispatch(createAction('themeType')({value:data.themeType}));
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
             dispatch(createAction(successType)({value:res.data}))
         }else{
             dispatch(createAction('error')({value:res.message}))
         }
}
