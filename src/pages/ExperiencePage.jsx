import React from "react";
import { FaComputer } from "react-icons/fa6";
import styled from "styled-components";

const ExperiencePage = () => {
  return (
    <ExperiencePageWrapper id="experience" className="bg-light">
      <div className="container">
        <p className="text-center mb-5">
          <span className="bg-yellow fw-bold d-inline-block px-3 py-1">
            Experience
          </span>
        </p>
        <div className="row">
          <div className="col-12">
            <ul className="list-group rounded-0">
              <li className="list-group-item bg-light py-3">
                <p className="fw-bold mb-0">
                  Summary of my work experience &rarr;
                </p>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="computer-icon-container text-yellow">
                  <FaComputer />
                </span>
                <div>
                  <p className="fw-bold mb-1">
                    Foundry (Selling Simplified PVT. LTD.)
                  </p>
                  <p className="mb-1">
                    Frontend Developer (UI Developer, React Developer)
                  </p>
                  <p className="mb-1 text-secondary fst-italic">
                    June 2022 &ndash; August 2024
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold">Experience &rarr; </span>{" "}
                    <span>2+ years</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ExperiencePageWrapper>
  );
};

const ExperiencePageWrapper = styled.section`
  padding: 6rem 0rem;

  .computer-icon-container {
    font-size: 3rem;
  }
`;

export default ExperiencePage;
