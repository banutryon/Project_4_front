In our project, we decided to create a site focused on alternative living options. We call our site Alternative living. We included an interactive map option to be able to select any of our locations in the United States. In addition to that, you can scroll on the left to see a more detailed view of each location.
The technologies used for this project was a React front end with React routers, google maps, axios for fetching data and a few other node packages for styling. THe api was built using Ruby on Rails. Both the front end are deployed on Heroku. See the links below.

#### API: https://altliving.herokuapp.com/locations
#### Front End: https://pure-stream-81491.herokuapp.com/altliving



#### Banu: My contribution to this project:
Backend: 
-Created and built out these files: 
-routes.rb
-locations_controllers.rb
-schema.rb.


Frontend: 
Created and built out these files: 
-Locations.js
-Apps.js
-main.scss/index.css
-Added Favicon
-Wrote desktop styling with SASS
-Helped Drew with Mobile SASS styling

Other tasks I completed: 
-Created repo on github and project in Heroku
-Build out Projects task manager in Github. 




#### Drew:
Frontend:
Create and build out 
-  Footer.js
-  Navbar.js
- Seed.rb
-  make logo onto imgur
-  push it up as a logo img
Make mobile conversion
-  get the line
-  make similar to original
-  center create menu
-   make header stable
-  make footer stable 
-  make sure map is stable and centered
-  Footer
-  Nav
-  Cards
-  Map
Component
Nav Bar
-  log in 
-  log out - rendar on login
-  about us
-  logo
-  create icon - admin access only "only render when admin"
-  build layout
Design Figma
-  Header
- Footer 
-  main body
 -  continue to update
-  1st draft
-  2nd draft with hamburger menu
- create button
Backend:
- seed data for listings


Create the Create new location in the nav bar

#### Ryan: 
My responsibility was primarily to construct and maintain the backend. I used ran migrations to 
update our schema, I assured that our models were working properly. I also added routes and a controller for seller data, and for feedback, which we did not end up using but would like to implement these in the future. I also deployed the backend to heroku, which was a bit of a challenge as I could not get the migrations to run on heroku, and I had to hard code our tables into the database.

On the front end, I built out the Map component using the google maps a.p.i. I did this twice because I the first package that I used did not contain the exact tools that I was looking for and I did not realize this until too late (read your documentation!). The second one that I used worked great, except for a minor bug where a blank window pops up with an info window. After triple and quadruple checking my code and scouring the internet for a resolution to this, I found that other users of this package have had a similar problem. So I submitted an issue to the original repo and hopefully it will be resolved soon. I also implemented react routers to our page, though this is an area that I'd like to improve. Right now our root URL lives at /altliving instead of at /. I also created a Protected route that uses a fake authentication state to allow a user to login. In lieu of time, I was not able to implement javascript webtokens or user sessions to replace this state, so there is no real sign in functionality. I also built out the component that houses the About Us JSX and did the styling for that.

My biggest take away from this project is how to manage working in a group. There were times when I was set on fixing something that may not have had to be corrected at that time, and because of this held our group back. I came to realize that if you can move forward and get things working as intended and reach MVP, sometimes that may be more important than creating a perfect code from scratch the first time through. You can always go back and refactor your code after MVP is attained.
