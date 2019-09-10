import React, { Component } from 'react';

class Consumed extends Component {
    render() {
        return (
            <div className="totalCals">
                <p>Total Calories = <span>{this.props.calsEaten}</span></p>
            </div>
        )
    }
}

export default Consumed;