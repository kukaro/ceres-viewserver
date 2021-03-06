import React, {Component} from 'react'
import CeresHeader from './components/header/Header'
import CeresNav from './components/nav/Nav'
import CeresSection from './components/section/Section'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                padding: '0px',
                margin: '0px',
                width: '100%',
                height: '100%',
                position: 'relative'
            },
            headerHeight: 70,
            navWidth: 200
        };
    }

    render() {
        return (
            <div className="App" style={this.state.style}>
                <CeresHeader height={this.state.headerHeight}/>
                <CeresNav headerHeight={this.state.headerHeight}/>
                <CeresSection headerHeight={this.state.headerHeight} navWidth={this.state.navWidth}/>
            </div>
        );
    }
}

export default App;
