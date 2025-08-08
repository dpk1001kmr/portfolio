import React from "react";
import styled from "styled-components";

import { FaCircle } from "react-icons/fa";

const ContactPage = () => {
  return (
    <React.Fragment>
      <ContactPageWrapper id="contact" className="">
        <div className="container">
          <p className="text-center mb-5">
            <span className="bg-yellow fw-bold d-inline-block px-3 py-1">
              Contact Me
            </span>
          </p>
          <div className="row">
            <div className="col-12">
              <ul className="list-group rounded-0 mb-5">
                <li className="list-group-item bg-light py-3">
                  <p className="fw-bold mb-0">Feel free to contact me &rarr;</p>
                </li>
                <li className="list-group-item bg-light d-flex gap-4 py-3">
                  <span className="text-yellow">
                    <FaCircle />
                  </span>
                  <p className="mb-0">
                    <span className="fw-bold">Email &rarr; </span>
                    <span className="fst-italic text-secondary">
                      deepak8364kumar@gmail.com
                    </span>
                  </p>
                </li>
                <li className="list-group-item bg-light d-flex gap-4 py-3">
                  <span className="text-yellow">
                    <FaCircle />
                  </span>
                  <p className="mb-0">
                    <span className="fw-bold">Phone &rarr; </span>
                    <span className="fst-italic text-secondary">
                      (+91) 93508 94761
                    </span>
                  </p>
                </li>
              </ul>
              <ul className="list-group rounded-0">
                <li className="list-group-item bg-light py-3">
                  <p className="fw-bold mb-0">Social links &rarr;</p>
                </li>
                <li className="list-group-item bg-light d-flex gap-4 py-3">
                  <span className="text-yellow">
                    <FaCircle />
                  </span>
                  <p className="mb-0">
                    <span className="fw-bold">Github &rarr; </span>
                    <a
                      href="https://github.com/dpk1001kmr"
                      className="badge bg-yellow text-dark text-decoration-none"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </p>
                </li>
                <li className="list-group-item bg-light d-flex gap-4 py-3">
                  <span className="text-yellow">
                    <FaCircle />
                  </span>
                  <p className="mb-0">
                    <span className="fw-bold">Linkedin &rarr; </span>
                    <a
                      href="https://linkedin.com/in/deepak-kumar-506410349/"
                      className="badge bg-yellow text-dark text-decoration-none"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContactPageWrapper>
      <FooterWrapper className="bg-yellow">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="fw-bold">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                &#124; This template is made by Deepak Kumar.
              </span>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </FooterWrapper>
    </React.Fragment>
  );
};

const ContactPageWrapper = styled.section`
  padding: 6rem 0rem;
`;

const FooterWrapper = styled.footer`
  padding: 6rem 0rem;
`;

export default ContactPage;
