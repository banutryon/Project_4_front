import React, { Component } from 'react'
import Location from './components/Location'

import axios from 'axios'

class App extends React.Component {
  state = {
    name: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    img1: '',
    img2: '',
    img3: '',
    locations: [],
  }
  // Handle atributes allow you to create 
  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/locations', this.state).then((response) => {
      this.getLocations()
    })
  }
// ===========DELETE ==================
  deleteLocation = (event) => {
    axios.delete('/locations/' + event.target.value).then((response) => {
      this.getLocations()

    })
  }
// ===========UPDATE ==================

  updateLocation = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios.put('/people/' + id, this.state).then((response) => {
      this.getLocations()
    })
  }
// ===========GET ==================

  getLocations = () => {
    axios
    .get('/locations')
    .then(
      (response) => this.setState({ locations: response.data }),
      (err) => console.error(err) 
    )
    .catch((error) => console.error(error))
  }
// ===========DID MOUNT ==================

  componentDidMount = () => {
    this.getLocations()
  }

// ===========Display ON SCREEN RENDER ==================

  render = () => {
    return (
    <div>
      <h1>Hello World</h1>
    
    
    {this.state.locations.map((location) => {
      return <Location key={location.id} 
      location={location}
      updateLocation={this.updateLocation}
      deleteLocation={this.deleteLocation}
      handleChange={this.handleChange}
       />
    })}
    </div>
    )
  }
}

export default App
