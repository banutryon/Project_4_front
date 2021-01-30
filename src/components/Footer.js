import React, {Component} from 'react'

class Footer extends Component {
    render = () => {
        return (
            <div className='footer'>
                <ul className='footlinks'>
                    <li className='about'>About</li>
                    <li className='terms'>Terms of Use</li>
                    <li className='help'>Help</li>
                    <li className='contact'>Contact Us</li>
                    <li className='feedback'>Provide Feedback</li>
                    <li className='social'>LinkedIn</li>
                </ul>
                <div>
                    <p>Information about our User story, what makes use diffrent, our mission and a little bit about what inspired us.</p>
                </div>
            </div>

            
            

        )
    }
}

export default Footer