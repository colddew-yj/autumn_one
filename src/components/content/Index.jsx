import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
                Index444555555
                <i className="iconfont icon-shouye"></i>
            </div>
        )
    }
}
Index.contextTypes = {
    router: PropTypes.object
};
const stateToProps = (state)=>{
    return{
        themeType: state.themeType
    }
}
export default connect(stateToProps,{})(Index)