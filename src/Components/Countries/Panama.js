import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Panama = () => {
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
        <title>Panama</title>
        <meta name="description" content="Panama" />
        <meta
          name="keywords"
          content="Panama travel visa, Panama work visa, Panama study visa, How to apply for an Panama visa, Panama visa requirements, Panama tourist visa, Panama student visa, Panama business visa, Panama visa processing time, Panama visa application process, Panama visa for Americans, Panama visa for Europeans, Panama visa for Panamans, Panama visa for Canadians, Panama visa for Panamans, Panama visa for Chinese, Panama visa for Africans, Panama visa for Asians, Panama visa for South Americans, Panama visa for Middle Easterners, Panama visa for UK citizens, Panama visa for EU citizens, Panama visa for Schengen area, Panama visa for non-EU citizens, Panama visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Panama
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Panama is a country in Central America, known for its beautiful
              beaches, vibrant culture, and rich history. The country has a long
              and complex history, with roots in the indigenous people of the
              region and the Spanish colonial period. Today, Panama is known for
              its beautiful beaches and coastal resorts, as well as its rich
              natural beauty, with forests, mountains, and rivers that are
              popular with hikers and outdoor enthusiasts. The capital city of
              Panama City is a major cultural and economic hub, with many
              historic landmarks, museums, and cultural institutions. Panama is
              also known for its vibrant music and arts scene, and its rich folk
              traditions that have been preserved and celebrated by generations
              of Panamanians. The country is a popular tourist destination, with
              many visitors coming to experience its beautiful landscapes and
              vibrant culture.
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
                Who can enter Panama without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Panama allows visa-free entry for citizens of certain countries
                for stays of up to 180 days. The specific countries that are
                eligible for visa-free entry to Panama may vary depending on the
                current diplomatic and political relations between Panama and
                those countries.
                <br /> <br /> Currently, citizens of the following countries can
                enter Panama without a visa for stays of up to 180 days:&nbsp;
                <span className="font-bold">
                  Andorra, Argentina, Australia, Austria, Bahamas, Belgium,
                  Brazil, Canada, Chile, Costa Rica, Croatia, Cyprus, Czech
                  Republic, Denmark, Estonia, Finland, France, Germany, Greece,
                  Hong Kong, Hungary, Iceland, Ireland, Israel, Italy, Japan,
                  Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Mexico,
                  Monaco, Netherlands, New Zealand, Norway, Poland, Portugal,
                  Romania, San Marino, Singapore, Slovakia, Slovenia, South
                  Africa, South Korea, Spain, Sweden, Switzerland, Taiwan,
                  Thailand, United Kingdom, United States, Uruguay.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Citizens of other countries may be required to obtain a visa
                  in order to enter Panama. It is advisable to check with the
                  Panamanian embassy or consulate in your country of origin for
                  the most up-to-date information on visa requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Panama Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Panama, you will generally need to
                provide the following documents:
                <br /> <br />
                ● A completed visa application form, which can be obtained from
                a Panamanian embassy or consulate or online.
                <br /> <br />
                ● A valid passport with at least six months of validity
                remaining.
                <br /> <br />
                ● A recent passport-sized photograph. <br /> <br />
                ● Evidence of the purpose of your trip, such as a letter of
                invitation from a host in Panama, a letter from your employer
                stating the purpose of your visit, or a copy of your travel
                itinerary.
                <br /> <br />
                ● Evidence of financial support, such as bank statements or a
                letter from a sponsor.
                <br /> <br />● Any other documents required by the Panamanian
                embassy or consulate, such as a medical certificate or proof of
                insurance.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Panama Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Panama, you will need to follow
                these steps: <br /> <br />
                ● Determine the type of visa you need: There are several types
                of visas available for Panama, including tourist visas, business
                visas, and student visas. Choose the type of visa that best fits
                the purpose of your trip. <br /> <br />
                ● Gather the required documents: Assemble all of the documents
                that are required for your visa application, such as a completed
                application form, a valid passport, and any supporting
                documents, such as a letter of invitation or proof of financial
                support. <br /> <br />
                ● Contact the Panamanian embassy or consulate: Find the nearest
                Panamanian embassy or consulate in your country of origin and
                contact them to schedule an appointment to submit your visa
                application.
                <br /> <br />
                ● Submit your application and pay the fee: At your appointment,
                submit your completed application form and all required
                documents, along with the visa fee. <br /> <br />● Wait for a
                decision: The processing time for a Panamanian visa may vary,
                but you should typically receive a decision within a few weeks.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Panama?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Panama will
                depend on the type of visa you have and the purpose of your
                trip. <br /> <br />●{" "}
                <span className="font-bold">Tourist visas</span>: Tourist visas
                are issued for stays of up to 180 days.
                <br /> <br />● <span className="font-bold">Business visas</span>
                : Business visas are issued for stays of up to 180 days, but may
                be extended for up to one year in some cases.
                <br /> <br />● <span className="font-bold">Student visas</span>:
                Student visas are issued for the duration of your study program,
                up to a maximum of 180 days.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Panama?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A COVID test is not required when arriving in Panama.
                <br /> <br />
                All restrictions or requirements around COVID-19 have been
                lifted. No need to present negative test results, vaccination
                scheme or declaration form. Last update on September 16, 2022.
                It is not necessary to wear masks outdoors or indoors.
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
                Informations about Diplomatic Passport !
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a type of passport that is issued to
                individuals who are employed by a government and are traveling
                on official government business. In Panama, diplomatic passports
                are issued by the Ministry of Foreign Affairs to diplomats,
                consular officials, and other government officials who are
                traveling on official business.
                <br />
                <br />
                Holders of diplomatic passport are generally entitled to certain
                privileges and immunities, including immunity from arrest and
                detention, and exemption from visa requirements in certain
                countries. However, these privileges and immunities may vary
                depending on the country and the specific circumstances.
                <br />
                <br />
                To obtain a diplomatic passport in Panama, one must be a citizen
                of Panama and employed by the government in a position that
                requires international travel on official business.
                Additionally, the applicant must have a letter of recommendation
                from the government agency or organization they work for. The
                Ministry of Foreign Affairs is responsible for issuing the
                passport, and the process usually takes around 4-6 weeks.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the information about diplomatic
                  passport in Panama might have been changed recently, for the
                  most accurate and updated information I suggest you to check
                  the Ministry of Foreign Affairs of Panama website or contact
                  them directly.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Panama?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Panama, you will need to obtain a worker
                visa. The specific requirements for a worker visa in Panama will
                depend on the type of work you will be doing and your country of
                origin.
                <br /> <br /> To apply for a worker visa in Panama, you will
                generally need to provide the following documents:
                <br /> <br />
                ● A completed worker visa application form, which can be
                obtained from a Panamanian embassy or consulate or online.
                <br /> <br />
                ● A valid passport with at least six months of validity
                remaining.
                <br /> <br />
                ● A recent passport-sized photograph. <br /> <br />
                ● A valid work contract, signed by both you and your employer,
                outlining the terms and conditions of your employment in Panama.
                <br /> <br />
                ● A police clearance certificate from your country of origin,
                indicating that you do not have a criminal record.
                <br /> <br />
                ● A medical certificate, indicating that you are in good health
                and do not have any contagious diseases.
                <br /> <br />● Any other documents required by the Panamanian
                embassy or consulate, such as proof of financial support or a
                letter of recommendation from your employer.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Panama Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Panama, you will need to follow
                these steps: <br /> <br />
                ● Determine the type of worker visa you need: There are several
                types of worker visas available in Panama, including temporary
                worker visas and permanent worker visas. Choose the type of visa
                that best fits the purpose of your work in Panama.
                <br /> <br />
                ● Gather the required documents: Assemble all of the documents
                that are required for your worker visa application, such as a
                completed application form, a valid passport, and any supporting
                documents, such as a valid work contract and a police clearance
                certificate.
                <br /> <br />
                ● Contact the Panamanian embassy or consulate: Find the nearest
                Panamanian embassy or consulate in your country of origin and
                contact them to schedule an appointment to submit your worker
                visa application.
                <br /> <br />
                ● Submit your application and pay the fee: At your appointment,
                submit your completed application form and all required
                documents, along with the worker visa fee.
                <br /> <br />● Wait for a decision: The processing time for a
                Panamanian worker visa may vary, but you should typically
                receive a decision within a few weeks.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Panama Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available in Panama,
                including: <br /> <br />●{" "}
                <span className="font-bold">Temporary worker visas</span>:
                Temporary worker visas are issued for a specific period of time,
                typically for the duration of your work contract, and allow you
                to work in Panama for a temporary or seasonal job. <br /> <br />
                ● <span className="font-bold">Permanent worker visas</span>:
                Permanent worker visas are issued for an indefinite period of
                time and allow you to work in Panama indefinitely, as long as
                you maintain your employment and do not engage in any illegal
                activities. <br /> <br />●{" "}
                <span className="font-bold">Investor visas</span>: Investor
                visas are issued to individuals who plan to invest a significant
                amount of money in a business or real estate in Panama. These
                visas may allow you to work in Panama as well.
                <br /> <br />●{" "}
                <span className="font-bold">Self-employed visas</span>:
                Self-employed visas are issued to individuals who plan to work
                for themselves in Panama, such as freelancers or entrepreneurs.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Panama Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Panama, you will generally need to
                provide the following documents: <br /> <br />
                ● A completed worker visa application form, which can be
                obtained from a Panamanian embassy or consulate or online.
                <br /> <br />
                ● A valid passport with at least six months of validity
                remaining.
                <br /> <br />
                ● A recent passport-sized photograph. <br /> <br />
                ● A valid work contract, signed by both you and your employer,
                outlining the terms and conditions of your employment in Panama.
                <br /> <br />
                ● A police clearance certificate from your country of origin,
                indicating that you do not have a criminal record. <br /> <br />
                ● A medical certificate, indicating that you are in good health
                and do not have any contagious diseases.
                <br /> <br />● Any other documents required by the Panamanian
                embassy or consulate, such as proof of financial support or a
                letter of recommendation from your employer.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Panama?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Panama, you will need to contact
                the nearest Panamanian embassy or consulate in your country of
                origin and schedule an appointment to submit your application.
                You should make sure to bring all of the required documents with
                you to your appointment, including a completed worker visa
                application form, a valid passport, and any supporting
                documents, such as a valid work contract and a police clearance
                certificate.
                <br /> <br />
                <span className="font-bold">
                  It is advisable to apply for your worker visa as soon as
                  possible, as the process can take several weeks and you will
                  need to have a valid visa in hand before you can enter Panama.
                  You should also make sure to check with the Panamanian embassy
                  or consulate in your country of origin for the most up-to-date
                  information on the specific requirements and procedures for
                  obtaining a worker visa in Panama.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Panama?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Panama, you will need to obtain a
                student visa. The specific requirements for a student visa in
                Panama will depend on the type of study program you are enrolled
                in and your country of origin.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the process for obtaining a
                  student visa in Panama may vary depending on your country of
                  origin and the specific requirements of your study program. It
                  is advisable to contact the Panamanian embassy or consulate in
                  your country of origin for the most up-to-date information and
                  to confirm the specific requirements for your situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Panama student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Panama, you will need to follow
                these steps: <br /> <br />
                ● Determine the type of student visa you need: There are several
                types of student visas available in Panama, including short-term
                study visas and long-term study visas. Choose the type of visa
                that best fits the duration and purpose of your study program in
                Panama.
                <br /> <br />
                ● Gather the required documents: Assemble all of the documents
                that are required for your student visa application, such as a
                completed application form, a valid passport, and any supporting
                documents, such as a letter of acceptance from your educational
                institution and proof of financial support.
                <br /> <br />
                ● Contact the Panamanian embassy or consulate: Find the nearest
                Panamanian embassy or consulate in your country of origin and
                contact them to schedule an appointment to submit your student
                visa application.
                <br /> <br />
                ● Submit your application and pay the fee: At your appointment,
                submit your completed application form and all required
                documents, along with the student visa fee.
                <br /> <br />● Wait for a decision: The processing time for a
                Panamanian student visa may vary, but you should typically
                receive a decision within a few weeks.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Panama student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Panama, you will generally need
                to provide the following documents:
                <br /> <br />
                ● A completed student visa application form, which can be
                obtained from a Panamanian embassy or consulate or online.
                <br /> <br />
                ● A valid passport with at least six months of validity
                remaining.
                <br /> <br />
                ● A recent passport-sized photograph. <br /> <br />
                ● A letter of acceptance from the educational institution in
                Panama where you will be studying, indicating that you have been
                accepted into the program.
                <br /> <br />
                ● Proof of financial support, such as bank statements or a
                letter from a sponsor.
                <br /> <br />
                ● A police clearance certificate from your country of origin,
                indicating that you do not have a criminal record.
                <br /> <br />
                ● A medical certificate, indicating that you are in good health
                and do not have any contagious diseases.
                <br /> <br />● Any other documents required by the Panamanian
                embassy or consulate, such as transcripts or proof of insurance.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Panama student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a Panama student visa will depend on
                the type of student visa you are seeking and your country of
                origin.
                <br /> <br />{" "}
                <span className="font-bold">Short-term student visas</span>:
                Short-term student visas are issued for stays of up to 180 days
                and may be valid for a single entry or multiple entries. The
                price of a short-term student visa may vary depending on your
                country of origin.
                <br /> <br />
                <span className="font-bold">Long-term student visas</span>:
                Long-term student visas are issued for stays of more than 180
                days and are typically valid for multiple entries. The price of
                a long-term student visa may vary depending on your country of
                origin.
              </p>
            </Container>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Panama;
