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
        </Routes>
    </BrowserRouter>
  );
};

export default App;
