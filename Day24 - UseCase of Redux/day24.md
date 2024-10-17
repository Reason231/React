## Things that we have learned in the 3rd August as day 24 of React


## Steps
1. Concept of Redux
- We use Redux-Toolkit and React-Redux 
- We shouldn't use Redux for small projects, it should only be used for big projects.
- Installing it.
    => yarn add @reduxjs/toolkit react-redux

2. UseCase of Redux
- Create the store.config.ts file under the config folder.
- configure the redux in the store.config.ts file
- Go to the main.tsx file and import the <b>provider</b>
- Create the new folder reducer under src folder
- Define the code and import it to  the store.config.ts file
- Go to the router.config.tsx file and use it

3. Listening the Redux
- Go to the home-header.component.tsx file
    - create the auth function
- Go to the login.auth.tsx file
    - write this code =>dispatch(setLoggedInUser(response.result.userDetail))


## Note 
- Go the login page and try to login, it will login like before but it won'e be re-login from the home because we haven't used the persist redux.
- It is not the complete code so use the before code.
