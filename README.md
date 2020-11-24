#NONG Code Challenge

First of all, thank you for your interest in joining our team!


## About the challenge

You will build a web app that registers field notes taken on a crop scouting.

### What is crop scouting?
(https://www.youtube.com/watch?v=QOALTFgOoxM)
This is a link to a youtube video that shows what is crop scouting. 

No need to watch the entire video. The most important thing to understand is that when someone is crop scouting, they usually take field notes. 

#### What is the problem that we want to solve with this web app?
It's very common for these notes to be taken on paper, which makes it hard to manage. This web app will help manage these crop scouting notes by keeping them saved and ordered by date. 

## What exactly should you build?
Now that we explained the problem, let's get to the code!

You should build a web app that will authenticate user, that means you need a Sign-in page that will ask for the email and password. After the user is authenticated, the user will be redirected to the homepage of the web app, this homepage should have 3 things:
- A form that will be used to register a new note
- A list that will show the notes saved.
- A log out button

#### This form should contain:
- An input field for the name of the person who took the note.
- An input field for the date that the note was taken.
- An input field for the description of the note.
- A button that when pressed will save the note.
##### The saved notes should appear on the list. The list should be ordered by date (newest to oldest).

When pressing the log out button the user should be redirected to the login page.  


## Requirements (This is important!)
These are the techs you must use: 

You must use Create-React-App to set up your web app.
(https://create-react-app.dev/docs/getting-started)
Feel free to use Yarn, but we prefer to use NPM as package manager.

You should create a firebase free account to do this challenge. 
When using firebase products, you should use products for the Web. Do not use the ones for servers like admin SDKs.

For user authentication, you must use Firebase Auth. Use email and password authentication. You don't need to build a sign-up page, only a sign in. To create new users, you can use the firebase auth dashboard.

To save the notes you must use Firebase Cloud  Firestore.
Each note should be a document in a notes collection.

In case you know how to use Material UI (https://material-ui.com/) you should use it! We love using Material UI cause it saves us a lot of time with design, and we don't have a designer in the company :(

In case you know how to use Redux, you should use it. But it's not obligatory, we know redux is not easy to learn.

You should host your web app using firebase host. 
On the readme.md file you should add the URL that firebase hosting generated for you.

And to finish, you should create a  public repository in GitHub and import this code to it.

## Deadline

You have seven days to send us the link to the GitHub repo with your code. Do not worry if you can't finish with all requirements, this is not an easy challenge for beginners and we know that, just try to do your best!

We are here to help you with ANY questions you might have!
