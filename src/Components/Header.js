import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1><span className="titleStyle">Di</span>et<span className="titleStyle">ary</span></h1>
                <h3>Track your food intake</h3>
            </header>
        )
    }
}

export default Header;