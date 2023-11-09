import { BiSolidQuoteAltRight } from "react-icons/bi";
const Review = () => {
  return (
    <>
      <div className="px-5 md:px-20 mt-5 pt-80 pb-10 md:py-20 bg-[#f5f6f8]">
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative ">
            <img
              src="./keep1.jpg"
              className="h-28 absolute top-[-3rem] right-28 md:right-48 rotate-[6deg] z-10 border-4 border-white"
            />
            <img
              src="./keep1.jpg"
              className="h-52 absolute right-12 md:right-32 bottom-0 md:bottom-8 rotate-[-6deg]"
            />
            <img
              src="./keep1.jpg"
              className="h-28 bottom-44 right-32 md:bottom-[-3rem] md:right-48 absolute rotate-[6deg] border-4 border-white"
            />
          </div>
          <div className="w-96 pe-3 mt-32 md:mt-0 text-center">
            <h2 className="text-lg font-bold italic text-red-600">
              Testimonials
            </h2>
            <h1 className="text-3xl font-bold my-3 leading-none">
              What Travelers Say
            </h1>
            <span className="flex justify-center mt-10 text-red-500 text-2xl">
              <BiSolidQuoteAltRight />
            </span>
            <p className="grid gap-4 w-96 mx-auto mt-5 font-bold text-sm">
              <span>
                &quot; The UI designs he crafted are top-notch, and the design
                system he integrated allows for straight forward fixed and bulk
                updates throughout almost every area of the app.&ldquo;
              </span>

              <span className="text-gray-400">-By Molie Rosa, Photograph</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:pt-10 pb-5 bg-[#f5f6f8]">
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

export default Review;
