import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Albania = () => {
  const [turistSection, setTuristSection] = useState(true);
  const [workSection, setWorkSection] = useState(false);

  const [turistButtonStyle, setTuristButtonStyle] = useState(
    "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]  -translate-y-6"
  );
  const [workButtonStyle, setWorkButtonStyle] = useState(
    "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
  );
  const [studentButtonStyle, setStudentButtonStyle] = useState(
    "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
  );

  const changeOnTurist = () => {
    setTuristSection(true);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] -translate-y-6"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
    );
  };
  const changeOnWork = () => {
    setTuristSection(false);
    setWorkSection(true);
    setTuristButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] "
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] -translate-y-6"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
    );
  };
  const changeOnStudent = () => {
    setTuristSection(false);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] "
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] "
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] -translate-y-6"
    );
  };
  return (
    <>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Albania
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Albania is a country located in the Balkan Peninsula in Southeast
              Europe. It is known for its beautiful beaches and mountainous
              terrain, as well as its rich culture and history. Albania is also
              known for its production of high-quality agricultural products,
              such as olives, grapes, and tobacco. Additionally, the country is
              known for its vibrant music and dance traditions, and its
              distinctive cuisine, which includes dishes such as byrek, a savory
              pastry filled with vegetables or meat.
            </p>
          </Col>
        </Row>

        <Row className="text-zinc-600 p-[6rem] my-[3rem]">
          <Col className="flex items-center justify-center">
            <button
              style={{
                boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.35)",
                transition: "all 0.75s",
              }}
              className={turistButtonStyle}
              onClick={() => {
                changeOnTurist();
              }}
            >
              Tourist
            </button>
          </Col>
          <Col className="flex items-center justify-center">
            <button
              style={{
                boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.35)",
                transition: "all 0.75s",
              }}
              className={workButtonStyle}
              onClick={() => {
                changeOnWork();
              }}
            >
              Worker
            </button>
          </Col>
          <Col className="flex items-center justify-center">
            <button
              style={{
                boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.35)",
                transition: "all 0.75s",
              }}
              className={studentButtonStyle}
              onClick={() => {
                changeOnStudent();
              }}
            >
              Student
            </button>
          </Col>
        </Row>
        {turistSection ? (
          <>
            {" "}
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Who can enter Albania without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Albania Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Albania ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Albania ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                About Schengen !
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                About Diplomatic Passport !
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container className="mt-[12rem]" fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in XXX ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Albania Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Albania Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Albania ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container className="mt-[12rem]" fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in XXX ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a XXX student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                XXX student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for XXX student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
          </>
        )}

        <Container fluid>
          <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
            About Schengen and student Visa !
          </h1>
          <p className="text-[2rem] pb-[5rem] px-[3rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
            laborum repellat libero harum sint ipsum provident aperiam vitae
            nostrum facilis consequuntur voluptas. Debitis quo, laborum veniam
            perspiciatis eligendi placeat !
          </p>
        </Container>
      </Container>

      <Container className="relative" fluid>
        <div className="absolute footer_bubble-1"></div>
        <div className="absolute footer_bubble-2"></div>
        <div className="absolute footer_bubble-3"></div>
        <div className="absolute footer_bubble-4"></div>
        <div className="absolute footer_bubble-5"></div>
        <div className="absolute footer_bubble-6"></div>

        <Row className="bg-gray-900">
          <h2 className="footer-logo text-[4rem] text-white text-center my-[4.4rem] z-50">
            Visa<p>Wizz</p>
          </h2>
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
                <button rel="noreferrer" target="_blank" className="z-50">
                  <HiOutlineMail className="text-[3rem] text-white" />
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
                <FaInstagram className="text-[3rem] text-white" />
              </a>
            </div>
          </div>
          <p className="text-white text-center font-bold mt-[3rem] text-[1.6rem] tracking-[0.1rem] z-50">
            &copy; Copyright 2022 : VisaWizz.com{" "}
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Albania;
