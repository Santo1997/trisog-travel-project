import { AiFillInstagram } from "react-icons/ai";

const Latest = () => {
  return (
    <div className="px-5 md:px-20 my-10">
      <div className="text-center my-5">
        <h2 className="text-lg font-bold italic text-blue-900">Updates</h2>
        <h1 className="text-3xl font-bold">Latest Travel Guide</h1>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="card lg:card-side hover:shadow-xl">
          <figure>
            <img src="./keep1.jpg" className="h-32" />
          </figure>
          <div className="card-body">
            <p className="flex text-sm text-gray-400 gap-10">
              <span>Juky 13, 2023</span>
              <span>. Admin</span>
            </p>
            <h2 className="card-title">
              The Impact of Covid-19 on travel & tourism industry
            </h2>
          </div>
        </div>
        <div className="card lg:card-side hover:shadow-xl">
          <figure>
            <img src="./keep1.jpg" className="h-32" />
          </figure>
          <div className="card-body">
            <p className="flex text-sm text-gray-400 gap-10">
              <span>Juky 13, 2023</span>
              <span>. Admin</span>
            </p>
            <h2 className="card-title">
              The Impact of Covid-19 on travel & tourism industry
            </h2>
          </div>
        </div>
        <div className="card lg:card-side hover:shadow-xl">
          <figure>
            <img src="./keep1.jpg" className="h-32" />
          </figure>
          <div className="card-body">
            <p className="flex text-sm text-gray-400 gap-10">
              <span>Juky 13, 2023</span>
              <span>. Admin</span>
            </p>
            <h2 className="card-title">
              The Impact of Covid-19 on travel & tourism industry
            </h2>
          </div>
        </div>
        <div className="card lg:card-side hover:shadow-xl">
          <figure>
            <img src="./keep1.jpg" className="h-32" />
          </figure>
          <div className="card-body">
            <p className="flex text-sm text-gray-400 gap-10">
              <span>Juky 13, 2023</span>
              <span>. Admin</span>
            </p>
            <h2 className="card-title">
              The Impact of Covid-19 on travel & tourism industry
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-end relative mt-10">
        <span className="flex items-center gap-2 absolute left-[-1rem] md:left-0 bottom-12 rotate-[270deg] font-bold text-sm text-blue-950">
          <AiFillInstagram /> @trisog
        </span>

        <div className="grid grid-cols-2 md:grid-cols-5 w-11/12 justify-between">
          <img src="./keep3.jpg" className="w-32 h-32" />
          <img src="./keep3.jpg" className="w-32 h-32" />
          <img src="./keep3.jpg" className="w-32 h-32" />
          <img src="./keep3.jpg" className="w-32 h-32" />
          <img src="./keep3.jpg" className="w-32 h-32" />
        </div>
      </div>
    </div>
  );
};

export default Latest;
