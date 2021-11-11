import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./content/About";
import Projects from "./content/Projects";
import Resume from "./content/Resume";
import Contact from "./content/Contact";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function Main() {
      const [selectedContent, setSelectedContent] = useState("About");
    const changeContent = (content) => setSelectedContent(content);

  return (
    <Router>

    <div className="container">
      <div className="columns mb-6">
        <div className="column mb-6">
          <Navbar
          selectedContent={selectedContent}
          changeContent={changeContent}
          />
        </div>
      </div>

      <div className="columns">
        <div className="column">
        <Route exact path="/">
        <About />
        </Route>
        <Route exact path="/Projects">
        <Projects />
        </Route>
        <Route exact path="/Resume">
        <Resume />
        </Route>
        <Route exact path="/Contact">
        <Contact />
        </Route>

        </div>
      </div>
      <Footer />
    </div>
    </Router>

  );

  //   const [selectedContent, setSelectedContent] = useState("About");

  //   const renderContent = () => {
  //     if (selectedContent === "About") {
  //       return <About />;
  //     }
  //     if (selectedContent === "Contact") {
  //       return <Contact />;
  //     }
  //     if (selectedContent === "Projects") {
  //       return <Projects />;
  //     }
  //     if (selectedContent === "Resume") {
  //       return <Resume />;
  //     }
  //   };

  //   const changeContent = (content) => setSelectedContent(content);

  //   return (
  //     <div className="container">

  // <div className="columns mb-6">

  // <div className="column mb-6">

  //       <Navbar
  //         selectedContent={selectedContent}
  //         changeContent={changeContent}
  //       />
  //      </div>

  // </div>

  //     <div className="columns">

  // <div className="column">
  //       {renderContent()}

  //       </div>

  //       </div>
  //       <Footer />

  //     </div>
  //   );
}
export default Main;
