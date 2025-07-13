import { IoSchoolSharp } from "react-icons/io5";
import styled from "styled-components";

const EducationPage = () => {
  return (
    <EducationPageWrapper id="education">
      <div className="container">
        <p className="text-center mb-5">
          <span className="bg-yellow fw-bold d-inline-block px-3 py-1">
            Education
          </span>
        </p>
        <div className="row">
          <div className="col-12">
            <ul className="list-group rounded-0">
              <li className="list-group-item py-3">
                <p className="fw-bold mb-0">Summary of my education &rarr;</p>
              </li>
              <li className="list-group-item d-flex gap-4 py-3">
                <span className="university-icon-container text-yellow">
                  <IoSchoolSharp />
                </span>
                <div>
                  <p className="fw-bold mb-1">
                    Kurukshetra University, Kurukshetra (KUK)
                  </p>
                  <p className="mb-1">
                    B.Tech (Computer Science and Engineering)
                  </p>
                  <p className="mb-1 text-secondary fst-italic">
                    June 2014 &ndash; June 2018
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold">Division &rarr; </span>
                    <span>First</span>
                  </p>
                </div>
              </li>
              <li className="list-group-item d-flex gap-4 py-3">
                <span className="university-icon-container text-yellow">
                  <IoSchoolSharp />
                </span>
                <div>
                  <p className="fw-bold mb-1">
                    Bihar School Examination Board (BSEB)
                  </p>
                  <p className="mb-1">
                    Class 12th (Mathematics, Physics, Chemistry, English, Hindi)
                  </p>
                  <p className="mb-1 text-secondary fst-italic">
                    March 2011 &ndash; March 2013
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold">Division &rarr; </span>
                    <span>First</span>
                  </p>
                </div>
              </li>
              <li className="list-group-item d-flex gap-4 py-3">
                <span className="university-icon-container text-yellow">
                  <IoSchoolSharp />
                </span>
                <div>
                  <p className="fw-bold mb-1">
                    Bihar School Examination Board (BSEB)
                  </p>
                  <p className="mb-1">
                    Class 10th (Mathematics, Science, Social Science, Hindi,
                    Sanskrit, English)
                  </p>
                  <p className="mb-1 text-secondary fst-italic">
                    March 2010 &ndash; March 2011
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold">Division &rarr; </span>
                    <span>First</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </EducationPageWrapper>
  );
};

const EducationPageWrapper = styled.section`
  padding: 6rem 0rem;

  .university-icon-container {
    font-size: 3rem;
  }
`;

export default EducationPage;
