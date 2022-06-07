import React from "react";
import "../assets/css/solutions.css";
import womanThinking from "../assets/images/thinking.jpg";
import groupTalk from "../assets/images/grouptalk.jpg";
import shakeHands from "../assets/images/shakehands.jpg";
import rocketHand from "../assets/images/rockethand.jpg";
import glassPaper from "../assets/images/glasspaper.jpg";
import headset from "../assets/images/headset.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Solutions() {
  return (
    <div id="solutions-container">
      <div>
        <img src={womanThinking} id="thinking-woman" class="col-12" />
        <div id="image-text" class="carousel-caption">
          <h2 id="think-simple-text">Think Simple, Think Simplicit</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
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
        <div class="col-4">
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
      <button id="button-one" class="let-talk">
        Let's Talk
      </button>
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
        <div class="col-3">
          <p class="circle-image-title">EXECUTIVE SALES LEADERSHIP</p>
          <img src={shakeHands} class="col-12 col-centered circle-images" />
        </div>
        <div class="col-3">
          <p class="circle-image-title">CHIEF REVENUE OFFICER (CRO)</p>
          <img src={rocketHand} class="col-12 col-centered circle-images" />
        </div>
        <div class="col-3">
          <p class="circle-image-title">CHIEF STRATEGY OFFICER (CSO)</p>
          <img src={glassPaper} class="col-12 col-centered circle-images" />
        </div>
        <div class="col-3">
          <p class="circle-image-title">CHIEF CUSTOMER OFFICER (CCO)</p>
          <img src={headset} class="col-12 col-centered circle-images" />
        </div>
      </div>
      <div class="row ending-text">
        <h4 class="more-simplicit col-10">
          LET’S MAKE YOUR LIFE MORE SIMPLICIT
        </h4>
        <button id="button-two" class="let-talk col-1">
          Let's Talk
        </button>
      </div>
      <footer>
        <div id="left-text">
          <ul id="footer-left-text">
            <li>New Jersey, USA</li>
            <li>hello@thinksimplicit.com</li>
            <li>(973) 814-4431</li>
            <li>
              <i class="bi bi-linkedin footer-icons"></i>{" "}
              <i class="bi bi-twitter footer-icons"></i>{" "}
              <i class="bi bi-instagram footer-icons"></i>
            </li>
            <br />
            <li>© 2022 Think Simplicit. All rights reserved</li>
          </ul>
        </div>

        <div id="right-text">
          <h4>INSPIRE YOUR THINKING</h4>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="enter-email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <button id="subscribe-button">SUBCRIBE</button>
        </div>
      </footer>
    </div>
  );
}
