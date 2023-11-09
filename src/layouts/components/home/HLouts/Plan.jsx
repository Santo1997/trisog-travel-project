import { BsCheck } from "react-icons/bs";

const Plan = () => {
  return (
    <div className="md:h-[28rem] overflow-hidden grid md:grid-cols-2 mt-5 bg-[#f5f6f8]">
      <div className="block h-96 md:h-auto p-14 relative">
        <div className="h-96 absolute right-14">
          <div className="h-[21rem] w-96 block bg-blue-900 relative">
            <div className="h-64 w-[66%] block bg-yellow-400 absolute right-0 top-0"></div>
            <img
              src="./plan_trip.png"
              className="absolute top-[-4rem] h-80 right-[-3rem]"
            />
            <p className="text-white text-center w-full absolute bottom-12 md:bottom-8">
              <span className="text-3xl italic">10+</span> Years Of Experiences
            </p>
          </div>
        </div>
      </div>
      <div className="p-20 md:p-14">
        <div className="w-72">
          <div>
            <h2 className="text-lg font-bold italic text-blue-900">
              Why Choose Us
            </h2>
            <h1 className="text-3xl font-bold">
              Plan Your Trip <br /> With Trisog
            </h1>
          </div>

          <p className="text-sm text-gray-400 my-3">
            Holisticly optimize proactive strategic theme areas rather than
            effective manufactured products create.
          </p>

          <ul className="grid grid-cols-2 gap-x-3 text-xs font-bold">
            <li className="flex gap-1 items-center">
              <BsCheck className="text-base" /> Travel Plan
            </li>
            <li className="flex gap-1 items-center">
              <BsCheck className="text-base" /> Cheap Rates
            </li>
            <li className="flex gap-1 items-center">
              <BsCheck className="text-base" /> Hand-picked Tour
            </li>
            <li className="flex gap-1 items-center">
              <BsCheck className="text-base" /> Private Guide
            </li>
          </ul>

          <button className="btn btn-outline btn-md capitalize mt-5">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
