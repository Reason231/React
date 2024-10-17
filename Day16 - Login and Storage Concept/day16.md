## Things that we have learned in the 25th July as day 16 of React
- Aaja ko session ma first ma hami lea login garna sikyou
- Tespachi hami lea user ko storage ko barema bujyou
- UseCase of userStorage

## Steps
1. Login 
- First of all open the login.auth.tsx file
- Second ma chai tesma api call gareko chau in which we have written the code in the loginAciton
- Third ma hami lea website ma gayera login gareko chau after the activation of account

2. User Storage Concept
- There are 3 types of storage
a. Cookie
    - we dont use cookie because it gets automatically destroyed after some period of time.

b. localStorage
    - They are permanent until the cache of browse is deleted.
    - It stores the tokens.
    - It is the central data storage in which it can be read by everyone.
    - We gonna use this.

c. sessionStorage 

3. UseCase of userStorage
- Create the utilities folder under the src folder.
- Create the helpers.tsx file under the utilites folder.
- Write the cookies code (It is optional cause we r gonna use the localStorage)
- After that go to the login.auth.tsx file
- Call the cookies from the loginAction function 
- To see the output of the localStorage cookie 
    - Go the website
    - Click on inspect
    - Login first
    - Go to Application
    - Click on local Storage
    - Click on http://localhost:5173
    - Yo will see the access token in the value section


4. Navigating the user to the another page
- Go to the login.auth.tsx file
- Write the navigate code
- The path is defined from the console.log(response)

5. UseCase of Context State
=> Hami lea useContext use garyou kina vane user lea login gare pachi admin panel ma, ko chai user lea login gareko vanera console ma information pauna ko lagi.

- Create the context folder under the src folder
- After that create the auth.context.tsx file
- Write the code in it
- Import the function to the router.config.file
- After that import it to the admin-layout-page.tsx file, home-header and login.auth.tsx file
- To see the output, login your account which have admin role.After that see the output of console.log, in there you will find your account information from which you have logged IN.

