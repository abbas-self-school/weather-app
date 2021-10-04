import React, {Component} from 'react';
import Link from 'next/link';
import Form from './form';
import Weather from './weather';

const API_KEY = '5834e9ebac439e57a6489dab297baa8c';

// link data = 'http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44';

class WeatherApp extends Component {

  state = {
    temperature: '',
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

    console.log(data)

    if(city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter Country And City'
      })
    }
  }

  render () {
    return (
      <div className="w-full relative">
        <img src="/weather.jpg"
        className="absolute w-[100%] h-[900px] z-0 top-0" 
        alt="" />
        <div className="w-[80%] m-auto mt-8 z-50 relative">
          <h1 className="text-2xl xl:text-6xl text-white text-center my-6">Weather of city</h1>
          <Form getWeather={this.getWeather} />
          <Weather
            temperature= {this.state.temperature}
            city= {this.state.city}
            country= {this.state.country}
            humidity= {this.state.humidity}
            description= {this.state.description}
            error= {this.state.error}
          />
        </div>
        <div className="w-[80%] m-auto mt-20 mb-3 text-center z-50 relative">
          <span className="text-sm xl:text-xl text-white">
              Developed by: 
              <Link href="/">
                  <span className="text-sm xl:text-xl text-blue-400 cursor-pointer"> Abbas Msheik</span>
              </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherApp;
