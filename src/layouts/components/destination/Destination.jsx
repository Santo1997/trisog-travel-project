import ShareBanner from "../share/ShareBanner";
import IntroSec from "./desLayout/IntroSec";
import ShareLaying from "../share/ShareLaying";
import { FaArrowRight } from "react-icons/fa";

const Destination = () => {
  const pathData = [
    { label: "Home", to: "/" },
    { label: "Destination", to: "/destination" },
    { label: "United Kingdom", to: "/destination" },
  ];
  return (
    <div>
      <ShareBanner header="United Kingdom" paths={pathData} />
      <IntroSec />
      <div className="px-5 md:px-20 mt-10">
        <div className="relative">
          <h1 className="text-lg font-bold mb-2">Popular Tours In UK</h1>
          <button className="flex gap-2 items-center text-sm absolute right-0 bottom-0">
            <span>See All</span> <FaArrowRight />
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-3 mt-5">
          <ShareLaying />
          <ShareLaying />
          <ShareLaying />
          <ShareLaying />
        </div>
      </div>
      <div className="px-5 md:p-20 mt-10 bg-[#f5f6f8]">
        <div className="relative">
          <h1 className="text-lg font-bold mb-2">Activities In UK</h1>
          <button className="flex gap-2 items-center text-sm absolute right-0 bottom-0">
            <span>See All</span> <FaArrowRight />
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-3 mt-5">
          <ShareLaying />
          <ShareLaying />
          <ShareLaying />
          <ShareLaying />
        </div>
      </div>
    </div>
  );
};

export default Destination;
