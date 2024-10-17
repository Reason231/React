import { NavLink } from "react-router-dom"
export const LinkComponent =({text ,icon="", link}:{text:any , icon?:string , link:string})=>{
    return(
        <>
         <NavLink to={link} className={( {isActive}) => isActive ? 'text-red-400' : " " +"hover:text-teal-600"}> {text}</NavLink>
        </>
    )
}