import React, { useRef } from "react";
import "../assets/css/work.css";
import HubspotForm from "react-hubspot-form";

export default function Work() {
  return (
    <div>
      <header id="work-head">
        <div id="work-header-left-text">
          <p>
            Hello, please fill out our contact form to kick-off the
            conversation. We look forward to simplifying your business.
          </p>
        </div>

        <div id="work-header-right-text">
          <ul id="work-header-list-text">
            <li>
              <b>GET IN TOUCH</b>
            </li>
            <li>hello@simplicitthinking.com</li>
            <li>(973) 814-4431</li>
          </ul>
        </div>
      </header>

      <h4 id="contact-title">Contact Form</h4>
      <form id="hubspot-form">
        <HubspotForm
          portalId="22390368"
          formId="551af31c-99e1-43bf-81d4-8ac51065a53e"
          onSubmit={() => console.log("Submit!")}
          onReady={(form) => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
      </form>

      <div id="box"></div>

      <footer id="work-foot">
        <div id="work-footer-left-text">
          <ul id="work-footer-list-text">
            <li>New Jersey, USA</li>
            <li>hello@thinksimplicit.com</li>
            <li>(973) 814-4431</li>
            <li>
              <i class="bi bi-linkedin work-footer-icons"></i>{" "}
              <i class="bi bi-twitter work-footer-icons"></i>{" "}
              <i class="bi bi-instagram work-footer-icons"></i>
            </li>
            <br />
            <li>© 2022 Think Simplicit. All rights reserved</li>
          </ul>
        </div>

        <div id="work-footer-right-text">
          <h4 id="inspire-work">INSPIRE YOUR THINKING</h4>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="work-enter-email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <button id="work-subscribe-button">SUBSCRIBE</button>
        </div>
      </footer>
    </div>
  );
}
