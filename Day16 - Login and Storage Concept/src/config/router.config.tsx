import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import NotFound from "../errors/not-found.page";
import { CategoryDetailPage } from "../pages/category/category-detail-page";
import { AdminDashBoard } from "../pages/dashboard/admin-dashboard.component";

import { RegisterPage, LoginPage , ActivationPage} from "../pages/auth/index";
import { HomePageLayout, AdminPageLayout } from "../pages/layouts/index";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import { AuthProvider } from "../context/auth.context";


export const RouterConfig = () => {
  return (
    <>
      <AuthProvider>
        {/* Now AuthProvider is the parents and under it all are children */}
      <>  
      <ToastContainer 
        theme="dark"
        />
      <BrowserRouter>
        <Routes>

        {/* HomePageLayout is the parent and others are children. So parents will always be rendered in all of the child pages  */}
         <Route path="/" element={<HomePageLayout/>}>  
         <Route index element={<LandingPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='activate/:token' element={<ActivationPage />}></Route>

          {/* Day 7 of routes */}
          <Route path="category/:slug" element={<CategoryDetailPage />}></Route>

          {/* Not defind routes */}
          <Route path="*" element={<NotFound />}></Route>
         </Route>


        {/* Admin Page Layout */}
        <Route path="/admin" element={<AdminPageLayout />}>
        <Route index element={<AdminDashBoard />}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
        </>
        </AuthProvider>
    </>
  );
};
