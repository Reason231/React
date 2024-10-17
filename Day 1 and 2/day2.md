## Things that we learned in the 8th July as day 2 of React
- Components concept of react
- Creating the modules for the project
    - assets
    - pages
        - landing
        - auth(login page)
        - resume for practice
- Connecting the modules file to the main.tsx file
- Installation of tailwind.
- Use of tailwind css in the modules files


## Installing tailwind
- yarn add -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- After that add this code to the tailwind.config.js file =>
        content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
        ],

- After that add this code to the main.css or your current working css module (i.e. index.css) =>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
- Then restart the server by commanding this line => yarn run dev
- Start your tailwind css in your modules
- You can take help from this web for the installation => https://tailwindcss.com/docs/guides/vite

## Video link
https://broadwaynp.sharepoint.com/sites/MERNStackClass630AMApril28Sandeshsir/_layouts/15/stream.aspx?id=%2Fsites%2FMERNStackClass630AMApril28Sandeshsir%2FShared%20Documents%2FGeneral%2FRecordings%2FReact%20Components%2D20240708%5F064742%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E20a82595%2D26bf%2D4a97%2D89ec%2Ddd069ce4fcfb