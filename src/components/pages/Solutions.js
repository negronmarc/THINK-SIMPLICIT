import React from "react";
import "../assets/css/solutions.css";
import womanThinking from "../assets/images/thinking.jpg";
import groupTalk from "../assets/images/grouptalk.jpg";
import shakeHands from "../assets/images/shakehands.jpg";
import rocketHand from "../assets/images/rockethand.jpg";
import glassPaper from "../assets/images/glasspaper.jpg";
import headset from "../assets/images/headset.jpg";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Work from "./Work";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Solutions() {
  // const navigate = useNavigate();

  // const navigateWork = () => {
  //   // 👇️ navigate to /work
  //   navigate("/work");
  // };

  return (
    <div id="solutions-container">
      <div id="thinking-container">
        <img src={womanThinking} id="thinking-woman" class="col-12" />
        <h2 id="think-simple-text">Think Simple, Think Simplicit</h2>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
          <p id="desc-text">
            <i> Think Simplicit </i> focuses on your client journey, and the
            interactions they have during and after the buying process. Our
            solutions are tailored for your business providing a blended
            fractional service to meet the specific needs of your clients. By
            understanding the relationship between your product or service and
            the touchpoints your clients encounter we will create the most
            impactful process for your customers.
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <h6 id="our-services">
            <b>FRACTIONAL MANAGEMENT SERVICES</b>
          </h6>
          <ul id="services">
            <li>Executive Sales Leadership</li>
            <li>Chief Revenue Officer (CRO)</li>
            <li>Chief Strategy Officer (CSO)</li>
            <li>Chief Customer Officer (CCO)</li>
          </ul>
        </div>
      </div>
      {/* <button
        onClick={navigateWork}
        id="solutions-button-one"
        class="let-talk-solutions"
      >
        Let's Talk
      </button>
      <Routes>
        <Route path="/work" element={<Work />} />
      </Routes> */}
      <h3 id="what-story" class="col-12">
        WHAT’S YOUR CUSTOMER JOURNEY?
      </h3>
      <img src={groupTalk} id="group-talk" class="col-12" />
      <div class="col-12">
        <p id="customer-text">
          <i> Think Simplicit </i> offers a range of fractional services focused
          around the buyer and customer journey and the interactions your
          customers have throughout the buying process. As your business grows
          and milestones evolve so does our service ensuring you can better
          utilize your budget to obtain and retain clients. Our fractional
          services provide an opportunity to have high-level and skilled
          employees at a fraction of the cost maximizing your return on
          investment. <i> Think Simplicit </i> becomes and will become an
          integrated part of your company to work alongside your team and
          optimize your client experience. Our services are subscription based
          and we do not require commission, bonuses, benefits, or other perks.
        </p>
      </div>
      <div id="circle-images-container" class="row justify-content-evenly">
        <div class="circle-images-individual-one col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <p class="circle-image-title">EXECUTIVE SALES LEADERSHIP</p>
          <img src={shakeHands} class=" circle-images" />
        </div>
        <div class="circle-images-individual-two col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <p class="circle-image-title">CHIEF REVENUE OFFICER (CRO)</p>
          <img src={rocketHand} class=" circle-images" id="rocket-hand" />
        </div>
        <div class="circle-images-individual-three col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <p class="circle-image-title">CHIEF STRATEGY OFFICER (CSO)</p>
          <img src={glassPaper} class=" circle-images" />
        </div>
        <div class="circle-images-individual-four col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <p class="circle-image-title">CHIEF CUSTOMER OFFICER (CCO)</p>
          <img src={headset} class="circle-images" />
        </div>
      </div>
      <div class="row solutions-ending-text">
        <h4 class="solutions-more-simplicit col-lg-10 col-md-10 col-sm-10 col-xs-12">
          LET’S MAKE YOUR LIFE MORE SIMPLICIT
        </h4>
        {/* <button
          id="solutions-button-two"
          class="let-talk-solutions col-lg-1 col-md-1 col-sm-1 col-xs-12"
        >
          Let's Talk
        </button> */}
      </div>
      <footer id="solutions-foot">
        <div id="solutions-footer-left-text">
          <ul id="solutions-footer-list-text">
            <li>New Jersey, USA</li>
            <li>hello@thinksimplicit.com</li>
            <li>(973) 814-4431</li>
            <li>
              <i class="bi bi-linkedin solutions-footer-icons"></i>{" "}
              <i class="bi bi-twitter solutions-footer-icons"></i>{" "}
              <i class="bi bi-instagram solutions-footer-icons"></i>
            </li>
            <br />
            <li>© 2022 Think Simplicit. All rights reserved</li>
          </ul>
        </div>

        <div id="solutions-footer-right-text">
          <h4 id="solutions-inspire">INSPIRE YOUR THINKING</h4>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="solutions-enter-email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <button id="solutions-subscribe-button">SUBSCRIBE</button>
        </div>
      </footer>
    </div>
  );
}
