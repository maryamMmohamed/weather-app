import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "a90591f4f7ac781d8172d9ea2937995f";

class App extends Component {

  state = {
    temprature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api.json();
    //console.log(data);
    if (city && country) { // y3ny lw d5lt city w country a3ml update 8er kda 5lehom fadyen 
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
    else {
      this.setState({
        temprature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'please enter data'
      })
    }
  }

  render() {

    return (
      <div className='wrapper'>
        <div className='form-container'>
          <Form getWeather={this.getWeather} />
          <Weather temprature={this.state.temprature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error} />
        </div>
      </div>
    )
  }

}

export default App;
