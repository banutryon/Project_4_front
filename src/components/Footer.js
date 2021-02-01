import React, {Component} from 'react'

class Footer extends Component {
    render = () => {
        return (
            <div className='footer'>
                <ul className='footlinks'>
                    <li className='about'><a href='#'>About</a></li>
                    <li className='terms'><a href='#'>Terms of Use</a></li>
                    <li className='help'><a href='#'>Help</a></li>
                    <li className='contact'><a href='#'>Contact Us</a></li>
                    <li className='feedback'><a href='#'>Provide Feedback</a></li>
                    <li className='social'><a href='#'>LinkedIn</a></li>
                </ul>
                <div>
                    <p>Information about our User story, what makes use diffrent, our mission and a little bit about what inspired us.</p>
                </div>
            </div>

            
            

        )
    }
}

export default Footer
