import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import NotFound from "../errors/not-found.page";
import { CategoryDetailPage } from "../pages/category/category-detail-page";
import { AdminDashBoard } from "../pages/dashboard/admin-dashboard.component";

import { RegisterPage, LoginPage, ActivationPage } from "../pages/auth/index";
import { HomePageLayout, AdminPageLayout } from "../pages/layouts/index";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { AuthProvider } from "../context/auth.context";
import AllowUser from "./permission.config";
import {
  AdminBannerList,
  AdminBannerCreate,
  AdminBannerEdit,
} from "../pages/banner/index";
import {
  AdminBrandList,
  AdminBrandCreate,
  AdminBrandEdit,
} from "../pages/brand/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SellerPage } from "../pages/seller/seller.page";
import { useEffect, useState } from "react";

// Redux
import { getLoggedInUserFromReducer } from "../reducer/auth.reducer";
import { useDispatch } from "react-redux";

export const RouterConfig = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("_act") || null;
    if (token) {
      dispatch(getLoggedInUserFromReducer());
    }
    setLoading(false);
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId="961183350106-1bmoh3r6ols505dsbb2suh9b88109mbr.apps.googleusercontent.com">
        <AuthProvider>
          {/* Now AuthProvider is the parents and under it all are children */}
          <>
            <ToastContainer theme="dark" />
            <BrowserRouter>
              <Routes>
                {/* HomePageLayout is the parent and others are children. So parents will always be rendered in all of the child pages  */}
                <Route path="/" element={<HomePageLayout />}>
                  <Route index element={<LandingPage />}></Route>
                  <Route path="register" element={<RegisterPage />}></Route>
                  <Route path="login" element={<LoginPage />}></Route>
                  <Route
                    path="activate/:token"
                    element={<ActivationPage />}
                  ></Route>

                  <Route
                    path="categories/:slug"
                    element={<CategoryDetailPage />}
                  ></Route>

                  {/* Not defind routes */}
                  <Route
                    path="*"
                    element={
                      <NotFound url="/" redirectText={"Go back to Home Page"} />
                    }
                  ></Route>
                </Route>

                {/* Admin Panel */}
                <Route
                  path="/admin"
                  element={
                    <AllowUser allowUser="admin">
                      <AdminPageLayout />
                    </AllowUser>
                  }
                >
                  <Route index element={<AdminDashBoard />}></Route>

                  {/* banner */}
                  <Route path="banner" element={<AdminBannerList />}></Route>
                  <Route
                    path="banner/create"
                    element={<AdminBannerCreate />}
                  ></Route>
                  <Route
                    path="banner/:id/edit"
                    element={<AdminBannerEdit />}
                  ></Route>

                  {/* brand */}
                  <Route path="brand" element={<AdminBrandList />}></Route>
                  <Route
                    path="brand/create"
                    element={<AdminBrandCreate />}
                  ></Route>
                  <Route
                    path="brand/:id/edit"
                    element={<AdminBrandEdit />}
                  ></Route>

                  <Route
                    path="*"
                    element={
                      <NotFound
                        url="/admin"
                        redirectText={"Go Back to Admin Panel"}
                      />
                    }
                  ></Route>
                </Route>

                {/* Seller */}
                {/* <Route path="/seller" element={<AllowUser allowUser="seller">  
          <AdminPageLayout />
        </AllowUser>}>
        <Route index element={<AdminDashBoard />}></Route>
        </Route> */}
                <Route path="seller" element={<SellerPage />}></Route>
              </Routes>
            </BrowserRouter>
          </>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
};
