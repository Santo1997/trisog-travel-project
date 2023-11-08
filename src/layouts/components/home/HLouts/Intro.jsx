import CustomInput from "./CustomInput";

const Intro = () => {
  return (
    <div className="hero border border-black relative">
      <div className="hero-content items-start flex-col lg:flex-row-reverse pt-16 px-24 bg-blue-900">
        <img src="./intro2.jpeg" className="max-w-sm" />

        <img src="./intro.jpg" className="max-w-sm h-96" />

        <div className="mt-24 text-white">
          <h1 className="text-2xl italic text-yellow-400">Explore The</h1>
          <h1 className="text-5xl font-bold">Travel & Adventures</h1>
          <p className="py-6">
            Find awesome hotel, tour, car, and activities in London
          </p>
        </div>
      </div>

      <div className="block absolute bottom-14 rounded-lg bg-white p-4">
        <form className="flex gap-4">
          <CustomInput
            heading="Desatination"
            icon="go"
            placeholder="   Where to go?"
          />
          <CustomInput heading="Type" icon="type" placeholder="   Activity" />
          <CustomInput heading="When" icon="date" placeholder="   Date" />
          <CustomInput heading="Guest" icon="guest" placeholder="    0" />

          <div className="form-control mt-8">
            <button className="btn bg-yellow-400 text-black hover:bg-info">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Intro;
