import React, {Component} from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Calories from './Components/Calories.js';
import Diet from './Components/Diet.js';
// import Meals from './Components/Meals.js';
import './App.css';
import firebase from './firebase';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      meals: [],
      // diet: []
    }
  }

  handleCalsRemain = event => {
    this.setState({calsEaten: event.target.value})
  }

  handleMealChange = event => {
    this.setState({userMeal: event.target.value})
  }

  handleCalorieChange = event => {
    this.setState({userCals: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.userCals);

    const mealTime = {
      food: this.state.userMeal,
      cals: this.state.userCals,
    }

    const dbRef = firebase.database().ref();

    dbRef.push(mealTime);

    this.setState({userMeal: ''})
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      // console.log(response.val());
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        meals: newState
      });
    });
  }
  
  render() {
    return (

      <div className="App">

        <Header />
        <div>
          <Calories getUserInput={this.handleCalsRemain} getAllInfo={this.handleSubmit} />
        </div>
        <p>Hello</p>
        <div>
          <div>
            {this.state.meals.map((meal) => {
              return <p>{meal.food}: {meal.cals} calories</p>
            })}
          </div>
          <div>
            <Diet captureUserInput={this.handleMealChange} getUserInput={this.handleCalorieChange} getAllInfo={this.handleSubmit} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
