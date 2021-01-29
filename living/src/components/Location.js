import React, { Component } from 'react'

class Location extends Component {
    render = () => {
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


export default Location