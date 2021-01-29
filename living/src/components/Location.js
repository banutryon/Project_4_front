import React, { Component } from 'react'

class Location extends Component {
    render = () => {
        return (
            <div ClassName="locations">
                <h4>Name: {this.props.locations.name}</h4>
                <h5>Street: {this.props.locations.street}</h5>
                <h5>City: {this.props.locations.city}</h5>
                <h5>State: {this.props.locations.state}</h5>
                <h5>Zipcode: {this.props.locations.zipcode}</h5>
                <img className="img1" src={this.state.img1} alt="images" />
                <img className="img1" src={this.state.img2} alt="images" />
                <img className="img1" src={this.state.img3} alt="images" />
                <p>Description: {locations.description}</p>

                <detials>
                    <summary>Edit Person</summary>
                    <form id={this.props.location.id}
                    onSubmit={this.props.person.id}>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" id="name" 
                    onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="street">Street</label>
                    <br />
                    <input type="text" id="street" 
                    onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="city">City</label>
                    <br />
                    <input type="text" id="city" 
                    onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="state">State</label>
                    <br />
                    <input type="text" id="state" 
                    onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="img1">Image1</label>
                    <br />
                    <input type="text" id="img1" 
                    onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="img2">Image2</label>
                    <br />
                    <input type="text" id="img2" 
                    onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="img3">Image3</label>
                    <br />
                    <input type="text" id="img3" 
                    onChange={this.props.handleChange} />
                    <br />
                    <label htmlFor="description">Description</label>
                    <br />
                    <input type="text" id="description" 
                    onChange={this.props.handleChange} />
                    <br />
                    <input type="submit" value="Update Location" />

                    </form>
                </detials>
                <button value={this.props.location.id} 
                onClick={this.props.deleteLocation}>Delete</button>
            </div>

        )
    }

}


export default Location