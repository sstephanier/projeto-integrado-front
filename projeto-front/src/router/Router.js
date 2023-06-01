import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "../pages/Comments/Comments";
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";
import Signup from "../pages/Signup/Signup";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/posts" element={<Post />} />
                <Route path="/comments/:id" element={<Comments />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router