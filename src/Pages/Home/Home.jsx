import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Services from "../Services/Sevices";
import TeamMembar from "../TeamMember/TeamMembar";
import Menu from "./Menu/Menu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Menu></Menu>
      <Services></Services>
      <TeamMembar></TeamMembar>
      <About></About>

      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
