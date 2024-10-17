## Things that we learned in 11th July as day 5 of React
1. Installation of tailwind css flowbite
        - yarn add flowbite
        - Need to add in the tailwind.config.js
                - plugins: 
                        require('flowbite/plugin')
                -    content: [
                        // ...
                        'node_modules/flowbite-react/lib/esm/**/*.js'
                              ]

2. Design of product card and category card in the landing page 


## Steps
1. Design of category card
        - First ma landing page ma hami lea flowbite-react bata card import garchau
        - Tespachi design garchau category ko lagi card
        - Aani common vanni folder ma gayera card vanni folder banaunchau
        - Tes bhitra hami lea design gareko code paste garchau
        - Card folder ko function lai import garchau landing page ma
        - At last ma teslai multiply garchau through the help of .map

2. Design of product card
        - The process of desigining the product card is same.
        - We just have to make the new folder that is product folder in the common folder.


## Note
- We don't use for or while loop in the react so we use array methods like map
                [...Array(25)].map((_,i:number) =>(
                        <SingleProductContent key={i} />
                ))
## Tips 
&rarr; => puts the arrow in the tailwind css
