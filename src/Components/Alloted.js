import React, {Component} from 'react';

class Alloted extends Component {
    render() {
        return (
            <fieldset>
                <label>Goal Caloric Intake:</label>
                <input className="calInput" type="text" placeholder="Alloted Calories" onChange={this.props.userCalInput} />
            </fieldset>
        )
    }
}

export default Alloted;