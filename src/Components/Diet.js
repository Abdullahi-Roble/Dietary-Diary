import React, {Component} from 'react';
import Meals from './Meals';

class Diet extends Component {
    render() {
        return (
            <div>
                {Meals.map((meal) => {
                    return (
                        <form action="submit">
                            <label 
                            htmlFor="mealName">
                            {meal.name} :
                            </label>
                            <textarea 
                            rows="10" 
                            columns="10" 
                            type="text" 
                            name="userMeal" 
                            id="foodsEaten" 
                            placeholder={meal.input} />
                            <input type="text" 
                            name="userCals" 
                            id="calsEaten" 
                            placeholder={meal.putin} />
                        </form>
                    )
                })}
            </div>
        )
    }
}

export default Diet;