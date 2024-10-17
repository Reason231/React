import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import { RegisterPage } from "../pages/auth/register/register.auth";
import NotFound from "../errors/not-found.page";
import { CategoryDetailPage } from "../pages/category/category-detail-page";
import { HomePageLayout } from "../pages/layouts/home-layout.page";
import { AdminPageLayout } from "../pages/layouts/admin-layout.page";
import { AdminDashBoard } from "../pages/dashboard/admin-dashboard.component";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

        {/* HomePageLayout is the parent and others are children. So parents will always be rendered in all of the child pages  */}
         <Route path="/" element={<HomePageLayout/>}>  
         <Route index element={<LandingPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>

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
  );
};
