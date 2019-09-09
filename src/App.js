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
      meals: [],
      cals: '',
      result: '',
      net1: '',
      net2: '',
      net3: '',
      net4: ''
    }
  }

  handleGoalChange = event => {
    this.setState({cals: event.target.value})
  }

  handleMealChange = event => {
    this.setState({userMeal: event.target.value})
  }

  handleCalorieChange = event => {
    this.setState({userCals: event.target.value})
  }

  handleNet1Change = event => {
    const net1 = Number(event.target.value);
    this.setState(prevState => ({
      net1,
      result: net1 + prevState.net2 + prevState.net3 + prevState.net4
    }));
  }

  handleNum1Change = event => {
    this.handleCalorieChange(event);
    this.handleNet1Change(event);
  }

  handleNet2Change = event => {
    const net2 = Number(event.target.value);
    this.setState(prevState => ({
      net2,
      result: prevState.net1 + net2 + prevState.net3 + prevState.net4
    }));
  }

  handleNum2Change = event => {
    this.handleCalorieChange(event);
    this.handleNet2Change(event);
  }

  handleNet3Change = event => {
    const net3 = Number(event.target.value);
    this.setState(prevState => ({
      net3,
      result: prevState.net1 + prevState.net2 + net3 + prevState.net4
    }));
  }

  handleNum3Change = event => {
    this.handleCalorieChange(event);
    this.handleNet3Change(event);
  }

  handleNet4Change = event => {
    const net4 = Number(event.target.value);
    this.setState(prevState => ({
      net4,
      result: prevState.net1 + prevState.net2 + prevState.net3 + net4
    }));
  }

  handleNum4Change = event => {
    this.handleCalorieChange(event);
    this.handleNet4Change(event);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const mealTime = {
      // name: this.state.mealName,
      food: this.state.userMeal,
      cals: this.state.userCals,
    
    }

    const dbRef = firebase.database().ref();

    dbRef.push(mealTime);

    this.setState({
      userMeal: '',
      userCals: '',
    })
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
        <div className="wrapper">
          <form action="submit">
            {/* <Alloted userCalInput={this.handleCalsRemain} /> */}
            <fieldset>
              <label>Alloted Calories:</label>
              <input className="calInput" type="text" placeholder="Alloted Calories" value={this.state.cals} onChange={this.handleGoalChange} />
            </fieldset>
            {/* <Remaining /> */}
            <p>Goal Caloric Intake = {this.state.cals}</p>
            {/* <Diet captureUserInput={this.handleMealChange}  eatenUserInput={this.handleNetChange} */}
            {/* getUserInput={this.handleCalorieChange}  */}
            {/* /> */}
            <Breakfast captureUserInput={this.handleMealChange} getUserInput={this.handleNum1Change} />
            <Lunch captureUserInput={this.handleMealChange} getUserInput={this.handleNum2Change} />
            <Dinner captureUserInput={this.handleMealChange} getUserInput={this.handleNum3Change} />
            <Snacks captureUserInput={this.handleMealChange} getUserInput={this.handleNum4Change} />
            {/* <Consumed /> */}
            <fieldset>
              <label className="calsRem">Total Calories =</label>
              <p>{this.state.result}</p>
            </fieldset>
            <button onClick={this.handleFormSubmit}>Save</button>
          </form>
        </div>
        <div>
          <div className="shownResults">
            {this.state.meals.map((meal) => {
              return (
                <div>
                  <p>{meal.food}: {meal.cals} calories</p>
                </div>
              )
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

