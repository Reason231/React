import { Outlet } from "react-router"
import { HomeHeader } from "../../components/header/home-header.components"

export const HomePageLayout = () =>{
    return(
        <>
        <HomeHeader />

        <Outlet />

        </>
    )
}