import React, { Component } from 'react'
import '../about-css.css'

export default class AboutMe extends Component {
    render() {
        return (
            <>
                <div class="about-nav">
                    <div about-navContent>
                        <a href="https://pure-stream-81491.herokuapp.com/"><img className='about-logo' src="https://lh3.googleusercontent.com/i6uumc_ebN47nE2tfJ8WEcOoi5fAwaSJrrBxlCojpKKiO2XVJhFlrglng_EaqsdTjKmWtbz0l6ibzYa8q7-EEXtOnfqTnOQqKEZqi8qTdzQfy7mhdhSLG3BkCLnQUbUI18Yqkp2sphc=w2400" alt="logo" /></a>
                    </div>
                </div>
                <div className="about-imgCont">
                    <p className="aboutUs">About Us</p>
                    <img src="https://i.imgur.com/pcU0ha2.jpg" alt="oops" className="aboutImg"/>
                </div>
                    <div className="about-main-container">
                        <div className="about-card-container">
                            <div className="about-card">
                                <span className="about-card-title">About</span>
                                <p id="about">In our project, we decided to create a site focused on alternative living options. We call our site Alternative living. We included an interactive map option to be able to select any of our locations in the United States. In addition to that, you can scroll on the left to see a more detailed view of each location.</p>
                            </div>
                            <div className="about-card">
                                <span className="about-card-title">Feedback</span>
                                <div id="form">
                                    <label htmlFor="name">Name:</label>
                                    <input id="name" type="text"/>
                                    <label htmlFor="comment">Comment:</label>
                                    <textarea id="comment" cols="20" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="about-card">
                                <span className="about-card-title">Technologies Used</span>
                                <img className="techlogo" src="logo192.png" alt=""/>
                                <img className="techlogo" src="ruby.png" alt=""/>
                                <img className="techlogo" src="rails.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="dev-container">
                        <div className="bioCont">
                            <a href="https://www.linkedin.com/in/tryon-experiences/"><span className="name">Banu Tryon: </span></a>
                            <p className="devs">As a software engineer, I will take my previous experiences and apply them to the projects at hand and provide a solution to your users that will make your company proud. My passion to improve people’s lives through technology will allow me to put in the work to make sure we understand the customer at a high level and create world-class products.</p>
                        </div>
                        <div className="bioCont">
                            <a href="https://www.linkedin.com/in/drew-robbins/"><span className="name">Drew Robbins: </span></a>
                            <p className="devs">My goal is to provide the clients with vivid and imaginative websites.  A strong attention to detail and creative design outline my skill set for my passion in making a successful website. With honesty, a positive attitude and integrity in everything I do and breathe,  nothing is done without a smiling face and trust in my work.</p>
                        </div>
                        <div className="bioCont">
                            <a href="https://www.linkedin.com/in/ryan-fanelli/"><span className="name">Ryan Fanelli: </span></a>
                            <p className="devs">Not only a dedicated software engineer with a passion for knowledge and creativity, but also an innovative problem solver with keen observation skills. An amicable person that will inspire confidence and curiosity amongst a team. I deliver performance driven by efficiency and adaptability.</p>
                        </div>
                    </div>
            </>
        )
    }
}
