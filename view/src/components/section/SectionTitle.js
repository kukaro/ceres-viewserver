import React, {Component} from 'react';
import Ctxt from '../util/Ctxt'

export default class SectionTitle extends Component {
    state = {
        style: {
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
        },
        title: {
            data: this.props.title,
            size: 30
        }
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section-title" style={this.state.style}>
                <Ctxt data={this.state.title.data} size={this.state.title.size}/>
            </div>
        )
    }
}

SectionTitle.defaultProps = {
    title: 'title'
};