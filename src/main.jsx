import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountInfoPage from "./pages/AccountInfoPage/index.jsx";
import AdminAddCategoryPage from "./pages/admin/AddCategoryPage.jsx";
import AdminAddEmployeePage from "./pages/admin/AddEmployeePage.jsx";
import AdminAddProductPage from "./pages/admin/AddProductpage.jsx";
import AdminCategoryPage from "./pages/admin/CategoryPage.jsx";
import AdminCustomerDetailPage from "./pages/admin/CustomerDetailPage.jsx";
import AdminCustomerPage from "./pages/admin/CustomerPage.jsx";
import AdminEmployeePage from "./pages/admin/EmployeePage.jsx";
import AdminHomePage from "./pages/admin/HomePage.jsx";
import AdminLoginPage from "./pages/admin/LoginPage.jsx";
import AdminMessagePage from "./pages/admin/MessagePage.jsx";
import AdminOrderDetailPage from "./pages/admin/OrderDetailPage.jsx";
import AdminOrderPage from "./pages/admin/OrderPage.jsx";
import AdminProductPage from "./pages/admin/ProductPage.jsx";
import CartEmplyPage from "./pages/CartEmpltyPage/index.jsx";
import CartPage from "./pages/CartPage/index.jsx";
import CategoryPage from "./pages/CategoryPage/index.jsx";
import CheckoutPage from "./pages/CheckoutPage/index.jsx";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage/index.jsx";
import DeliveryPage from "./pages/DeliveryPage/index.jsx";
import ForgotPassword from "./pages/FogotPassword/index.jsx";
import IntroducationPage from "./pages/IntroducationPage/index.jsx";
import LoginPage from "./pages/LoginPage/index.jsx";
import MenuPage from "./pages/MenuPage/index.jsx";
import NotificationPage from "./pages/NotificationPage/index.jsx";
import PolicyPage from "./pages/PolicyPage/index.jsx";
import ProducDetailPage from "./pages/ProductDetail/index.jsx";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import SuggestPage from "./pages/SuggestPage/index.jsx";
import TermsOfUsePage from "./pages/TermsOfUse/index.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/dang-nhap",
      element: <LoginPage />,
    },
    {
      path: "/dang-ky",
      element: <RegisterPage />,
    },
    {
      path: "/quen-mat-khau",
      element: <ForgotPassword />,
    },
    {
      path: "/danh-muc-san-pham",
      element: <CategoryPage />,
    },
    {
      path: "/chi-tiet",
      element: <ProducDetailPage />,
    },
    {
      path: "/thanh-toan",
      element: <CheckoutPage />,
    },
    {
      path: "/dia-chi",
      element: <DeliveryPage />,
    },
    {
      path: "/dat-hang-thanh-cong",
      element: <CheckoutSuccessPage />,
    },
    //Sửa Đến đây r
    {
      path: "/gioi-thieu",
      element: <IntroducationPage />,
    },
    {
      path: "/dieu-khoan-su-dung",
      element: <TermsOfUsePage />,
    },
    {
      path: "/chinh-sach-doi-tra",
      element: <PolicyPage />,
    },
    {
      path: "/thong-tin-tai-khoan",
      element: <AccountInfoPage />,
    },
    {
      path: "/gio-hang",
      element: <CartPage />,
    },
    {
      path: "/goi-y",
      element: <SuggestPage />,
    },
    {
      path: "/gio-hang-rong",
      element: <CartEmplyPage />,
    },
    {
      path: "/menu",
      element: <MenuPage />,
    },
    {
      path: "/thong-bao",
      element: <NotificationPage />,
    },
    {
      path: "/admin/dang-nhap",
      element: <AdminLoginPage />,
    },
    {
      path: "/admin/don-hang",
      element: <AdminOrderPage />,
    },
    {
      path: "/admin/san-pham",
      element: <AdminProductPage />,
    },
    {
      path: "/admin/nhan-vien",
      element: <AdminEmployeePage />,
    },
    {
      path: "/admin/danh-muc",
      element: <AdminCategoryPage />,
    },
    {
      path: "/admin/khach-hang",
      element: <AdminCustomerPage />,
    },
    {
      path: "/admin",
      element: <AdminLoginPage />,
    },
    {
      path: "/admin/thong-ke",
      element: <AdminHomePage />,
    },
    {
      path: "/admin/don-hang-chi-tiet",
      element: <AdminOrderDetailPage type={1} />,
    },
    {
      path: "/admin/don-hang-chi-tiet-2",
      element: <AdminOrderDetailPage type={2} />,
    },
    {
      path: "/admin/tin-nhan",
      element: <AdminMessagePage />,
    },
    {
      path: "/admin/them-san-pham",
      element: <AdminAddProductPage />,
    },
    {
      path: "/admin/them-danh-muc",
      element: <AdminAddCategoryPage />,
    },
    {
      path: "/admin/chi-tiet-khach-hang",
      element: <AdminCustomerDetailPage />,
    },
    {
      path: "/admin/them-nhan-vien",
      element: <AdminAddEmployeePage />,
    },
  ].map((x) => ({
    ...x,
    element: <ScrollToTop>{x.element}</ScrollToTop>,
  }))
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
