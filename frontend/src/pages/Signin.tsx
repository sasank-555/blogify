import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../../config";
export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = async () => {
    try {
      const response = await axios.post(
        `"https://backend.sasanknasika555.workers.dev/api/v1/user/signup"`,
        formData
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (e) {
      alert("Error while signing up");
    }
  };
  return (
    <div>
      <div className="relative">
        <Navbar />
        <div className="mx-auto max-w-md space-y-6 font-Inter mt-16">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create your account to get started.{" "}
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your email"
                required
                value={formData.email}
                onChange={(e) => changeHandler(e)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <Button type="submit" className="w-full" onClick={submitHandler}>
              Sign Up
            </Button>
            <div className="text-gray-500 dark:text-gray-400 mt-6 text-sm">
              <Link to="/signup" className="underline ">
                Already Registered?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
