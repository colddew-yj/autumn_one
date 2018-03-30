import {combineReducers} from 'redux'
const initState = {
    status: 0,
    resData: {},
    errorMes: ''
}
const logincCom = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'changeLoginStatus' :
            console.log('change status');
            return Object.assign({}, state, {status: payload.status});
            break;
        case 'sendObj' :
            console.log('get sendObj');
            return Object.assign({}, state, {resData: payload});
            break;

        case 'error' :
            console.log('get error');
            return Object.assign({}, state, {errorMes: payload});
            break;
        default:
            return state
    }
}
const otherCom = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'setNum' :
            console.log('pageNum');
            // return state.concat([payload.num]);
            return Object.assign({}, state, {num: payload.num})
            break;
        default:
            return state
    }
}
export default combineReducers({
    otherCom,
    logincCom
})