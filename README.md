# js-planner

A planning app

How to run js-planner  

Open your VM  

Enter the following commands  
   
cd js-planner	  
npm install	   
npm run initsql   
node server.js  or node server 

Please create an account when faced with the login screen

# Reflection

# Description 
The project is about developing a planning tool to create a list of weeks and some other resources needed.During the development process of the web script planning app, Html, CSS, and javascript were the technologies used for the client side scripting. The server-side scripting technologies used are node js and express. Node js is a framework that can be used as a server-side technology to build an application programming interface(API). Express works on the node js development environment to control the flow of information in the back end of the app. The first stage of development was finding and implementing a usable layout for the front end. For the storage system, I used MySQL database. I also implemented a sign in and sign up for the system although the passwords are not encrypted which implies the authorization is not completely secure. 

# Thoughts
Deciding on a layout for the front end was not as simple as it seems because it had to be a layout that could easily be used and also have operations carried out without any difficulties. For this reason, using the CSS  grids was the appropriate method for sectioning different data fields. I made the choice of adding a textbox to at the top of every section(grid) because it seemed like it would make the system easy and straightforward to use. 

# Evaluation
In the process of making the layout decision, I came across some malfunctions with the system some of which are text drifting into the space of other fields which made it very complicated to identify what text belonged to what field. The use of CSS grids for the layout solved both the issues. After implementation, text from other fields did not drift off into fields they should not be in and was also easy to tell what text belonged to what field. The grid areas were given identifiers which made it easy for me to insert fetched data from the database to their respective fields. 

# Analysis 
The system I have developed allows users to log in or alternatively sign up if the user does not have an account. For the layout of the system consists of for sections being the week, topic, notes, and resources with each section having a grid of its own. I used grids in the layout is to enable sectioning of the different fields in the system. It also allows the user to be able to tell data that belongs to a particular section. On top of every grid is a textbox to allow users to add content to each section. Content added will show up instantly and will remain in the database unless edited by the user. The drag and drop enable users to edit the layout to their preferred choice.Using MySQL database I created a table for every field on the app and one table to store usernames and passwords.Data stored in the four fields are loaded at the launch of the app, that is data posted to the database is fetched when the app is initialized.This enables data stored to be saved automatically and displayed in the field it was added to. Also, data stored in the fields are displayed in an ordered list to allow users one to one mapping between different fields.

# Conclusion
For the login system, a better choice would have been using Google's API as it is a more secure login system and would also provide users with accounts. Although more time could have been spent working on more functionalities for the system I prioritized making the functionalities already implemented work perfectly. 
