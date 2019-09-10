import React, { Component } from 'react';

class Remaining extends Component {
    render() {
        return (
            <div className="totalCals">
                <p>Goal Caloric Intake = <span>{this.props.calsPlanned}</span></p>
            </div>
        )
    }
}

export default Remaining;