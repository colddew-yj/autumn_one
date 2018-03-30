import React, {Component} from 'react'
import PropTypes from 'prop-types';
class Aside extends Component {
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
                Aside
                {this.props.children}
            </div>
        )
    }
}
Aside.contextTypes = {
    router: PropTypes.object
};
export default Aside