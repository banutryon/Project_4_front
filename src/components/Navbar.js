import React, {Component} from 'react'

class Navbar extends Component {
    render = () => {
        return (
            <nav className='navbar'>
                <ul className='left-link'>
                
                    <li className='link'><a href='#'>Buy</a></li>
                    <li className='link'><a href="#">About us</a></li>
                    <li className='create'>
                        <details className="createDetails">
                            <summary><img 
                                className="createImg"
                                src="https://lh3.googleusercontent.com/tzAcogOtr6ASgImIZ3VgwXGtpGyGMHeiZdQ4sz_WozasKt6pTmI2_ZDn44xE5LUMDI5tLBydaCFcrreeK8JIlKwbe51UXmlkZvXwfrsvsYiqnS1yuAlh4oAnQxYG10rojNOH7oXI0Do=w2400" 
                                alt="create icon" /></summary>
                                <div className="grid-container">
                                <form 
                                className="createForm"
                                onSubmit={this.props.handleSubmit}>
                                
                                <div className="grid-item">
                                <label htmlFor="name">Name</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="name"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.name} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="street">Street</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="street"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.street} />
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="city">City</label>
                                 <br />
                                  <input 
                                 type="text" 
                                 id="city"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.address} />
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="state">State</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="state"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.state} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="zipcode">Zipcode</label>
                                 <br />
                                  <input 
                                 type="text" 
                                 id="zipcode"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.zipcode} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="name">Latitude</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="lat"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.lat} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="name">Longitude</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="lng"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.lng} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="img1">Image 1</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img1"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.img1} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="img2">Image 2</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img2"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.img2} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="img3">Image 3</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img3"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.img3} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="description">Description</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="description"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.description} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="name">Price</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="price"
                                 onChange={this.props.handleChange}
                                 value={this.props.state.price} /> 
                                 <br />
                                 </div>
                                 
                                 </form>
                                 
                                 <button
                                  className="createButton"
                                 value={this.props.state.id} 
                                 onClick={this.props.handleSubmit}>
                                Create 
                               </button>
                               </div>
                        </details>
                    </li> 
                </ul>
                <a href="https://pure-stream-81491.herokuapp.com/"><img className='logo' src="https://lh3.googleusercontent.com/i6uumc_ebN47nE2tfJ8WEcOoi5fAwaSJrrBxlCojpKKiO2XVJhFlrglng_EaqsdTjKmWtbz0l6ibzYa8q7-EEXtOnfqTnOQqKEZqi8qTdzQfy7mhdhSLG3BkCLnQUbUI18Yqkp2sphc=w2400" alt="logo" /></a>
                <ul className='right-link'>
                  
                    <li className='link'><a href='#'>Log in</a></li>
                    <li className='link'><a href='#'>Sign Up</a></li>
                    
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