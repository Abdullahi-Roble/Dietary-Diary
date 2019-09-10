import React, { Component } from 'react';

class Lunch extends Component {

    render() {
        return (
            <div>
                <div className="mealTime">
                    <fieldset>
                        <label>
                            Lunch:
                        </label>
                        <textarea
                            type="text"
                            name="userMeal"
                            id="userMeal"
                            placeholder="Enter Food"
                            onChange={this.props.captureUserInput}
                            value={this.props.clearValue}
                        />
                        <input type="text"
                            name="calsEaten"
                            id="calsEaten"
                            placeholder="Enter Calories"
                            onChange={this.props.getUserInput}
                            value={this.props.valueClear}
                        />
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Lunch;