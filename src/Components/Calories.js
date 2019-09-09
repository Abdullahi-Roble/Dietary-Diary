import React, {Component} from 'react';
// import Food from './Food.js';
import Alloted from './Alloted.js';
import Remaining from './Remaining';

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
                {/* {Food.map((kcal) => {
                    return (
                        <form>
                            <label>{kcal.name} =</label>
                            <input className="calInput" type="text" placeholder={kcal.input} onChange={this.props.getUserInput} />
                        </form>
                        
                    )
                })} */}
                <Alloted />
                <Remaining />
            </div>
        )
    }
}

export default Calories;