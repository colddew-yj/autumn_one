import React, {Component} from 'react'
import PropTypes from 'prop-types';
class Reg extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // static contextTypes={
    //     router: PropTypes.object
    // }

    componentDidMount() {
        // console.log(this.context);
    }
    toLogin(){
        console.log(this.context.router);
        this.context.router.history.push('./login')
    }
    render() {
        return (
            <div>
                Reg
                <button onClick={this.toLogin.bind(this)}>toLogin</button>
            </div>
        )
    }
}
Reg.contextTypes = {
    router: PropTypes.object
};
export default Reg