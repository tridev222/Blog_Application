import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import Registration from "./pages/Registration";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost"; //createPost
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CommentPage from "./pages/CommentPage";
import EditProfilePage from "./pages/EditProfilePage";
import EditDashBoard from "./components/EditDashBoard";

const PrivateRoute = ({ authenticated }) => {
  return authenticated ? <Outlet /> : <Navigate replace to="/login" />;
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setAuthentication={setAuthenticated} />} />
          <Route path="/register" element={<Registration />} />
          <Route element={<PrivateRoute authenticated={authenticated} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/homePage/create" element={<CreatePost />} />
          </Route>
          <Route path="/homePage/comment/:id" element={<CommentPage/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/homepage/edit-Profile" element={<EditProfilePage/>}/>
          <Route path="/homepage/edit-user-profile" element={<EditDashBoard/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
