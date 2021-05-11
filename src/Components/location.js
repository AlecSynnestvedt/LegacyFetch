import React, { Component } from 'react';

const key = "793c3779a280f8d4077e1cd9c08b8a21"
const URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

class Location extends Component <{}, FetchState> {
  constructor(props:{}) {
    super(props);
      this.state = {
          name:"",
          temp: 0
      }
  }
}
  constructor(props) {
    super(props);
    this.state = {

    };
  }
youAreHere() {
  navigator.geolocation.getCurrentPosition(function(locate) {
    console.log('Lat is:', pos.locate);
    console.log('Lon is:', pos.locate);
    
    this.setState({
      lon: locate.coords.longitude,
      lat: locate.coords.latitude
    });
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${key}`)
      .then(res => res.json())
        .then(data => {this.setState({weather: data.weather.description, temp: data.main.temp, name: data.name })})
          .catch(conslole.log)
    });
}

  componentDidMount() {
   this.locate()
  }
  render(){
    return(
      <div>
        <h3>Get Location!</h3>
      </div>
      )
    }
  
export default Location;

/*
-------------
sample from doc
------------
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
*/
