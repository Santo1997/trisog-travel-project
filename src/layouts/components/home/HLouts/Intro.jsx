import CustomInput from "./CustomInput";

const Intro = () => {
  return (
    <>
      <div className="hero relative">
        <div className="hero-content items-start flex-col-reverse lg:flex-row-reverse md:pt-16 md:px-24 bg-blue-900">
          <img src="./intro2.jpeg" className="md:max-w-sm" />
          <img src="./intro.jpg" className="md:max-w-sm h-96" />
          <div className="mt-5 md:mt-24 text-white">
            <h1 className="text-2xl italic text-yellow-400">Explore The</h1>
            <h1 className="text-5xl font-bold">Travel & Adventures</h1>
            <p className="py-6">
              Find awesome hotel, tour, car, and activities in London
            </p>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:bottom-14 md:rounded-lg bg-white p-4">
          <form className="flex md:grid-cols-5 gap-4">
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
      <div className="md:hidden p-8">
        <form className="grid md:grid-cols-5 gap-4">
          <CustomInput
            heading="Desatination"
            icon="go"
            placeholder="   Where to go?"
          />
          <CustomInput heading="Type" icon="type" placeholder="   Activity" />
          <CustomInput heading="When" icon="date" placeholder="   Date" />
          <CustomInput heading="Guest" icon="guest" placeholder="    0" />

          <div className="form-control mt-8">
            <button className="btn bg-yellow-400 text-black hover:bg-info w-36 mx-auto">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Intro;
