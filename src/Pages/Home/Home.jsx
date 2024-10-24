import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Services from '../Services/Sevices'

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;