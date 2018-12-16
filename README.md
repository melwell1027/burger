# Eat That Burger

## Introduction

Eat That Burger is a basic full stack web application using Node, MySql, and Express-Handlebars. The page displays a menu of burgers and a list of all the burgers eaten. The user is able to add new items to the menu and then press a button to "eat" that item. Pressing this button will move the item to the eaten column. All of this is done by manipulating a SQL database and dynamically rendering HTML.

[Link to Application](https://secret-sierra-14870.herokuapp.com/)

## Required NPM Packages
   * [Express](https://www.npmjs.com/package/express)

   * [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)

   * [MySQL](https://www.npmjs.com/package/mysql)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

## Getting Started
1. Clone the repository.
2. Run the NPM isntall in the directory.
3. Install the above NPM packages.
4. Create a SQL database with the data in the schema file.
5. Add your MySQL password to the code.

## App Function
* On page load, the page calls to the server to grab data from the database and then dynamically render this HTML to the browser.
* This will populate the "menu" and "eaten" columns. An items location is determined by the value of its "devoured" variable. (false=menu, true=eaten).
* The user can enter a new burger into the text box and add it to the menu. Pressing submit will push the new item to the server, then to the database, and in response, the page will dynamically render the new menu.
* Each menu item will have an "Eat Me" button next to it. Pressing this button will tell the server to update the value "devoured" variable of that item from false to true in the databse. In respone, the page will render new HTML in which the chosen burger is in the "eaten" column.
