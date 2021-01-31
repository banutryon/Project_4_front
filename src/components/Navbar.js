import React, {Component} from 'react'

class Navbar extends Component {
    render = () => {
        return (
            <nav className='navbar'>
                <ul className='left-link'>
                    <li className='buy'>Buy</li>
                    <li className='about-us'>About us</li>
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

                        </details>
                    </li>   
                </ul>
                <div className='HomeImg'>
                    <img src="https://images.unsplash.com/photo-1508913950751-d1d139a29e68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt='HomeImg'/>
                </div>


             
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