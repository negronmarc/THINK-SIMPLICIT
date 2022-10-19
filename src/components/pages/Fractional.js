import React from "react";
import "../assets/css/fractional.css";
import womanBridge from "../assets/images/bridge.jpg";
import womanMeeting from "../assets/images/meeting.jpg";
import highFive from "../assets/images/fivemeeting.jpg";
import salesFunnel from "../assets/images/salesfunnel.jpg";
import whiteIcons from "../assets/images/whiteicons.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Fractional() {
  return (
    <div id="fractional-container">
      <div id="guide-fractional" class="row justify-content-evenly">
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
      <div id="bridge-woman-container">
        <img src={womanBridge} id="bridge-woman" class="col-12" />
        <p id="bridge-text">
          <i>Think Simplicit</i> focuses on your client journey, and the
          interactions they have during and after the buying process. Our
          solutions are tailored for your business providing a blended
          fractional service to meet the specific needs of your clients.
        </p>
      </div>
      <div class="grey-container">
        <h3 id="leadership" class="left-titles fractional-titles">
          EXECUTIVE SALES LEADERSHIP
        </h3>
        <div class="row justify-content-evenly">
          <img
            src={womanMeeting}
            class="col-lg-8 col-md-8 col-sm-12 left-fractional-images fractional-images"
          />
          <p class="col-lg-4 col-md-4 col-sm-12 fractional-text" id="fractional-text-space">
            <i>Think Simplicit</i> will be the manager (VP of Sales) and leader
            of your sales organization. A fractional sales leader provides the
            opportunity to bring an outside perspective of both your company and
            industry allowing us to identify solutions that best meet your
            needs. The sales leader assigned to your business will develop sales
            processes & strategies, hire employees, train new hires, provide
            1-on-1 coaching, implement continuous training programs, develop
            sales culture, host weekly meetings, and generate reports.
          </p>
        </div>
      </div>
      <div class="blank-container">
        <h3 id="revenue" class="right-titles fractional-titles">
          CHIEF REVENUE OFFICER (CRO)
        </h3>
        <div class="row justify-content-evenly">
          <p class="col-lg-4 col-md-4 col-sm-12 fractional-text" id="fractional-text-space">
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
            class="col-lg-8 col-md-8 col-sm-12 right-fractional-images fractional-images"
          />
        </div>
      </div>
      <div class="grey-container">
        <h3 id="strategy" class="left-titles fractional-titles">
          CHIEF STRATEGY OFFICER (CSO)
        </h3>
        <div class="row justify-content-evenly">
          <img
            src={salesFunnel}
            class="col-lg-8 col-md-8 col-sm-12 left-fractional-images fractional-images"
          />
          <p class="col-lg-4 col-md-4 col-sm-12 fractional-text" id="fractional-text-space">
            <i>Think Simplicit</i> will provide you with a committed and
            long-term CSO but on a part-time basis to support your business. A
            fractional CSO will provide you the platform to share ideas and
            focus on getting the strategic work accomplished without being in a
            silo. Strategy development is not periodic work but is a continuous
            process that needs to be refined for successful execution and
            effective decision making.
          </p>
        </div>
      </div>
      <div class="blank-container">
        <h3 id="customer" class="right-titles fractional-titles">
          CHIEF CUSTOMER OFFICER (CCO)
        </h3>
        <div class="row justify-content-evenly">
          <p class="col-lg-4 col-md-4 col-sm-12 fractional-text" id="fractional-text-space">
            <i>Think Simplicit</i> will design and improve the customer
            experience your buyers are receiving from your customer service
            organization. We will create a clear vision and process that is
            transparent throughout your organization and most importantly to the
            client. This feedback is incorporated into the sales process and
            marketing strategy to increase customer satisfaction and loyalty.
          </p>
          <img
            src={whiteIcons}
            class="col-lg-8 col-md-8 col-sm-12 right-fractional-images fractional-images"
          />
        </div>
      </div>
      <div class="row fractional-ending-text">
        <h4 class="fractional-more-simplicit col-12" id="simplicit-end">
          LET’S MAKE YOUR LIFE MORE SIMPLICIT
        </h4>
        {/* <button
          id="fractional-button-two"
          class="let-talk-fractional col-lg-1 col-md-1 col-sm-1 col-xs-12"
        >
          Let's Talk
        </button> */}
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
          <h4 id="fractional-inspire">INSPIRE YOUR THINKING</h4>
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
  );
}
