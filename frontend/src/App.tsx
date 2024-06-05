import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
