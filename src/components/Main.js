import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./content/About";
import Projects from "./content/Projects";
import Resume from "./content/Resume";
import Contact from "./content/Contact";

function Main() {
  const message = "Test";
  const [selectedContent, setSelectedContent] = useState("About");

  const renderContent = () => {
    if (selectedContent === "About") {
      return <About />;
    }
    if (selectedContent === "Contact") {
      return <Contact />;
    }
    if (selectedContent === "Projects") {
      return <Projects />;
    }
    if (selectedContent === "Resume") {
      return <Resume />;
    }
  };

  const changeContent = (content) => setSelectedContent(content);

  return (
    <div className="container">
      <Navbar
        selectedContent={selectedContent}
        changeContent={changeContent}
      />
    <div class="columns">
<div class="column"></div>
      {renderContent()}
      <Footer />
      <p>{message}</p>
      <div class="column"></div>
      </div>
    </div>
  );
}
export default Main;
