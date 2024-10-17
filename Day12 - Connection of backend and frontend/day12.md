## Things that we learned in the 19th July as Day 12 of React
- Hami lea aaja ko day ma balla node js code ra frontend lai connect gareko chau.
- Aani connect garera validation pani gareko chau from the frontend.
- Yo day ma kei ni testo ouput chaina, for the ouput see the next day.

## Steps
1. Run the node js server and the frontend react server along with their codes.

2. Concept of axios
- We use axios package to send the data to the database server and api.
- yarn add axios => in the react server
- create new file named => axios.config.tsx
- Then we write some code, in the axios.config.tsx file

3. After that we create the .env and .env.sample files
- In the .env file we defined the base_url

4. Writing the code in the axios.config file

5. Creating the service folder in the src folder
- Creating the http.service.ts file in the service folder
- Write some code in the https.service.ts file. We are making the https methods in the file

6. Creating the auth.service file in the auth folder and manipulating the register.auth.tsx file
- Create auth.service.ts file in the auth folder
- Importing the class from the http.service.ts file to the auth.service.ts file
- Then cutting the validation code from the register.auth.tsx file and paste it in to the auth.service.ts file
- After that we go the register.auth.tsx file and write code in the submitEvent for the api call

7. wrting the try and catch code in the postRequest of the http.service.ts file

## Flow of code
.env => axios.config.tsx => http.service.ts => auth.service.ts => register.page.tsx