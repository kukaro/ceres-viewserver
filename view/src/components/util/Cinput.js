import React, {Component} from 'react';

export default class Cinput extends Component {
    state = {
        style: {
            width: this.props.width,
            height: this.props.height
        },
        iStyle:{
            width:'100%',
            height:'100%'
        }
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cinput" style={this.state.style}>
                <input style={this.state.iStyle}/>
            </div>
        )
    }
}

Cinput.defaultProps = {
    width: '100%',
    height: '100%'
};