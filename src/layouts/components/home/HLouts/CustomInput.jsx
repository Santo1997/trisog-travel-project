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
  
  );
};

export default CustomInput;
