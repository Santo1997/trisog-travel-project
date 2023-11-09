import { BiPlayCircle } from "react-icons/bi";
const Partners = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 py-10 md:p-20 justify-around items-center  bgFormat">
        <div className="mb-10 w-96">
          <BiPlayCircle className="text-yellow-400 text-2xl mb-3" />
          <h2 className="text-lg font-bold italic text-yellow-400">
            Are you ready to travel
          </h2>
          <h1 className="text-3xl font-bold text-white">
            Tevily is a World Leading Online Tour Booking Platform
          </h1>
          <button className="btn btn-outline btn-md capitalize mt-5 border-white text-white hover:border-info">
            Contact Us
          </button>
        </div>

        <div className="flex justify-center">
          <ul className="grid grid-cols-2 w-fit gap-5">
            <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
              <img
                src="./cat1.png"
                className="w-11 h-11 mx-auto rounded-full"
              />
              <h2 className="text-sm font-bold mt-2 leading-none">
                Wildlife Tours
              </h2>
            </li>
            <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
              <img
                src="./cat1.png"
                className="w-11 h-11 mx-auto rounded-full"
              />
              <h2 className="text-sm font-bold mt-2 leading-none">
                Paragliding Tours
              </h2>
            </li>
            <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
              <img
                src="./cat1.png"
                className="w-11 h-11 mx-auto rounded-full"
              />
              <h2 className="text-sm font-bold mt-2 leading-none">
                Adventure Tours
              </h2>
            </li>
            <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
              <img
                src="./cat1.png"
                className="w-11 h-11 mx-auto rounded-full"
              />
              <h2 className="text-sm font-bold mt-2 leading-none">
                Beaches Tours
              </h2>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid justify-center text-center p-5 bg-blue-900">
        <h2 className="text-lg font-bold italic text-yellow-400">
          Our trusted partners
        </h2>
        <ul className="flex gap-5 md:gap-28 mt-5">
          <li>
            <img src="./cat1.png" className="w-16 h-12" />
          </li>
          <li>
            <img src="./cat1.png" className="w-16 h-12" />
          </li>
          <li>
            <img src="./cat1.png" className="w-16 h-12" />
          </li>
          <li>
            <img src="./cat1.png" className="w-16 h-12" />
          </li>
          <li>
            <img src="./cat1.png" className="w-16 h-12" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Partners;
