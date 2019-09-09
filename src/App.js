import React, {Component} from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
// import Alloted from './Components/Alloted.js';
// import Diet from './Components/Diet.js';
// import Consumed from './Components/Consumed.js';
// import Remaining from './Components/Remaining.js';
import Breakfast from './Components/Breakfast.js';
import Lunch from './Components/Lunch.js';
import Dinner from './Components/Dinner.js';
import Snacks from './Components/Snacks.js';
import './App.css';
import firebase from './firebase';

class App extends Component {
  
  constructor() {

    super();
    this.state = {
      cals: '',
      meals: [],
      result: '',
      calsEaten: ''
    }
  }

  // handleCalsRemain = event => {
  //   this.setState({calsEaten: event.target.value})
  // }

  // handleNameChange = event => {
  //   this.setState({mealName: event.target.value})
  // }

  handleGoalChange = event => {
    this.setState({cals: event.target.value})
  }

  handleMealChange = event => {
    this.setState({userMeal: event.target.value})
  }

  handleCalorieChange = event => {
    this.setState({userCals: event.target.value})
  }

  handleNetChange = event => {
    const calsEaten = Number(event.target.value);
    this.setState(prevState => ({
      // calsEaten,
      result: calsEaten + prevState.calsEaten
    }));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.userCals);

    const mealTime = {
      // name: this.state.mealName,
      food: this.state.userMeal,
      cals: this.state.userCals,
    }

    const dbRef = firebase.database().ref();

    dbRef.push(mealTime);

    this.setState({userMeal: ''})

    this.setState({userCals: ''})
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      // console.log(response.val());
      const newMeal = [];

      const data = response.val();

      for (let key in data) {
        newMeal.push(data[key]);
      }

      this.setState({
        meals: newMeal
      });
    });
  }
  
  render() {
    return (

      <div className="App">
        <Header />
        <div className="formatPage">
          <form action="submit">
            {/* <Alloted userCalInput={this.handleCalsRemain} /> */}
            <fieldset>
              <label>Goal Caloric Intake:</label>
              <input className="calInput" type="text" placeholder="Alloted Calories" value={this.state.cals} onChange={this.handleGoalChange} />
            </fieldset>
            {/* <Remaining /> */}
              <p>Calories Remaining = {this.state.cals}</p>
            {/* <Diet captureUserInput={this.handleMealChange}  eatenUserInput={this.handleNetChange} */}
            {/* getUserInput={this.handleCalorieChange}  */}
            {/* /> */}
            <Breakfast captureUserInput={this.handleMealChange} eatenUserInput={this.handleNetChange} />
            <Lunch captureUserInput={this.handleMealChange} eatenUserInput={this.handleNetChange} />
            <Dinner captureUserInput={this.handleMealChange} eatenUserInput={this.handleNetChange} />
            <Snacks captureUserInput={this.handleMealChange} eatenUserInput={this.handleNetChange} />
            {/* <Consumed /> */}
            <fieldset>
              <label className="calsRem">Total Calories =</label>
              <input type="text" value={this.state.result} readOnly />
            </fieldset>
            <button onClick={this.handleFormSubmit}>Save</button>
          </form>
        </div>
        <div>
          <div className="shownResults">
            {this.state.meals.map((meal) => {
              return <p>{meal.food}: {meal.cals} calories</p>
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

/* <p>Hello</p> */

// getAllInfo = { this.handleSubmit }
// getAllInfo = { this.handleSubmit }

/* action="submit" onSubmit={this.props.getAllInfo} */

