import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        className="hero"
        heroImage="https://eyeteethdotnet.files.wordpress.com/2016/05/hooded_homeless_queens_road_brighton_p_maton_15-05-16.jpg"
        title="Keep your change"
        text="we want CHANGE"
        buttonText="Donate"
        url="/"
        btnClass="donate"
      />
      <Info />
    </>
  );
}

export default Home;
