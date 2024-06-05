import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomeComp() {
  return (
    <section className="w-10/12 mx-auto py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl font-Yeseva">
                Elevate Your Technical Storytelling
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400 ">
                Discover a platform that empowers you to share your unique voice
                and connect with a captivated audience.
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <Link to="/signup">
                <Button className="font-Inter">Signup</Button>
              </Link>
              <div className="flex gap-2 font-Inter">
                <p>Already a user?</p>
                <Link className="underline" to="/signin">
                  Signin{" "}
                </Link>
              </div>
            </div>
          </div>
          <img
            src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
