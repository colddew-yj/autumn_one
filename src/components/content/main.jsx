import React, {Component} from 'react'
import {
    Route, Link,Switch,Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types';
import  Foot from './Foot'
import  Aside from './Aside'
import Bundle from 'Routers/Bundle';
const Show = (props) => (
    <Bundle load={() => import('./Show')}>
        {(Show) => <Show {...props}/>}
    </Bundle>
);
const Index = (props) => (
    <Bundle load={() => import('./Index')}>
        {(Index) => <Index {...props}/>}
    </Bundle>
);
const Mine = (props) => (
    <Bundle load={() => import('./Mine')}>
        {(Mine) => <Mine {...props}/>}
    </Bundle>
);
const Classification = (props) => (
    <Bundle load={() => import('./Classification')}>
        {(Classification) => <Classification {...props}/>}
    </Bundle>
);
const Things = (props) => (
    <Bundle load={() => import('./Things')}>
        {(Things) => <Things {...props}/>}
    </Bundle>
);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        let url = this.props.match.url;
        return (
            <Aside>
                main
                <Switch>
                    <Route path={`${url}/index`} component={Index}/>
                    <Route path={`${url}/show`} component={Show}/>
                    <Route path={`${url}/mine`} component={Mine}/>
                    <Route path={`${url}/classification`} component={Classification}/>
                    <Route path={`${url}/things`} component={Things}/>
                    <Redirect from="*" to={`${url}/index`} />
                </Switch>
                <Foot/>
            </Aside>
        )
    }
}
Main.contextTypes = {
    router: PropTypes.object
};
export default Main