import ShareBanner from "../share/ShareBanner";
import AbtIntro from "./abtLayout/AbtIntro";
import AbFeatures from "./abtLayout/AbFeatures";
import TeamMember from "./abtLayout/TeamMember";
import Review from "./abtLayout/Review";

const About = () => {
  const pathData = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ];
  return (
    <div>
      <ShareBanner header="About" paths={pathData} />
      <AbtIntro />
      <AbFeatures />
      <TeamMember />
      <Review />
    </div>
  );
};

export default About;
