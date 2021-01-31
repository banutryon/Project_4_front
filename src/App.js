import React, { Component } from 'react'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Map from './components/Map'




import axios from 'axios'

class App extends Component {
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
    axios.post('https://altliving.herokuapp.com/locations/', this.state).then((response) => {
      this.getLocations()
    })
  }
// ===========DELETE ==================
  deleteLocation = (event) => {
    let id = parseInt(event.target.value)
    axios.delete('https://altliving.herokuapp.com/locations/' + id).then((response) => {
      this.getLocations()

    })
  }
// ===========UPDATE ==================

  updateLocation = (event) => {
    event.preventDefault()
    let id = parseInt(event.target.id)
    axios
      .put('https://altliving.herokuapp.com/locations/' + id, this.state)
      .then((response) => {
        this.getLocations()
    })
  }
// ===========GET ==================

  getLocations = () => {
    axios
    .get('https://altliving.herokuapp.com/locations/')
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
      <Navbar 
      // navbar={navbar}
      />
      {/* <h1>Hello World</h1> */}
      
      <Map />
    
    {this.state.locations.map((location) => {
      return <Location key={location.id} 
      location={location}
      updateLocation={this.updateLocation}
      deleteLocation={this.deleteLocation}
      handleChange={this.handleChange}
      // handleSubmit={this.handleSubmit}
       />
    })}


    

    <Footer />
    </div>
    )
  }
}

export default App
