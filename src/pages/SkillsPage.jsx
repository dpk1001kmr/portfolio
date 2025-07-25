import styled from "styled-components";

import { FaCircle } from "react-icons/fa";

const skillsList = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Javascript",
  "React Js",
  "Redux-Toolkit, React-Redux",
  "Node Js",
  "Express Js",
  "MongoDB",
  "MVC (Model View Controller) Architecture",
  "API (Application Programming Interface) Development",
  "Git",
  "Github",
];

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
              {skillsList.map((skill) => {
                return (
                  <li
                    className="list-group-item bg-light d-flex gap-4 py-3"
                    key={skill}
                  >
                    <span className="text-yellow">
                      <FaCircle />
                    </span>
                    <span className="fw-bold">{skill}</span>
                  </li>
                );
              })}
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
