import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getStep, setNum, asySend} from './../redux/action'
import {fetchPromise} from  'Common/common'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: 0,
            num: ''
        }
    }

    componentDidMount() {
        console.log(0)
        console.log(this.props)
        console.log('start');
    }

    componentWillReceiveProps(nextProps) {
        console.log(1111)
        console.log(this.props);
    }

    componentWillUpdate() {
        console.log(2)
        console.log(this.props.loginStatus);
    }

    componentDidUpdate() {
        console.log(this.props);
        console.log(3)
    }


    handerClick1() {
        console.log(this.props);
        fetchPromise('/mock', {name1: '111', key1: '222'})
        this.props.setNum({num: '00000'});
    }

    handerClick2() {
        this.props.asySend('/mock', {name1: '111', key1: '222'});
        this.props.getStep({status: 'alive'});
    }

    toReg() {
        this.props.history.push('/reg')
    }

    render() {
        let style = {
            background: 'red',
            height: '50px',
            width: '80px'
        }
        let style2 = {
            background: 'blue',
            height: '50px',
            width: '80px'
        }
        return (<div>
            <div onClick={this.handerClick1.bind(this)} style={style}>click1</div>
            <div onClick={this.handerClick2.bind(this)} style={style2}>click2</div>
            <button onClick={this.toReg.bind(this)}>go register</button>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.logincCom.status,
        logincCom: state.logincCom.resData,
        num:state.otherCom.num
    }
}
// const mapDispatchToProps = (dispatch, props) => {
// }
export default connect(mapStateToProps, {asySend, setNum,getStep})(Login)
