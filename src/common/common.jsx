export const fetchPromise = (url, params, type = 'POST') => {
    return new Promise((resolve, reject) => {
        if (type === 'GET') {
            if (params) {
                let paramsArray = [];
                //拼接参数
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            fetch(url, {
                method: 'GET',
                credentials: 'include'
            }).then((response) => response.json()).then((res) => {
                resolve(res);
            }).catch( (err)=> {
                reject(err)
            })
        } else {
            // let formData = '';
            // let formData = new FormData();
            // for (let item in params) {
                // formData.append(item,params[item]);
                // params = formData + item + '=' + encodeURIComponent(params[item]) + '&'
            // }
            fetch(url,
                {
                    credentials: 'include',
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
                    }),
                    body:`data=${JSON.stringify(params)}`
                }
            ).then((response) => response.json()).then((res) => {
                resolve(res);
            }).catch((err)=> {
                reject(err)
            })
        }
    })

}
// exports.dispatchRequest=(requestObj)=>{
//     const {dispatch,url, params, type} = requestObj;
//     fetchPromise(url, params, type).then((res)=>{
//
//     })
// }
// exports.dispatchRequest = function(requestObj) {
//     const dispatch = requestObj.dispatch;
//     const jrApi = requestObj.jrApi;
//     const fetchPrm = requestObj.fetchPrm;
//     const requestType = requestObj.requestType;
//     const requestingAction = requestObj.requestingAction;
//     const successAction = requestObj.successAction;
//     const errorAction = requestObj.errorAction;
//     const extra = requestObj.extra; /**/
//
//     requestingAction && dispatch(requestingAction());
//     return getFetchPromise(jrApi, requestType, fetchPrm ).then(function (ret) {
//         return dispatch(successAction(ret, extra));
//     }).catch(function (error) {
//         if(errorAction) {
//             return dispatch(errorAction(error));
//         } else {
//             console.error(error)
//         }
//     });
// };