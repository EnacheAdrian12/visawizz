import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const SaudiArabia = () => {
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
        <title>Serbia</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Serbia travel visa, Serbia work visa, Serbia study visa, How to apply for an Serbia visa, Serbia visa requirements, Serbia tourist visa, Serbia student visa, Serbia business visa, Serbia visa processing time, Serbia visa application process, Serbia visa for Americans, Serbia visa for Europeans, Serbia visa for Serbians, Serbia visa for Canadians, Serbia visa for Serbians, Serbia visa for Chinese, Serbia visa for Africans, Serbia visa for Asians, Serbia visa for South Americans, Serbia visa for Middle Easterners, Serbia visa for UK citizens, Serbia visa for EU citizens, Serbia visa for Schengen area, Serbia visa for non-EU citizens, Serbia visa fees and charges"



        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Saudi Arabia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Saudi Arabia is a large country located in the Middle East. It is
              known for its vast desert landscapes, including the Rub' al Khali,
              the largest sand desert in the world. Saudi Arabia is also famous
              for its oil reserves and its role as the birthplace of Islam. The
              country is home to Islam's holiest sites, Mecca and Medina, which
              millions of Muslims visit each year on the pilgrimage known as the
              Hajj. In addition, Saudi Arabia is known for its strict
              interpretation of Islamic law and its conservative social customs.
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
                Who can enter Saudi Arabia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the following countries are allowed to enter Saudi
                Arabia without a visa for stays of up to 90 days:
                <br />
                <br />
                <span className="font-bold">Bahrain, Kuwait, Oman, Qatar.</span>
                <br />
                <br />
                Citizens of the following countries are allowed to enter Saudi
                Arabia without a visa for stays of up to 30 days:
                <br />
                <br />
                <span className="font-bold">United Arab Emirates</span>
                <br />
                <br />
                Citizens of the following countries are allowed to enter Saudi
                Arabia without a visa for stays of up to 14 days:
                <br />
                <br />
                <span className="font-bold">
                  Indonesia, Japan, Malaysia, Singapore.
                </span>
                <br />
                <br />
                It is important to note that these visa-free entry privileges
                may be subject to change at any time. You should check with the
                Saudi Arabian embassy or consulate in your country before
                traveling to Saudi Arabia to confirm the current visa
                requirements.
                <br />
                <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not listed above and
                  you wish to enter Saudi Arabia, you will need to obtain a visa
                  before you can enter the country. There are several different
                  types of visas available for travel to Saudi Arabia, including
                  tourist visas, business visas, and work visas. You should
                  contact the Saudi Arabian embassy or consulate in your country
                  for more information on the specific requirements and process
                  for obtaining a visa to travel to Saudi Arabia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Saudi Arabia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to travel to Saudi Arabia, you will
                typically need to provide the following documents:
                <br />
                <br />
                ● A completed application form. This can usually be obtained
                from the Saudi Arabian embassy or consulate in your country, or
                online.
                <br />
                <br />
                ● A valid passport. Your passport must be valid for at least six
                months after the date of your intended arrival in Saudi Arabia.
                <br />
                <br />
                ● Passport-style photographs. You will need to provide two
                passport-style photographs with your visa application.
                <br />
                <br />
                ● A letter of invitation from a sponsor in Saudi Arabia. This
                should be a letter from a person or company in Saudi Arabia
                inviting you to visit the country.
                <br />
                <br />
                ● Evidence of sufficient funds to support yourself during your
                stay in Saudi Arabia. This can be in the form of bank statements
                or pay stubs.
                <br />
                <br />
                ● A police clearance certificate from your country of
                citizenship. This should be a certificate issued by the police
                in your country of citizenship that states that you do not have
                a criminal record.
                <br />
                <br />
                ● Other documents may be required depending on the specific type
                of visa you are applying for and the purpose of your visit to
                Saudi Arabia. For example, if you are applying for a business
                visa, you may need to provide a letter from your employer or a
                copy of your business license. If you are applying for a work
                visa, you may need to provide a copy of your work contract or a
                letter from your employer in Saudi Arabia.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  visa to travel to Saudi Arabia may vary depending on your
                  country of citizenship and the specific type of visa you are
                  applying for. You should contact the Saudi Arabian embassy or
                  consulate in your country for more information on the specific
                  requirements and process for obtaining a visa to travel to
                  Saudi Arabia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Saudi Arabia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to travel to Saudi Arabia, you will need to
                follow the steps below:
                <br />
                <br />
                ● Determine which type of visa you need. There are several
                different types of visas available for travel to Saudi Arabia,
                including tourist visas, business visas, and work visas. You
                will need to determine which type of visa is appropriate for
                your situation and the purpose of your visit to Saudi Arabia.
                <br />
                <br />
                ● Gather the required documents. To apply for a visa to travel
                to Saudi Arabia, you will need to provide a completed
                application form, a valid passport, passport-style photographs,
                a letter of invitation from a sponsor in Saudi Arabia, and
                evidence of sufficient funds to support yourself during your
                stay in Saudi Arabia. You may also need to provide other
                documents, such as a police clearance certificate from your
                country of citizenship.
                <br />
                <br />
                ● Contact the Saudi Arabian embassy or consulate in your
                country. You will need to contact the Saudi Arabian embassy or
                consulate in your country to find out where and how to submit
                your visa application. Some embassies and consulates may allow
                you to apply for a visa online, while others may require you to
                submit your application in person.
                <br />
                <br />● Submit your visa application. Once you have gathered all
                of the required documents and determined where to submit your
                application, you will need to submit your visa application to
                the Saudi Arabian embassy or consulate. You may be required to
                pay a fee at this time.
                <br />
                <br />
                ● Wait for a decision on your application. After you have
                submitted your visa application, you will need to wait for a
                decision on your application. This process can take several
                weeks, so it is important to apply for your visa well in advance
                of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  visa to travel to Saudi Arabia may vary depending on your
                  country of citizenship and the specific type of visa you are
                  applying for.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Saudi Arabia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Saudi Arabia will
                depend on the specific type of visa you have obtained and the
                purpose of your visit.
                <br />
                <br />
                If you have <span className="font-bold">a tourist visa</span>,
                you will typically be allowed to stay in Saudi Arabia for a
                maximum of 90 days. If you have a business visa, you will
                typically be allowed to stay in Saudi Arabia for a maximum of 90
                days, although in some cases the length of your stay may be
                extended if your business requires it. If you have a work visa,
                the length of your stay in Saudi Arabia will be determined by
                the duration of your work contract.
                <br />
                <br />
                It is important to note that the length of time you are allowed
                to stay in Saudi Arabia may be subject to change at any time.
                You should check with the Saudi Arabian embassy or consulate in
                your country before traveling to Saudi Arabia to confirm the
                current visa requirements and the length of time you are allowed
                to stay in the country.
                <br />
                <br />
                <span className="font-bold">
                  If you wish to stay in Saudi Arabia for a longer period of
                  time than the length of your initial visa allows, you may be
                  able to apply for an extension of your visa. You should
                  contact the Saudi Arabian embassy or consulate in your country
                  for more information on the specific requirements and process
                  for obtaining an extension of your visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Saudi Arabia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no COVID-19 restrictions in place for travel to Saudi
                Arabia from Ireland. There is no requirement to present
                certificates of vaccination/testing for COVID-19.
                <br />
                <br />
                All visitors must fill out the Registration Immunization
                Information Form on the Muqeem Portal before travelling to the
                Saudi Arabia to allow them to register their immunization data.
                This will enable them to use the Tawakkalna Application on their
                phone while in Saudi Arabia in case they need to show their
                vaccination status at any stage.
                <br />
                <br />
                All visitors intending to travel to Saudi Arabia (excluding
                residents) must have medical insurance that covers the costs of
                COVID-19 treatment in outpatient clinics, emergencies and
                hospitals.
                <br />
                <br />
                The Saudi authorities have introduced a number of measures to
                limit the spread of the COVID-19. Health and travel advice
                issued by the local authorities in Saudi Arabia should be
                monitored. You should comply with any additional screening
                measures put in place by the local authorities.
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
                In Saudi Arabia, a diplomatic passport is a special type of
                passport that is issued to diplomats and other high-ranking
                government officials for the purpose of conducting official
                government business abroad. Holders of diplomatic passports are
                entitled to certain privileges and immunities while traveling,
                such as exemption from visas and customs inspections in many
                countries.
                <br />
                <br />
                <span className="font-bold">
                  Diplomatic passports are issued by the Ministry of Foreign
                  Affairs in Saudi Arabia. In order to obtain a diplomatic
                  passport, individuals must be appointed to a diplomatic
                  position by the government and must have their appointment
                  confirmed by the Ministry of Foreign Affairs.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Saudi Arabia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, if you are planning to work in Saudi Arabia, you will need
                to obtain a worker visa. The process for obtaining a worker visa
                in Saudi Arabia depends on your country of citizenship, the type
                of job you will be doing, and the length of your stay in the
                country.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Saudi Arabia may vary depending on your country
                  of citizenship and the specific type of visa you are applying
                  for. You should contact the Saudi Arabian embassy or consulate
                  in your country for more information on the specific
                  requirements and process for obtaining a worker visa in Saudi
                  Arabia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Saudi Arabia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Saudi Arabia, you will need to
                follow the steps outlined below:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of worker visas available for those who want to work in Saudi
                Arabia, including work visas, temporary work visas, domestic
                worker visas, and student visas. You will need to determine the
                type of visa that is appropriate for your work and the length of
                your stay in the country.
                <br />
                <br />
                ● Gather required documents: You will need to provide a variety
                of documents in order to apply for a worker visa, including a
                completed visa application form, a valid passport, and a CV
                outlining your education and work experience. You may also need
                to provide copies of your educational certificates, a letter of
                invitation from your employer in Saudi Arabia, a medical
                certificate, and a police clearance certificate.
                <br />
                <br />
                ● Submit the application: Once you have completed the visa
                application and gathered all of the required documents, you can
                submit the application either in person at a Saudi embassy or
                consulate, or through an authorized visa processing agency.
                <br />
                <br />● Wait for a decision: The processing time for a worker
                visa in Saudi Arabia can vary, so you should plan ahead and
                allow enough time for your application to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  worker visa in Saudi Arabia may vary depending on your country
                  of citizenship and the specific type of visa you are applying
                  for. You should contact the Saudi Arabia embassy or consulate
                  in your country for more information on the specific
                  requirements and process for obtaining a worker visa in Saudi
                  Arabia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Saudi Arabia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for those who
                want to work in Saudi Arabia. The specific type of visa that you
                will need will depend on the nature of your work and the length
                of your stay in the country. Below are some of the main types of
                worker visas available in Saudi Arabia:
                <br />
                <br />
                <span className="font-bold">Work visas</span>
                : Work visas are issued to individuals who are employed by a
                company in Saudi Arabia and will be working in the country for a
                period of more than three months. To apply for a work visa, you
                must have a sponsor in Saudi Arabia, typically your employer,
                who will be responsible for your visa application and for your
                stay in the country.
                <br />
                <br />
                <span className="font-bold">Temporary work visas</span>
                : Temporary work visas are issued for short-term employment in
                Saudi Arabia, typically for a period of less than three months.
                These visas are typically used for seasonal workers or for
                individuals who are working on a specific project in the
                country.
                <br />
                <br />
                <span className="font-bold">Domestic worker visas</span>
                : Domestic worker visas are issued to individuals who are
                employed as domestic workers in Saudi Arabia, such as nannies,
                housekeepers, and caregivers. These visas are typically issued
                for a period of two years, and can be renewed for an additional
                two years.
                <br />
                <br />
                <span className="font-bold">Student visas</span>
                : Students who are studying in Saudi Arabia may be eligible for
                a student visa, which allows them to work part-time while they
                are studying. Student visas are typically issued for the
                duration of the student's studies.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  restrictions that apply to each type of worker visa may vary
                  depending on your country of citizenship and the specific type
                  of work you will be doing in Saudi Arabia. You should contact
                  the Saudi Arabia embassy or consulate in your country for more
                  information on the specific requirements and restrictions that
                  apply to each type of worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Saudi Arabia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The specific documents that you will need to provide in order to
                apply for a worker visa in Saudi Arabia will depend on the type
                of visa you are applying for and the nature of your work.
                However, generally speaking, you will need to provide the
                following documents:
                <br />
                <br />
                ● A completed visa application form: You can complete the visa
                application form online or by downloading and printing the form.
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least six
                months beyond the date of your intended arrival in Saudi Arabia.
                <br />
                <br />
                ● A CV: You will need to provide a CV that outlines your
                education and work experience.
                <br />
                <br />
                ● Educational certificates: You may need to provide copies of
                your educational certificates, such as your degree and any other
                relevant qualifications.
                <br />
                <br />
                ● A letter of invitation: If you are applying for a work visa,
                you will need to provide a letter of invitation from your
                employer in Saudi Arabia. The letter should outline the nature
                of your employment and the duration of your stay in the country.
                <br />
                <br />
                ● Medical certificate: You will need to provide a medical
                certificate that confirms you are in good health and fit to work
                in Saudi Arabia.
                <br />
                <br />● Police clearance certificate: You may need to provide a
                police clearance certificate that confirms you have no criminal
                record.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Saudi Arabia may vary depending on your country
                  of citizenship and the specific type of visa you are applying
                  for. You should contact the Saudi Arabia embassy or consulate
                  in your country for more information on the specific
                  requirements and process for obtaining a worker visa in Saudi
                  Arabia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Saudi Arabia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Saudi Arabia, you will need to
                submit your application and required documents either in person
                at a Saudi embassy or consulate, or through an authorized visa
                processing agency. It is important to note that visa
                applications can only be submitted by your sponsor in Saudi
                Arabia, typically your employer. You cannot apply for a worker
                visa on your own.
                <br />
                <br />
                You should plan ahead and allow enough time for your visa
                application to be processed. The processing time for a worker
                visa in Saudi Arabia can vary, but it is typically several
                weeks. You should therefore submit your application well in
                advance of your intended travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is also important to note that you will need to have a
                  valid passport in order to apply for a worker visa. Your
                  passport must be valid for at least six months beyond the date
                  of your intended arrival in Saudi Arabia.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Saudi Arabia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, if you are planning to study in Saudi Arabia, you will need
                to obtain a student visa. The process for obtaining a student
                visa in Saudi Arabia depends on the country where you are a
                citizen, the length of your stay in the country, and the type of
                educational institution you will be attending.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  student visa in Saudi Arabia may vary depending on your
                  country of citizenship and the specific type of visa you are
                  applying for. You should contact the Saudi Arabia embassy or
                  consulate in your country for more information on the specific
                  requirements and process for obtaining a student visa in Saudi
                  Arabia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Saudi Arabia Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Saudi Arabia, you will need to
                follow the steps outlined below:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of student visas available for those who want to study in Saudi
                Arabia, including short-term study visas and long-term study
                visas. You will need to determine the type of visa that is
                appropriate for your studies.
                <br />
                <br />
                ● Gather required documents: You will need to provide a variety
                of documents in order to apply for a student visa, including a
                valid passport, copies of your educational certificates, and
                proof of acceptance to a Saudi educational institution.
                <br />
                <br />
                ● Complete the visa application: You can complete the student
                visa application online or by downloading and printing the
                application form. You will need to provide information about
                your personal and travel details, as well as any other required
                documentation.
                <br />
                <br />
                ● Submit the application: Once you have completed the visa
                application and gathered all of the required documents, you can
                submit the application either in person at a Saudi embassy or
                consulate, or through an authorized visa processing agency.
                <br />
                <br />
                ● Wait for a decision: The processing time for a student visa in
                Saudi Arabia can vary, so you should plan ahead and allow enough
                time for your application to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  student visa in Saudi Arabia may vary depending on your
                  country of citizenship and the specific type of visa you are
                  applying for. You should contact the Saudi Arabian embassy or
                  consulate in your country for more information on the specific
                  requirements and process for obtaining a student visa in Saudi
                  Arabia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Saudi Arabia Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Saudi Arabia, you will generally
                need to provide the following documents:
                <br />
                <br />
                ● A completed visa application form: You can complete the visa
                application form online or by downloading and printing the form.
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least six
                months beyond the date of your intended arrival in Saudi Arabia.
                <br />
                <br />
                ● Proof of acceptance to a Saudi educational institution: You
                will need to provide proof that you have been accepted to study
                at a recognized educational institution in Saudi Arabia. This
                may include a letter of acceptance or a copy of your enrollment
                documents.
                <br />
                <br />
                ● Educational certificates: You will need to provide copies of
                your educational certificates, such as your degree and any other
                relevant qualifications.
                <br />
                <br />
                ● A medical certificate: You will need to provide a medical
                certificate that confirms you are in good health and fit to
                study in Saudi Arabia.
                <br />
                <br />
                ● Police clearance certificate: You may need to provide a police
                clearance certificate that confirms you have no criminal record.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  student visa in Saudi Arabia may vary depending on your
                  country of citizenship and the specific type of visa you are
                  applying for. You should contact the Saudi Arabian embassy or
                  consulate in your country for more information on the specific
                  requirements and process for obtaining a student visa in Saudi
                  Arabia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Saudi Arabia Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Saudi Arabia will
                depend on the length of your studies and the type of educational
                institution you will be attending.
                <br />
                <br />
                <span className="font-bold">Short-term study visas</span> are
                generally issued for a period of up to six months and are
                typically valid for a single entry. These visas are usually
                issued for individuals who are attending short-term courses or
                language programs.
                <br />
                <br />
                <span className="font-bold">Long-term study visas</span> are
                generally issued for a period of one year and are typically
                valid for multiple entries. These visas are usually issued for
                individuals who are attending university or other long-term
                educational programs in Saudi Arabia. Long-term student visas
                can be renewed on an annual basis.
                <br />
                <br />
                <span className="font-bold">
                  The price of a student visa in Saudi Arabia can vary depending
                  on the embassy or consulate where you apply and the type of
                  visa you are applying for. You should contact the embassy or
                  consulate where you will be applying for more information on
                  the current fees.
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

export default SaudiArabia;
