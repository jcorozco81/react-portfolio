import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Burger, SubMenu, Item } from "burger-menu";
import Hamburger from "hamburger-react";
import "../assets/css/style.css";
import "burger-menu/lib/index.css";

const Navigation = ({ changeContent, selectedContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
          id="nav-cont"
        >
        <div className="navbar-brand py-4">
        <div onClick={() => setIsOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        <h6 className="subtitle is-6 has-text-centered">menu</h6>
      </div>

        </div>
        
        <div className="nav-title py-4">


<h2 className="title is-2 header-txt" id="name">Juan Carlos Orozco León</h2>
<h4 class="subtitle is-4 header-txt" id="position">Full Stack Web Developer</h4>


          </div>
      </nav>


      <Burger
        className="burger-menu"
        isOpen={isOpen}
        selectedKey={"entry"}
        onClose={() => setIsOpen(false)}
      >
        <Link
          to="/"
          onClick={() => changeContent("About")}
          className={
            selectedContent === "About"
              ? "button is-outline is-ghost is-medium mx-5"
              : "button is-medium is-ghost mx-5"
          }
        >
          About Me
        </Link>

        <Link
          to="/Projects"
          onClick={() => changeContent("Projects")}
          className={
            selectedContent === "Projects"
              ? "button is-outline is-ghost is-medium mx-5"
              : "button is-medium is-ghost mx-5"
          }
        >
          Projects
        </Link>

        <Link
          to="/Resume"
          onClick={() => changeContent("Resume")}
          className={
            selectedContent === "Resume"
              ? "button is-outline is-ghost is-medium mx-5"
              : "button is-medium is-ghost mx-5"
          }
        >
          Resume
        </Link>

        <Link
          to="/Contact"
          onClick={() => changeContent("Contact")}
          className={
            selectedContent === "Contact"
              ? "button is-outline is-ghost is-medium mx-5"
              : "button is-medium is-ghost mx-5"
          }
        >
          Contact
        </Link>

        {/* <Item itemKey={'manage'} text={'User Management'}></Item>
        <Item itemKey={'user'} text={'User Center'}></Item>
        <SubMenu title="Union Management">
          <Item itemKey={'notice'} text={'Announcement'}></Item>
          <Item itemKey={'union'} text={'Union Inquiries'}></Item>
          <Item itemKey={'entry'} text={'Entry information'}></Item>
        </SubMenu> */}
      </Burger>
    </div>
  );
};

// ReactDOM.render(<Navigation />, document.querySelector('#app'));

export default Navigation;
