import { GrProjects } from "react-icons/gr";

import styled from "styled-components";

const ProjectsPage = () => {
  return (
    <ProjectsPageWrapper id="projects">
      <div className="container">
        <p className="text-center mb-5">
          <span className="bg-yellow fw-bold d-inline-block px-3 py-1">
            Projects
          </span>
        </p>
        <div className="row">
          <div className="col-12">
            <ul className="list-group rounded-0">
              <li className="list-group-item py-3">
                <p className="fw-bold mb-0">Summary of my projects &rarr;</p>
              </li>
              <li className="list-group-item d-flex gap-4 py-3">
                <span className="projects-icon-container text-yellow">
                  <GrProjects />
                </span>
                <div>
                  <p className="fw-bold mb-1">
                    Notehub (Backend api for simple note taking app)
                  </p>
                  <p className="fst-italic text-secondary">
                    NoteHub is a simple and efficient note-taking application
                    built with Node.js, Express, and MongoDB. It provides
                    backend API for user authentication with features like
                    registration, login, logout, and profile management. Users
                    can create, view, update, and delete notes, as well as
                    retrieve all their notes or a single note easily. Designed
                    for simplicity and speed, NoteHub offers a lightweight
                    backend for managing personal notes.
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Technologies used &rarr; </span>
                    <span>Node Js, Express Js, MongoDB</span>
                  </p>
                  <p className="mb-1 text-secondary">
                    <a
                      href="https://notehub-vr3x.onrender.com/api-docs/"
                      target="_blank"
                      className="badge bg-yellow text-dark text-decoration-none"
                    >
                      Visit the project here
                    </a>
                  </p>
                </div>
              </li>
              <li className="list-group-item d-flex gap-4 py-3">
                <span className="projects-icon-container text-yellow">
                  <GrProjects />
                </span>
                <div>
                  <p className="fw-bold mb-1">
                    Landing Page Creator Tool (Form Builder Tool)
                  </p>
                  <p className="fst-italic text-secondary">
                    Landing page creator tool is a drag-and-drop tool that
                    enables users to make landing pages. Using this tool user
                    can make landing pages very easily without writing a single
                    line of code. This tool generates HTML markup, CSS styles
                    and Javascript code (such as form validation) automatically
                    for the designed landing pages. I developed this project
                    while working with Foundry (Selling Simplified PVT LTD) for
                    my team so that they can create landing pages easily without
                    worrying about the hundreds of lines of code.
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Technologies used &rarr; </span>
                    <span>React, Redux Toolkit, Styled Components</span>
                  </p>
                  <p className="mb-1 text-secondary">
                    <a
                      href="https://lpcreatortool2.vercel.app/"
                      target="_blank"
                      className="badge bg-yellow text-dark text-decoration-none"
                    >
                      Visit the project here
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectsPageWrapper>
  );
};

const ProjectsPageWrapper = styled.section`
  padding: 6rem 0rem;

  .zero-icon-container {
    font-size: 3rem;
  }

  .projects-icon-container {
    font-size: 2.25rem;
  }
`;

export default ProjectsPage;
