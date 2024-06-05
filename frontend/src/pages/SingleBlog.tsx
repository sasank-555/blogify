import Navbar from "@/components/Navbar";
import { Avatar } from "@/components/ui/avatar";
import axios from "axios";

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
      {loading && <BlogDetailSkeleton />}
      {!loading && (
        <div className="w-10/12 mx-auto py-12 px-4 sm:px-6 lg:px-8 font-Inter">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h1 className="text-5xl font-bold leading-tight">
                {blog?.title}
              </h1>
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
                    Master of mirth, purveyor of puns, and the funniest person
                    in the kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BlogDetailSkeleton() {
  return (
    <div className="w-10/12 mx-auto py-12 px-4 sm:px-6 lg:px-8 font-Inter animate-pulse">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-11/12"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-10/12"></div>
          </div>
        </div>
        <div>
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-4"></div>
          <div className="flex items-center mt-4">
            <div className="h-16 w-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="ml-4 space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
