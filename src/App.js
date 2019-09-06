import React, {Component} from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Calories from './Components/Calories.js';
import Diet from './Components/Diet.js';
import './App.css';
import firebase from './firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meal: [],
      userInput: ''
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

      dbRef.on('value', (response) => {
      
      const data = response.val();
      
      const newState =  [];


      for (let key in data) {
        newState.push({ 
          Meals: data[key],
          uniqueKey: key,
        });  
      }

      this.setState({
        calories: newState
      });
    })
  }

  handleChange = (event) => {
    this.setState({
      userMeal: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const dbRef = firebase.database().ref();

    dbRef.push(this.state.userCals);

    this.setState({
      userInput: '',
    });
  };

  render() {
    return (
      <div className="App">

          <Header />
          <div>
            <Calories />
          </div>
          <div>
            <Diet />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
