import styled from "styled-components";

const AboutPage = () => {
  return (
    <AboutPageWrapper id="about">
      <div className="container">
        <p className="text-center mb-4">
          <span className="about-title fw-bold bg-yellow d-inline-block px-3 py-1">
            About Me
          </span>
        </p>
        <p className="about-subtitle h1 fw-bold text-center">Know Me More</p>
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
            <div className="about-description">
              <h1 className="about-description-heading h2 text-center fw-normal mb-4">
                Hi, I'm <span className="fw-bold">Deepak Kumar</span>
              </h1>
              <p className="text-center fs-5 lh-lg">
                I am a dedicated software developer with a deep passion for creating
                intuitive and engaging software applications. My love for computer
                science and technology fuels my drive to stay at the forefront
                of innovation, constantly learning and implementing cutting-edge
                solutions.
              </p>
            </div>
            <div className="about-experience d-flex flex-column justify-content-center align-items-center">
              <span className="about-experience-count">2&#43;</span>
              <p className="h3 text-center fw-normal">
                Years of <span className="fw-bold">Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutPageWrapper>
  );
};

const AboutPageWrapper = styled.section`
  padding: 6rem 0rem;

  .about-subtitle {
    margin-bottom: 4rem;
  }

  .about-description {
    margin-bottom: 4rem;
  }

  .about-experience-count {
    display: inline-block;
    height: 7rem;
    width: 7rem;
    font-size: 4rem;
    font-weight: 600;
    border-radius: 50%;
    background-color: #f5df4e;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-description-heading span {
    font-weight: bold;
    position: relative;
  }

  .about-description-heading span::before {
    content: "";
    position: absolute;
    width: 100%;
    border: 1.5px solid #f5df4e;
    top: 110%;
  }
`;

export default AboutPage;
