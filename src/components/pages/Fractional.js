import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../assets/css/fractional.css";
import womanBridge from "../assets/images/bridge.jpg";
import womanMeeting from "../assets/images/meeting.jpg";
import highFive from "../assets/images/fivemeeting.jpg";
import salesFunnel from "../assets/images/salesfunnel.jpg";
import whiteIcons from "../assets/images/whiteicons.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Fractional() {
  return (
    <Router>
      <div id="fractional-container">
        <div id="guide" class="row justify-content-evenly">
          <a href="#leadership" class="col-3 fractional-menu">
            EXECUTIVE SALES LEADERSHIP
          </a>
          <a href="#revenue" class="col-3 fractional-menu">
            CHIEF REVENUE OFFICER
          </a>
          <a href="#strategy" class="col-3 fractional-menu">
            CHIEF STRATEGY OFFICER
          </a>
          <a href="#customer" class="col-3 fractional-menu">
            CHIEF CUSTOMER OFFICER
          </a>
        </div>
        <div>
          <img src={womanBridge} id="bridge-woman" class="col-12" />
          <div id="image-text-fractional" class="carousel-caption">
            <p id="bridge-text">
              <i>Think Simplicit</i> focuses on your client journey, and the
              interactions they have during and after the buying process. Our
              solutions are tailored for your business providing a blended
              fractional service to meet the specific needs of your clients.
            </p>
          </div>
        </div>
        <div class="grey-container">
          <h3 id="leadership" class="left-titles">
            EXECUTIVE SALES LEADERSHIP
          </h3>
          <div class="row justify-content-evenly">
            <img
              src={womanMeeting}
              class="col-lg-8 col-md-8 col-sm-12 left-fractional-images"
            />
            <p class="col-lg-4 col-md-4 col-sm-12 fractional-text">
              <i>Think Simplicit</i> will be the manager (VP of Sales) and
              leader of your sales organization. A fractional sales leader
              provides the opportunity to bring an outside perspective of both
              your company and industry allowing us to identify solutions that
              best meet your needs. The sales leader assigned to your business
              will develop sales processes & strategies, hire employees, train
              new hires, provide 1-on-1 coaching, implement continuous training
              programs, develop sales culture, host weekly meetings, and
              generate reports.
            </p>
          </div>
        </div>
        <div class="blank-container">
          <h3 id="revenue" class="right-titles">
            CHIEF REVENUE OFFICER (CRO)
          </h3>
          <div class="row justify-content-evenly">
            <p class="col-lg-4 col-md-4 col-sm-12 fractional-text">
              <i>Think Simplicit</i> will provide your business with a CRO who
              will create alignment between all teams that affect revenue
              generation while putting the customer first. The stakeholders
              typically involved with revenue generation are sales, customer
              support, and marketing. Our involvement as a CRO is driven by data
              allowing us to make informed decisions and define strategic
              processes. We will ensure the management and growth of sales
              channels, partner development, accurate product pricing, proper
              product placement, and that new products meet the needs of the
              market.
            </p>
            <img
              src={highFive}
              class="col-lg-8 col-md-8 col-sm-12 right-fractional-images"
            />
          </div>
        </div>
        <div class="grey-container">
          <h3 id="strategy" class="left-titles">
            CHIEF STRATEGY OFFICER (CSO)
          </h3>
          <div class="row justify-content-evenly">
            <img
              src={salesFunnel}
              class="col-lg-8 col-md-8 col-sm-12 left-fractional-images"
            />
            <p class="col-lg-4 col-md-4 col-sm-12 fractional-text">
              <i>Think Simplicit</i> will provide you with a committed and
              long-term CSO but on a part-time basis to support your business. A
              fractional CSO will provide you the platform to share ideas and
              focus on getting the strategic work accomplished without being in
              a silo. Strategy development is not periodic work but is a
              continuous process that needs to be refined for successful
              execution and effective decision making.
            </p>
          </div>
        </div>
        <div class="blank-container">
          <h3 id="customer" class="right-titles">
            CHIEF CUSTOMER OFFICER (CCO)
          </h3>
          <div class="row justify-content-evenly">
            <p class="col-lg-4 col-md-4 col-sm-12 fractional-text">
              <i>Think Simplicit</i> will design and improve the customer
              experience your buyers are receiving from your customer service
              organization. We will create a clear vision and process that is
              transparent throughout your organization and most importantly to
              the client. This feedback is incorporated into the sales process
              and marketing strategy to increase customer satisfaction and
              loyalty.
            </p>
            <img
              src={whiteIcons}
              class="col-lg-8 col-md-8 col-sm-12 right-fractional-images"
            />
          </div>
        </div>

        <div class="row ending-text">
          <h4 class="more-simplicit col-10">
            LET’S MAKE YOUR LIFE MORE SIMPLICIT
          </h4>

          <Link to="/Work">
            <button>Let's Talk</button>
          </Link>
        </div>

        <footer id="fractional-foot">
          <div id="fractional-footer-left-text">
            <ul id="fractional-footer-list-text">
              <li>New Jersey, USA</li>
              <li>hello@thinksimplicit.com</li>
              <li>(973) 814-4431</li>
              <li>
                <i class="bi bi-linkedin fractional-footer-icons"></i>{" "}
                <i class="bi bi-twitter fractional-footer-icons"></i>{" "}
                <i class="bi bi-instagram fractional-footer-icons"></i>
              </li>
              <br />
              <li>© 2022 Think Simplicit. All rights reserved</li>
            </ul>
          </div>

          <div id="fractional-footer-right-text">
            <h4>INSPIRE YOUR THINKING</h4>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="fractional-enter-email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
            <button id="fractional-subscribe-button">SUBSCRIBE</button>
          </div>
        </footer>
      </div>
    </Router>
  );
}
