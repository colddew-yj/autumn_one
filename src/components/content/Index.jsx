import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
// import t from 'Imgs/test.jpg'
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
                <h1 className="animated bounce">Example</h1>
                <img src={require(`Imgs/test.jpg`)} alt=""/>
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