import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Nav from "./components/Nav";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <HeroPage />
      <AboutPage />
      <ExperiencePage />
      <EducationPage />
      <SkillsPage />
      <ProjectsPage />
      {/* <TestimonialsPage /> */}
      <ContactPage />
    </React.Fragment>
  );
};

export default App;
