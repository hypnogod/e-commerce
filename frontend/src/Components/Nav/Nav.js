import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/NewSearch";
import Sidebar from "./Sidebar/Sidebar";
import Backdrop from "./Sidebar/Backdrop";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import NavInfoNotMain from './NavInfoNotMain'

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigScreen: true,
      sideMenu: false,
    };
  }
  setSmallwindow = async () => {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    if (screenWidth > 980) {
      this.setState({ bigScreen: true });
    } else {
      this.setState({ bigScreen: false });
    }
  }
  checkWindowResize = () => {
    var screenWidth;
    window.addEventListener(
      "resize",
      function () {
        screenWidth = window.innerWidth || document.documentElement.clientWidth;
        if (screenWidth > 980) {
          this.setState({ bigScreen: true });
          this.setState({ sideMenu: false });
        } else {
          this.setState({ bigScreen: false });
        }
      }.bind(this),
      false
    );
  }
  componentDidMount = () => {
     this.setSmallwindow();
    this.checkWindowResize();
  }

  hamberClickHandler = () => {
    this.setState({ sideMenu: true });
  };
  backdropClickHandeler = async () => {
    var closeSidebar = document.querySelector("#sidebar");
    if (closeSidebar) {
      closeSidebar.classList.add("closeSB");
    }
    setTimeout(() => {
        this.setState({ sideMenu: false });
    }, 400)
  };

  render() {
    let sideBar;
    let backdrop;
    if (this.state.sideMenu) {
      sideBar = <Sidebar />;
      backdrop = <Backdrop click={this.backdropClickHandeler} />;
    }
    return (
      <>
        {sideBar}
        {backdrop}
        <nav className="header">
          <Link to="/">
            <img
              src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
              alt="company logo"
              id="header-img"
            />
          </Link>
          <SearchBar />
          {this.state.bigScreen ? (
            <NavInfoNotMain />
          ) : (
            <IconButton onClick={this.hamberClickHandler} color="primary">
              <MenuIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
          )}
        </nav>
      </>
    );
  }
}
