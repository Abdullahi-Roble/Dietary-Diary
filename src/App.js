import React, {Component} from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Alloted from './Components/Alloted.js';
// import Diet from './Components/Diet.js';
import Consumed from './Components/Consumed.js';
import Remaining from './Components/Remaining.js';
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
      user1Meal: '',
      user2Meal: '',
      user3Meal: '',
      user4Meal: '',
      user1Cals: '',
      user2Cals: '',
      user3Cals: '',
      user4Cals: '',
    })
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      // console.log(response.val());
      const newMeal = [];

      const data = response.val();
      // console.log(data);

      for (let key in data) {
        // console.log(key);
        const mealObject = data[key];
        mealObject.removeKey = key;
        // console.log(mealObject);
        newMeal.push(mealObject);
      }

      this.setState({
        meals: newMeal
      });
    });
  }

  removeMeal = mealId => {
    const dbRef = firebase.database().ref();

    dbRef.child(mealId).remove();
  }
  
  render() {
    return (

      <div className="App">
        <Header />
        <div className="wrapper">
          <form action="submit">
            <Alloted userCalInput={this.handleGoalChange} calsValue={this.state.cals} />
            <Remaining calsPlanned={this.state.cals} />
            <Consumed calsEaten={this.state.result} />
            {/* <Diet captureUserInput={this.handleMealChange}  eatenUserInput={this.handleNetChange} /> */}
            <Breakfast captureUserInput={this.handleMealChange} getUserInput={this.handleNum1Change} clearValue={this.state.user1Meal} valueClear={this.state.user1Cals} />
            <Lunch captureUserInput={this.handleMealChange} getUserInput={this.handleNum2Change} clearValue={this.state.user2Meal} valueClear={this.state.user2Cals} />
            <Dinner captureUserInput={this.handleMealChange} getUserInput={this.handleNum3Change} clearValue={this.state.user3Meal} valueClear={this.state.user3Cals} />
            <Snacks captureUserInput={this.handleMealChange} getUserInput={this.handleNum4Change} clearValue={this.state.user4Meal} valueClear={this.state.user4Cals} />
            <button onClick={this.handleFormSubmit}>Save</button>
          </form>
        </div>
        <div>
          <div className="shownResults">
            {this.state.meals.map((meal) => {
              return (
                <div className="resultBlocks">
                  <ul>
                    <li>
                      <p>{meal.food}: {meal.cals} calories</p>
                    </li>
                  </ul>
                  <button onClick={() => this.removeMeal(meal.removeKey)}>Remove Food</button>
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

