import CardComp from "@/components/Card";
import CardSkeleton from "@/components/Cardskeleton";
import Navbar2 from "@/components/Navbar2";

import axios from "axios";
import { useState, useEffect } from "react";
interface Blog {
  content: string;
  title: string;
  id: string;
  author: { name: string };
}
export default function Component() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    async function fetchBlogsData() {
      setLoading(true);
      const response = await axios.get(
        "https://backend.sasanknasika555.workers.dev/api/v1/blog/bulk",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBlogs(response.data.blogs);
      setLoading(false);
    }
    fetchBlogsData();
  }, []);
  console.log(blogs);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar2 />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-Inter">
              Recent Blog Posts
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-Inter">
              Check out the latest updates from our blog.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading &&
              Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            {!loading &&
              blogs.map((blog) => (
                <CardComp
                  key={blog.id}
                  id={blog.id}
                  autherName={blog.author.name || "Anonymous"}
                  title={blog.title}
                  content={blog.content}
                  publishedDate={"5th Jun 2024"}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
