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