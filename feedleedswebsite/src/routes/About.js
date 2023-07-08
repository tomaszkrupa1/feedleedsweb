import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImage="https://streetsoccerlondon.org/wp-content/uploads/2021/07/2016-homeless-world-cup-1024x683.jpg"
        title="About"
        text=""
        // buttonText=""
        // url="/"
        btnClass="hide"
      />
    </>
  );
}

export default About;
