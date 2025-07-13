import React from "react";
import { FaArrowDown, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

import styled from "styled-components";

const HeroPage = () => {
  return (
    <HeroPageWrapper id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-8 col-md-6 offset-sm-2 offset-md-3 text-center">
            <img
              className="hero-img"
              src="https://avatars.githubusercontent.com/u/168312091?v=4"
              alt="hero-img"
            />
            <h1 className="fw-bold text-uppercase mb-4">
              Hello! I'm &mdash; Deepak Kumar, Web Developer.
            </h1>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onSetActive={() => setActiveLink("about")}
              className="btn btn-dark px-5 py-2 rounded-0 mb-4"
            >
              <span>About Me &darr;</span>
            </Link>
            <div className="d-flex gap-3 justify-content-center">
              <a
                href="https://github.com/dpk1001kmr"
                target="_blank"
                className="text-dark fs-2"
              >
                <FaGithubAlt />
              </a>
              <a
                href="https://linkedin.com/in/deepak-kumar-506410349/"
                target="_blank"
                className="text-dark fs-2"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeroPageWrapper>
  );
};

const HeroPageWrapper = styled.section`
  background-color: #f5df4e;

  .row {
    min-height: calc(100vh - 5rem);
  }

  .hero-img {
    width: 50%;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 2rem;
    border: 1rem solid #ffffff;
    filter: grayscale(100%);
  }
`;

export default HeroPage;
