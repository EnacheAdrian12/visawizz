import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <Container className="relative" fluid>
      <div className="absolute footer_bubble-1"></div>
      <div className="absolute footer_bubble-2"></div>
      <div className="absolute footer_bubble-3"></div>
      <div className="absolute footer_bubble-4"></div>
      <div className="absolute footer_bubble-5"></div>
      <div className="absolute footer_bubble-6"></div>

      <Row className="bg-gray-900">
        <h2 className="footer-logo text-[4rem] text-white text-center mt-[4.8rem] mb-[2rem] z-50">
          Visa<p>Wizz</p>
        </h2>
        <a
          className="text-center text-white text-[2.4rem] font-bold mb-[2rem] z-50"
          href="/privacy"
        >
          Privacy & Policy
        </a>
        <p className="text-white text-center mb-[3rem] font-bold text-[2.6rem] z-50">
          Contact us :
        </p>
        <div className="icons-container">
          <div className="icons-background z-50">
            <a
              rel="noreferrer"
              href="https://twitter.com/VisaWizz"
              target="_blank"
              className="z-50"
            >
              <FaTwitter className="text-[3rem] text-white" />
            </a>
          </div>
          <div className="icons-background z-50">
            <OverlayTrigger
              trigger="click"
              overlay={
                <Popover
                  className="p-[1.4rem] text-[1.8rem] text-[#1e2e6e] font-bold bg-gray-200"
                  id="popover-contained"
                >
                  contact@visawizz.com
                </Popover>
              }
            >
              <button
                rel="noreferrer"
                target="_blank"
                className="z-50 h-[3.4rem] w-[3.4rem] flex items-center justify-center"
              >
                <HiMail className="text-[3rem] text-white" />
              </button>
            </OverlayTrigger>
          </div>
          <div className="icons-background z-50">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/visawizz/"
              target="_blank"
              className="z-50"
            >
              <AiFillInstagram className="text-[3.3rem] text-white" />
            </a>
          </div>
        </div>
        <p className="text-white text-center font-bold mt-[3rem] text-[1.6rem] tracking-[0.1rem] z-50">
          &copy; Copyright 2022 : VisaWizz.com{" "}
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
