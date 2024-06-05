import Navbar from "@/components/Navbar";
import { Avatar } from "@/components/ui/avatar";
import axios from "axios";
import { BACKEND_URL } from "config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
interface Blog {
  content: string;
  title: string;
  id: string;
  author: { name: string };
}
export default function SingleBlog() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://backend.sasanknasika555.workers.dev/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      <Navbar />
      <div className="w-10/12 mx-auto py-12 px-4 sm:px-6 lg:px-8 font-Inter">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-5xl font-bold leading-tight">{blog?.title}</h1>
            <p className="mt-6 text-base text-gray-500">
              Posted on August 24, 2023
            </p>
            <p className="mt-6 text-base text-gray-700">{blog?.content}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Author</h2>
            <div className="flex items-center mt-4">
              <Avatar>
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  alt="Jokester"
                />
              </Avatar>
              <div className="ml-4">
                <p className="text-lg font-bold">
                  {blog?.author.name || "Anonymus"}
                </p>
                <p className="text-sm text-gray-600">
                  Master of mirth, purveyor of puns, and the funniest person in
                  the kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
