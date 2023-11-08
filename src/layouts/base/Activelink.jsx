import { NavLink } from "react-router-dom";

const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-blue-900"
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
