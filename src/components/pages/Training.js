import React from "react";
import "../assets/css/training.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const gear = <FontAwesomeIcon icon={faUserGear} />;
const transfer = <FontAwesomeIcon icon={faPeopleArrows} />;
const consult = <FontAwesomeIcon icon={faComments} />;
const star = <FontAwesomeIcon icon={faStar} />;

export default function Training() {
  return (
    <div id="training-container">
      <div id="guide-training" class="row justify-content-evenly">
        <a href="#sales-training" class="col-3 training-menu">
          <i class="training-icons-top">{gear}</i>
          SALES TRAINING
        </a>
        <a href="#sales-coaching" class="col-3 training-menu">
          <i class="training-icons-top">{transfer}</i>
          SALES COACHING
        </a>
        <a href="#crm-consulting" class="col-3 training-menu">
          <i class="training-icons-top">{consult}</i>
          CRM CONSULTING
        </a>
        <a href="#brand-experience" class="col-3 training-menu">
          <i class="training-icons-top">{star}</i>
          BRAND EXPERIENCE
        </a>
      </div>
      <h5 id="onsite-training">
        ONSITE, VIRTUAL, AND HYBRID LED TRAINING AVAILABLE
      </h5>
      <div id="sales-training">
        <h5 class="training-titles">
          <i class="training-icons-titles">{gear}</i>SALES TRAINING
        </h5>
        <div class="grey-background-training">
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Consultative Selling</h6>
              <p class="training-text">
                We will train your sales team to create value and trust with a
                prospect while uncovering their core issues. The goal is to show
                how you can solve the customer’s problems while positioning your
                product or service as the best solution.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Virtual Selling</h6>
              <p class="training-text">
                Unleash the potential of your sales team by implementing or
                improving your virtual sales presentations. This course will
                enable your organization to meet with more qualified prospects
                regardless of geography and increase your close rate.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Key Account Management</h6>
              <p class="training-text">
                Key accounts are vital for an organization’s success and
                stability while providing long-term growth. We will work with
                your team to create a curated and repeatable process to service
                and retain key accounts.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Sales Prospecting</h6>
              <p class="training-text">
                Every organization needs a unique way to attract potential
                customers with the opportunity to convert them into buyers. We
                will train your sales team to optimize how they prospect and
                utilize the best techniques suited to your organization.{" "}
              </p>
            </section>
          </div>
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">No Nonsense Productivity</h6>
              <p class="training-text">
                We will review the existing workflow of your sales team and will
                identify inefficiencies and how to improve overall productivity.
                These changes range from personal improvements to global changes
                within the organization.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Sales Enablement</h6>
              <p class="training-text">
                Sales enablement is a broad term with a wide range of activities
                and priorities to make your sales teams successful. Every
                organization has different requirements, but we will introduce a
                scalable approach to benefit your team.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Tradeshow Selling</h6>
              <p class="training-text">
                Tradeshows are not only an opportunity to showcase your product
                or service but a unique moment to engage prospects and current
                customers while developing a meaningful relationship and keeping
                your solution top of mind.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Onboarding Program</h6>
              <p class="training-text">
                The process of how you onboard your sales team can be the
                difference between success and failure. We strive to develop
                employees who can have long-term success both professionally and
                with your clients.{" "}
              </p>
            </section>
          </div>
        </div>
      </div>
      <div class="row training-between">
        <h4 class="text-between-training col-12">
          WE BUILD THE FOUNDATION TO OPTIMIZE <br />
          YOUR SALES POTENTIAL
        </h4>
        {/* <button
          id="training-button-two"
          class="let-talk-training col-lg-1 col-md-1 col-sm-1 col-xs-12"
        >
          Let's Talk
        </button> */}
      </div>
      <div id="sales-coaching">
        <h5 class="training-titles">
          <i class="training-icons-titles">{transfer}</i>SALES COACHING
        </h5>
        <div class="grey-background-training">
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Individual Coaching</h6>
              <p class="training-text">
                We provide exclusive 1-to-1 coaching sessions for the
                salespeople within your organization. The goal is to provide
                each individual with a curated experience to improve their
                existing sales skills and provide guidance.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Group Coaching</h6>
              <p class="training-text">
                Based on the size of your team, we can host group coaching
                workshops that will focus on core problems encountered by your
                team. We ensure that each person will leave the workshop with
                improved skills.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Deal Coaching</h6>
              <p class="training-text">
                This workshop develops the required skills for your sales team
                to understand deal health by assessing the deal legitimacy and
                the position of the prospect, along with the steps needed to
                continue advancing the deal.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Account Manager Coaching</h6>
              <p class="training-text">
                Account management is key to the long-term success of any
                organization. We create and establish processes that enable your
                sales team to properly manage existing accounts with methods to
                maintain and grow them.{" "}
              </p>
            </section>
          </div>
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Rapid Fire Execution</h6>
              <p class="training-text">
                Daily, your sales team decides where to focus their energy to
                maximize their output and impact. We host a workshop that
                improves their decision-making and intuition to make sound
                decisions.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Cold Calling</h6>
              <p class="training-text">
                The telephone remains the number one platform for managing
                communications with prospects and customers regardless of
                company size. We will train your team to have impressionable
                cold calls with a positive impression.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Coach the Coach</h6>
              <p class="training-text">
                Even coaches need a tune-up or an outside perspective from time
                to time. We can coach your coach and create a workshop built for
                them to enhance their existing skills and show them new
                methodologies to make your team better.{" "}
              </p>
            </section>
          </div>
        </div>
      </div>
      <div class="row training-between">
        <h4 class="text-between-training col-12">
          WE CREATE INTERACTIVE WORKSHOPS TO BUILD <br />
          UPON AN ESTABLISHED FOUNDATION
        </h4>
        {/* <button
          id="training-button-two"
          class="let-talk-training col-lg-1 col-md-1 col-sm-1 col-xs-12"
        >
          Let's Talk
        </button> */}
      </div>
      <div id="crm-consulting">
        <h5 class="training-titles">
          <i class="training-icons-titles">{consult}</i>CRM CONSULTING
        </h5>
        <div class="grey-background-training">
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">CRM Implementation</h6>
              <p class="training-text">
                Whether it’s your first time implementing a CRM for your
                business or switching to new software, we can assist with the
                process. We work with all stakeholders, including sales,
                customer service, marketing, and company executives.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">CRM Integrations</h6>
              <p class="training-text">
                Most CRM software is an open API allowing other software
                applications to integrate. We can assist with integrating
                multiple software applications to transfer data and interact
                with one another.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Onboarding & Training</h6>
              <p class="training-text">
                CRM can only be successful if the stakeholders within your
                organization are utilizing and leveraging the software. We can
                host 1-to-1 or 1-to-many training sessions that improve the
                skills of your employees using CRM.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Retainer Services</h6>
              <p class="training-text">
                As your team utilizes CRM, this will lead to questions and
                changes that an internal stakeholder may not be capable of
                addressing. Our retainer service will answer those questions and
                implement the required changes.{" "}
              </p>
            </section>
          </div>
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Workflow & Sequences</h6>
              <p class="training-text">
                Workflows and sequences are a form of automation to streamline
                processes without manual entry. We ensure your team can stay
                focused on pertinent tasks while guaranteeing the basics are
                covered.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Management & Admin</h6>
              <p class="training-text">
                Every organization requires a minimum of one Admin within the
                CRM system, but if this stakeholder departs, it can disrupt the
                daily operations. We can act as your Admin and liaison for your
                organization to have no disruption.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Pipeline Development</h6>
              <p class="training-text">
                Each organization should have multiple pipelines that meet the
                needs of each team and keep them working efficiently. Asides
                from efficiency, the channels keep clients serviced at the
                highest level with the best customer journey.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Pipeline Management</h6>
              <p class="training-text">
                We will review your pipelines regularly to keep deals from
                falling through the cracks, ensuring the organization receives
                the most up-to-date information to make informed decisions.{" "}
              </p>
            </section>
          </div>
        </div>
      </div>
      <div class="row training-between">
        <h4 class="text-between-training col-12">
          WE ASSIST IN CREATING A HIGH PERFORMING CRM <br />
          PROCESSES TO OPTIMIZE SALES & MARKETING
        </h4>
        {/* <button
          id="training-button-two"
          class="let-talk-training col-lg-1 col-md-1 col-sm-1 col-xs-12"
        >
          Let's Talk
        </button> */}
      </div>
      <div id="brand-experience">
        <h5 class="training-titles">
          <i class="training-icons-titles">{star}</i>BRAND EXPERIENCE
        </h5>
        <div class="grey-background-training">
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Tell Your Story</h6>
              <p class="training-text">
                We will curate a story that reflects your product's mission
                statement. We create compelling and impactful stories that
                identify your product's purpose and how it addresses your
                customers' needs.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Presentation Development</h6>
              <p class="training-text">
                Do you have a slide deck presentation for your prospects? We
                will review the slide deck and provide feedback to improve the
                overall effectiveness and give your audience a more impactful
                presentation.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Customer Journey</h6>
              <p class="training-text">
                We review your existing customer journey and build a wireframe,
                which allows us to identify the most impactful areas and where
                improvement is needed.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Product Positioning</h6>
              <p class="training-text">
                We can increase the sales of your product or service by
                improving how it’s communicated to your audience. By improving
                your product positioning, we can increase inbound sales
                opportunities.{" "}
              </p>
            </section>
          </div>
          <div id="" class="row justify-content-evenly">
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Customer Experience</h6>
              <p class="training-text">
                The various ways a customer interacts with a brand increase the
                opportunity for a customer to have a poor experience. We audit
                these multiple experiences and benchmark them against the
                market.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Sales & Marketing Alignment</h6>
              <p class="training-text">
                The sales and marketing teams need to work in unison to ensure
                maximum efficiency and effectiveness for your customers. We
                review the current processes, workflow, and technology and then
                provide a roadmap of improvements.{" "}
              </p>
            </section>
            <section class="col-lg-3 col-md-3 col-sm-12">
              <h6 class="mini-titles-training">Creating Influence</h6>
              <p class="training-text">
                Your marketing stories should influence your customers and have
                them react with emotion. We make an impactful experience by
                identifying the most influential areas and adding value for your
                customers.{" "}
              </p>
            </section>
          </div>
        </div>
      </div>
      <div class="row training-between">
        <h4 class="text-between-training col-12">
          WE DEVELOP A CUSTOMER JOURNEY THAT ENABLES <br />
          YOUR BRAND TO HAVE THE BIGGEST IMPACT
        </h4>
        {/* <button
          id="training-button-two"
          class="let-talk-training col-lg-1 col-md-1 col-sm-1 col-xs-12"
        >
          Let's Talk
        </button> */}
      </div>
      <footer id="training-foot">
        <div id="training-footer-left-text">
          <ul id="training-footer-list-text">
            <li>New Jersey, USA</li>
            <li>hello@thinksimplicit.com</li>
            <li>(973) 814-4431</li>
            <li>
              <i class="bi bi-linkedin training-footer-icons"></i>{" "}
              <i class="bi bi-twitter training-footer-icons"></i>{" "}
              <i class="bi bi-instagram training-footer-icons"></i>
            </li>
            <br />
            <li>© 2022 Think Simplicit. All rights reserved</li>
          </ul>
        </div>
        <div id="training-footer-right-text">
          <h4 id="training-inspire">INSPIRE YOUR THINKING</h4>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="training-enter-email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <button id="training-subscribe-button">SUBSCRIBE</button>
        </div>
      </footer>
    </div>
  );
}
