import React, {Component} from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderAdmin from './HeaderAdmin'

export default class Header extends Component {

    state = {
        menuItems: [
            '검색',
            '저장 목록 보기'
        ],
        style: {
            width: '100%',
            height: this.props.height,
            backgroundColor: '#39496d',
            display: 'flex',
        }
    };

    componentDidMount() {
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header className="ceres-header" style={this.state.style}>
                <HeaderMenu menuItems={this.state.menuItems}/>
                <HeaderAdmin/>
            </header>
        );
    }
}

Header.defaultProps = {
    height: 100
};