import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Auth from '../Auth'

class Create extends Component {
    render = ()=>{
        return (
            <>
            <nav className='navbar'>
                <ul className='ul'>
                    <li className='link aLeft1'><a href='#'>Buy</a></li>
                    <li className='link aLeft2'><a href="/about">About us</a></li>
                    <a href="https://pure-stream-81491.herokuapp.com/"><img className='logo' src="https://lh3.googleusercontent.com/i6uumc_ebN47nE2tfJ8WEcOoi5fAwaSJrrBxlCojpKKiO2XVJhFlrglng_EaqsdTjKmWtbz0l6ibzYa8q7-EEXtOnfqTnOQqKEZqi8qTdzQfy7mhdhSLG3BkCLnQUbUI18Yqkp2sphc=w2400" alt="logo" /></a>
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
                                 <br />ltliving
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
                    <li className='link aRight1'>
                        <a  
                            onClick={()=>{
                                Auth.login(()=>{
                                    this.props.history.push("/altliving")
                                })
                            }}
                            >Log Out</a>
                    </li>
                    {/* <li className='link aRight2'><a href='#'>Sign Up</a></li> */}
                </ul>
            </nav>
        )
        </>    
        )
    }
}

export default withRouter(Create)