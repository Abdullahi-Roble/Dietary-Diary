import React, { Component } from 'react';

class Snacks extends Component {

    render() {
        return (
            <div>
                <div className="mealTime">
                    <fieldset>
                        <label>
                            Snacks:
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
                            onChange={this.props.eaten4UserInput}
                        // value={this.state.userCals}
                        />
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Snacks;