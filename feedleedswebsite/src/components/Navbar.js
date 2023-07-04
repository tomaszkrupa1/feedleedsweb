import { Component } from "react";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">FEED LEEDS</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul
          className={this.state.clicked ? "Navbar-menu active" : "Navbar-menu"}
        >
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                  {/* <i className={item.icon}></i> */}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
