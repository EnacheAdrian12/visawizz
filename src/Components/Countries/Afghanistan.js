import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Afghanistan = () => {
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
        <title>Afghanistan</title>
        <meta name="description" content="Afganistan" />
        <meta
          name="keywords"
          content="Afghanistan travel visa, Afghanistan work visa, Afghanistan study visa, How to apply for an Afghanistan visa, Afghanistan visa requirements, Afghanistan tourist visa, Afghanistan student visa, Afghanistan business visa, Afghanistan visa processing time, Afghanistan visa application process, Afghanistan visa for Americans, Afghanistan visa for Europeans, Afghanistan visa for Australians, Afghanistan visa for Canadians, Afghanistan visa for Indians, Afghanistan visa for Chinese, Afghanistan visa for Africans, Afghanistan visa for Asians, Afghanistan visa for South Americans, Afghanistan visa for Middle Easterners, Afghanistan visa for UK citizens, Afghanistan visa for EU citizens, Afghanistan visa for Schengen area, Afghanistan visa for non-EU citizens, Afghanistan visa fees and charges"
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold md:pt-[16rem] md:text-[3.4rem]">
            Afghanistan
          </h1>
          <Col>
            <p className="text-[1.6rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Afghanistan is well known for its beautiful landscapes, including
              the Hindu Kush mountain range and the desert region known as the
              Dasht-e Margo. It is also known for its rich culture and history,
              including its art, music, and literature. Additionally,
              Afghanistan is known for its production of high-quality opium,
              which is used to make drugs such as heroin.
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
                Who can enter Afghanistan without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of a few countries, including India and Indonesia, can
                enter Afghanistan without a visa for stays of up to 90 days. All
                other foreign nationals must have a visa to enter Afghanistan.
                Requirements for a visa vary based on citizenship and the
                purpose of the visit. A visa can be obtained through an Afghan
                embassy or consulate by providing a passport, a completed visa
                application, and possibly other documents, as well as paying a
                fee.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Afghanistan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Afghanistan, you will need to provide the
                following documents: <br />
                <br />● A valid passport with at least six months of remaining
                validity and at least one blank page for the visa.
                <br />
                <br />● A completed visa application form, which can be obtained
                from the Afghan embassy or consulate where you are applying.
                <br />
                <br />● A passport-sized photograph.
                <br />
                <br />● Supporting documents, such as a letter of invitation
                from an Afghan host or organization, a copy of your round-trip
                ticket, and evidence of sufficient funds for your stay.
                <br />
                <br />● Any other documents that may be required based on the
                purpose of your visit, such as a letter from your employer or a
                letter of support from a sponsoring organization.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a visa to Afghanistan may vary depending on the
                  country you are a citizen of and the purpose of your visit. It
                  is always best to check with the Afghan embassy or consulate
                  in your home country for the most up-to-date information on
                  visa requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Afghanistan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Afghanistan, you will need to follow
                these steps: <br />
                <br />● Determine the purpose of your visit to Afghanistan and
                gather all necessary documentation to support your application.
                This may include a letter of invitation from an Afghan host or
                organization, a copy of your round-trip ticket, and evidence of
                sufficient funds for your stay.
                <br />
                <br />● Contact the Afghan embassy or consulate in your home
                country to obtain the most up-to-date information on visa
                requirements and to schedule an appointment to submit your
                application.
                <br />
                <br />● Fill out a visa application form, which can be obtained
                from the Afghan embassy or consulate where you are applying.
                Make sure to complete the form accurately and legibly, as any
                errors or discrepancies may delay the processing of your
                application.
                <br />
                <br />● Gather all required documents, including your valid
                passport, a passport-sized photograph, and any supporting
                documents.
                <br />
                <br />● Attend your appointment at the Afghan embassy or
                consulate and submit your application in person, along with all
                required documents and any applicable fees.
                <br />
                <br />● Wait for your application to be processed. Processing
                times may vary depending on the embassy or consulate and the
                volume of applications they are receiving.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  procedures for applying for a visa to Afghanistan may vary
                  depending on the country you are a citizen of and the purpose
                  of your visit. It is always best to check with the Afghan
                  embassy or consulate in your home country for the most
                  up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Afghanistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Afghanistan
                depends on the type of visa you have obtained and the purpose of
                your visit.
                <br />
                <br />
                If you are a citizen of one of the countries that are allowed to
                enter Afghanistan without a visa for stays of up to 90 days, you
                will be allowed to stay in Afghanistan for up to 90 days within
                a 180-day period.
                <br />
                <br />
                <span className="font-bold">
                  If you have obtained a tourist visa
                </span>
                , you will typically be allowed to stay in Afghanistan for up to
                30 days, although the specific length of time may vary depending
                on the embassy or consulate that issued your visa.
                <br />
                <br />
                <span className="font-bold">
                  If you have obtained a business visa
                </span>
                , you will typically be allowed to stay in Afghanistan for the
                duration of your business activities, up to a maximum of 90
                days.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of time you are
                  allowed to stay in Afghanistan may be subject to change, and
                  it is always best to check with the Afghan embassy or
                  consulate in your home country for the most up-to-date
                  information on visa requirements and restrictions.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Afghanistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Afghanistan has been dealing with the ongoing COVID-19 pandemic,
                and there are likely to be restrictions in place to prevent the
                spread of the virus. These restrictions may include measures
                such as mandatory mask-wearing in public spaces, social
                distancing, and limits on gatherings. <br />
                <br />
                It is important to note that the situation in Afghanistan can
                change rapidly, and the specific restrictions in place may vary
                depending on the region you are in and the level of virus
                transmission. <br />
                <br />
                Before traveling to Afghanistan, it is recommended to check the
                latest information on COVID-19 restrictions and guidelines in
                place in the country, as well as the latest travel advisories
                from your government. It is also important to follow all health
                and safety guidelines and to take precautions such as wearing a
                mask and washing your hands frequently to protect yourself and
                others from the virus.
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
                A diplomatic passport is a type of passport that is issued to
                diplomats and other government officials who are traveling
                abroad on official business. In Afghanistan, diplomatic
                passports are issued by the Ministry of Foreign Affairs to
                Afghan diplomats and other officials who are accredited to
                represent the Afghan government abroad. <br />
                <br />
                Diplomatic passports are generally valid for a period of five
                years and are issued to individuals who are traveling abroad on
                official business, such as attending international conferences,
                negotiating treaties, or representing the Afghan government in
                diplomatic or consular missions. <br />
                <br />
                Holders of diplomatic passports are generally entitled to a
                number of privileges and immunities while traveling abroad,
                including exemption from visa requirements and customs duties,
                as well as diplomatic immunity in certain cases. <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific privileges and
                  immunities granted to holders of diplomatic passports may vary
                  depending on the country they are traveling to and the terms
                  of the host country's diplomatic relations with Afghanistan.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Afghanistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa in Afghanistan depends on
                the specific circumstances of your employment and your
                citizenship. <br />
                <br />
                If you are a citizen of Afghanistan and you are seeking
                employment in Afghanistan, you generally do not need a worker
                visa, as long as you are able to obtain the necessary work
                permit. To work in Afghanistan, you will need to apply for a
                work permit through the Afghan Ministry of Labor and Social
                Affairs. <br />
                <br />
                If you are a foreign national seeking employment in Afghanistan,
                you will typically need to obtain a worker visa in order to work
                in the country. The specific requirements for obtaining a worker
                visa in Afghanistan will depend on the type of work you will be
                doing and your citizenship. In general, you will need to apply
                for a worker visa through the Afghan embassy or consulate in
                your home country and provide documentation such as a valid
                passport, a completed visa application form, and possibly other
                supporting documents. You may also need to pay a visa fee.{" "}
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Afghanistan may vary depending on the country
                  you are a citizen of and the specific terms of your
                  employment. It is always best to check with the Afghan embassy
                  or consulate in your home country for the most up-to-date
                  information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Afghanistan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to Afghanistan, you will need to
                follow these steps: <br />
                <br />
                ● Determine the specific type of work you will be doing in
                Afghanistan and gather all necessary documentation to support
                your application. This may include a letter of employment from
                your employer, proof of your qualifications and experience, and
                any other documents required for your specific type of work.
                <br />
                <br />● Contact the Afghan embassy or consulate in your home
                country to obtain the most up-to-date information on worker visa
                requirements and to schedule an appointment to submit your
                application.
                <br />
                <br />● Fill out a worker visa application form, which can be
                obtained from the Afghan embassy or consulate where you are
                applying. Make sure to complete the form accurately and legibly,
                as any errors or discrepancies may delay the processing of your
                application.
                <br />
                <br />● Gather all required documents, including your valid
                passport, a passport-sized photograph, and any supporting
                documents.
                <br />
                <br />● Attend your appointment at the Afghan embassy or
                consulate and submit your application in person, along with all
                required documents and any applicable fees.
                <br />
                <br />● Wait for your application to be processed. Processing
                times may vary depending on the embassy or consulate and the
                volume of applications they are receiving.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  procedures for applying for a worker visa to Afghanistan may
                  vary depending on the country you are a citizen of and the
                  specific terms of your employment. It is always best to check
                  with the Afghan embassy or consulate in your home country for
                  the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Afghanistan Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Afghanistan, foreign nationals who wish to work in the
                country will typically need to obtain a worker visa. The worker
                visa is a type of long-term visa that allows foreign nationals
                to enter Afghanistan for the purpose of working. To apply for a
                worker visa, you will typically need to have a job offer from an
                Afghan employer and be able to provide evidence of your
                employment, such as a contract or a letter from your employer.
                <br />
                <br />
                In addition to a worker visa, you may also need to obtain a work
                permit in order to legally work in Afghanistan. The work permit
                is a document issued by the Afghan government that allows you to
                work in the country for a specific employer and in a specific
                occupation. To obtain a work permit, you will typically need to
                have a valid worker visa and provide evidence of your
                employment, such as a contract or a letter from your employer.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the rules and regulations
                  regarding worker visas and work permits in Afghanistan may
                  vary depending on your country of origin and the specific
                  terms of your employment. It's always a good idea to check the
                  latest information with the Afghan embassy or consulate in
                  your country and with the Afghan Ministry of Labor before
                  making any travel or work plans.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Afghanistan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Afghanistan, you will typically
                need to provide the following documents:
                <br />
                <br />● A valid passport with at least six months of remaining
                validity and at least one blank page for the visa.
                <br />
                <br />● A completed worker visa application form, which can be
                obtained from the Afghan embassy or consulate where you are
                applying.
                <br />
                <br />● A passport-sized photograph.
                <br />
                <br />● A letter of employment from your employer in
                Afghanistan, stating the terms of your employment and the
                specific type of work you will be doing.
                <br />
                <br />● Proof of your qualifications and experience, such as a
                resume or CV.
                <br />
                <br />● Any other documents that may be required based on the
                specific terms of your employment and the type of work you will
                be doing, such as a business plan or evidence of financial
                resources.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a worker visa in Afghanistan may vary depending on
                  the country you are a citizen of and the specific terms of
                  your employment. It is always best to check with the Afghan
                  embassy or consulate in your home country for the most
                  up-to-date information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Afghanistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Afghanistan, you will need to
                submit your application to the Afghan embassy or consulate in
                your home country. You will need to schedule an appointment to
                submit your application in person, along with all required
                documents and any applicable fees.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  procedures for applying for a worker visa in Afghanistan may
                  vary depending on the country you are a citizen of and the
                  specific terms of your employment. It is always best to check
                  with the Afghan embassy or consulate in your home country for
                  the most up-to-date information on visa requirements and the
                  process for applying for a worker visa.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  You should also keep in mind that it may take several weeks or
                  longer for your application to be processed, so it is
                  important to allow enough time for your application to be
                  reviewed and for your visa to be issued before your planned
                  travel date. It is recommended to start the process of
                  applying for a worker visa as early as possible to ensure that
                  you have sufficient time to obtain the necessary documents and
                  complete the application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Afghanistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, you will typically need a visa to study in Afghanistan. The
                specific requirements for obtaining a student visa in
                Afghanistan will depend on the type of study program you are
                enrolling in and your citizenship.
                <br />
                <br /> To apply for a student visa in Afghanistan, you will
                typically need to provide the following documents:
                <br />
                <br />● A valid passport with at least six months of remaining
                validity and at least one blank page for the visa.
                <br />
                <br />● A completed student visa application form, which can be
                obtained from the Afghan embassy or consulate where you are
                applying.
                <br />
                <br />● A passport-sized photograph.
                <br />
                <br />● Acceptance letter from the educational institution in
                Afghanistan where you will be studying.
                <br />
                <br />● Evidence of sufficient financial resources to cover your
                living expenses and tuition fees while in Afghanistan.
                <br />
                <br />● Any other documents that may be required based on the
                specific terms of your study program and your citizenship.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a student visa in Afghanistan may vary depending on
                  the country you are a citizen of and the specific terms of
                  your study program. It is always best to check with the Afghan
                  embassy or consulate in your home country for the most
                  up-to-date information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Afghanistan Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Afghanistan, you will need to
                follow these steps:
                <br />
                <br />● Determine the type of study program you will be
                enrolling in and gather all necessary documentation to support
                your application. This may include an acceptance letter from the
                educational institution in Afghanistan where you will be
                studying, evidence of sufficient financial resources to cover
                your living expenses and tuition fees, and any other documents
                required for your specific type of study program.
                <br />
                <br />● Contact the Afghan embassy or consulate in your home
                country to obtain the most up-to-date information on student
                visa requirements and to schedule an appointment to submit your
                application.
                <br />
                <br />● Fill out a student visa application form, which can be
                obtained from the Afghan embassy or consulate where you are
                applying. Make sure to complete the form accurately and legibly,
                as any errors or discrepancies may delay the processing of your
                application.
                <br />
                <br />● Gather all required documents, including your valid
                passport, a passport-sized photograph, and any supporting
                documents.
                <br />
                <br />● Attend your appointment at the Afghan embassy or
                consulate and submit your application in person, along with all
                required documents and any applicable fees.
                <br />
                <br />● Wait for your application to be processed. Processing
                times may vary depending on the embassy or consulate and the
                volume of applications they are receiving.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  procedures for applying for a student visa in Afghanistan may
                  vary depending on the country you are a citizen of and the
                  specific terms of your study program. It is always best to
                  check with the Afghan embassy or consulate
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Afghanistan student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A valid passport with at least six months of remaining
                validity and at least one blank page for the visa.
                <br />
                <br />● A completed student visa application form, which can be
                obtained from the Afghan embassy or consulate where you are
                applying.
                <br />
                <br />● A passport-sized photograph.
                <br />
                <br />● An acceptance letter from the educational institution in
                Afghanistan where you will be studying, stating the terms of
                your enrollment and the specific type of study program you will
                be participating in.
                <br />
                <br />● Evidence of sufficient financial resources to cover your
                living expenses and tuition fees while in Afghanistan, such as
                bank statements or a letter of support from a sponsor.
                <br />
                <br />● Any other documents that may be required based on the
                specific terms of your study program and your citizenship, such
                as transcripts or test scores.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Afghanistan student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Afghanistan will
                depend on the specific terms of your study program and the
                country you are a citizen of.
                <br />
                <br /> In general, student visas in Afghanistan are typically
                valid for the duration of your study program, up to a maximum of
                one year. However, the specific length of time that your student
                visa is valid for may vary depending on the terms of your
                enrollment and the specific type of study program you are
                participating in.
                <br />
                <br /> The price of a student visa in Afghanistan will also vary
                depending on the country you are a citizen of and the specific
                terms of your study program. Student visa fees are typically
                paid at the time you submit your application and may be paid in
                cash or by credit card, depending on the embassy or consulate
                where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the validity and price of a
                  student visa in Afghanistan may be subject to change, and it
                  is always best to check with the Afghan embassy or consulate
                  in your home country for the most up-to-date information on
                  visa fees and requirements.
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

export default Afghanistan;
