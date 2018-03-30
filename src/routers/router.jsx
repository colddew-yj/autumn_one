import React from 'react'
import {
    Route, Link,Switch,Redirect
} from 'react-router-dom'
import Login from './../components/Login';
import Reg from './../components/Reg';
import Main  from  './../components/content/main';
const Routes = (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/reg" component={Reg}/>
        <Route path="/content" component={Main}/>
        <Redirect from="*" to="/content/index"/>
    </Switch>
)

export  default  Routes