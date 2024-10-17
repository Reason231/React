## Things that we have learned in the 24th July as day 15 of React
- First handling the error if the token is expired

## Steps
1. Error handling
- First we go the activate.page.tsx file
- Then we write the code in the catch block of activationpage function

2. After that we make the resend-activation function for the resend-token if the token has been expired
- Hami lea error handling gare pachi tala tira gayera return() ma display garchau resend-button
- Button banaye pachi mathi tira gayera resend-token linchau from the backend


// See this google login button setup from the 35:00 of video.
3. Setup the google console for the login with google.
- Go to google console 
- Click on first website 
- After that click on console button
- Select your project
- Click on api and services
- Click on credintals
- Click on create credintals
- Click on configure consent screen
- Click on external
- Fill up the form => App Name(Login Your Account), User support email, Authorized domain 1 
- Click on save and continue 

4. Conintue of google console 
- Click on the credinatinal which is loacated at the sidebar
- Click on create crednational
- Click on OAUTH Client ID
- Choose on Application Type -> Web Application
- Give the name of website
- Click on add url on the Authorized JavaScript origins section.
        urls => http://localhost
                http://localhost:5173
- Click on add url on the Authorized redirect URIs
        url => http://localhost:5713
- Click on download json and paste it in the secure file.
<img src="./Google console.jpg">

5. Continue of google login button
- search react oauth google website.
- install the package => yarn add @react-oauth/google
- import the google login code of step 3 and paste it to the router.config.js
      <GoogleOAuthProvider clientId="961183350106-1bmoh3r6ols505dsbb2suh9b88109mbr.apps.googleusercontent.com">
                
- and go to the register.page.tsx file
        <GoogleLogin
                    onSuccess={(credentialResponse: any) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    />;


// Video url
https://broadwaynp.sharepoint.com/sites/MERNStackClass630AMApril28Sandeshsir/_layouts/15/stream.aspx?id=%2Fsites%2FMERNStackClass630AMApril28Sandeshsir%2FShared%20Documents%2FGeneral%2FRecordings%2FAuth%20flow%20in%20FE%2D20240724%5F065336%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ebf41cbb4%2Dc074%2D4e9d%2D9c3c%2D3712a1c828a9