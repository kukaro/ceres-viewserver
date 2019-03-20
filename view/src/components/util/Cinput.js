import React, {Component} from 'react';
import style from './css/style.module.css'

export default class Cinput extends Component {
    state = {
        style: {
            width: this.props.width,
            height: this.props.height,
            display: this.props.display,

        },
        lStyle: {
            flex: 2,
            lineHeight: '100%',
            display: 'flex',
            borderTopLeftRadius: this.props.borderRadius,
            borderBottomLeftRadius: this.props.borderRadius,
            borderWidth: this.props.borderWidth,
            borderStyle: this.props.borderStyle,
            borderColor: this.props.borderColor,
        },
        iStyle: {
            flex: 8,
            lineHeight: '100%',
            borderTopRightRadius: this.props.borderRadius,
            borderBottomRightRadius: this.props.borderRadius,
            borderWidth: this.props.borderWidth,
            borderStyle: this.props.borderStyle,
            borderColor: this.props.borderColor,
        },
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cinput" style={this.state.style}>
                <div style={this.state.lStyle}>
                    <label className={`${style['center']}`}>hi</label>
                </div>
                <input style={this.state.iStyle}/>
            </div>
        )
    }
}

Cinput.defaultProps = {
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
};