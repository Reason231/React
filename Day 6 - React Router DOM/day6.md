## Things that we learned in 12th July as day 6 of React

## Steps

# Step 1
1. Create teh header folder in the component
2. Moving the code of navbar from the landing page to the home-header.component.tsx file

# Step 2 of defining the routing
1. Installation of react-router-dom for the routing.
        => yarn add react-router-dom
2. After that we make the config folder in src
3. React router website ma gayera browseRouter ko barema bujchau kina vane hami yeai use garchau
4. Tespachi routing config file ma browserRouter, Routes, Route lai import garchau 
5. Aani path define garchau ra kun chai element tyo path ma render huni vanera lekhchau.


## Note of step 2
- Hami lea navbar ko button haru kun chai url ma jani vanera components ko navbar ma lekheko chau tesaile contact ma click garda contact vanera url aairako because we have already defined it in the navbar file


# Step 3 of defining the routing when the url is not defined
- Yesma chai hami lea jaba manche lea url defined navako halcha teti bela chai errror page dekhauni .
1. Make a errors folder in the page folder
2. Tespachi make a design in the error file
3. Import it to the routing.config.file
4. Write * in the path cause * represents the => not registered url
For eg => http://localhost:5173/dfsdfjf => Yo url ta chaina ni hami sanga tesaile yo url ma jada error page lai show garcha

## Note of step 3
- We don't use <a href=""> while re-directing the components. Because it reloads the pages while switching to another components
- We use NavLink or Link because it doesn't reloads the page
        syntax => <NavLink to="/path"></NavLink>  and we should import the navlink 

# Step 4 
- Editing the homenavbar
# Code explanation of Re-direct link
      <NavLink to="/About" className={( {isActive}) => isActive ? 'text-red-400' : " " +"hover:text-yellow-300"}>About &rarr;</NavLink>
-  Yo code lea chai yedi ma about seciton vanni page ma chu vane yesle about button lai red parcha yedi ma tyo page bata bahria niskyo vane white hunhca button ra hover garda yellow huncha


# step5 of seperating the homenavbar link
- First we create the link folder in the common folder
- Second ma hami lea yo codes lekhyou
    import { NavLink } from "react-router-dom"
    export const LinkComponent =({text,icon="", link}:{text:string , icon?:string , link:string})=>{
    return(
        <>
         <NavLink to={link} className={( {isActive}) => isActive ? 'text-red-400' : " " +"hover:text-yellow-300"}>{text} &rarr;</NavLink>
        </>
    )
 }
- Third ma hami lea yo function lai home-header-component vanni file ma import garchau
- Fourth ma hami lea yo function lai home-header-component ma use garchau by this
        - <LinkComponent link="/pricing" icon="&arr;" text="Pricing"></LinkComponent>
    