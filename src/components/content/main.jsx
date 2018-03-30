import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Index from './Index'
import Show from  './Show'
import  Aside from './Aside'
import {
    Route, Link,Switch,Redirect
} from 'react-router-dom'
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
                    <Redirect from="*" to={`${url}/index`} />
                </Switch>
            </Aside>
        )
    }
}
Main.contextTypes = {
    router: PropTypes.object
};
export default Main