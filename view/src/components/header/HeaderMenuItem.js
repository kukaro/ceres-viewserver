import util from '../util'
import React, {Component} from 'react'
import Ctxt from '../util/Ctxt'
import styles from './css/HeaderMenuItem.module.css'

export default class HeaderMenuItem extends Component {
    state = {
        style: {
            backgroundColor: 'inherit',
            height: '100%',
            display: 'flex',
            cursor: 'pointer'
        },
        mStyle: {
            marginLeft: 5,
            marginRight: 5
        },
        font: {
            color: 'white',
            size: 15
        }
    };

    constructor(props){
        super(props);
        this.state.mStyle = {
            marginLeft: this.props.margin,
            marginRight: this.props.margin
        }
    }

    componentDidMount() {
        let cStyle = Object.assign({}, this.state.style);
        // cStyle.backgroundColor = util.makeRandomColor();
        this.setState({
            style: cStyle,
            mStyle: {
                marginLeft: this.props.margin,
                marginRight: this.props.margin
            }
        });
    }

    render() {
        return (
            <li className="header-menu-item" style={this.state.style}>
                <div className={`${styles['margin']}`} style={this.state.mStyle}>
                    <Ctxt data={this.props.value} color={this.state.font.color} size={this.state.font.size}/>
                </div>
            </li>
        );
    }
}