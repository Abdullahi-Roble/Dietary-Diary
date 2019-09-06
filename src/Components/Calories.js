import React, {Component} from 'react';
import Food from './Food.js';

class Calories extends Component {
    render() {
        return (
            <div>
                {Food.map((kcal) => {
                    return (
                        <form>
                            <label>{kcal.name} =</label>
                            <input type="text" placeholder={kcal.input} />
                        </form>
                    )
                })}
            </div>
        )
    }
}

export default Calories;