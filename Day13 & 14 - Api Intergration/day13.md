## Things that we learned in the 21th July as Day 13 of React
- To see the ouput of day 13 and 14, just signup your account
## steps
1. install the cors package in the node js server
- First of all npm server run garum node js ko code ma
- Tespachi install the cors package in it => npm i cors


2. After that we have done some code in the backend.
// it should be called before the router mount/call
app.use(cors())

3. We written the error handling in the axios.config.tsx file
See the axiosInstance code

4. After that we have again written code in the backend nodejs
- aaba chai hami lea dui choti email same rakhera signup garda ko email lai error handling code lekhchau express.config file ma

5. After that we handle the error in the submitEvent of the react
- Tespachi hami lea register.page.tsx file ma gayera submitEvent code lai handle garyou

6. Then install the toastify for the popup message
- yarn add react-toastify

7. Import and use the react-toastify in the react
- Import the toastContainer in the roter.config.tsx
- Then write the toast code in the submitEvent of register.page.tsx file
- Then we add the loading cause we need to wait until the user created
- In the end, we add this in the button => disabled={loading}