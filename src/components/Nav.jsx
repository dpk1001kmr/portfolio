import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import styled from "styled-components";

const navItems = [
  "hero",
  "about",
  "experience",
  "education",
  "skills",
  "projects",
  "contact",
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState("hero");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    // Set home as default active on first load
    setActiveLink("hero");
  }, []);

  return (
    <React.Fragment>
      <NavWrapper>
        <header className="header">
          <div className="container px-0">
            <div className="header-content">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveLink("hero")}
                className="header-logo text-dark"
              >
                <span className="header-logo-text fs-4">Portfolio</span>
              </Link>
              <nav
                className={`custom-nav ${
                  navOpen === true ? "custom-nav-open" : ""
                }`}
              >
                <ul className="custom-nav-links mb-0">
                  {navItems.map((item) => {
                    return (
                      <li key={item}>
                        <Link
                          key={item}
                          to={item}
                          smooth={true}
                          duration={500}
                          spy={true}
                          offset={-80}
                          onSetActive={() => setActiveLink(item)}
                          className={`custom-nav-link text-dark ${
                            activeLink === item ? "custom-nav-link-active" : ""
                          }`}
                        >
                          {item === "hero"
                            ? "Home"
                            : item[0].toUpperCase() + item.substring(1)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <span
                  className="d-lg-none text-dark fs-4"
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <IoMdMenu />
                </span>
                <a
                  href="https://github.com/dpk1001kmr"
                  target="_blank"
                  className="text-dark fs-3"
                >
                  <FaGithubAlt />
                </a>

                <a
                  href="https://linkedin.com/in/deepak-kumar-506410349/"
                  target="_blank"
                  className="text-dark fs-4"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </header>
      </NavWrapper>
      <div style={{ height: "80px" }}></div>
    </React.Fragment>
  );
};

const NavWrapper = styled.div`
  .header {
    /* border-bottom: 1px solid var(--blue-950); */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    height: 5rem;
    padding: 0rem 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo-img {
    display: inline-block;
    height: auto;
  }

  .header-logo {
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
  }

  .header-logo:hover {
    color: #f5df4e !important;
  }

  .header-logo-text {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  /* 
  .header-nav-toggler {
    display: none;
  } */

  .custom-nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .custom-nav-link {
    display: inline-block;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: color 0.3s;
  }

  .custom-nav-link:hover {
    color: #f5df4e !important;
  }

  .custom-nav-link-active {
    color: #f5df4e !important;
  }

  @media (max-width: 992px) {
    .header {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      position: relative;
    }

    .custom-nav {
      position: absolute;
      top: 5rem;
      left: 0rem;
      height: 0rem;
      width: 100%;
      overflow: hidden;
      transition: height 0.3s;
      z-index: 9999;
      background-color: #ffffff;
    }

    .custom-nav.custom-nav-open {
      height: 28rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .custom-nav-links {
      display: block;
      padding: 0rem 0rem;
      /* border-top: 0.5px solid var(--blue-700); */
    }

    .custom-nav-links li {
      height: 4rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0rem 1.6rem;
    }

    .custom-nav-links li:not(:last-child) {
      border-bottom: 0.5px solid #adb5bd;
    }
  }
`;

export default Nav;
