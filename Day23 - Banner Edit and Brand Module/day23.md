## Things that we have learned in the 2nd August as day 23 of React


## Steps
1. Completing the edit button function
- Go to the http.service.tsx file
- Copy the code of getRequest and paste it in the put and patch Request.
- Then,go to the banner-edit.page.tsx file
- Define the request in that file, which is writtend down of the submitData functioon.

2. Concept of creating another modules like brand,category through the help of banner module.
- Hami lea banner module ko CRUD operation complete garyou.
- So tesko banner ko complete code bata, aarko module kasari banauni vanera sikchau.


3. Implementing the above concept.
- Copy the banner folder
- Paste  the banner copy folder in the pages folder.
- Rename the files name
- Go to each file, and rename the "banner" word with "brand" and "Banner" word with the "Brand" word.
- After that , we have seen the brand.request in the backend code.
- Implemented the Featured titile in the brandlist.page.tsx file

4. Creating the Featured button in the BrandCreate page
- Search for toggle switch component in the flowbite-react website
- Paste it in the brand.create.tsx file
- we have wrriten the error messagsing code above the "brand cannot be created at this momment"
- After that we have paste it to the banner.edit.tsx file.

5. Showing the banner list in the landing page of website
- Jaba hami lea first ma website kholchau, teti bela hami lea banner haru dekhauncha ni landing page ma.
    # Steps
    1. Go to the banner.router in the backend code
    2. Create the new route in backend to show the banner list
        - Hami lea yo new route banaunchau, kina vane yo route ma chai kunai pani auth(means login hunu pardaina), 
        anyone can see the this without the auth
    3. Create the listForHome function in the bannerController file.
    4. AFter this, go to the frontend code that is banner.component.tsx file
