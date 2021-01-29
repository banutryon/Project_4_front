import React from 'react'

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
    <div className="app">
    {this.state.locations.map((locations) => {
      return (
      <div ClassName="locations">
      <h4>Name: {locations.name}</h4>
      <h5>Street: {locations.street}</h5>
      <h5>City: {locations.city}</h5>
      <h5>State: {locations.state}</h5>
      <h5>Zipcode: {locations.zipcode}</h5>
      <img className="img1" src={this.state.img1} alt="images" />
      <img className="img1" src={this.state.img2} alt="images" />
      <img className="img1" src={this.state.img3} alt="images" />
      <p>Description: {locations.description}</p>
      </div>
      
      })}
      </div>
    )
  }
}
export default App
