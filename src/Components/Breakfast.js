import React, { Component } from 'react';

class Breakfast extends Component {

    render() {
        return (
            <div>
                <div className="mealTime">
                    <fieldset>
                        <label>
                            Breakfast:
                        </label>
                        <textarea
                            type="text"
                            name="userMeal"
                            id="userMeal"
                            placeholder="Enter Food"
                            onChange={this.props.captureUserInput}
                            // value={this.props.userMeal}
                        />
                        <input type="text"
                            name="calsEaten"
                            id="calsEaten"
                            placeholder="Enter Calories"
                            onChange={this.props.getUserInput}
                        // value={this.state.userCals}
                        />
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Breakfast;