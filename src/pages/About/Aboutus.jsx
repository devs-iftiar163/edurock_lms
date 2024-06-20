import Counter from "../Home/Counter";
import Courses from "../Home/Courses";
import Testimonials from "../Home/Testimonials";
import AboutHeader from "./AboutHeader";
import AboutHeroSection from "./AboutHeroSection";
import "./Aboutus.css";
import Instructors from "./Instructors";

const Aboutus = () => {
  return (
    <>
      <AboutHeader />
      <AboutHeroSection />
      <Courses />
      <Counter />
      <Instructors />
      <Testimonials />
    </>
  );
};

export default Aboutus;
