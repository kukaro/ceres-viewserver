import util from '../util'
import React, {Component} from 'react';
import Cinput from '../util/Cinput'

export default class SectionURLSlot extends Component {
    state = {
        style: {

        }
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={this.state.style}>
            </div>
        )
    }
}

SectionURLSlot.defaultProps = {};