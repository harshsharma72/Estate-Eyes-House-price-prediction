// src/TermsAndConditions.js

import React from "react";
import "./TermsAndConditions.css";
import background from "../../assets/house-background.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="terms-and-conditions"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to Estate Eyes! These terms and conditions outline the rules
          and regulations for the use of our service.
        </p>

        <section className="terms-section">
          <h2>Introduction</h2>
          <p>
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Estate Eyes if you do not agree
            to all of the terms and conditions stated on this page.
          </p>
        </section>

        <section className="terms-section">
          <h2>License</h2>
          <p>
            Unless otherwise stated, Estate Eyes and/or its licensors own the
            intellectual property rights for all material on Estate Eyes. All
            intellectual property rights are reserved. You may access this from
            Estate Eyes for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from Estate Eyes</li>
            <li>Sell, rent, or sub-license material from Estate Eyes</li>
            <li>Reproduce, duplicate or copy material from Estate Eyes</li>
            <li>Redistribute content from Estate Eyes</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>User Comments</h2>
          <p>
            This Agreement shall begin on the date hereof. Certain parts of this
            website offer the opportunity for users to post and exchange
            opinions and information in certain areas of the website. Estate
            Eyes does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and
            opinions of Estate Eyes, its agents, and/or affiliates. Comments
            reflect the views and opinions of the person who posts their views
            and opinions. To the extent permitted by applicable laws, Estate
            Eyes shall not be liable for the Comments or for any liability,
            damages, or expenses caused and/or suffered as a result of any use
            of and/or posting of and/or appearance of the Comments on this
            website.
          </p>
        </section>

        <section className="terms-section">
          <h2>Hyperlinking to our Content</h2>
          <p>
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <ul>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>iFrames</h2>
          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
        </section>

        <section className="terms-section">
          <h2>Content Liability</h2>
          <p>
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that are rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene, or criminal,
            or which infringes, otherwise violates, or advocates the
            infringement or other violation of, any third party rights.
          </p>
        </section>

        <section className="terms-section">
          <h2>Reservation of Rights</h2>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and its linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
        </section>

        <section className="terms-section">
          <h2>Removal of links from our website</h2>
          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us at any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
        </section>

        <section className="terms-section">
          <h2>Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties, and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul>
            <li>
              Limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              Limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              Limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              Exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort, and
            for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TermsAndConditions;
