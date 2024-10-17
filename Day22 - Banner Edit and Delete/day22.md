## Things that we have learned in the 1st August as day 22 of React


## Steps
1. Optimizig the page
- Go to the banner.list.page.tsx file
- Cut the logical code of loadAllBanners function
- use the callback hook cause it memorize/cache the function execution which leads to reduce the cache.
- we used callback, if the pagination and keywords are render, it cached. 

2. Functioning the edit and delete button of banner.list
- Go to the baner.list.page.tsx file
- Cut the edit and delete button code from it.
- Create the action-button file under the table folder of the common folder.
    # Delete function => 
       - Go to the <b>sweetalert2</b> website so that we can use it for our website in order to confirm.
       - Search for delete dialoge box and copy the code.
       - Download the plugin => <b>yarn add sweetalert2</b>
       - Go to the action-buttons-components.tsx file and create the deletefunction
       - go to the banner-list.page tsx file in order to pass the props and create the deleteData function.
       - Go to the http.service file in order to define the deleteRequest.

    # Edit function
    - Go the banner-list.page.tsx file
    - Go to the tablebuttonaction component in the return() and define the props
    - Go to the action-button.component.tsx file and define it.
    - Go to the router.config.tsx file and define the adminBannerEdit page
    - Create the banner-edit file under the banner folder
    - Copy the code of banner-create and paste it to the banner-edit file

