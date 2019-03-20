import React, {Component} from 'react';

export default class Ctxt extends Component {
    state = {
        style: {
            color: this.props.color,
            fontSize: this.props.size
        },
        data: this.props.data || 'null'
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span className='ctxt' style={this.state.style}>
                {this.state.data}
            </span>
        )
    }
}

Ctxt.defaultProps = {
    size: 10,
    color: 'black',
    data: 'null',
    bold: false
};