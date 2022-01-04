import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';

export default class weather extends Component {
    constructor(props) {
      super(props);
      this.state = {
        location: 'chennai',
        place: '',
        current_temp: '',
        cloud:'',
        minimun_temp:'',
        maximum_temp:'',
        wind_speed: '',
        wind_direction:'',
        pressure:'',
        humadity:'',
      };
    }

    componentDidMount(){
        this.getWeather();
    }

    changeValue = (event) => {
      this.setState({
          location: event.target.value,
      });
    };

    getWeather = () => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=imperial&appid=333458e05b25c5e69a7c22d64b7bc47f`
        )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
              place: data.name,
              cloud: data.weather[0].description,
              current_temp: data.main.temp,
              minimum_temp: data.main.temp_min,
              maximun_temp: data.main.temp_max,
              wind_speed: data.wind.speed,
              wind_direction: data.wind.deg,
              pressure: data.main.pressure,
              humidity: data.main.humidity,
            });
        });
    };

    render() {
        return (
            <div className="weather-group">
              <h1 className="weather-title">Weather watch</h1>
              <div className="location-search">
                <div className="location-input">
                    <input
                      className="input" onChange={this.changeValue} type="text" value={this.state.location}
                    />
                </div>
                <div className="btn-primary">
                  <button onClick={this.getWeather}>check weather</button>
                </div>                          
              </div>

              <div className="location-details">
                <div className="location-cloud">
                  <h2>{this.state.place}</h2>
                  <p>{this.state.cloud}</p>
                </div>
                <div>
                  <p>
                    Current Temperature<br/>
                    {this.state.current_temp}{''}
                  </p>
                  <p>
                    Minimum Temperature<br/>
                    {this.state.minimun_temp}{''}
                  </p>
                  <p>
                    Maximum Temperature<br/>
                    {this.state.maximum_temp}{''}
                  </p>
                </div>
                <div className="location-wind">
                  <p>
                    Wind Speed <br/>
                    {this.state.wind_speed}
                  </p>
                  <p>
                    Wind Direction <br/>
                    {this.state.wind_speed}{''}
                  </p>
                </div>
                <div className="location-pres">
                  <p>
                    Pressure <br/>
                    {this.state.pressure}{''}
                  </p>
                  <p>
                    Humadity <br/>
                    {this.state.humadity}{''}
                  </p>
                </div>                
              </div>
            </div>
        );
    }
}