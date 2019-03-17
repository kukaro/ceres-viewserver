import React, {Component} from 'react';
import Ctxt from '../util/Ctxt'

export default class SectionTitle extends Component {
    state = {
        style: {},
        title: {
            data:this.props.title,
            size:20
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
                <Ctxt data={this.state.title.data} size={this.state.title.size}/>
            </div>
        )
    }
}

SectionTitle.defaultProps = {
    title: 'title'
};