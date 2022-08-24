import React from "react";
import Bootstrap from "bootstrap";
import "./assets/css/hamburger.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Hamburger({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav class="navbar col-right">
        <div class="container-fluid">
          <button
            class="navbar-toggler ms-auto btn-outline-light justify-content-between "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
          >
            <i class="bi bi-list" id="lines"></i>
          </button>
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="">
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#Solutions"
              id="navigation-burger"
              onClick={() => handlePageChange("Solutions")}
              className={
                currentPage === "Solutions"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              Solutions
            </a>
          </button>
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#Fractional"
              id="navigation-burger"
              onClick={() => handlePageChange("Fractional")}
              className={
                currentPage === "Fractional"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              Fractional
            </a>
          </button>
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#Training"
              id="navigation-burger"
              onClick={() => handlePageChange("Training")}
              className={
                currentPage === "Training"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              Training
            </a>
          </button>
          <button class="btn btn-link btn-block m-0 text-decoration-none">
            {" "}
            <a
              href="#Workwithus"
              id="navigation-burger"
              onClick={() => handlePageChange("Workwithus")}
              className={
                currentPage === "Workwithus"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              Work With Us
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
