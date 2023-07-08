import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.className}>
        <img src={props.heroImage} className="img" />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            Donate
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
