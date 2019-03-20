import util from '../util'
import React, {Component} from 'react';
import Cinput from '../util/Cinput'

export default class SectionURLSlot extends Component {
    render() {
        return (
            <div className="section-url-slot" style={this.state.style}>
                <Cinput />
            </div>
        )
    }
    state = {
        style: {
            width: '100%',
            height: 30,
            backgroundColor: 'inherit'
        }
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }
}

SectionURLSlot.defaultProps = {};