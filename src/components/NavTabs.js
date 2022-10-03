import React from "react";
import "./assets/css/navtabs.css";
import Dropdown from "react-bootstrap/Dropdown";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button">SOLUTIONS</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            href="#Solutions"
            onClick={() => handlePageChange("Solutions")}
          >
            HOME
          </Dropdown.Item>
          <Dropdown.Item
            href="#Fractional"
            onClick={() => handlePageChange("Fractional")}
          >
            FRACTIONAL SERVICES
          </Dropdown.Item>
          <Dropdown.Item
            href="#Training"
            onClick={() => handlePageChange("Training")}
          >
            TRAINING & DEVELOPMENT
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <li className="nav-item">
        <a
          href="#About"
          id="navigation"
          onClick={() => handlePageChange("About")}
        >
          About
        </a>
      </li> */}
      {/* <li className="nav-item">
        <a
          href="#Resources"
          id="navigation"
          onClick={() => handlePageChange("Resources")}
        >
          RESOURCES
        </a>
      </li> */}
      <li className="nav-item">
        <a
          href="#Workwithus"
          id="navigation"
          onClick={() => handlePageChange("Work")}
        >
          WORK WITH US
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
