import "./FrontPage.css";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ImAirplane } from "react-icons/im";
import dropboxCountries from "../data/dropboxCountries";
import Select from "react-select";
import { Link } from "react-router-dom";

const FrontPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [yourDestination, setYourDestionation] = useState("");

  return (
    <>
      <div className="main-header">
        <div className="main-header-background">
          <nav className="main-header-nav">
            <h1 className="main-header-logo">
              Visa<span>Wizz</span>
            </h1>
          </nav>
        </div>
        <div className="header-description">
          <p className="main-title text-[4.4rem] text-white font-bold mb-[-1.2rem]">
            VisaWizz
          </p>
          <p className="second-title text-[4.4rem] text-white font-bold pb-[1.6rem]">
            The friend who will help you find out,
          </p>
          <TypeAnimation
            className="TypeWritter"
            sequence={[
              "If you need a visa for your next trip.", // Types 'One'
              2500, // Waits 1s
              "What documents you will need.", // Deletes 'One' and types 'Two'
              2500, // Waits 2s
              "If you can work or study in a certain country.",
              2500,
              "The latest information about covid for your next trip.",
              2500, // Types 'Three' without deleting 'Two'
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            // style={{
            //   fontSize: "2.8rem",
            //   color: "white",
            //   paddingLeft: "0.4rem",
            // }}
          />
        </div>
        <div className="inputs-container items-center justify-center flex gap-[6rem]">
          <Select
            onMenuOpen={() => setIsOpen(true)}
            onMenuClose={() => setIsOpen(false)}
            onChange={(destination) => {
              // console.log(destination.value);
              setYourDestionation(destination.value);
            }}
            styles={{
              control: (style, state) => ({
                ...style,
                backgroundColor: "#fff",
                border: 0,
                boxShadow: "none",
                cursor: "pointer",
                height: "5rem",
                borderRadius: isOpen ? "2rem 2rem 0 0 " : "2rem",
                "@media (max-width: 768px)": {
                  width: "30.5rem",
                  height: "5rem",
                  zIndex: "99",
                },
                "@media (max-width: 498px)": {
                  width: "30.5rem",
                  height: "5rem",
                  zIndex: "99",
                },
                "@media (max-width: 360px)": {
                  width: "26rem",
                  zIndex: "99",
                },
              }),
              option: (styles, { data, isDisable, isSelected, isFocused }) => {
                return {
                  ...styles,
                  color: data.color,
                  cursor: "pointer",
                };
              },
              container: () => ({
                position: "relative",
                boxSizing: "border-box",
                backgroundColor: "transparent",
                fontSize: "1.6rem",
                color: "#1e2e6e",
                width: "32.5rem",
                fontWeight: "bold",
                "@media (max-width: 768px)": {
                  width: "30.5rem",
                  fontSize: "1.6rem",
                  zIndex: "99",
                },
                "@media (max-width: 498px)": {
                  width: "30.5rem",
                  fontSize: "1.4rem",
                  zIndex: "99",
                },
                "@media (max-width: 360px)": {
                  width: "26rem",
                  zIndex: "99",
                },
              }),
              menu: () => ({
                position: "absolute",
                width: "32.5rem",
                fontWeight: "bold",
                backgroundColor: "#fff",
                border: "none",
                color: "#1e2e6e",
                "@media (max-width: 768px)": {
                  width: "30.5rem",
                  fontSize: "1.6rem",
                  zIndex: "99",
                },
                "@media (max-width: 498px)": {
                  width: "30.5rem",
                  fontSize: "1.4rem",
                  zIndex: "99",
                },
                "@media (max-width: 360px)": {
                  width: "26rem",
                  zIndex: "99",
                },
              }),
            }}
            placeholder={
              <div className="select-placeholder-text">
                Where do you want to go?
              </div>
            }
            options={dropboxCountries}
          />
          <Link
            to={`/${yourDestination}`}
            className="mortiimatii flex items-center justify-center gap-[1rem] text-[2rem] font-bold z-50 text-white border-[0.3rem] rounded-[3rem]"
          >
            Travel <ImAirplane />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
