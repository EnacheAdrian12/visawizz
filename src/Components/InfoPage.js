import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Select from "react-select";
import visaRequirements from "../data/visaRequirements";
import dropboxCountries from "../data/dropboxCountries";
import {
  FaPlaneArrival,
  FaCalendarAlt,
  FaClock,
  FaVirus,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./InfoPage.css";
import { useNavigate } from "react-router-dom";

const InfoPage = ({ location }) => {
  const [locationName, setLocationName] = useState(location.split("/"));
  const [locationData, setLocationData] = useState("");
  const [visaRequired, setVisaRequired] = useState(false);
  const [focusInput, setFocusInput] = useState("react-select-container");
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (locationName[2].includes("%")) {
      const newWord = locationName[2].split("%20").join(" ");
      locationName[2] = newWord;
    }
    if (locationName[1] === locationName[2]) {
      navigate("/", { replace: true });
    }
    setLocationData(visaRequirements.getCountry(locationName[2]));
    if (locationData !== "") {
      locationData.visaFree.forEach((element) => {
        if (locationName[1] === element) {
          setVisaRequired(true);
        }
      });
    }
  }, [locationName, locationData, navigate]);

  const ChangeDestination = () => {
    setShowInput(true);
  };

  return (
    <>
      <Container className="relative bg-gray-200">
        {showInput ? (
          <Select
            onChange={(e) => {
              navigate(`/${locationName[1]}/${e.label}`, { replace: true });
              setLocationName(["", locationName[1], e.label]);
              setShowInput(false);
            }}
            onMenuOpen={() => {
              setFocusInput("focusInputStyle");
            }}
            onBlur={() => {
              setFocusInput("react-select-container");
            }}
            onMenuClose={() => {
              setFocusInput("react-select-container");
            }}
            className={focusInput}
            styles={{
              control: (style, state) => ({
                ...style,
                backgroundColor: "#fff",
                border: 0,
                boxShadow: "none",
                cursor: "pointer",
              }),
              option: (styles, { data, isDisable, isSelected, isFocused }) => {
                return {
                  ...styles,
                  color: data.color,
                  cursor: "pointer",
                };
              },
              container: () => ({
                position: "absolute",
                boxSizing: "border-box",
                top: "4.5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "100",
                backgroundColor: "#fff",
                fontSize: "2rem",
                color: "#000",
                width: "36rem",
                "@media only screen and (max-width: 1024px)": {
                  top: "3.75%",
                  width: "30rem",
                },
                "@media only screen and (max-width: 498px)": {
                  top: "2.5%",
                  width: "25rem",
                },
              }),
              menu: () => ({
                position: "absolute",
                left: "0",
                width: "100%",
                zIndex: "100",
                backgroundColor: "#fff",
                borderRadius: "0 0 2rem 2rem",
              }),
            }}
            placeholder="Search..."
            options={dropboxCountries}
          ></Select>
        ) : (
          <button
            className="text-4xl changeCountryButton"
            onClick={() => {
              ChangeDestination();
            }}
          >
            Change Destination
          </button>
        )}{" "}
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] mb-[10rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            {locationName[2]}
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              {locationData.about}
            </p>
          </Col>
        </Row>
        <Row className="text-zinc-600 mx-4">
          <p className="about-visa text-[2.4rem] font-bold mb-10">
            Information about <p>Visa</p> :
          </p>
          {visaRequired ? (
            <ul className="about-visa-list space-y-8 text-[2rem]">
              <div>
                <li>
                  If you are from {locationName[1]} you don't need a visa to
                  travel to {locationName[2]}
                </li>
              </div>
              <div>
                <li>
                  Your maximum numbers of days you can stay in {locationName[2]}{" "}
                  is {locationData.visaDuration}
                </li>
              </div>
              <div>
                <li>
                  Your travel documents must be valid for atleast three months
                  after the estimated day of exit from {locationName[1]}.
                </li>
              </div>
            </ul>
          ) : (
            <ul className="about-visa-list space-y-8 text-[2rem]">
              <div>
                <li>
                  If you are from {locationName[1]} you need a visa to travel to{" "}
                  {locationName[2]}
                </li>
              </div>
              <div>
                <li>
                  If two countries require visas for travel between them, it
                  means that travelers will need to obtain a visa in order to
                  enter either country.
                </li>
              </div>
              <div>
                <li>
                  The requirements for obtaining a visa can vary depending on
                  the country and the purpose of the trip.
                </li>
              </div>
              <div>
                <li>
                  In general, travelers will need to complete an application
                  form and submit it along with any required supporting
                  documents, such as a valid passport, proof of sufficient
                  funds, and a letter of invitation or confirmation of travel
                  arrangements.
                </li>
              </div>
              <div>
                <li>
                  For more informations check{" "}
                  <a
                    className="eVisa"
                    target="blank"
                    href="https://www.visatitans.com/"
                  >
                    <p>visatitans.com</p>
                  </a>
                </li>
              </div>
              <div>
                <li>
                  Once the visa is issued, travelers will need to present it to
                  immigration officials upon arrival in the country in order to
                  be granted entry.
                </li>
              </div>
            </ul>
          )}
        </Row>
        <Row className="card-row my-[10rem]">
          <Col
            className="flex items-center justify-center my-[4rem]"
            xs={6}
            md={3}
          >
            <Card
              className="card-container bg-gray-200 text-center"
              style={{ width: "22.5rem", height: "22.5rem" }}
            >
              <Card.Body>
                <Card.Title className="flex items-center justify-center m-[2rem]">
                  <div className="card-icon-container">
                    <FaCalendarAlt className="text-white text-[3rem]" />
                  </div>
                </Card.Title>
                <Card.Text className="flex items-center justify-center my-[4rem]">
                  <p className="card-container-text text-[1.6rem] sm:text-[1.6rem] md:text-[1.6rem] lg:text-[2rem]">
                    <p>Max Stay</p> : {locationData.visaDuration}{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="flex items-center justify-center my-[4rem]"
            xs={6}
            md={3}
          >
            <Card
              className="card-container bg-gray-200 text-center"
              style={{ width: "22.5rem", height: "22.5rem" }}
            >
              <Card.Body>
                <Card.Title className="flex items-center justify-center m-[2rem]">
                  <div className="card-icon-container">
                    <FaClock className="text-white text-[3rem]" />
                  </div>
                </Card.Title>
                <Card.Text className="flex items-center justify-center my-[4rem]">
                  <p className="card-container-text text-[1.6rem] sm:text-[1.6rem] md:text-[1.6rem] lg:text-[2rem]">
                    <p>Visa Validity</p> : {locationData.visaDuration}{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="flex items-center justify-center my-[4rem]"
            xs={6}
            md={3}
          >
            <Card
              className="card-container bg-gray-200 text-center"
              style={{ width: "22.5rem", height: "22.5rem" }}
            >
              <Card.Body>
                <Card.Title className="flex items-center justify-center m-[2rem]">
                  <div className="card-icon-container">
                    <FaVirus className="text-white text-[3rem]" />
                  </div>
                </Card.Title>
                <Card.Text className="flex items-center justify-center my-[4rem]">
                  <p className="card-container-text text-[1.6rem] sm:text-[1.6rem] md:text-[1.6rem] lg:text-[2rem]">
                    <p>Corona Restriction</p> :<br /> No{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="flex items-center justify-center my-[4rem]"
            xs={6}
            md={3}
          >
            <Card
              className="card-container bg-gray-200 text-center"
              style={{ width: "22.5rem", height: "22.5rem" }}
            >
              <Card.Body>
                <Card.Title className="flex items-center justify-center m-[2rem]">
                  <div className="card-icon-container">
                    <FaPlaneArrival className="text-white text-[3rem]" />
                  </div>
                </Card.Title>
                <Card.Text className="flex items-center justify-center my-[4rem]">
                  <p className="card-container-text text-[1.6rem] sm:text-[1.6rem] md:text-[1.6rem] lg:text-[2rem]">
                    <p>Short Stay</p>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-zinc-600 pb-[4rem] mx-4">
          <p className="about-visa text-[2.4rem] font-bold mb-10">
            How to apply for <p>{locationName[2]}</p> tourist visa from{" "}
            <p>{locationName[1]}</p> :
          </p>
          {visaRequired ? (
            <ul className="text-[2rem] space-y-8">
              <li className="about-visa">
                <p>Step 1</p> : {locationName[1]}'s citizens can arrive at{" "}
                {locationName[2]} without a visa.
              </li>
              <li className="about-visa">
                <p>Step 2</p> : After arriving, {locationName[1]} citizens can
                go to {locationName[2]} immigration counter.
              </li>
              <li className="about-visa">
                <p>Step 3</p> : Show travel document like Original Passport or
                Travel document of {locationName[1]}.
              </li>
              <li className="about-visa">
                <p>Step 4</p> : Once you get entry stamp, you can enter{" "}
                {locationName[2]} and stay for the duration on your stamping.
              </li>
            </ul>
          ) : (
            <ul className="text-[2rem] space-y-8">
              <li className="about-visa">
                <p>Step 1</p> : You will need a visa to travel to{" "}
                {locationName[2]}
              </li>
              <li className="about-visa">
                <p>Step 2</p> : After arrivingto your destination,{" "}
                {locationName[1]} citizens can go to {locationName[2]}{" "}
                immigration counter.
              </li>
              <li className="about-visa">
                <p>Step 3</p> : Show travel document like Original Passport or
                Travel document of {locationName[1]}
              </li>
              <li className="about-visa">
                <p>Step 4</p> : Once you get entry stamp, you can enter{" "}
                {locationName[2]} and stay for the duration on your stamping.
              </li>
            </ul>
          )}
        </Row>
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
            &copy; Copyright 2022 : VizaWizz.com{" "}
          </p>
        </Row>
      </Container>
    </>
  );
};

export default InfoPage;
