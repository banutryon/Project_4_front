import React from 'react'
import Create from './Create'
import { withRouter } from 'react-router-dom'
import Auth from '../Auth'
import ProtectedRoute from '../Protected.route'

export const Navbar = (props) => {
    // render = () => {
        return (
            <nav className='navbar'>
                <ul className='ul'>
                    <li className='link aLeft1'><a 
                        href='' 
                        onClick={()=>{
                                Auth.login(()=>{
                                    props.history.push("/altliving/admin")
                                })
                            }}
                            >Log in</a></li>
                    <li className='link aLeft2'><a href="/about">About us</a></li>
                    
                    
                    <a href="https://pure-stream-81491.herokuapp.com/altliving"><img className='logo' src="https://lh3.googleusercontent.com/i6uumc_ebN47nE2tfJ8WEcOoi5fAwaSJrrBxlCojpKKiO2XVJhFlrglng_EaqsdTjKmWtbz0l6ibzYa8q7-EEXtOnfqTnOQqKEZqi8qTdzQfy7mhdhSLG3BkCLnQUbUI18Yqkp2sphc=w2400" alt="logo" /></a>
                    {/* <li className='create'>
                    <details className="createDetails">
                            <summary><img 
                                className="createImg"
                                src="https://lh3.googleusercontent.com/tzAcogOtr6ASgImIZ3VgwXGtpGyGMHeiZdQ4sz_WozasKt6pTmI2_ZDn44xE5LUMDI5tLBydaCFcrreeK8JIlKwbe51UXmlkZvXwfrsvsYiqnS1yuAlh4oAnQxYG10rojNOH7oXI0Do=w2400" 
                                alt="create icon" /></summary>
                                <div className="grid-container">
                                <form 
                                className="createForm"
                                onSubmit={props.handleSubmit}>
                                
                                <div className="grid-item">
                                <label htmlFor="name">Name</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="name"
                                 onChange={props.handleChange}
                                 value={props.state.name} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="street">Street</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="street"
                                 onChange={props.handleChange}
                                 value={props.state.street} />
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="city">City</label>
                                 <br />
                                  <input 
                                 type="text" 
                                 id="city"
                                 onChange={props.handleChange}
                                 value={props.state.address} />
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="state">State</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="state"
                                 onChange={props.handleChange}
                                 value={props.state.state} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="zipcode">Zipcode</label>
                                 <br />
                                  <input 
                                 type="text" 
                                 id="zipcode"
                                 onChange={props.handleChange}
                                 value={props.state.zipcode} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="name">Latitude</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="lat"
                                 onChange={props.handleChange}
                                 value={props.state.lat} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="name">Longitude</label>
                                <br />
                                 <input 
                                 type="text" 
                                 id="lng"
                                 onChange={props.handleChange}
                                 value={props.state.lng} /> 
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="img1">Image 1</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img1"
                                 onChange={props.handleChange}
                                 value={props.state.img1} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="img2">Image 2</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img2"
                                 onChange={props.handleChange}
                                 value={props.state.img2} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="img3">Image 3</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="img3"
                                 onChange={props.handleChange}
                                 value={props.state.img3} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="description">Description</label>
                                 <br />
                                 <input 
                                 type="text" 
                                 id="description"
                                 onChange={props.handleChange}
                                 value={props.state.description} />  
                                 <br />
                                 </div>

                                 <div className="grid-item">
                                 <label htmlFor="name">Price</label>
                                <br />3000
                                 <input 
                                 type="text" 
                                 id="price"
                                 onChange={props.handleChange}
                                 value={props.state.price} /> 
                                 <br />
                                 </div>
                                 
                                 </form>
                                 
                                 <button
                                  className="createButton"
                                 value={props.state.id} 
                                 onClick={props.handleSubmit}>
                                Create 
                               </button>
                               </div>
                        </details>
                    </li> */}
                    <li className='link aRight1'>
                    <a href='#'>Buy</a>  
                    </li>
                    <li className='create'>
                        <ProtectedRoute exact path="/admin">
                            <Create
                                state={props.state} />
                        </ProtectedRoute>
                    </li> 
                    {/* <li className='link aRight2'><a href='#'>Sign Up</a></li> */}
                </ul>
            </nav>
        )
    // }
}


export default withRouter(Navbar)