# Note Taker Application - Express.js

## Summary

As the name suggests, the requirement (SRS) of app was to develope an application that keeps track of notes and stores. The  application uses an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. Our jb is to build the back end, connect the two, and then deploy the entire application to Heroku.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Criteria
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## project content & functionality

On the back end, the application includes a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes are created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes are created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

 Also a  DELETE route was added to the app as follows:

* `DELETE /api/notes/:id` route receives a query parameter that contains the id of a note to delete. To delete a note, all notes are read first from the `db.json` file, and the note  with the selected note is deleted from the `db.json` file.

# Install

Clone project. Run the following line of code in your terminal to install all the needed packages:

npm i

# Usage

Once all the packages have been installed, open terminal and run the following code in command line :

npm start

This will run the express server where you can find the page on localhost:3001. To end your server in your terminal type: control + c

you can also run the app form the heroku URL deployment:

https://notestracker11.herokuapp.com/




##Built With

    HTML
    CSS
    Bootstrap
    JavaScript
    Node.js
        Express.js
        Uniqid

## Screen shots
![image](https://user-images.githubusercontent.com/70511172/226106864-c32cb128-991a-45cb-bc7b-b75465598de0.png)

![image](https://user-images.githubusercontent.com/70511172/226106881-7057abca-a04c-4c4b-b5f8-9c7e19c22403.png)




## Deployment

#### Heroku:
https://notestracker11.herokuapp.com/

#### GitHub:
 https://github.com/PanosGian/challenge_11
 
