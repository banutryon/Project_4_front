import React, {Component} from 'react'

class Navbar extends Component {
    render = () => {
        return (
            <nav className='navbar'>
                <ul className='left-link'>
                    <li className='buy'><a href='#'>Buy</a></li>
                    <li className='about-us'><a href="#">About us</a></li>
                </ul>
                <div className='logo'>ALT Living</div>
                <ul className='right-link'>
                    <li className='login'>Login</li>
                    <li className='signup'>Sign up</li>

                    <li className='create'>
                        <details>
                            <summary>Create</summary>
                                <label htmlFor="name">Name</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="name"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.name} /> 
                                 <br />

                                 <label htmlFor="street">Street</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="street"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.street} />
                                 <br />
                                 
                                 <label htmlFor="address">Address</label>
                                 <br />
                                  <input 
                                 type="text" 
                                 id="address"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.address} />
                                 <br />

                                 <label htmlFor="state">State</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="state"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.state} /> 
                                 <br />

                                 <label htmlFor="zipcode">Zipcode</label>
                                 <br />
                                  <input 
                                 type="text" 
                                 id="zipcode"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.zipcode} />  
                                 <br />

                                 <label htmlFor="name">Latitude</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="lat"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.lat} /> 
                                 <br />

                                 <label htmlFor="name">Longitude</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="lng"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.lng} /> 
                                 <br />

                                  <label htmlFor="name">Name</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="name"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.name} /> 
                                 <br />

                                 <label htmlFor="img1">Image 1</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img1"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.img1} />  
                                 <br />

                                 <label htmlFor="img2">Image 2</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img2"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.img2} />  
                                 <br />

                                 <label htmlFor="img3">Image 3</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img3"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.img3} />  
                                 <br />

                                 <label htmlFor="descrption">Description</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="description"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.description} />  
                                 <br />

                                 <label htmlFor="name">Price</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="price"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.price} /> 
                                 <br />

                                 <button
                                  className="createButton"
                                 value={this.props.state.id} 
                                 onClick={this.props.handleChange}>
                                Create 
                               </button>

                        </details>
                    </li>   
                </ul>
                


             
                {/* <div className='logout'>
                    <h4>Logout</h4>
                </div> */}

                {/* <div className='create'>
                    <h4>Make a listing</h4>
                </div> */}
            </nav>
        )
    }
}


export default Navbar