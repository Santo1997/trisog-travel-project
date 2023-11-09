import Activelink from "./Activelink";

const Links = () => {
  return (
    <>
      <li>
        <Activelink to="/">Home</Activelink>
      </li>
      <li>
        <Activelink to="/destination">Destination</Activelink>
      </li>
      <li>
        <Activelink to="/about">About</Activelink>
      </li>
    </>
  );
};

export default Links;
