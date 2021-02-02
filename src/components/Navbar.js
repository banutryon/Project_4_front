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
                
                    <li className='link aLeft1'><a href='#'>Buy</a></li>
                    <li className='link aLeft2'><a href="#">About us</a></li>
                    
                    
                    <a href="https://pure-stream-81491.herokuapp.com/"><img className='logo' src="https://lh3.googleusercontent.com/i6uumc_ebN47nE2tfJ8WEcOoi5fAwaSJrrBxlCojpKKiO2XVJhFlrglng_EaqsdTjKmWtbz0l6ibzYa8q7-EEXtOnfqTnOQqKEZqi8qTdzQfy7mhdhSLG3BkCLnQUbUI18Yqkp2sphc=w2400" alt="logo" /></a>
                
                    <li className='link aRight1'>
                        <a 
                        href='' 
                        onClick={()=>{
                                Auth.login(()=>{
                                    props.history.push("/admin")
                                })
                            }}
                            >Log in</a>
                    </li>
                    <li className='create'>
                        <ProtectedRoute exact path="/admin">
                            <Create
                                state={props.state} />
                        </ProtectedRoute>
                    </li> 
                    <li className='link aRight2'><a href='#'>Sign Up</a></li>
                </ul>
            </nav>
        )
    // }
}


export default withRouter(Navbar)