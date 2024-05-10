import About from "./About";
import Contact from "./Contact";
import Counter from "./Counter";
import Courses from "./Courses";
import Hero from "./Hero";
import "./Home.css";
import Partners from "./Partners";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Counter />
      <Service />
      <Courses />
      <Contact />
    </>
  );
};

export default Home;
