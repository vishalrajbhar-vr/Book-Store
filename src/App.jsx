import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./website/pages/HomePage";
import HomeSelector from "./website/pages/HomeSelector";
import HomePage1 from "./website/pages/HomePage1";
import HomePage2 from "./website/pages/HomePage2";
import HomePage3 from "./website/pages/HomePage3";
import HomePage4 from "./website/pages/HomePage4";
import HomePage5 from "./website/pages/HomePage5";
import CategoryPage from "./website/pages/CategoryPage";
import ProductPage from "./website/pages/ProductPage";
import BuyPage from "./website/components/BuyPage";
import HomePageChild1 from "./website/pages/HomePageChild1";

import Home1 from "./website/pages/homeDropDown/Home1";
import Home2 from "./website/pages/homeDropDown/home2";
import Home3 from "./website/pages/homeDropDown/home3";
import Home4 from "./website/pages/homeDropDown/home4";
import Home5 from "./website/pages/homeDropDown/home5";

import Cart from "./website/pages/pagesDropDown/Cart";
import Checkout from "./website/pages/pagesDropDown/Checkout";
import Compare from "./website/pages/pagesDropDown/Compare";

import BlogGrid from "./website/pages/blogDropDown/BlogGrid";
import BlogList from "./website/pages/blogDropDown/BlogList";
import BlogDetails from "./website/pages/blogDropDown/BlogDetails";

import WidthDefault from "./website/pages/blogDropDown/WidthDefault";
import LeftSidebar from "./website/pages/blogDropDown/LeftSidebar";
import RightSidebar from "./website/pages/blogDropDown/RightSidebar";
import ListLeft from "./website/pages/blogDropDown/ListLeft";
import ListRight from "./website/pages/blogDropDown/ListRight";
import BlogAudio from "./website/pages/blogDropDown/BlogAudio";
import BlogImage from "./website/pages/blogDropDown/BlogImage";
import BlogVideo from "./website/pages/blogDropDown/BlogVideo";
import BlogGallery from "./website/pages/blogDropDown/BlogGallery";
import Contact from "./website/pages/contact/Contact";


// admin path
import AdminLayout from "./admin/components/AdminLayout";
import Dashboard from "./admin/pages/Dashboard/Dashboards";
import AllSlider from "./admin/pages/slider/AllSlider";
import AddSlider from "./admin/pages/slider/AddSlider";
import AllProduct from "./admin/pages/product/AllProduct";
import AddProduct from "./admin/pages/product/AddProduct";
import AllCategory from "./admin/pages/category/AllCategory";
import AddCategory from "./admin/pages/category/AddCategory";
import AllCoupon from "./admin/pages/coupon/AllCoupon";
import AddCoupon from "./admin/pages/coupon/AddCoupon";
import Orders from "./admin/pages/order/Orders";
import { Contact as ContactIcon, Users as UsersIcon } from "lucide-react";
import Profile from "./admin/pages/settings/Profile";
import ChangePassword from "./admin/pages/settings/ChangePassword";
import AdminLogs from "./admin/pages/settings/AdminLogs";
import Users from "./admin/pages/user/Users";



function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path="/homeSelector" element={<HomeSelector />} />

        <Route path="/homepage1" element={<HomePage1 />} />
        <Route path="/homepage2" element={<HomePage2 />} />
        <Route path="/homepage3" element={<HomePage3 />} />
        <Route path="/homepage4" element={<HomePage4 />} />
        <Route path="/homepage5" element={<HomePage5 />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/buyPage" element={<BuyPage />} />
        <Route path="/HomePageChild" element={<HomePageChild1 />} />

        {/* HOME DROPDOWN */}
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/home5" element={<Home5 />} />

        {/* PAGES DROPDOWN */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />

        {/* BLOG DROPDOWN */}
        <Route path="/blog/grid/default" element={<WidthDefault />} />
        <Route path="/blog/grid/left" element={<LeftSidebar />} />
        <Route path="/blog/grid/right" element={<RightSidebar />} />
        <Route path="/blog/list/left" element={<ListLeft />} />
        <Route path="/blog/list/right" element={<ListRight />} />
        <Route path="/blog/details/audio" element={<BlogAudio />} />
        <Route path="/blog/details/image" element={<BlogImage />} />
        <Route path="/blog/details/video" element={<BlogVideo />} />
        <Route path="/blog/details/detailslist" element={<BlogDetails />} />
        <Route path="/blog/details/gallery" element={<BlogGallery />} />

        <Route path="/contact" element={<Contact />} />


        <Route path="/blog/grid/:type" element={<BlogGrid />} />
        <Route path="/blog/list/:type" element={<BlogList />} />
        <Route path="/blog/details/:type" element={<BlogDetails />} />



        {/* admin pannel route */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="all-slider" element={<AllSlider />} />
          <Route path="add-slider" element={<AddSlider />} />

          <Route path="all-product" element={<AllProduct />} />
          <Route path="add-product" element={<AddProduct />} />

          <Route path="all-category" element={<AllCategory />} />
          <Route path="add-category" element={<AddCategory />} />

          <Route path="all-coupon" element={<AllCoupon />} />
          <Route path="add-coupon" element={<AddCoupon />} />

          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />

          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="logs" element={<AdminLogs />} />

        </Route>


      </Routes>


    </>
  );
}

export default App; 
