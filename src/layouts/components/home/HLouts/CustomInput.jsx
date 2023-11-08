import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiFlag, FiUsers } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";

const CustomInput = ({ heading, icon, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const iconComponents = {
    go: <FaLocationArrow />,
    type: <FiFlag />,
    date: <MdOutlineDateRange />,
    guest: <FiUsers />,
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text italic font-bold">{heading}</span>
      </label>
      <div className="relative">
        {iconComponents[icon] && (
          <div
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-opacity duration-300 ${
              inputValue.trim() ? "opacity-0" : "opacity-100"
            } icon-placeholder`}
          >
            {iconComponents[icon]}
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered icnDisable"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
};

export default CustomInput;
