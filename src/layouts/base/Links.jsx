import Activelink from "./Activelink";

const Links = () => {
  return (
    <>
      <li>
        <Activelink to="/">Home</Activelink>
      </li>
      <li>
        <Activelink to="/all_toys">Destination</Activelink>
      </li>

      <li>
        <Activelink to="/blog">About</Activelink>
      </li>
    </>
  );
};

export default Links;