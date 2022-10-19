import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Fractional from "./pages/Fractional";
import Training from "./pages/Training";
import Resources from "./pages/Resources";
import Work from "./pages/Work";
import Hamburger from "./Hamburger";
import logo from "./assets/images/logo.png";
import "./assets/css/container.css";

const logoClick = () => {
  window.location.replace("/Solutions");
};

export default function ThinkContainer() {
  const [currentPage, setCurrentPage] = useState("Solutions");

  const renderPage = () => {
    if (currentPage === "Solutions") {
      return <Solutions />;
    }
    if (currentPage === "Fractional") {
      return <Fractional />;
    }
    if (currentPage === "Training") {
      return <Training />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resources") {
      return <Resources />;
    }
    return <Work />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div id="header">
        <img src={logo} id="title-logo" onClick={logoClick} />
        <div id="nav">
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div id="hamburger">
          <Hamburger
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      {renderPage()}
    </div>
  );
}
