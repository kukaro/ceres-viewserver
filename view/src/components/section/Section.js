import util from '../util'
import React, {Component} from 'react';
import SectionTitle from './SectionTitle'

export default class Section extends Component {
    state = {
        style: {
            top: this.props.headerHeight,
            left: this.props.navWidth,
            width: '100%',
            height: util.calcAOB('100%', '-', util.makeUnit(this.props.headerHeight)),
            backgroundColor: 'inherit',
            position: 'absolute'
        },
        headerHeight: this.props.headerHeight,
        title: '검색'
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="ceres-section" style={this.state.style}>
                <SectionTitle title={this.state.title}/>
            </section>
        )
    }
}

Section.defaultProps = {
    headerHeight: 100
};