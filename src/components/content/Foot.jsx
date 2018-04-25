import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {setType} from  'Redux/action';
class Foot extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    chooseTheme(type){
        if(this.props.themeType!==type){
            localStorage.themeType = type;
            this.props.setType({themeType:type});
            switch (type){
                case 'one':this.context.router.history.push('/content/index');break;
                case 'two':this.context.router.history.push('/content/show');break;
                case 'three':this.context.router.history.push('/content/classification');break;
                case 'four':this.context.router.history.push('/content/things');break;
                case 'five':this.context.router.history.push('/content/Mine');break;
            }
        }


    }
    render() {
        let {themeType} = this.props;
        return (
            <div className="theme-type">
                <div className={themeType==='one'?'actived':'no-actived item'} onClick={this.chooseTheme.bind(this,'one')}>
                    <i className="iconfont icon-shouye"></i>
                    <div>ONE</div>
                </div>
                <div className={themeType==='two'?'actived':'no-actived item'} onClick={this.chooseTheme.bind(this,'two')}>
                    <i className="iconfont icon-shouye"></i>
                    <div>TWO</div>
                </div>
                <div className={themeType==='three'?'actived':'no-actived item'} onClick={this.chooseTheme.bind(this,'three')}>
                    <i className="iconfont icon-shouye"></i>
                    <div>THREE</div>
                </div>
                <div className={themeType==='four'?'actived':'no-actived item'} onClick={this.chooseTheme.bind(this,'four')}>
                    <i className="iconfont icon-shouye"></i>
                    <div>FOUR</div>
                </div>
                <div className={themeType==='five'?'actived':'no-actived item'} onClick={this.chooseTheme.bind(this,'five')}>
                    <i className="iconfont icon-shouye"></i>
                    <div>FIVE</div>
                </div>
            </div>
        )
    }
}
Foot.contextTypes = {
    router: PropTypes.object
};
const stateToProps = (state)=>{
    console.log(state)
    return{
        themeType: state.Content.themeType ||localStorage.themeType|| 'one'
    }
}
export default connect(stateToProps,{setType})(Foot)