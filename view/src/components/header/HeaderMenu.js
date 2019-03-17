import React, {Component} from 'react';
import HeaderMenuItem from './HeaderMenuItem';

export default class HeaderMenu extends Component {
    state = {
        style: {
            margin: '0px',
            padding: '0px',
            display: 'flex',
            listStyle: 'none',
            height: '100%'
        },
        menuItemMargin: 10
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <ul className="header-menu" style={this.state.style}>
                {this.props.menuItems.map((value, key) => {
                    return <HeaderMenuItem value={value} key={key} margin={this.state.menuItemMargin}/>
                })}
            </ul>
        );
    }
}

HeaderMenu.defaultProps = {
    menuItems: []
};