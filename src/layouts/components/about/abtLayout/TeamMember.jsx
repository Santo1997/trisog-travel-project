const TeamMember = () => {
  return (
    <div className="p-5 md:p-20">
      <div className="text-center">
        <h2 className="text-lg font-bold italic text-red-600">Team</h2>
        <h1 className="text-3xl font-bold my-3 leading-none">
          Our Amazing Team
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-8">
        <div className=" bg-white">
          <img src="./cat1.png" className="w-full h-52" />
          <h2 className="text-base font-bold my-2">Antony Shkraba</h2>
          <p className="text-sm text-gray-500">Founder $ Director</p>
        </div>
        <div className=" bg-white">
          <img src="./cat1.png" className="w-full h-52" />
          <h2 className="text-base font-bold my-2">Andrew Davie</h2>
          <p className="text-sm text-gray-500">Chif Operation Officer</p>
        </div>
        <div className=" bg-white">
          <img src="./cat1.png" className="w-full h-52" />
          <h2 className="text-base font-bold my-2">Orlango Diggs</h2>
          <p className="text-sm text-gray-500">Director - Hotels</p>
        </div>
        <div className=" bg-white">
          <img src="./cat1.png" className="w-full h-52" />
          <h2 className="text-base font-bold my-2">Philips Martin</h2>
          <p className="text-sm text-gray-500">Chief Executive</p>
        </div>
        <div className=" bg-white">
          <img src="./cat1.png" className="w-full h-52" />
          <h2 className="text-base font-bold my-2">Tamara Bellis</h2>
          <p className="text-sm text-gray-500">Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
