import HomeComp from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-50 relative">
      <Navbar />
      <HomeComp />
    </div>
  );
};

export default Home;
