import Navbar from "@/components/Navbar";
import axios from "axios";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function CreateBlog() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addPost = async () => {
    if (title == "" || content == "") {
      toast({
        variant: "destructive",
        title: "Enter something",
      });
      return;
    }
    setLoading(true);
    await axios.post(
      "https://backend.sasanknasika555.workers.dev/api/v1/blog",
      {
        title,

        content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    toast({
      description: "Successfully Published",
    });
    setLoading(false);
  };
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-4xl mx-auto font-Inter">
        <header className="flex items-center justify-between px-4 py-4 md:px-6 md:py-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create a New Blog Post
            </h1>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              Share your thoughts and ideas with the world.
            </p>
          </div>
          <button
            onClick={addPost}
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Publish
          </button>
        </header>
        <div className="px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Blog Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  placeholder="Enter your blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Blog Content
              </label>
              <div className="mt-1">
                <textarea
                  id="content"
                  name="content"
                  rows={8}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  placeholder="Enter your blog content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="mt-12 space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Preview</h2>
              <div className="mt-4 prose prose-gray max-w-none dark:prose-invert">
                <h1 className="font-bold text-black">
                  {title !== "" ? title : `Blog Title`}
                </h1>
                <p>
                  This is a preview of how your blog post will look. You can
                  edit the content above to see the changes reflected here.
                </p>
                <p>
                  {content !== ""
                    ? content
                    : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl,
                  eget aliquam nisl nisl sit amet nisl. Donec vitae nisl nec
                  nisl tincidunt bibendum. Sed euismod, nisl nec ultricies
                  lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit
                  amet nisl.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
