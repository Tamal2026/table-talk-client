import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Services from '../Services/Sevices'
import TeamMembar from "../TeamMember/TeamMembar";
import Menu from "./Menu/Menu";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Menu></Menu>
            <Services></Services>
            <TeamMembar></TeamMembar>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;