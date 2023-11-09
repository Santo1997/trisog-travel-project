const KeepThings = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3 mt-5 px-5 md:p-20 bg-[#f5f6f8]">
      <div>
        <div className="text-left mb-10">
          <h2 className="text-lg font-bold italic text-blue-900">
            Why We Are Best
          </h2>
          <h1 className="text-3xl font-bold">Keep Things Flexible</h1>
          <button className="btn btn-outline btn-md capitalize mt-5">
            Contact Us
          </button>
        </div>

        <ul className="grid grid-cols-2 gap-y-14">
          <li>
            <span className="text-3xl font-bold italic relative">
              <i className="block w-10 h-10 bg-yellow-400 rounded-full absolute z-[-1]"></i>
              120+
            </span>
            <br />
            <span className="text-gray-400">Total Destination</span>
          </li>
          <li>
            <span className="text-3xl font-bold italic relative">
              <i className="block w-10 h-10 bg-yellow-400 rounded-full absolute z-[-1]"></i>
              12k+
            </span>
            <br />
            <span className="text-gray-400">Total Travelers</span>
          </li>
          <li>
            <span className="text-3xl font-bold italic relative">
              <i className="block w-10 h-10 bg-yellow-400 rounded-full absolute z-[-1]"></i>
              500+
            </span>
            <br />
            <span className="text-gray-400">Travel Packages</span>
          </li>
          <li>
            <span className="text-3xl font-bold italic relative">
              <i className="block w-10 h-10 bg-yellow-400 rounded-full absolute z-[-1]"></i>
              7k+
            </span>
            <br />
            <span className="text-gray-400">Positive Reviews</span>
          </li>
        </ul>
      </div>
      <div className="relative h-80 md:h-auto">
        <img
          src="./keep3.jpg"
          className="w-64 absolute top-0 right-0 z-10 border-4 border-white md:z-0 md:border-0"
        />
        <img src="./keep2.jpeg" className="w-72 " />
        <img
          src="./keep1.jpg"
          className="w-72 absolute bottom-0 right-5 md:right-14 border-4 border-white"
        />
      </div>
    </div>
  );
};

export default KeepThings;
