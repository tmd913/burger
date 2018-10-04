# Eat-Da-Burger

## Overview

This app allows the user to add, update, and delete burgers from a MySQL database using a front-end interface. Whenever the state of the database is changed, the page displays that new information to the user. In addition to MySQL, this app uses Handlebars for templating and Express for the server.

### Create

Enter a name for the burger you wish to add and click the `ADD` button, which will add to the database and display the burger in the _Burgers to Eat_ section.

## Read 

When the page is loaded, the database information is displayed to the user.

### Update

Click the `DEVOUR` button next to the burger you wish to eat, which will update the database and move the burger to the _Devoured Burgers_ section.

### Delete

Click the `GARBAGE` button next to the burger you wish to remove, which will delete from the database and remove the burger from the page.