import styled from "styled-components";

import { FaCircle } from "react-icons/fa";

const SkillsPage = () => {
  return (
    <SkillsPageWrapper id="skills" className="bg-light">
      <div className="container">
        <p className="text-center mb-5">
          <span className="bg-yellow fw-bold d-inline-block px-3 py-1">
            Skills
          </span>
        </p>
        <div className="row">
          <div className="col-12">
            <ul className="list-group rounded-0">
              <li className="list-group-item bg-light py-3">
                <p className="fw-bold mb-0">Summary of my skills &rarr;</p>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">HTML5</span>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">CSS3</span>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">Bootstrap</span>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">Javascript</span>
              </li>
              {/* <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">Typescript</span>
              </li> */}
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">React</span>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">Redux</span>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">Data Structures and Algorithms</span>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">Git</span>
              </li>
              <li className="list-group-item bg-light d-flex gap-4 py-3">
                <span className="text-yellow">
                  <FaCircle />
                </span>
                <span className="fw-bold">Github</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SkillsPageWrapper>
  );
};

const SkillsPageWrapper = styled.section`
  padding: 6rem 0rem;

  .skills-main-heading {
    margin-bottom: 6rem;
  }
`;

export default SkillsPage;
