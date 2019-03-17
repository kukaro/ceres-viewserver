import util from '../util'
import React, {Component} from 'react'
import Ctxt from '../util/Ctxt'

export default class HeaderAdmin extends Component {
    state = {
        style:{
            width: '150px',
            height: '100%',
            backgroundColor: 'rgb(119, 55, 88)',
            marginLeft: 'auto',
            display: 'flex',
        },
        mStyle:{
            margin: 'auto',
            cursor: 'pointer'
        },
        font:{
            color: 'white',
            size: 15
        },
        data: this.props.data
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header-admin" style={this.state.style}>
                <div style={this.state.mStyle}>
                    <Ctxt data={this.state.data} color={this.state.font.color} size={this.state.font.size}/>
                </div>
            </div>
        )
    }
}

HeaderAdmin.defaultProps = {
    data: '사용자 정보'
};