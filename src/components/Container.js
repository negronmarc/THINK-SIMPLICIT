import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Fractional from "./pages/Fractional";
import Training from "./pages/Training";
import Resources from "./pages/Resources";
import Work from "./pages/Work";
import Hamburger from "./Hamburger";
import "./assets/css/container.css";

export default function ThinkContainer() {
  const [currentPage, setCurrentPage] = useState("Solutions");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
      {/* We are passing the currentPage from state and the function to update it */}
      <div id="header">
        <h1 id="website-name">THINK SIMPLICIT</h1>
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
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
