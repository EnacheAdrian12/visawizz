import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const UnitedStatesOfAmerica = () => {
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
        <title>United States of America</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="United States of America travel visa, United States of America work visa, United States of America study visa, How to apply for an United States of America visa, United States of America visa requirements, United States of America tourist visa, United States of America student visa, United States of America business visa, United States of America visa processing time, United States of America visa application process, United States of America visa for Americans, United States of America visa for Europeans, United States of America visa for Sudanns, United States of America visa for Canadians, United States of America visa for Sudanns, United States of America visa for Chinese, United States of America visa for Africans, United States of America visa for Asians, United States of America visa for South Americans, United States of America visa for Middle Easterners, United States of America visa for UK citizens, United States of America visa for EU citizens, United States of America visa for Schengen area, United States of America visa for non-EU citizens, United States of America visa fees and charges"
    
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            United States of America
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              The United States of America, commonly known as the United States
              or America, is a large country located in North America. It is
              known for its diverse culture and its democratic system of
              government. The United States is known for its many landmarks and
              attractions, including the Grand Canyon, the Statue of Liberty,
              and the Golden Gate Bridge. It is also known for its strong
              economy and its leadership in technology and innovation.
              Additionally, the United States is known for its vast natural
              beauty, with many national parks and protected areas.
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
                Who can enter United States of America without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter the United
                States without a visa for short stays (90 days or less) for
                purposes such as tourism, business, or transit. This is known as
                the Visa Waiver Program (VWP).
                <br />
                <br />
                To be eligible for the VWP, travelers must have a passport that
                is valid for at least six months beyond their intended stay in
                the United States, and they must have a round-trip ticket to a
                country other than the United States. In addition, travelers
                must be able to demonstrate that they have sufficient funds to
                support themselves during their stay in the United States, and
                they must not have a criminal record or other disqualifying
                factors.
                <br />
                <br />
                The following countries are currently participating in the Visa
                Waiver Program:
                <br />
                <br />
                <span className="font-bold">
                  Andorra, Australia, Austria, Belgium, Brunei, Chile, Czech
                  Republic, Denmark, Estonia, Finland, France, Germany, Greece,
                  Hungary, Iceland, Ireland, Italy, Japan, Latvia,
                  Liechtenstein, Lithuania, Luxembourg, Malta, Monaco,
                  Netherlands, New Zealand, Norway, Poland, Portugal, San
                  Marino, Singapore, Slovakia, Slovenia, South Korea, Spain,
                  Sweden, Switzerland, Taiwan.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a current list of countries
                  participating in the Visa Waiver Program as of 2021. The list
                  may change over time, so it is always best to check the latest
                  information with the United States embassy or consulate in
                  your country of residence.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for United States of America
                Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to the United States, you will need to
                provide the following documents:
                <br />
                <br />
                ● A completed visa application form: You can download the visa
                application form (DS-160) from the website of the United States
                embassy or consulate where you will be applying. Carefully
                complete the form, making sure to provide all of the required
                information.
                <br />
                <br />
                ● A passport: Your passport must be valid for at least six
                months beyond the date of your intended stay in the United
                States, and it must have at least two blank pages for visa
                stamps.
                <br />
                <br />
                ● A passport-size photograph: You will need to provide a recent
                passport-size photograph that meets the requirements for visa
                photographs.
                <br />
                <br />
                ● Supporting documents: Depending on the type of visa you are
                applying for, you may need to provide additional supporting
                documents, such as a letter of invitation, evidence of
                sufficient funds, evidence of ties to your home country, and
                proof of your intended purpose of travel.
                <br />
                <br />
                ● Payment of the visa fee: You will need to pay the visa fee at
                the time of your application. The visa fee varies depending on
                the type of visa you are applying for and the embassy or
                consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general requirements for a visa
                  to the United States. The specific documents that you need to
                  provide may vary depending on the type of visa you are
                  applying for and the embassy or consulate where you are
                  applying. It is always best to check the latest visa
                  requirements with the United States embassy or consulate where
                  you will be applying.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United States of America Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to the United States, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine the type of visa you need: The United States offers
                several different types of visas, including tourist visas,
                business visas, work visas, and student visas. You will need to
                determine which type of visa is appropriate for your purpose of
                travel.
                <br />
                <br />
                ● Gather the required documents: Once you know what type of visa
                you need, you can begin gathering the necessary documents. This
                may include your passport, a completed visa application form, a
                passport-size photograph, and any supporting documents that are
                required for your specific type of visa.
                <br />
                <br />
                ● Schedule an appointment: Contact the United States embassy or
                consulate where you will be applying to schedule an appointment
                to submit your visa application.
                <br />
                <br />● Attend your appointment: On the day of your appointment,
                bring your completed application form and all of the required
                documents to the embassy or consulate. You will also need to pay
                the visa fee at this time.
                <br />
                <br />
                ● Wait for a decision: After you have submitted your
                application, you will need to wait for a decision to be made on
                your visa. This process can take several weeks, so it is
                important to plan ahead and apply for your visa well in advance
                of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general steps for applying for
                  a visa to the United States. The specific process may vary
                  depending on the embassy or consulate where you are applying
                  and the type of visa you are applying for. It is always best
                  to check the latest visa requirements with the United States
                  embassy or consulate where you will be applying.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in United States of America?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in the United States depends on
                the type of visa you have and the purpose of your trip.
                <br />
                <br />
                If you have a <span className="font-bold">
                  tourist visa
                </span>{" "}
                (B-2 visa), you can stay in the United States for up to six
                months. However, the actual length of your stay will be
                determined by the immigration officer at the port of entry, and
                it may be shorter than six months.
                <br />
                <br />
                If you have a <span className="font-bold">
                  business visa
                </span>{" "}
                (B-1 visa), you can stay in the United States for up to six
                months. However, the actual length of your stay will be
                determined by the immigration officer at the port of entry, and
                it may be shorter than six months.
                <br />
                <br />
                If you have a <span className="font-bold">work visa</span>, the
                length of your stay in the United States will depend on the type
                of work visa you have and the length of your employment
                contract.
                <br />
                <br />
                If you have a <span className="font-bold">
                  student visa
                </span>{" "}
                (F-1 visa), the length of your stay in the United States will
                depend on the length of your studies. Student visas are
                typically valid for the duration of your studies, up to a
                maximum of five years.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general guidelines for the length
                  of stay in the United States. The actual length of your stay
                  may vary depending on the specific circumstances of your trip
                  and the discretion of the immigration officer at the port of
                  entry. It is always best to check the latest information with
                  the United States embassy or consulate in your country of
                  residence.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in United States of America?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                All non-U.S. citizen, non-U.S. immigrants traveling to the
                United States by air are required to show proof of being fully
                vaccinated against COVID-19. Only limited exceptions apply.
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
                diplomats and other officials who are traveling on official
                business on behalf of their government. Diplomatic passports are
                issued to individuals who represent their country abroad and who
                have diplomatic immunity, which means that they are not subject
                to arrest or detention in the countries where they are
                accredited.
                <br />
                <br />
                In the United States, diplomatic passports are issued by the
                Department of State to individuals who are accredited as
                diplomats or officials of the United States government.
                Diplomatic passports are valid for a period of five years and
                may be renewed.
                <br />
                <br />
                Diplomatic passports are distinct from regular passports in that
                they have a special cover and are stamped with the word
                "Diplomatic." They are also issued with a special visa that
                allows the holder to enter the United States for official
                business.
                <br />
                <br />
                <span className="font-bold">
                  Please note that only individuals who are accredited as
                  diplomats or officials of the United States government are
                  eligible for a diplomatic passport. If you are not a diplomat
                  or an official of the United States government, you will not
                  be eligible for a diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in United States of America?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are not a citizen or permanent resident of the United
                States and you wish to work in the United States, you will
                generally need to obtain a worker visa. There are several
                different types of worker visas available, depending on the type
                of work you will be doing and the length of your stay in the
                United States.
                <br />
                <br />
                To apply for a worker visa in the United States, you will need
                to have a job offer from a U.S. employer, and your employer will
                need to sponsor you for a worker visa. The specific type of
                worker visa you will need will depend on the nature of your job
                and the length of your stay in the United States.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are just a few examples of the types of
                  worker visas that are available in the United States. There
                  are many other types of worker visas available, and the
                  specific requirements and procedures for obtaining a worker
                  visa can vary depending on the type of visa you are applying
                  for. It is always best to check the latest information with
                  the United States embassy or consulate in your country of
                  residence.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United States of America Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in the United States, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need: The United States
                offers several different types of worker visas, including H-1B
                visas for specialty occupations, L visas for workers
                transferring within a company, and O visas for workers with
                extraordinary ability. You will need to determine which type of
                worker visa is appropriate for your situation.
                <br />
                <br />
                ● Find a job: To apply for a worker visa, you will need to have
                a job offer from a U.S. employer. Your employer will need to
                sponsor you for a worker visa and provide you with a job offer
                letter.
                <br />
                <br />
                ● Gather the required documents: To apply for a worker visa, you
                will need to provide certain documents, such as a passport, a
                completed visa application form, passport-size photographs, and
                evidence of your qualifications and experience. You may also
                need to provide additional documents, such as a police clearance
                certificate and a medical examination report.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee at the
                time of your application. The visa fee varies depending on the
                type of worker visa you are applying for and the embassy or
                consulate where you are applying.
                <br />
                <br />
                ● Schedule an appointment: Contact the United States embassy or
                consulate where you will be applying to schedule an appointment
                to submit your worker visa application.
                <br />
                <br />
                ● Attend your appointment: On the day of your appointment, bring
                your completed application form and all of the required
                documents to the embassy or consulate. You will also need to
                bring any supporting documents, such as your job offer letter
                and evidence of your qualifications and experience.
                <br />
                <br />
                ● Wait for a decision: After you have submitted your
                application, you will need to wait for a decision to be made on
                your visa. This process can take several weeks, so it is
                important to plan ahead and apply for your visa well in advance
                of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general steps for applying for
                  a United States worker visa. The specific process may vary
                  depending on the embassy or consulate where you are applying.
                  It is always best to check the latest visa requirements with
                  the United States embassy or consulate where you will be
                  applying.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of United States of America Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several different types of worker visas available in
                the United States, depending on the type of work you will be
                doing and the length of your stay in the United States. Some
                common types of worker visas include:
                <br />
                <br />
                <span className="font-bold">H-1B visa</span>
                : This is a nonimmigrant visa for workers in specialty
                occupations, such as scientists, engineers, and IT
                professionals. To be eligible for an H-1B visa, you must have a
                job offer from a U.S. employer, and you must have a bachelor's
                degree or higher in a related field.
                <br />
                <br />
                <span className="font-bold">L visa</span>
                : This is a nonimmigrant visa for workers who are transferring
                to a U.S. branch, subsidiary, or affiliate of their company. To
                be eligible for an L visa, you must have been working for your
                company for at least one year in the last three years, and you
                must have a job offer from a U.S. branch, subsidiary, or
                affiliate of your company.
                <br />
                <br />
                <span className="font-bold">O visa</span>
                : This is a nonimmigrant visa for workers with extraordinary
                ability or achievement in their field. To be eligible for an O
                visa, you must be able to demonstrate exceptional ability in
                your field, such as through awards, publications, or membership
                in professional organizations.
                <br />
                <br />
                <span className="font-bold">TN visa</span>: This is a
                nonimmigrant visa for Canadian and Mexican citizens who are
                coming to the United States to work in certain professional
                occupations. To be eligible for a TN visa, you must have a job
                offer from a U.S. employer, and you must have the appropriate
                education or work experience for the position.
                <br />
                <br />
                <span className="font-bold">E-3 visa</span>: This is a
                nonimmigrant visa for Australian citizens who are coming to the
                United States to work in certain professional occupations. To be
                eligible for an E-3 visa, you must have a job offer from a U.S.
                employer, and you must have the appropriate education or work
                experience for the position.
                <br />
                <br />
                <span className="font-bold">Green card</span>: This is a
                permanent resident visa that allows you to work and live in the
                United States on a permanent basis. To be eligible for a green
                card, you must have a job offer from a U.S. employer, and you
                must meet the eligibility requirements for the specific category
                of green card that you are applying for.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for United States of America Worker
                Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in the United States, you will need
                to provide the following documents:
                <br />
                <br />
                ● A completed visa application form: You can download the visa
                application form (DS-160) from the website of the United States
                embassy or consulate where you will be applying. Carefully
                complete the form, making sure to provide all of the required
                information.
                <br />
                <br />
                ● A passport: Your passport must be valid for at least six
                months beyond the date of your intended stay in the United
                States, and it must have at least two blank pages for visa
                stamps.
                <br />
                <br />
                ● A passport-size photograph: You will need to provide a recent
                passport-size photograph that meets the requirements for visa
                photographs.
                <br />
                <br />
                ● A job offer letter: You will need to provide a letter from
                your U.S. employer offering you a job and stating the terms of
                your employment.
                <br />
                <br />
                ● Evidence of your qualifications and experience: You will need
                to provide documentation of your education and work experience,
                such as transcripts, degrees, certificates, and letters of
                recommendation.
                <br />
                <br />
                ● Additional documents: Depending on the type of worker visa you
                are applying for, you may need to provide additional documents,
                such as a police clearance certificate, a medical examination
                report, or evidence of your relationship to your employer.
                <br />
                <br />● Payment of the visa fee: You will need to pay the visa
                fee at the time of your application. The visa fee varies
                depending on the type of worker visa you are applying for and
                the embassy or consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general documents that you will
                  need to provide when applying for a worker visa in the United
                  States. The specific documents that you need to provide may
                  vary depending on the type of worker visa you are applying for
                  and the embassy or consulate where you are applying. It is
                  always best to check the latest visa requirements with the
                  United States embassy or consulate where you will be applying.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in United States of
                America?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in the United States, you will need
                to schedule an appointment at the United States embassy or
                consulate in your country of residence. It is generally best to
                apply for your worker visa as soon as you have a job offer from
                a U.S. employer, as the visa process can take several weeks or
                even months.
                <br />
                <br />
                You should contact the United States embassy or consulate in
                your country of residence to schedule an appointment to apply
                for your worker visa. You will need to bring your completed
                application form and all of the required documents to your
                appointment. You will also need to pay the visa fee at the time
                of your appointment.
                <br />
                <br />
                You should schedule your appointment well in advance of your
                planned travel date to allow enough time for the visa process to
                be completed. It is generally recommended to apply for your
                worker visa at least three months before your planned travel
                date. However, the actual processing time can vary depending on
                the embassy or consulate where you are applying and the type of
                worker visa you are applying for.
                <br />
                <br />
                <span className="font-bold">
                  Please note that you can only apply for a worker visa at the
                  United States embassy or consulate in your country of
                  residence. If you are currently in the United States, you will
                  not be able to apply for a worker visa from within the United
                  States. You will need to return to your country of residence
                  to apply for a worker visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in United States of America?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are not a citizen or permanent resident of the United
                States and you wish to study in the United States, you will
                generally need to obtain a student visa. There are several
                different types of student visas available, depending on the
                level of study you will be pursuing and the length of your stay
                in the United States.
                <br />
                <br />
                To apply for a student visa in the United States, you will need
                to be accepted into a U.S. school or university, and you will
                need to have a valid Form I-20 from your school. The Form I-20
                is a certificate of eligibility for nonimmigrant student status
                that is issued by the school you will be attending.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are just a few examples of the types of
                  student visas that are available in the United States. There
                  are many other types of student visas available, and the
                  specific requirements and procedures for obtaining a student
                  visa can vary depending on the type of visa you are applying
                  for. It is always best to check the latest information with
                  the United States embassy or consulate in your country of
                  residence.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United States of America Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in the United States, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine the type of student visa you need: The United States
                offers several different types of student visas, including F-1
                visas for academic studies, M-1 visas for vocational studies,
                and J-1 visas for exchange programs. You will need to determine
                which type of student visa is appropriate for your situation.
                <br />
                <br />
                ● Apply to a U.S. school or university: To apply for a student
                visa, you will need to be accepted into a U.S. school or
                university. You will need to follow the application process for
                the school you are interested in attending, and you will need to
                provide transcripts, test scores, and other documents as
                required by the school.
                <br />
                <br />
                ● Obtain a Form I-20: Once you have been accepted into a U.S.
                school, you will need to obtain a Form I-20 from your school.
                The Form I-20 is a certificate of eligibility for nonimmigrant
                student status that is issued by the school you will be
                attending. You will need to provide the Form I-20 when you apply
                for your student visa.
                <br />
                <br />
                ● Gather the required documents: To apply for a student visa,
                you will need to provide certain documents, such as a passport,
                a completed visa application form, passport-size photographs,
                and the Form I-20 from your school. You may also need to provide
                additional documents, such as transcripts, test scores, and a
                police clearance certificate.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee at the
                time of your application. The visa fee varies depending on the
                type of student visa you are applying for and the embassy or
                consulate where you are applying.
                <br />
                <br />
                ● Schedule an appointment: Contact the United States embassy or
                consulate where you will be applying to schedule an appointment
                to submit your student visa application.
                <br />
                <br />
                ● Attend your appointment: On the day of your appointment, bring
                your completed application form and all of the required
                documents to the embassy or consulate. You will also need to
                bring any supporting documents, such as transcripts, test
                scores, and the Form I-20 from your school.
                <br />
                <br />● Wait for a decision: After you have submitted your
                application, you will need to wait for a decision to be made on
                your student visa. This process can take several weeks or even
                months, depending on the embassy or consulate where you are
                applying and the type of student visa you are applying for.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                United States of America Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in the United States, you will
                need to meet the following requirements:
                <br />
                <br />
                ● Acceptance into a U.S. school or university: You will need to
                be accepted into a U.S. school or university that is approved by
                the Student and Exchange Visitor Program (SEVP). You will need
                to follow the application process for the school you are
                interested in attending, and you will need to provide
                transcripts, test scores, and other documents as required by the
                school.
                <br />
                <br />
                ● Adequate financial resources: You will need to show that you
                have sufficient financial resources to support yourself while
                you are studying in the United States. This may include proof of
                scholarships, grants, or other financial aid, as well as
                evidence of your own personal funds or funds from your family or
                other sponsors.
                <br />
                <br />
                ● English language proficiency: You will need to show that you
                have sufficient English language proficiency to be able to
                succeed in your studies in the United States. This may include a
                score on an English language proficiency test, such as the TOEFL
                or IELTS.
                <br />
                <br />
                ● Good moral character: You will need to show that you are a
                person of good moral character. This may be demonstrated through
                police clearance certificates or other evidence of your
                background and conduct.
                <br />
                <br />
                ● Nonimmigrant intent: You will need to show that you have
                nonimmigrant intent, which means that you intend to return to
                your home country after you complete your studies in the United
                States.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general requirements for a
                  student visa in the United States. The specific requirements
                  may vary depending on the type of student visa you are
                  applying for and the embassy or consulate where you are
                  applying. It is always best to check the latest visa
                  requirements with the United States embassy or consulate in
                  your country of residence.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for United States of America Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa in the United States depends on
                the type of student visa you are issued and the length of your
                program of study.
                <br />
                <br />
                For example, if you are issued an F-1 student visa, the visa
                will generally be valid for the duration of your program of
                study, plus a grace period of 60 days. This means that you can
                use your F-1 visa to enter the United States up to 30 days
                before the start of your program, and you can stay in the United
                States for up to 60 days after the completion of your program to
                prepare for your departure or transfer to another school.
                <br />
                <br />
                If you are issued an M-1 student visa, the visa will generally
                be valid for the duration of your program of study, plus a grace
                period of 30 days. This means that you can use your M-1 visa to
                enter the United States up to 30 days before the start of your
                program, and you can stay in the United States for up to 30 days
                after the completion of your program to prepare for your
                departure.
                <br />
                <br />
                The price of a student visa in the United States depends on the
                type of student visa you are applying for and the embassy or
                consulate where you are applying. The visa fee for an F-1
                student visa is currently $160, and the visa fee for an M-1
                student visa is currently $170.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general guidelines for the validity
                  and price of student visas in the United States. The specific
                  validity and price may vary depending on the type of student
                  visa you are applying for and the embassy or consulate where
                  you are applying. It is always best to check the latest
                  information with the United States embassy or consulate in
                  your country of residence.
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

export default UnitedStatesOfAmerica;
