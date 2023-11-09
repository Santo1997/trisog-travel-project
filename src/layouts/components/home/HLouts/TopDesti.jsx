import { FaArrowRight } from "react-icons/fa";
const TopDesti = () => {
  return (
    <div className="px-5 md:px-20 my-10">
      <div className="relative">
        <h2 className="text-lg font-bold italic text-blue-900">Destination</h2>
        <h1 className="text-3xl font-bold">Top Destinations</h1>

        <button className="flex gap-2 items-center text-sm absolute right-0 bottom-0">
          <span>See All</span> <FaArrowRight />
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-3">
        <div className="card card-compact h-72 rounded-none hover:shadow-xl">
          <figure>
            <img src="./intro.jpg" />
          </figure>
          <div className="card-body gap-0">
            <h2 className="card-title text-sm font-bold">United Kingdom</h2>
            <p className="text-xs">174,688 Travelers</p>
          </div>
        </div>
        <div className="card card-compact h-72 rounded-none hover:shadow-xl md:mt-5">
          <figure>
            <img src="./intro.jpg" />
          </figure>
          <div className="card-body gap-0">
            <h2 className="card-title text-sm font-bold">United Kingdom</h2>
            <p className="text-xs">174,688 Travelers</p>
          </div>
        </div>
        <div className="card card-compact h-72 rounded-none hover:shadow-xl">
          <figure>
            <img src="./intro.jpg" />
          </figure>
          <div className="card-body gap-0">
            <h2 className="card-title text-sm font-bold">United Kingdom</h2>
            <p className="text-xs">174,688 Travelers</p>
          </div>
        </div>
        <div className="card card-compact h-72 rounded-none hover:shadow-xl md:mt-5">
          <figure>
            <img src="./intro.jpg" />
          </figure>
          <div className="card-body gap-0">
            <h2 className="card-title text-sm font-bold">United Kingdom</h2>
            <p className="text-xs">174,688 Travelers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDesti;
