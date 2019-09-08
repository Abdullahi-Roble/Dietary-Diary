import React, {Component} from 'react';
import Food from './Food.js';

class Calories extends Component {

    constructor() {
        super();
        this.state = {
            cals: []
        }
    }

    

    render() {
        return (
            <div className="calorieCount">
                {Food.map((kcal) => {
                    return (
                        <form>
                            <label>{kcal.name} =</label>
                            <input className="calInput" type="text" placeholder={kcal.input} onChange={this.props.getUserInput} />
                        </form>
                    )
                })}
            </div>
        )
    }
}

export default Calories;