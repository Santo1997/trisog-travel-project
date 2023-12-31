import Intro from "./HLouts/Intro";
import Category from "./HLouts/Category";
import Plan from "./HLouts/Plan";
import TopDesti from "./HLouts/TopDesti";
import Features from "./HLouts/Features";
import KeepThings from "./HLouts/KeepThings";
import Testimonial from "./HLouts/Testimonial";
import Partners from "./HLouts/Partners";
import Latest from "./HLouts/Latest";
import UserData from "./HLouts/UserData";

const Home = () => {
  return (
    <>
      <Intro />
      <UserData />
      <Category />
      <Plan />
      <TopDesti />
      <Features />
      <KeepThings />
      <Testimonial />
      <Partners />
      <Latest />
    </>
  );
};

export default Home;
