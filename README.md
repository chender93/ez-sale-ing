# EZ-sale-ing
An Express.js application used by ecommerce sites. Utilizing Sequelize.

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
### Models

### Associations
### Routes
### Testing

## Future Development
I would like to create error handling to make this application more user friendly. If models aren't being seeded properly due to validation issues, I would want to let the developer know before they continue.