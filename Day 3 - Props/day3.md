## Things that we learned in the 9th July as 3rd Day of React
1. Hami lea webiste haru ma different pages haru ma aautai components repeated dekhi rako hunhcau. For eg: navbar or the brand head.
  Ho testo repreated components haru lai components folder ko common vanni file ma rakhchau.
2. Props concept in React
3. Hami lea typography vanni file ma components define garchau ra index.tsx(landing page ko) bata value pass garchau ra typography lea value receive garchau through the props
4. Installation of flowbite react / flowbite tailwind 
5. Use case of flowbite react with tailwind and react.
6. The implementation of navbar in our website through the flowbite react.

## Concept of props
// component arguments/parameter data pass=> props
// Example className is the props cause it passes the data/values

## Installation process of flowbite react
- yarn add flowbite-react
- Add this things to the tailwind.config.js by cutting the older one
      const flowbite = require("flowbite-react/tailwind");

      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          // ...
          flowbite.content(),
        ],
        plugins: [
          // ...
          flowbite.plugin(),
        ],
      };


## Website for the pre-defined components
- Flowbite react
- Hyperui.dev