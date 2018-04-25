import React from 'react'
import {
    Route, Link,Switch,Redirect
} from 'react-router-dom'
import Bundle from './Bundle';
const Login = (props) => (
    <Bundle load={() => import('./../components/Login')}>
        {(Login) => <Login {...props}/>}
    </Bundle>
);
const Reg = (props) => (
    <Bundle load={() => import('./../components/Reg')}>
        {(Reg) => <Reg {...props}/>}
    </Bundle>
);
const Main = (props) => (
    <Bundle load={() => import('./../components/content/main')}>
        {(Main) => <Main {...props}/>}
    </Bundle>
);
const Routes = (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/reg" component={Reg}/>
        <Route path="/content" component={Main}/>
        <Redirect from="*" to="/content/index"/>
    </Switch>
)

export  default  Routes