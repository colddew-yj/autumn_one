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
            return Object.assign({}, state, {status: payload.value});
            break;
        case 'sendObj' :
            console.log('get sendObj');
            return Object.assign({}, state, {resData: payload.value});
            break;

        case 'error' :
            console.log('get error');
            return Object.assign({}, state, {errorMes: payload.value});
            break;
        default:
            return state
    }
}
const Content = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'themeType' :
            return Object.assign({}, state, {themeType: payload.value})
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
            return Object.assign({}, state, {num: payload.value})
            break;
        default:
            return state
    }
}
export default combineReducers({
    otherCom,
    logincCom,
    Content
})