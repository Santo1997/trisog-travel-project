import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-gray-400">
      <nav>
        <div className="flex gap-1 mb-3">
          <div className="avatar">
            <div className="w-10 lg:w-10 ms-3 ">
              <img src="https://i.ibb.co/nn647jt/logo.jpg" />
            </div>
          </div>
          <h1 className=" normal-case text-3xl font-extrabold text-white ">
            Trisog
          </h1>
        </div>

        <div className="mb-3">
          <span className="text-xs italic ">Need any Help?</span>
          <h2 className="text-lg font-bold text-white">
            Call Us: <span className="text-yellow-300">(888)1234 5678</span>
          </h2>
        </div>

        <div className="mb-3 ">
          <span>Love Streat, Muscat, Oman</span> <br />
          <span>exaample@trisog.com</span>
        </div>

        <div className="flex gap-2 text-base text-white">
          <AiFillFacebook />
          <AiOutlineTwitter />
          <BiLogoLinkedin />
        </div>
      </nav>
      <nav className="">
        <header className="footer-title italic capitalize text-white">
          Company
        </header>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Travel Guides</a>
        <a className="link link-hover">Data Policy</a>
      </nav>
      <nav className="">
        <header className="footer-title italic capitalize text-white">
          Top Destination
        </header>

        <a className="link link-hover w-full flex gap-5 justify-between">
          <span>Las Vegas</span> <span>Tokyo</span>
        </a>
        <a className="link link-hover w-full flex gap-5 justify-between">
          <span>New York</span> <span>Sydney</span>
        </a>
        <a className="link link-hover w-full flex gap-5 justify-between">
          <span>San Francisco</span>
          <span>Melbourne</span>
        </a>
        <a className="link link-hover w-full flex gap-5 justify-between">
          <span>Hawaii</span>
          <span>Dubaui</span>
        </a>
      </nav>
      <form>
        <header className="footer-title text-white">Newsletter</header>
        <fieldset>
          <input
            type="text"
            placeholder="Enter email..."
            className="input input-bordered w-full pr-16 text-black"
          />
          <button className="btn btn-info mt-3 text-white bg-yellow-300 outline-0 border-0">
            Subscribe
          </button>
        </fieldset>

        <aside className="mt-5">
          <p>© 2023 - Trisog All Right Reserved</p>
        </aside>
      </form>
    </footer>
  );
};

export default Footer;
