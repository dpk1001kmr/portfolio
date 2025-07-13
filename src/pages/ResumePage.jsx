import React from "react";
import styled from "styled-components";

const ResumePage = () => {
  return (
    <ResumePageContainer className="bg-light">
      <div className="container">
        <p className="text-center">
          <span className="bg-yellow d-inline-block px-3 py-1 mb-3">
            Resume
          </span>
        </p>
        <div className="row gy-3">
          <div className="col-12 col-lg-6">
            <ul className="list-group rounded-0">
              <div className="list-group-item bg-light">
                <p className="fw-bold mb-0">Summary of my education</p>
              </div>
              <li className="list-group-item bg-light">
                <div>
                  <p className="fw-bold mb-1">Kurukshetra University (KUK)</p>
                  <p className="mb-1">
                    B.Tech (Computer Science and Engineering)
                  </p>
                  <p className="mb-1 text-secondary">
                    June 2014 &ndash; June 2018
                  </p>
                  <p className="mb-0">
                    Division: <span className="fw-bold">First</span>
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light">
                <div>
                  <p className="fw-bold mb-1">BSEB</p>
                  <p className="mb-1">12th (Science Stream)</p>
                  <p className="mb-1 text-secondary">
                    March 2011 &ndash; March 2013
                  </p>
                  <p className="mb-0">
                    Division: <span className="fw-bold">First</span>
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light">
                <div>
                  <p className="fw-bold mb-1">BSEB</p>
                  <p className="mb-1">10th</p>
                  <p className="mb-1 text-secondary">
                    March 2010 &ndash; March 2011
                  </p>
                  <p className="mb-0">
                    Division: <span className="fw-bold">First</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="list-group rounded-0">
              <div className="list-group-item bg-light">
                <p className="fw-bold mb-0">Summary of my work experience</p>
              </div>
              <li className="list-group-item bg-light">
                <div>
                  <p className="fw-bold mb-1">
                    Foundry (Selling Simplified PVT. LTD.)
                  </p>
                  <p className="mb-1">Frontend Developer</p>
                  <p className="mb-1 text-secondary">
                    June 2022 &ndash; August 2024
                  </p>
                  <p className="mb-0">
                    Experience: <span className="fw-bold">2+ years</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ResumePageContainer>
  );
};

const ResumePageContainer = styled.section`
  padding: 6rem 0rem;
`;

export default ResumePage;
