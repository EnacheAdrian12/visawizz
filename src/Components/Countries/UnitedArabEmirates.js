import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const UnitedArabEmirates = () => {
  const [turistSection, setTuristSection] = useState(true);
  const [workSection, setWorkSection] = useState(false);

  const [turistButtonStyle, setTuristButtonStyle] = useState(
    "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
  );
  const [workButtonStyle, setWorkButtonStyle] = useState(
    "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
  );
  const [studentButtonStyle, setStudentButtonStyle] = useState(
    "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.51] hover:bg-[#233783 md:my-[2.5rem]] lg:bg-[#1e2e6e lg:mt-[2.75rem] lg:mb-[2.75rem]] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
  );

  const changeOnTurist = () => {
    setTuristSection(true);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] scale-[1.1] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
  };
  const changeOnWork = () => {
    setTuristSection(false);
    setWorkSection(true);
    setTuristButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] scale-[1.1] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
  };
  const changeOnStudent = () => {
    setTuristSection(false);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] scale-[1.1] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
    );
  };
  return (
    <>
     <Helmet>
        <title>United Arab Emirates</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="United Arab Emirates travel visa, United Arab Emirates work visa, United Arab Emirates study visa, How to apply for an United Arab Emirates visa, United Arab Emirates visa requirements, United Arab Emirates tourist visa, United Arab Emirates student visa, United Arab Emirates business visa, United Arab Emirates visa processing time, United Arab Emirates visa application process, United Arab Emirates visa for Americans, United Arab Emirates visa for Europeans, United Arab Emirates visa for Sudanns, United Arab Emirates visa for Canadians, United Arab Emirates visa for Sudanns, United Arab Emirates visa for Chinese, United Arab Emirates visa for Africans, United Arab Emirates visa for Asians, United Arab Emirates visa for South Americans, United Arab Emirates visa for Middle Easterners, United Arab Emirates visa for UK citizens, United Arab Emirates visa for EU citizens, United Arab Emirates visa for Schengen area, United Arab Emirates visa for non-EU citizens, United Arab Emirates visa fees and charges"

      
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            United Arab Emirates
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              The United Arab Emirates, or UAE, is a country in the Middle East
              that is known for its modern cities, luxury shopping, and
              beautiful beaches. It is a popular tourist destination, and its
              main attractions include the city of Dubai, which is known for its
              towering skyscrapers and artificial islands, and the city of Abu
              Dhabi, which is known for its beautiful parks and museums.
              Additionally, the UAE is known for its delicious cuisine, which is
              heavily influenced by Arabic and Middle Eastern flavors and
              features a variety of fresh seafood and spicy dishes. The country
              is also known for its vibrant music and dance traditions, which
              are heavily influenced by its rich history and diverse culture.
            </p>
          </Col>
        </Row>

        <p className="text-center pt-[6rem] text-[2.8rem]">
          Information on the duration of each type of visa can be found in the
          <span className="text-[#1e2e6e] font-bold">
            &nbsp;tourist section
          </span>{" "}
          under the question
          <br />
          <span className="text-[#1e2e62] font-bold">
            "How much time can I stay in (country name)".
          </span>
        </p>
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
                Who can enter United Arab Emirates without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter the United Arab
                Emirates (UAE) without a visa or with the ability to obtain a
                visa on arrival. This includes citizens of the Gulf Cooperation
                Council (GCC) countries (Bahrain, Kuwait, Oman, Qatar, and Saudi
                Arabia), as well as citizens of a number of other countries.
                Here is a list of countries whose citizens are able to obtain a
                visa on arrival in the UAE:
                <br />
                <br />
                <span className="font-bold">
                  Andorra, Australia, Austria, Belgium, Brunei, Canada, China,
                  Cyprus, Czech Republic, Denmark, Estonia, Finland, France,
                  Germany, Greece, Hong Kong, Hungary, Iceland, Ireland, Italy,
                  Japan, South Korea, Latvia, Liechtenstein, Lithuania,
                  Luxembourg, Malaysia, Malta, Monaco, Netherlands, New Zealand,
                  Norway, Poland, Portugal, San Marino, Singapore, Slovakia,
                  Slovenia, South Africa, Spain, Sweden, Switzerland, United
                  Kingdom, United States.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Citizens of these countries are able to stay in the UAE for 30
                  days with a visa on arrival, which can be extended for an
                  additional 30 days for a fee. It is important to note that the
                  rules for entry into the UAE may change, so it is always a
                  good idea to check with the embassy or consulate of the UAE in
                  your country of residence before traveling.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for United Arab Emirates Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The specific documents required to apply for a visa will depend
                on the country you are applying to and the purpose of your trip.
                In general, you will need to provide the following information
                and documents when applying for a visa:
                <br />
                <br />
                ● A valid passport: Your passport should be valid for at least
                six months beyond the date you intend to leave the country you
                are visiting. You will also need to have sufficient blank pages
                in your passport for any required visas or entry/exit stamps.
                <br />
                <br />
                ● A completed visa application form: Most countries will provide
                a visa application form that you will need to fill out and
                submit as part of the visa application process. Be sure to fill
                out the form completely and accurately, as any incorrect
                information could result in a delay or denial of your visa.
                <br />
                <br />
                ● Passport-style photographs: Most countries require you to
                submit one or more passport-style photographs with your visa
                application. These photographs should be recent, of good
                quality, and should meet the specific requirements of the
                country you are applying to.
                <br />
                <br />
                ● Supporting documents: Depending on the purpose of your trip,
                you may be required to provide additional documents such as
                proof of sufficient financial resources, a letter of invitation
                from a host company or individual, or proof of accommodation.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully read the requirements for a visa
                  for the country you are planning to visit, as the requirements
                  can vary significantly. Failing to provide the required
                  documents or information can result in a delay or denial of
                  your visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United Arab Emirates Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to the United Arab Emirates (UAE), you will
                need to follow the steps outlined below:
                <br />
                <br />
                ● Determine the type of visa you need: The UAE offers a range of
                visa types, including tourist visas, business visas, work visas,
                and student visas. Determine the type of visa you need based on
                the purpose of your trip and the length of your stay.
                <br />
                <br />
                ● Gather the required documents: The documents required for a
                UAE visa will depend on the type of visa you are applying for
                and your country of citizenship. In general, you will need to
                provide a valid passport, a completed visa application form,
                passport-style photographs, and any additional documents
                required by the UAE embassy or consulate in your country of
                residence.
                <br />
                <br />
                ● Submit your application: You can apply for a UAE visa through
                the embassy or consulate of the UAE in your country of
                residence, or through an approved visa processing agency. Submit
                your completed application and supporting documents, and pay any
                applicable fees.
                <br />
                <br />● Wait for a decision: Processing times for a UAE visa can
                vary, so it is important to apply well in advance of your
                intended travel date. Once your application has been reviewed,
                you will be informed of the decision by the embassy or
                consulate. If your visa is approved, it will be issued and sent
                to you by mail or courier.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully read the requirements for a UAE
                  visa and to submit all required documents and information to
                  ensure that your application is processed smoothly. Failing to
                  provide the required documents or information can result in a
                  delay or denial of your visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in United Arab Emirates?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in the United Arab
                Emirates (UAE) will depend on the type of visa you have. Here
                are the general guidelines for the duration of stay allowed
                under different types of visas:
                <br />
                <br />
                <span className="font-bold">Tourist visas</span>: Tourist visas
                to the UAE are typically valid for 30 days and can be extended
                for an additional 30 days for a fee.
                <br />
                <br />
                <span className="font-bold">Business visas</span>: Business
                visas to the UAE are typically valid for 30 days and can be
                extended for up to 90 days.
                <br />
                <br />
                <span className="font-bold">Work visas</span>: The duration of a
                work visa in the UAE will depend on the terms of your employment
                contract. Work visas are generally valid for the length of your
                contract, up to a maximum of three years.
                <br />
                <br />
                <span className="font-bold">Student visas</span>: Student visas
                to the UAE are typically valid for the duration of your studies,
                up to a maximum of four years.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for entry into the UAE
                  may change, so it is always a good idea to check with the
                  embassy or consulate of the UAE in your country of residence
                  before traveling.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in United Arab Emirates?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                All passengers travelling to Dubai are no longer required to
                present a COVID19 vaccination certificate or perform PCR tests.
                <br />
                <br />
                <span className="font-bold">
                  Don't forget to check twice before and at the same time on
                  reliable sources because the information presented can change
                  over time.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Informations About Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials who are
                traveling abroad on official business. In the United Arab
                Emirates (UAE), diplomatic passports are issued to individuals
                who are accredited by the UAE Ministry of Foreign Affairs and
                International Cooperation as diplomats or members of a
                diplomatic mission.
                <br />
                <br />
                Diplomatic passports are issued in addition to regular passports
                and are typically valid for a period of five years. They allow
                the holder to receive certain privileges and immunities while
                abroad, including immunity from arrest, detention, and
                prosecution, as well as tax exemptions and privileges related to
                customs, currency, and immigration.
                <br />
                <br />
                To apply for a diplomatic passport in the UAE, you must be a
                citizen of the UAE and be accredited by the Ministry of Foreign
                Affairs and International Cooperation as a diplomat or member of
                a diplomatic mission. You will need to provide the necessary
                documents and pay any applicable fees to obtain a diplomatic
                passport.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are only
                  valid for official travel and cannot be used for personal
                  travel or for any other purpose. It is also important to
                  respect the laws and customs of the countries you are visiting
                  while traveling on a diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in United Arab Emirates?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in the United Arab Emirates (UAE),
                you will generally need to obtain a work visa. A work visa
                allows you to legally work in the UAE and is typically tied to a
                specific employer.
                <br />
                <br />
                To apply for a work visa in the UAE, you will need to have a job
                offer from a company in the UAE and be sponsored by that
                company. The company will be responsible for applying for your
                work visa on your behalf and will need to provide the necessary
                documents and pay any applicable fees.
                <br />
                <br />
                In general, you will need to provide the following documents to
                apply for a work visa in the UAE:
                <br />
                <br />
                ● A valid passport: Your passport should be valid for at least
                six months beyond the date you intend to leave the UAE. You will
                also need to have sufficient blank pages in your passport for
                any required visas or entry/exit stamps.
                <br />
                <br />
                ● A completed work visa application form: The UAE embassy or
                consulate in your country of residence will provide a work visa
                application form that you will need to fill out and submit as
                part of the visa application process.
                <br />
                <br />
                ● Passport-style photographs: You will need to provide one or
                more passport-style photographs with your work visa application.
                These photographs should be recent, of good quality, and should
                meet the specific requirements of the UAE.
                <br />
                <br />
                ● A signed employment contract: You will need to provide a copy
                of the employment contract that you have signed with your
                employer in the UAE. The contract should outline the terms of
                your employment, including your job duties, salary, and length
                of employment.
                <br />
                <br />
                ● A medical fitness certificate: You may be required to undergo
                a medical examination and obtain a medical fitness certificate
                before your work visa can be issued.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully read the requirements for a work
                  visa in the UAE and to submit all required documents and
                  information to ensure that your application is processed
                  smoothly. Failing to provide the required documents or
                  information can result in a delay or denial of your visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United Arab Emirates Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in the United Arab Emirates (UAE), you
                will need to follow the steps outlined below:
                <br />
                <br />
                ● Find a job: The first step in obtaining a work visa in the UAE
                is to find a job with a company that is willing to sponsor your
                work visa. You will need to have a job offer from a company in
                the UAE to be eligible for a work visa.
                <br />
                <br />
                ● Gather the necessary documents. To apply for a work visa, you
                will need to have a valid passport with at least 6 months of
                remaining validity, a completed visa application form, two
                recent passport-sized photographs, a letter of employment from
                your United Arab Emirates employer, evidence of your
                qualifications and work experience, and a police clearance
                certificate from your country of citizenship. Your United Arab
                Emirates employer will also need to provide a number of
                supporting documents, including a copy of the company's business
                registration, a letter of support for your work visa
                application, and evidence of the company's financial status and
                business activities.
                <br />
                <br />
                ● Have your employer apply for your work visa: Your employer in
                the UAE will be responsible for applying for your work visa on
                your behalf. The company will need to provide the necessary
                documents and pay any applicable fees to obtain your work visa.
                <br />
                <br />
                ● Wait for a decision: Processing times for a work visa in the
                UAE can vary, so it is important to apply well in advance of
                your intended travel date. Once your application has been
                reviewed, you will be informed of the decision by the embassy or
                consulate. If your work visa is approved, it will be issued and
                sent to you by mail or courier.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully read the requirements for a work
                  visa in the UAE and to submit all required documents and
                  information to ensure that your application is processed
                  smoothly. Failing to provide the required documents or
                  information can result in a delay or denial of your visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of United Arab Emirates Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas available in the United
                Arab Emirates (UAE). The type of work visa that you will need
                will depend on the nature of your job and the length of your
                intended stay in the UAE. Here is an overview of the different
                types of work visas available in the UAE:
                <br />
                <br />
                <span className="font-bold">Employment visa</span>: An
                employment visa is issued to individuals who are coming to the
                UAE to work for a specific employer. An employment visa is
                typically valid for a period of two years and is tied to a
                specific job and employer.
                <br />
                <br />
                <span className="font-bold">Investor visa</span>: An investor
                visa is issued to individuals who are planning to invest a
                significant amount of money in a business in the UAE. Investor
                visas are typically valid for a period of three years.
                <br />
                <br />
                <span className="font-bold">Entrepreneur visa</span>: An
                entrepreneur visa is issued to individuals who are planning to
                start a new business in the UAE. Entrepreneur visas are
                typically valid for a period of three years.
                <br />
                <br />
                <span className="font-bold">Professional visa</span>: A
                professional visa is issued to individuals who are coming to the
                UAE to work in a specific profession, such as a doctor,
                engineer, or lawyer. Professional visas are typically valid for
                a period of three years.
                <br />
                <br />
                <span className="font-bold">Student visa</span>: A student visa
                is issued to individuals who are coming to the UAE to study at a
                university or other educational institution. Student visas are
                typically valid for the duration of the individual's studies, up
                to a maximum of four years.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for work visas in the
                  UAE may change, so it is always a good idea to check with the
                  embassy or consulate of the UAE in your country of residence
                  before traveling.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for United Arab Emirates Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in the United Arab Emirates (UAE), you
                will need to provide the following documents:
                <br />
                <br />
                ● A valid passport: Your passport should be valid for at least
                six months beyond the date you intend to leave the UAE. You will
                also need to have sufficient blank pages in your passport for
                any required visas or entry/exit stamps.
                <br />
                <br />
                ● A completed work visa application form: The UAE embassy or
                consulate in your country of residence will provide a work visa
                application form that you will need to fill out and submit as
                part of the visa application process.
                <br />
                <br />
                ● Passport-style photographs: You will need to provide one or
                more passport-style photographs with your work visa application.
                These photographs should be recent, of good quality, and should
                meet the specific requirements of the UAE.
                <br />
                <br />
                ● A signed employment contract: You will need to provide a copy
                of the employment contract that you have signed with your
                employer in the UAE. The contract should outline the terms of
                your employment, including your job duties, salary, and length
                of employment.
                <br />
                <br />
                ● A medical fitness certificate: You may be required to undergo
                a medical examination and obtain a medical fitness certificate
                before your work visa can be issued.
                <br />
                <br />
                <span className="font-bold">
                  In addition to these documents, you may also be required to
                  provide other supporting documents such as proof of sufficient
                  financial resources, a police clearance certificate, and a
                  copy of your educational qualifications. It is important to
                  carefully read the requirements for a work visa in the UAE and
                  to submit all required documents and information to ensure
                  that your application is processed smoothly. Failing to
                  provide the required documents or information can result in a
                  delay or denial of your visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in United Arab
                Emirates?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in the United Arab Emirates (UAE), you
                will need to have a job offer from a company in the UAE and be
                sponsored by that company. The company will be responsible for
                applying for your work visa on your behalf and will need to
                provide the necessary documents and pay any applicable fees.
                <br />
                <br />
                You will need to apply for your work visa through the embassy or
                consulate of the UAE in your country of residence, or through an
                approved visa processing agency. It is important to apply for
                your work visa well in advance of your intended travel date, as
                processing times can vary.
                <br />
                <br />
                It is also a good idea to check with the embassy or consulate of
                the UAE in your country of residence to confirm the specific
                requirements and procedures for applying for a work visa, as the
                requirements can vary depending on your country of citizenship.
                <br />
                <br />
                <span className="font-bold">
                  Once you have gathered all of the required documents and
                  submitted your work visa application, you will need to wait
                  for a decision. Processing times for a work visa in the UAE
                  can vary, so it is important to apply well in advance of your
                  intended travel date. Once your application has been reviewed,
                  you will be informed of the decision by the embassy or
                  consulate. If your work visa is approved, it will be issued
                  and sent to you by mail or courier.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in United Arab Emirates?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in the United Arab Emirates (UAE),
                you will generally need to obtain a student visa. A student visa
                allows you to legally study in the UAE and is typically tied to
                a specific educational institution.
                <br />
                <br />
                To apply for a student visa in the UAE, you will need to be
                accepted into a university or other educational institution in
                the UAE and be sponsored by that institution. The educational
                institution will be responsible for applying for your student
                visa on your behalf and will need to provide the necessary
                documents and pay any applicable fees.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully read the requirements for a
                  student visa in the UAE and to submit all required documents
                  and information to ensure that your application is processed
                  smoothly.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United Arab Emirates Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in the United Arab Emirates (UAE),
                you will need to follow these steps:
                <br />
                <br />
                ● Find a school or university in the UAE that is accredited to
                accept international students.
                <br />
                <br />
                ● Contact the school or university and inquire about their
                requirements for international students. You will likely need to
                provide transcripts, proof of English language proficiency, and
                other documents.
                <br />
                <br />
                ● Once you have been accepted to a school or university, you
                will need to obtain a No Objection Certificate (NOC) from your
                home country. This is a letter from your government stating that
                you are allowed to study abroad.
                <br />
                <br />
                ● With your NOC and other required documents, you can then apply
                for a student visa at the UAE embassy or consulate in your home
                country. You will need to pay a visa fee and may need to provide
                biometric information as part of the application process.
                <br />
                <br />
                ● Once your visa is approved, you will receive a visa stamp in
                your passport. This will allow you to enter the UAE and start
                your studies.
                <br />
                <br />
                ● Once you arrive in the UAE, you will need to register with the
                Ministry of Education and have your student visa transferred to
                your residence permit. This will allow you to legally reside in
                the UAE while you study.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general steps and requirements for
                  obtaining a student visa in the UAE. The specific requirements
                  may vary depending on your country of citizenship and the
                  school or university you will be attending. It is important to
                  carefully research the requirements and follow them closely to
                  ensure a smooth visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                United Arab Emirates Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in the United Arab Emirates (UAE),
                you will typically need to meet the following requirements:
                <br />
                <br />
                ● Acceptance to a school or university in the UAE that is
                accredited to accept international students.
                <br />
                <br />
                ● A No Objection Certificate (NOC) from your home country. This
                is a letter from your government stating that you are allowed to
                study abroad.
                <br />
                <br />
                ● Passport with at least six months of validity remaining.
                <br />
                <br />
                ● A recent passport-sized photograph.
                <br />
                <br />
                ● Evidence of sufficient financial resources to cover your
                tuition and living expenses while studying in the UAE.
                <br />
                <br />
                ● Proof of English language proficiency, such as a TOEFL or
                IELTS score.
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● Payment of the visa fee.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general requirements and they may
                  vary depending on your country of citizenship and the school
                  or university you will be attending. It is important to
                  carefully research the specific requirements and follow them
                  closely to ensure a smooth visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for United Arab Emirates Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in the United Arab
                Emirates (UAE) will depend on the length of your studies and
                your country of citizenship.
                <br />
                <br />
                Student visas in the UAE are generally valid for the duration of
                your studies, up to a maximum of four years. Once your studies
                are completed, you will need to either leave the UAE or apply
                for a new type of visa in order to continue living in the
                country.
                <br />
                <br />
                The price of a student visa in the UAE will also vary depending
                on your country of citizenship. In general, the visa fee is
                around AED 500-700 (approximately USD 136-190). However, this is
                just an estimate, and the actual fee may be higher or lower
                depending on your circumstances.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that these are just general
                  guidelines, and the specific requirements and fees for a
                  student visa in the UAE may vary depending on your individual
                  circumstances. It is always best to consult with the UAE
                  embassy or consulate in your home country for the most
                  accurate and up-to-date information.
                </span>
              </p>
            </Container>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default UnitedArabEmirates;
