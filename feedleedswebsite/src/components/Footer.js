import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <h1>FEED LEEDS</h1>
        <p>This is the feed leeds slogan</p>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>First</h4>
          <a href="/">One</a>
          <a href="/">Two</a>
          <a href="/">Three</a>
          <a href="/">Four</a>
        </div>
        <div>
          <h4>Second</h4>
          <a href="/">One</a>
          <a href="/">Two</a>
          <a href="/">Three</a>
          <a href="/">Four</a>
        </div>
        <div>
          <h4>Third</h4>
          <a href="/">One</a>
          <a href="/">Two</a>
          <a href="/">Three</a>
          <a href="/">Four</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
