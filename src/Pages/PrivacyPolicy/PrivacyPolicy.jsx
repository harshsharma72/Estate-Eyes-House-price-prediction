// src/PrivacyPolicy.js

import React from "react";
import "./PrivacyPolicy.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <p>
          Welcome to Estate Eyes! We value your privacy and are committed to
          protecting your personal data.
        </p>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            This privacy policy will explain how our organization uses the
            personal data we collect from you when you use our website.
          </p>
        </section>

        <section className="policy-section">
          <h2>What Data We Collect</h2>
          <p>Estate Eyes collects the following data:</p>
          <ul>
            <li>
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li>Usage data (pages visited, time spent on site, etc.)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How We Collect Your Data</h2>
          <p>
            You directly provide Estate Eyes with most of the data we collect.
            We collect data and process data when you:
          </p>
          <ul>
            <li>
              Register online or place an order for any of our products or
              services.
            </li>
            <li>
              Voluntarily complete a customer survey or provide feedback on any
              of our message boards or via email.
            </li>
            <li>Use or view our website via your browser's cookies.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How We Use Your Data</h2>
          <p>Estate Eyes collects your data so that we can:</p>
          <ul>
            <li>Process your orders and manage your account.</li>
            <li>
              Email you with special offers on other products and services we
              think you might like.
            </li>
            <li>Understand how you use our website.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How We Store Your Data</h2>
          <p>
            Estate Eyes securely stores your data at our secure servers and uses
            the latest encryption technologies to ensure its protection.
          </p>
        </section>

        <section className="policy-section">
          <h2>Marketing</h2>
          <p>
            Estate Eyes would like to send you information about products and
            services of ours that we think you might like, as well as those of
            our partner companies.
          </p>
          <p>
            If you have agreed to receive marketing, you may always opt out at a
            later date.
          </p>
          <p>
            You have the right at any time to stop Estate Eyes from contacting
            you for marketing purposes or giving your data to other members of
            the Estate Eyes Group.
          </p>
        </section>

        <section className="policy-section">
          <h2>What Are Your Data Protection Rights?</h2>
          <p>
            Estate Eyes would like to make sure you are fully aware of all of
            your data protection rights. Every user is entitled to the
            following:
          </p>
          <ul>
            <li>
              <strong>The right to access</strong> – You have the right to
              request Estate Eyes for copies of your personal data. We may
              charge you a small fee for this service.
            </li>
            <li>
              <strong>The right to rectification</strong> – You have the right
              to request that Estate Eyes correct any information you believe is
              inaccurate. You also have the right to request Estate Eyes to
              complete information you believe is incomplete.
            </li>
            <li>
              <strong>The right to erasure</strong> – You have the right to
              request that Estate Eyes erase your personal data, under certain
              conditions.
            </li>
            <li>
              <strong>The right to restrict processing</strong> – You have the
              right to request that Estate Eyes restrict the processing of your
              personal data, under certain conditions.
            </li>
            <li>
              <strong>The right to object to processing</strong> – You have the
              right to object to Estate Eyes’ processing of your personal data,
              under certain conditions.
            </li>
            <li>
              <strong>The right to data portability</strong> – You have the
              right to request that Estate Eyes transfer the data that we have
              collected to another organization, or directly to you, under
              certain conditions.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Cookies</h2>
          <p>
            Cookies are text files placed on your computer to collect standard
            Internet log information and visitor behavior information. When you
            visit our websites, we may collect information from you
            automatically through cookies or similar technology.
          </p>
          <p>For further information, visit allaboutcookies.org.</p>
        </section>

        <section className="policy-section">
          <h2>Privacy Policies of Other Websites</h2>
          <p>
            The Estate Eyes website contains links to other websites. Our
            privacy policy applies only to our website, so if you click on a
            link to another website, you should read their privacy policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to Our Privacy Policy</h2>
          <p>
            Estate Eyes keeps its privacy policy under regular review and places
            any updates on this web page. This privacy policy was last updated
            on [date].
          </p>
        </section>

        <section className="policy-section">
          <h2>How to Contact Us</h2>
          <p>
            If you have any questions about Estate Eyes’s privacy policy, the
            data we hold on you, or you would like to exercise one of your data
            protection rights, please do not hesitate to contact us.
          </p>
          <p>Email us at: support@estateeyes.com</p>
        </section>

        <section className="policy-section">
          <h2>How to Contact the Appropriate Authority</h2>
          <p>
            Should you wish to report a complaint or if you feel that Estate
            Eyes has not addressed your concern in a satisfactory manner, you
            may contact the Information Commissioner’s Office.
          </p>
          <p>Email: ico@example.com</p>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
