import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";

const HeadInfo = () => {
  return (
    <div className="bg-gray-200 grid md:grid-cols-2 justify-center md:justify-between text-xs font-bold py-1">
      <div>
        <div className="flex w-full md:ps-10">
          <span>(000)999-898-999</span>
          <div className="divider divider-horizontal"></div>
          <span>info@trisog.com</span>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center pe-10">
        <span className="flex gap-2">
          <AiOutlineTwitter />
          <BiLogoLinkedin />
          <AiOutlineGoogle />
          <FaPinterestP />
        </span>
        <div className="divider divider-horizontal"></div>
        <select className="bg-gray-200 outline-0">
          <option disabled selected>
            Homer
          </option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
    </div>
  );
};

export default HeadInfo;
