import React, {Component} from 'react';
import util from '../util'

export default class Nav extends Component {
    state = {
        style: {
            width: 200,
            height: '100%',
            borderRight: util.makeBorder()
        },
        headerHeight: this.props.headerHeight
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props);
        this.state.style.height = util.calcAOB('100%', '-', util.makeUnit(this.props.headerHeight));
    }

    render() {
        return (
            <nav className="ceres-nav" style={this.state.style}>
            </nav>
        )
    }
}

Nav.defaultProps = {
    headerHeight: 100
};