import { BiPlayCircle } from "react-icons/bi";
const Partners = () => {
  return (
    <div className=" grid grid-cols-2 justify-around md:px-20 py-5 mt-5 md:h-96 bg-no-repeat border border-black bgFormat">
      <div className=" mb-10 border border-white w-96">
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

      <div>
        <ul className="grid grid-cols-2 border border-white w-fit gap-5">
          <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
            <img src="./cat1.png" className="w-11 h-11 mx-auto rounded-full" />
            <h2>Wildlife Tours</h2>
          </li>
          <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
            <img src="./cat1.png" className="w-11 h-11 mx-auto rounded-full" />
            <h2>Paragliding Tours</h2>
          </li>
          <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
            <img src="./cat1.png" className="w-11 h-11 mx-auto rounded-full" />
            <h2>Adventure Tours</h2>
          </li>
          <li className="block text-center p-5 w-32 h-32 bg-white mb-1">
            <img src="./cat1.png" className="w-11 h-11 mx-auto rounded-full" />
            <h2>Beaches Tours</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Partners;
