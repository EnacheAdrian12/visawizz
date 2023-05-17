import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const India = () => {
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
        <title>India</title>
        <meta name="description" content="India" />
        <meta
          name="keywords"
          content="India travel visa, India work visa, India study visa, How to apply for an India visa, India visa requirements, India tourist visa, India student visa, India business visa, India visa processing time, India visa application process, India visa for Americans, India visa for Europeans, India visa for Indians, India visa for Canadians, India visa for Indians, India visa for Chinese, India visa for Africans, India visa for Asians, India visa for South Americans, India visa for Middle Easterners, India visa for UK citizens, India visa for EU citizens, India visa for Schengen area, India visa for non-EU citizens, India visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            India
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              India is a large and diverse country in South Asia that is known
              for its rich cultural heritage, ancient history, and natural
              beauty. The country is known for its impressive monuments and
              landmarks, such as the Taj Mahal, the Red Fort, and the Gateway of
              India. India is also known for its diverse cuisine, which includes
              a wide range of dishes and flavors influenced by its many
              different regions and cultures. Additionally, India is known for
              its vibrant arts and crafts scene, and its handicrafts, such as
              hand-woven textiles and carved woodwork, are popular with
              tourists.
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
                Who can enter India without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of Bhutan, Nepal, and Maldives do not require a visa to
                enter India. In addition, people of Indian origin and their
                spouses, regardless of their nationality, are eligible to apply
                for an Overseas Citizen of India (OCI) card, which allows them
                to enter and stay in India without the need for a visa.
                <br />
                <br />
                There are also a number of countries whose citizens are eligible
                to apply for an Electronic Travel Authorization (ETA) to visit
                India. This is an electronic visa that allows the holder to
                enter and stay in India for up to 60 days for business or
                tourist purposes. The ETA is valid for multiple visits for a
                period of up to one year from the date of issue.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these rules are subject to change
                  and may vary based on the specific circumstances of the
                  individual traveler. It's always a good idea to check the most
                  up-to-date visa requirements and procedures before planning a
                  trip to India.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for India Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter India, you will generally need to
                provide the following documents:
                <br />
                <br />● A completed visa application form: This can be completed
                online or by hand.
                <br />
                <br />● A passport that is valid for at least six months from
                the date of arrival in India and has at least two blank pages
                for the visa.
                <br />
                <br />● A recent passport-size photograph: This should be taken
                against a white background and meet the specific requirements
                for visa photos.
                <br />
                <br />● Proof of sufficient funds: This could include bank
                statements, credit card statements, or other financial documents
                that demonstrate you have the financial means to support your
                stay in India.
                <br />
                <br />
                ● Proof of a return or onward ticket: You will need to show that
                you have a ticket to leave India within the duration of your
                visa.
                <br />
                <br />
                ● Supporting documents: Depending on the type of visa you are
                applying for, you may need to provide additional supporting
                documents, such as a letter of invitation, a letter from your
                employer, or a hotel reservation.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements may vary based
                  on the specific type of visa you are applying for and your
                  country of origin. It's always a good idea to check the most
                  up-to-date visa requirements and procedures before planning a
                  trip to India.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a India Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are several steps you can follow to apply for a visa to
                enter India:
                <br />
                <br />● Determine the type of visa you need: There are several
                types of visas available for India, including tourist visas,
                business visas, student visas, and medical visas. Choose the one
                that best fits your purpose of travel.
                <br />
                <br />● Check the eligibility requirements: Make sure you meet
                the eligibility requirements for the type of visa you are
                applying for.
                <br />
                <br />● Gather the required documents: Assemble the necessary
                documents, including your passport, photograph, proof of
                sufficient funds, and any other supporting documents required
                for your specific visa type.
                <br />
                <br />● Complete the online visa application form: You can
                complete the visa application form online at the official
                website of the Ministry of Home Affairs.
                <br />
                <br />● Pay the visa fee: You will need to pay the visa fee
                using a credit card or debit card.
                <br />
                <br />● Submit your application: Submit your completed
                application, along with all required documents, to the nearest
                Indian embassy or consulate.
                <br />
                <br />● Wait for your visa to be processed: The processing time
                for a visa to India varies depending on the type of visa and the
                time of year. You should allow sufficient time for your visa to
                be processed before your intended date of travel.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific process for applying
                  for a visa to India may vary based on your country of origin.
                  It's always a good idea to check the most up-to-date visa
                  requirements and procedures before planning a trip to India.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in India?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in India depends on the type of
                visa you have. Here are some common types of visas and the
                maximum duration of stay they allow:
                <br />
                <br />
                <span className="font-bold">Tourist visas</span>
                : Tourist visas are issued for stays of up to 180 days.
                <br />
                <br />
                <span className="font-bold">Business visas</span>
                : Business visas are issued for stays of up to 180 days.
                <br />
                <br />
                <span className="font-bold">Student visas</span>: Student visas
                are issued for the duration of the study program, up to a
                maximum of five years.
                <br />
                <br />
                <span className="font-bold">Medical visas</span>: Medical visas
                are issued for stays of up to one year, with the possibility of
                extension for up to one additional year.
                <br />
                <br />
                <span className="font-bold">Employment visas</span>: Employment
                visas are issued for the duration of the employment contract, up
                to a maximum of five years.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these rules are subject to change
                  and may vary based on the specific circumstances of the
                  individual traveler. It's always a good idea to check the most
                  up-to-date visa requirements and procedures before planning a
                  trip to India.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in India?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A COVID test is not required when arriving in India.
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
                traveling abroad on official business. In India, diplomatic
                passports are issued by the Ministry of External Affairs to
                Indian diplomats, government officials, and their dependents.
                <br />
                <br />
                Diplomatic passports have a distinctive blue cover and are
                issued for a period of five years. They are not subject to visa
                requirements in many countries and allow the holder to enter and
                stay in other countries for the duration of their official
                duties.
                <br />
                <br />
                Diplomatic passports do not grant the holder any special
                privileges or immunities while in India, but they do allow the
                holder to receive certain privileges and courtesies while
                traveling abroad, as specified by international conventions.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that diplomatic passports are not
                  issued to the general public and are only granted to
                  individuals who are serving in an official capacity as
                  representatives of the Indian government.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in India?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in India, you will generally need to apply
                for a worker visa. The specific type of worker visa you will
                need will depend on the nature of your work and the length of
                your stay in India.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  procedures for applying for a worker visa in India may vary
                  based on your country of origin and the specific type of visa
                  you are applying for. It's always a good idea to check the
                  most up-to-date visa requirements and procedures before
                  planning a trip to India.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a India Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to enter India, you will generally
                need to follow these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need: There are several
                types of worker visas available for India, including employment
                visas, business visas, and consultant visas. Choose the one that
                best fits your purpose of work in India.
                <br />
                <br />● Check the eligibility requirements: Make sure you meet
                the eligibility requirements for the type of worker visa you are
                applying for.
                <br />
                <br />● Gather the required documents: Assemble the necessary
                documents, including your passport, photograph, a letter from
                your employer or business sponsor in India, and any other
                supporting documents required for your specific worker visa
                type.
                <br />
                <br />● Complete the online visa application form: You can
                complete the visa application form online at the official
                website of the Ministry of Home Affairs.
                <br />
                <br />● Pay the visa fee: You will need to pay the visa fee
                using a credit card or debit card.
                <br />
                <br />
                ● Submit your application: Submit your completed application,
                along with all required documents, to the nearest Indian embassy
                or consulate.
                <br />
                <br />● Wait for your visa to be processed: The processing time
                for a worker visa to India varies depending on the type of visa
                and the time of year. You should allow sufficient time for your
                visa to be processed before your intended date of travel.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific process for applying
                  for a worker visa to India may vary based on your country of
                  origin. It's always a good idea to check the most up-to-date
                  visa requirements and procedures before planning a trip to
                  India.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of India Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for India,
                including:
                <br />
                <br />
                <span className="font-bold">Employment visas</span>
                : Employment visas are issued to foreign nationals who are
                coming to India to work for a specific employer. They are valid
                for the duration of the employment contract, up to a maximum of
                five years.
                <br />
                <br />
                <span className="font-bold">Business visas</span>
                : Business visas are issued to foreign nationals who are coming
                to India to set up or manage a business, invest in a business,
                or participate in trade fairs or exhibitions. They are valid for
                stays of up to 180 days.
                <br />
                <br />
                <span className="font-bold">Consultant visas</span>
                : Consultant visas are issued to foreign nationals who are
                coming to India to provide professional consulting services.
                They are valid for stays of up to 180 days.
                <br />
                <br />
                <span className="font-bold">Project visas</span>
                : Project visas are issued to foreign nationals who are coming
                to India to work on specific projects. They are valid for the
                duration of the project, up to a maximum of five years.
                <br />
                <br />
                <span className="font-bold">Intern visas</span>
                : Intern visas are issued to foreign nationals who are coming to
                India to intern with a company or organization. They are valid
                for the duration of the internship, up to a maximum of one year.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  conditions for these worker visas may vary based on the type
                  of visa and the nature of the work. It's always a good idea to
                  check the most up-to-date visa requirements and procedures
                  before planning a trip to India.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for India Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to enter India, you will generally
                need to provide the following documents:
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />● A passport that is valid for at least six months from
                the date of arrival in India and has at least two blank pages
                for the visa.
                <br />
                <br />
                ● A recent passport-size photograph.
                <br />
                <br />
                ● A letter from your employer or business sponsor in India,
                outlining the nature of your work and the duration of your stay.
                <br />
                <br />● Supporting documents, such as a copy of your employment
                contract or a letter of invitation from a business in India.
                <br />
                <br />
                Depending on the type of worker visa you are applying for, you
                may need to provide additional documents. For example, if you
                are applying for a business visa, you may need to provide a
                letter of introduction from your company or organization, a
                business plan, or financial documents. If you are applying for a
                consultant visa, you may need to provide a letter of invitation
                from the consulting firm or organization in India.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  procedures for applying for a worker visa in India may vary
                  based on your country of origin and the specific type of visa
                  you are applying for. It's always a good idea to check the
                  most up-to-date visa requirements and procedures before
                  planning a trip to India.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in India?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to enter India, you will need to
                submit your application to the nearest Indian embassy or
                consulate in your country of residence. It's a good idea to
                check the specific requirements and procedures for applying for
                a worker visa at the embassy or consulate where you will be
                submitting your application.
                <br />
                <br />
                You can typically apply for a worker visa at any time, but it's
                important to allow sufficient time for your visa to be processed
                before your intended date of travel. The processing time for a
                worker visa to India varies depending on the type of visa and
                the time of year, so it's a good idea to apply as early as
                possible.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific process for applying
                  for a worker visa to India may vary based on your country of
                  origin. It's always a good idea to check the most up-to-date
                  visa requirements and procedures before planning a trip to
                  India.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in India?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in India, you will generally need to apply
                for a student visa. A student visa allows you to stay in India
                for the duration of your study program, up to a maximum of five
                years.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  procedures for applying for a student visa in India may vary
                  based on your country of origin. It's always a good idea to
                  check the most up-to-date visa requirements and procedures
                  before planning a trip to India.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a India Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to enter India, you will generally
                need to follow these steps:
                <br />
                <br />
                ● Determine your eligibility: Make sure you meet the eligibility
                requirements for a student visa to India. This typically
                includes being accepted to an educational institution in India
                and having the necessary financial resources to support your
                stay.
                <br />
                <br />
                ● Gather the required documents: Assemble the necessary
                documents, including your passport, photograph, acceptance
                letter from the educational institution where you will be
                studying, proof of sufficient funds, and any other supporting
                documents required for your specific visa type.
                <br />
                <br />
                ● Complete the online visa application form: You can complete
                the visa application form online at the official website of the
                Ministry of Home Affairs.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee using a
                credit card or debit card.
                <br />
                <br />
                ● Submit your application: Submit your completed application,
                along with all required documents, to the nearest Indian embassy
                or consulate.
                <br />
                <br />
                ● Wait for your visa to be processed: The processing time for a
                student visa to India varies depending on the time of year. You
                should allow sufficient time for your visa to be processed
                before your intended date of travel.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific process for applying
                  for a student visa to India may vary based on your country of
                  origin. It's always a good idea to check the most up-to-date
                  visa requirements and procedures before planning a trip to
                  India.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                India Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A completed visa application form.
                <br />
                <br />● A passport that is valid for at least six months from
                the date of arrival in India and has at least two blank pages
                for the visa.
                <br />
                <br />● A recent passport-size photograph.
                <br />
                <br />● An acceptance letter from the educational institution
                where you will be studying.
                <br />
                <br />● Proof of sufficient funds to support your stay in India,
                such as bank statements or a letter of sponsorship.
                <br />
                <br />
                ● Supporting documents, such as transcripts or certificates from
                your previous studies.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  procedures for applying for a student visa in India may vary
                  based on your country of origin. It's always a good idea to
                  check the most up-to-date visa requirements and procedures
                  before planning a trip to India.
                </span>
                <br />
                <br />
                In addition to the above documents, you may also be required to
                provide the following:
                <br />
                <br />
                ● A police clearance certificate from your country of residence.
                <br />
                <br />
                ● A medical certificate indicating that you are in good health.
                <br />
                <br />
                ● A letter of permission from your parent or guardian, if you
                are under the age of 18.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to start the visa application process as
                  early as possible to ensure that you have sufficient time to
                  gather all required documents and complete the application
                  process before your intended date of travel.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for India Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A student visa to India is generally valid for the duration of
                your study program, up to a maximum of five years. You will need
                to apply for a new student visa if you change educational
                institutions or if you wish to continue your studies beyond the
                initial five-year period.
                <br />
                <br />
                The price of a student visa to India varies based on your
                country of origin and the duration of your stay. You will need
                to pay a visa fee when you submit your application, which can be
                paid using a credit card or debit card. You may also be required
                to pay a processing fee, which varies depending on the embassy
                or consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and fees
                  for a student visa to India may vary based on your country of
                  origin. It's always a good idea to check the most up-to-date
                  visa requirements and fees before planning a trip to India.
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

export default India;
