import React, { Component } from 'react'

class Location extends Component {
    render = () => {
        return (
            <div className="locations">
                <h4>Name: {this.props.location.name}</h4>
                <h5>Street: {this.props.location.street}</h5>
                <h5>City: {this.props.location.city}</h5>
                <h5>State: {this.props.location.state}</h5>
                <h5>Zipcode: {this.props.location.zipcode}</h5>
                <img className="img1" src={this.props.location.img1} alt="images" />
                <img className="img1" src={this.props.location.img2} alt="images" />
                <img className="img1" src={this.props.location.img3} alt="images" />
                <p>Description: {this.props.location.description}</p>

                <details>
                    <summary>Edit Location</summary>
                    <form 
                    id={this.props.location.id}
                    onSubmit={this.props.updateLocation}>

                    <label htmlFor="name">Name</label>
                    <br />
                    <input 
                    type="text" 
                    id="name"
                    // defaultValue={this.props.location.name} 
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="street">Street</label>
                    <br />
                    <input 
                    type="text" 
                    id="street"
                    // defaultValue={this.props.location.street}
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="city">City</label>
                    <br />
                    <input 
                    type="text" 
                    id="city"
                    // defaultValue={this.props.location.city}
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="state">State</label>
                    <br />
                    <input 
                    type="text" 
                    id="state"
                    // defaultValue={this.props.location.state}
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="zipcode">Zipcode</label>
                    <br />
                    <input 
                    type="text" 
                    id="zipcode"
                    // defaultValue={this.props.location.zipcode}
                    onChange={this.props.handleChange} />
                    <br />           
{/* ============================================================ */}
                    <label htmlFor="lat">Lat</label>
                    <br />
                    <input 
                    type="text" 
                    id="lat"
                    // defaultValue={this.props.location.lat} 
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="lng">Lng</label>
                    <br />
                    <input 
                    type="text" 
                    id="lng"
                    // defaultValue={this.props.location.lng} 
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="img1">Image1</label>
                    <br />
                    <input 
                    type="text" 
                    id="img1"
                    // defaultValue={this.props.location.img1} 
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="img2">Image2</label>
                    <br />
                    <input 
                    type="text" 
                    id="img2"
                    // defaultValue={this.props.location.img2}
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="img3">Image3</label>
                    <br />
                    <input 
                    type="text" 
                    id="img3"
                    // defaultValue={this.props.location.img3}
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <label htmlFor="description">Description</label>
                    <br />
                    <input 
                    type="text"
                    id="description"
                    // defaultValue={this.props.location.description}
                    onChange={this.props.handleChange} />
                    <br />
{/* ============================================================ */}
                    <input 
                    type="submit" 
                    value="Update Location" />

                    </form>
                </details>
                <button 
                value={this.props.location.id} 
                onClick={this.props.deleteLocation}>
                    Delete</button>
            </div>
        )
    }

}


export default Location