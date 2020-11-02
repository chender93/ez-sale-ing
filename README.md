# EZ-sale-ing
An Express.js application used by ecommerce sites. Utilizing Sequelize.
EZ-sale-ing is a homework assignment given by UPenn's Fullstack Coding Bootcamp

## Walkthrough

[![EZ-sale-ing Walkthrough](http://img.youtube.com/vi/stFWfEPitxQ/0.jpg)](http://www.youtube.com/watch?v=stFWfEPitxQ "EZ-sale-ing Walkthrough")

## Tools Used
* Javascript
* Node.js
* Express.js
* Sequelize
* MySQL
* Dotenv
* Insomnia

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Developer Story
AS THE developer assigned to complete this task
I WANT to utilize Sequilize's models, queries, and constraints to create functional mySQL tables that will hold store inventory information.
I WANT to take advantage of Express' routes to connect these API endpoints to the front-end once completed.

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Approach
I started by reading the Instructions for this assignments thoroughly and folliwng the steps they provided fully.

### Models
The models for each table were given to us. We needed to add the columns and specifications so our data would seed properly. After creating the proper set-up for the tables, we needed to ensure their relationship to each other was recognized.

### Associations
We had to ensure that our tables had the proper relatiosnhips by using foreign keys and association statements.

### Routes
Once our tables and their relatiships were established we needed to create API routes that we could test in Insomnia (or similar application) to confirm that we were presenting the front-end with the proper data they would need.

### Testing
Testing for this application is very simple. 

Step 1: Be sure you have all of the tools/software mentioned above before starting.

Step 2: Clone this repo to your local machine.

Step 3: Create a file titled, '.env' where you will input the following 3 lines:

---------------------------------------------
DB_NAME='ecommerce_db'

DB_USER='!INSERT YOUR MYSQL USERNAME HERE!'

DB_PW='!INSERT YOUR MYSQL PASSWORD HERE!'

---------------------------------------------

Step 4: Run the command 'npm install' on your local machine'

Step 5: Log into mysql and source the schema file. (Location: db/schema.sql) Dont worry about seeding the table this way however.

Step 6: Log out of the mysql terminal and run the command 'npm run seed' to seed your newly created database.

Step 7: After sourcing our database and seeding it with the default data, run the command 'npm start' to run the application through localhost 3001.

Step 8: Test your API endpoints following the guides given in the /routes/api folder.

## Future Development
I would like to create error handling to make this application more user friendly. If models aren't being seeded properly due to validation issues, I would want to let the developer know before they continue. I would also like to create error messages if items they are searching for don't exist.