import { FiPlayCircle } from "react-icons/fi";
const AbtIntro = () => {
  return (
    <div className="px-5 md:px-20 mt-5">
      <div className="grid md:grid-cols-2 gap-10 pt-96 md:p-20">
        <div className="relative">
          <img
            src="./intro2.jpeg"
            className="h-72 md:h-96 absolute bottom-20 right-16 translate-x-[-50%] rotate-[-17deg]"
          />
          <img
            src="./intro2.jpeg"
            className="h-72 md:h-96 absolute bottom-0 right-6 md:right-5 border-4 border-white"
          />
          <span className="absolute bottom-5 right-24 btn bg-red-600 ps-8 pe-24 border-white hover:text-red-600 hover:border-red-600 text-white rounded-none italic text-lg">
            <FiPlayCircle /> Watch Now
          </span>
        </div>
        <div className="w-96 pe-3">
          <h2 className="text-lg font-bold italic text-red-600">About us</h2>
          <h1 className="text-3xl font-bold my-3 leading-none">
            Why Select Us for <br /> Your Vacation
          </h1>
          <p className="text-gray-500 text-base">
            Inttrinsicyly myocardinates standards compliant solutaions rather
            than multidisciplinary solutions. Phosfluorescently re-engineer
            goal-oriented resources whereas distributed strategic theme areas.
            Authoritatively coordinate 24/365 process improvements after
            out-of-the-box mindshare.
            <br />
            <br />
            Apporpriately extend user-centric partnerships before interactive
            e-tailers. Efficiently plagiarize superior services after adaptive
            web-readiness.
            <br />
            <br />
            Dynamically whiteboard team building processes rather than long-
            term high-impact infrastructures.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center py-10 md:pt-0">
        <li className="flex items-center gap-2">
          <span className="text-3xl font-bold italic relative">120+</span>
          <span className="text-gray-400">Total Destination</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-3xl font-bold italic relative">500+</span>
          <span className="text-gray-400">Travel Packages</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-3xl font-bold italic relative">12k+</span>
          <span className="text-gray-400">Total Travelers</span>
        </li>

        <li className="flex items-center gap-2">
          <span className="text-3xl font-bold italic relative">7k+</span>
          <span className="text-gray-400">Positive Reviews</span>
        </li>
      </ul>
    </div>
  );
};

export default AbtIntro;
