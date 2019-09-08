import React, {Component} from 'react';
import Meals from './Meals';
// import firebase from './firebase';
class Diet extends Component {

    render() {
        return (
            <div>
                {Meals.map((meal) => {
                    return (
                        <div className="mealTime">
                            <form action="submit" onSubmit={this.props.getAllInfo} >
                                <label>
                                {meal.name} :
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
                            </form>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Diet;