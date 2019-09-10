import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="appHead">
                    <h1>Di<span className="titleStyle">et</span>ary</h1>
                    <h2>Track your food intake</h2>
                </div>
            </header>
        )
    }
}

export default Header;