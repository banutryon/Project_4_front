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