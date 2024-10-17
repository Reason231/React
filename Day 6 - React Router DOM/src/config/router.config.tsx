import { BrowserRouter , Routes , Route} from "react-router-dom"
import LandingPage from "../pages/landing"
import { RegisterPage } from "../pages/auth/register/register.auth"
import NotFound from "../errors/not-found.page"

export const RouterConfig =()=>{
    return(
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>


                         {/* Not defind routes */}
                <Route path="*" element={<NotFound />}></Route>
                    </Routes>
            </BrowserRouter>
        </>
    )
}