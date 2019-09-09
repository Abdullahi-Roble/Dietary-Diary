import React, {Component} from 'react';
import Meals from './Meals';
// import firebase from './firebase';
class Diet extends Component {

    // constructor() {

    //     super();
    //     this.state = {
    //         total: '',
    //         calsEaten: ''
    //     }
    // }

    // handleChange = event => {
    //     this.setState({[event.target.name]: event.target.value});
    // }

    render() {
        return (
            <div>
                {Meals.map((meal) => {
                    return (
                        <div className="mealTime">
                            <fieldset>
                                <label>
                                {meal.name}:
                                </label>
                                <input
                                type="text" 
                                name="userMeal" 
                                id="userMeal" 
                                placeholder={meal.input}
                                onChange={this.props.captureUserInput}
                                value={this.props.userMeal}
                                />
                                <input type="text" 
                                name="calsEaten" 
                                id="calsEaten" 
                                placeholder={meal.putin}
                                onChange={this.props.getUserInput}
                                // value={this.state.userCals}
                                />
                            </fieldset>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Diet;