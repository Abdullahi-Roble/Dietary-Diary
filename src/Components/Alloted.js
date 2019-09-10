import React, {Component} from 'react';

class Alloted extends Component {
    render() {
        return (
            <fieldset>
                <label>Alloted Calories:</label>
                <input className="calInput" type="text" placeholder="Enter Calories" value={this.props.calsValue} onChange={this.props.userCalInput} />
            </fieldset>
        )
    }
}

export default Alloted;