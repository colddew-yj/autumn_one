import 'babel-polyfill'
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, HashRouter} from 'react-router-dom'
import Routes from './routers/router'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './redux/reducer'
import 'normalize-css';
import './styles/common'
import 'animate.css/animate.min.css'
//JS监听浏览器文字大小代码
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
let store = createStore(reducers,applyMiddleware(thunk));
if (module.hot) {//第一次热更新存在报错
    module.hot.accept();
}
// if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./redux/reducer', () => {
//         store.replaceReducer(reducers);
//     });
// }

ReactDOM.render(<Provider store={store}>
  <Router>
    {Routes}
  </Router>
</Provider>, document.getElementById('root'));
