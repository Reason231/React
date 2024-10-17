## Things that we have learned in the 31th July as day 21 of React


## Steps
1. Making the submitButton as submitEvent.
- Go to the banner-create.page.tsx file.
- Go to the submitEvent function.
- Createe banner.service.ts file
- After that we go to the again submitEvent function in the banner.create file and write some codes
- After this we finished the Create operation of CRUD operation.

2. Listing the banner, we have created
- Go to the banner-list.page file
- Then create the AllBannerlist function in order to list all the banners
- After that go to the return and table ceil in order to showcase the banner in the web.

3. Uploaded image in the server showcasing to the users.
- Vanna lea hami lea aaile banner ko image upload garda, mongodb server ma gayera baseko cha ni. Ho teslai chai users lai dekhaunu paryo
- Tesko lagi go the nodejs code
- Go to the express.config.js file and make the changes
- Go to the .env file and make the url
- Come to the banner.list.page.tsx file and make the url for the image


4. Paginaton
- Go to the banner.list.page.tsx file
- Go to the loadAllBanners function
- Make the props