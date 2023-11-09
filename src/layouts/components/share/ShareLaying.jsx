import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
const ShareLaying = () => {
  return (
    <div className="card card-compact h-96 rounded-none bg-white hover:shadow-xl">
      <figure>
        <img src="./intro.jpg" />
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title leading-none text-sm text-gray-400">
          Budapest, Hungary
        </h2>
        <h1 className="card-title text-base font-bold">
          Wonders of the Wes Coast & Kimberly
        </h1>
        <p className="flex justify-between items-center mt-1">
          <div className="flex items-start gap-2">
            <span className="badge bg-yellow-400 rounded-md">
              <AiFillStar /> 4.8
            </span>
            <span>15 reviews</span>
          </div>
          <div className="flex items-center gap-1">
            <BiTime /> <span>7 days</span>
          </div>
        </p>
        <div className="divider m-1"></div>
        <div className="card-actions justify-between items-center">
          <span>Starting From</span>
          <span className="text-xl font-bold italic">$520</span>
        </div>
      </div>
    </div>
  );
};

export default ShareLaying;
