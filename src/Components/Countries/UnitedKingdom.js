import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const UnitedKingdom = () => {
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
        <title>United Kingdom</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="United Kingdom travel visa, United Kingdom work visa, United Kingdom study visa, How to apply for an United Kingdom visa, United Kingdom visa requirements, United Kingdom tourist visa, United Kingdom student visa, United Kingdom business visa, United Kingdom visa processing time, United Kingdom visa application process, United Kingdom visa for Americans, United Kingdom visa for Europeans, United Kingdom visa for Sudanns, United Kingdom visa for Canadians, United Kingdom visa for Sudanns, United Kingdom visa for Chinese, United Kingdom visa for Africans, United Kingdom visa for Asians, United Kingdom visa for South Americans, United Kingdom visa for Middle Easterners, United Kingdom visa for UK citizens, United Kingdom visa for EU citizens, United Kingdom visa for Schengen area, United Kingdom visa for non-EU citizens, United Kingdom visa fees and charges"
    
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            United Kingdom
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              The United Kingdom (UK) is a large country located in Western
              Europe. It is made up of four constituent countries: England,
              Scotland, Wales, and Northern Ireland. The UK is known for its
              rich history and cultural heritage, including its iconic landmarks
              such as Buckingham Palace, the Tower of London, and Stonehenge.
              The UK is also famous for its influential global role, with its
              strong economy and military power. In addition, the country is
              known for its contributions to the arts, including literature,
              music, and cinema. The UK is also known for its love of sports,
              particularly football (soccer), cricket, and rugby.
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
                Who can enter United Kingdom without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Different groups of people are allowed to enter England without
                a visa, depending on their nationality, the purpose of their
                visit, and how long they plan to stay. <br /> <br />● Citizens
                of the European Union (EU), European Economic Area (EEA) and
                Switzerland can enter England without a visa for stays of up to
                6 months.
                <br /> <br />● Citizens of certain countries, including the
                United States, Canada, Australia, and New Zealand, can enter
                England without a visa for stays of up to 6 months for tourism
                or business purposes.
                <br /> <br />● There are also other categories of people who can
                enter England without a visa, such as students, diplomats, and
                people transiting through the country. <br /> <br />
                It's a good idea to check the visa requirements for your
                specific situation before you travel to England, as the rules
                can change. You can find more information on the UK government's
                website.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a United Kingdom Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for England, you will need to gather a
                number of documents to include with your visa application. These
                may include: <br /> <br />● A valid passport or other travel
                document that allows you to travel to England. <br /> <br />● A
                completed visa application form. <br /> <br />● Passport-sized
                photographs of yourself. <br /> <br />● Evidence of your
                financial means, such as bank statements or a letter from your
                employer stating that they will be covering your expenses while
                you are in England. <br /> <br />● Evidence of your
                accommodation, such as a hotel booking or a letter of invitation
                from a host in England. <br /> <br />● Evidence of the purpose
                of your trip, such as a letter from your employer or a copy of
                your conference or event ticket. <br /> <br />● Any other
                documents required by the specific visa category you are
                applying for. <br /> <br />● It's a good idea to check the
                specific requirements for the type of visa you are applying for,
                as the required documents can vary depending on your
                circumstances. You can find more information about the different
                types of visas and the documents you will need on the UK
                government's website.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United Kingdom Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter England, you will need to follow
                these steps: <br /> <br />● Determine the type of visa you need:
                There are different types of visas available for different
                purposes, such as tourism, work, study, or family visits. You
                will need to choose the visa that best fits your purpose for
                visiting England. <br /> <br />● Check if you are eligible: Not
                everyone is eligible to apply for a visa to enter England. You
                will need to check the eligibility requirements for the type of
                visa you are applying for. <br /> <br />● Gather the required
                documents: You will need to provide certain documents with your
                visa application, such as a valid passport, photographs, and
                proof of your purpose for visiting England. The specific
                documents required will depend on the type of visa you are
                applying for. <br /> <br />● Submit your application: You can
                apply for a visa online or by post, depending on your country of
                residence. You will need to pay a fee to apply for a visa.{" "}
                <br /> <br />● Wait for a decision: The processing time for a
                visa application can vary, so it's a good idea to apply well in
                advance of your planned trip. Once a decision has been made on
                your application, you will be notified of the outcome.
                <br /> <br />
                <span className="font-bold">
                  It's important to note that the process for applying for a
                  visa to enter England can be complex, and it's a good idea to
                  familiarize yourself with the specific requirements and
                  procedures. You can find more information on the UK
                  government's website.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in United Kingdom?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time that foreign citizens can stay in England
                will depend on their nationality and the purpose of their visit.
                <br /> <br />
                Foreign citizens who are citizens of countries that are part of
                the European Union (EU), European Economic Area (EEA), or
                Switzerland are allowed to enter and stay in England without a
                visa for stays of up to 90 days within a 180-day period.
                <br /> <br />
                Foreign citizens who are citizens of countries that are not part
                of the EU, EEA, or Switzerland may need to obtain a visa to
                enter and stay in England. The specific requirements and
                procedures for obtaining a visa to enter and stay in England
                will depend on the foreign citizen's country of origin and the
                purpose of their visit.
                <br /> <br />
                <span className="font-bold">
                  If a foreign citizen needs to obtain a visa to enter and stay
                  in England, the length of time they are allowed to stay in the
                  country will be determined by the type of visa they are
                  granted. For example, a tourist visa to England may allow a
                  foreign citizen to stay in the country for up to six months,
                  while a work visa may allow a foreign citizen to stay in the
                  country for a longer period of time, depending on the specific
                  circumstances of the foreign citizen and the type of work they
                  will be doing in England.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in United Kingdom?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You do not need to take any COVID-19 travel tests or
                self-isolate on arrival in England if you qualify as fully
                vaccinated. The testing and quarantine rules for international
                travel to England will change 11 February 2022. You can now
                choose a lateral flow test or a PCR test as your post arrival
                test.
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
                Informations about Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In the United Kingdom, a diplomatic passport is issued to
                individuals who are working in a diplomatic capacity for their
                country, such as diplomats and members of a diplomatic mission.
                The Foreign, Commonwealth & Development Office (FCDO) is
                responsible for issuing diplomatic passports to eligible
                individuals in the UK.
                <br />
                <br />
                To obtain a diplomatic passport in the UK, an individual must
                meet certain criteria and provide certain documents, such as:
                <br />
                <br />●{" "}
                <span className="font-bold">
                  Proof of employment as a diplomat or member of a diplomatic
                  mission.
                </span>
                <br />● <span className="font-bold">A valid ID document.</span>
                <br />●{" "}
                <span className="font-bold">
                  A recent passport-size photograph.
                </span>
                <br />●{" "}
                <span className="font-bold">A completed application form.</span>
                <br />●{" "}
                <span className="font-bold">
                  Payment of any applicable fees.
                </span>
                <br />
                <br />
                Diplomatic passport holders in the UK are generally granted
                certain privileges and immunity from certain laws in the country
                where they are posted. This includes immunity from arrest and
                detention, as well as certain customs and tax exemptions.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that Diplomatic passport should be used
                  for official travel and diplomatic activities, and it's not
                  meant for personal travel. Misuse of a diplomatic passport can
                  result in revocation of the passport, and could lead to other
                  consequences as well.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that the information provided is based on my
                  knowledge cut-off and the regulations regarding Diplomatic
                  Passport in the United Kingdom can change over time. It's
                  recommended to check with the Foreign, Commonwealth &
                  Development Office (FCDO) of the United Kingdom for more
                  updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in United Kingdom?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa to work in England will
                depend on your nationality and the specific terms of your
                employment.
                <br /> <br />
                Citizens of the European Union (EU), European Economic Area
                (EEA) and Switzerland can work in England without a worker visa.
                <br /> <br />
                Citizens of certain other countries may also be able to work in
                England without a worker visa if they are coming to the country
                for a short period of time and will be working in a specific
                type of job, such as performing in a play or film, or
                participating in a sports event.
                <br /> <br />
                <span className="font-bold">
                  If you are not a citizen of the EU, EEA, or Switzerland, and
                  you will be working in England for a longer period of time, or
                  in a job that is not covered by the exemptions listed above,
                  you will generally need to apply for a worker visa. There are
                  several types of worker visas available, depending on the
                  specific terms of your employment and your qualifications.
                  It's a good idea to check the specific requirements for the
                  type of work you will be doing, as the rules can vary. You can
                  find more information on the UK government's website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an United Kingdom Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in England, you will need to
                follow these steps: <br /> <br />● Determine the type of worker
                visa you need: There are several types of worker visas
                available, depending on the specific terms of your employment
                and your qualifications. You will need to choose the visa that
                best fits your situation. <br /> <br />● Check if you are
                eligible: Not everyone is eligible to apply for a worker visa to
                work in England. You will need to check the eligibility
                requirements for the type of visa you are applying for. <br />{" "}
                <br />● Gather the required documents: You will need to provide
                certain documents with your visa application, such as a valid
                passport, photographs, and proof of your employment and
                qualifications. The specific documents required will depend on
                the type of visa you are applying for. <br /> <br />● Submit
                your application: You can apply for a worker visa online or by
                post, depending on your country of residence. You will need to
                pay a fee to apply for a visa. <br /> <br />● Wait for a
                decision: The processing time for a worker visa application can
                vary, so it's a good idea to apply well in advance of your
                planned start date. Once a decision has been made on your
                application, you will be notified of the outcome.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of United Kingdom Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that foreign citizens
                can apply for in order to work in England. The specific type of
                worker visa that a foreign citizen will need to apply for will
                depend on the specific circumstances of the foreign citizen and
                the nature of the work they will be doing in England.
                <br /> <br /> Here are some of the common types of worker visas
                that foreign citizens can apply for in order to work in England:
                <br /> <br />●{" "}
                <span className="font-bold">Tier 1 (Entrepreneur) visa</span>:
                This visa is for individuals who want to set up or run a
                business in the UK.
                <br /> <br />●{" "}
                <span className="font-bold">Tier 1 (Investor) visa</span>: This
                visa is for individuals who want to invest a significant amount
                of money in the UK. <br /> <br />●{" "}
                <span className="font-bold">
                  Tier 1 (Exceptional Talent) visa
                </span>
                : This visa is for individuals who are recognized as having
                exceptional talent in the fields of science, humanities,
                engineering, medicine, digital technology, or the arts. <br />{" "}
                <br />● <span className="font-bold">Tier 2 (General) visa</span>
                : This visa is for individuals who have a job offer from a UK
                employer in a skilled occupation. <br /> <br />●{" "}
                <span className="font-bold">
                  Tier 2 (Intra-Company Transfer) visa
                </span>
                : This type of worker visa is for foreign citizens who are
                transferring to a UK-based branch of their current employer.
                <br />
                <br />●{" "}
                <span className="font-bold">
                  The Tier 2 (Intra-Company Transfer) visa
                </span>{" "}
                allows foreign citizens to work in England for up to five years,
                depending on the length of the transfer. <br /> <br />●{" "}
                <span className="font-bold">
                  Tier 5 (Temporary Worker) visa
                </span>
                : This visa is for individuals coming to the UK to work in
                specific industries or sectors, such as the arts, charity work,
                or sports.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for United Kingdom Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Worker Visa for England, you will need to provide
                the following documents: <br /> <br />● A valid passport or
                travel document
                <br /> <br />● Two passport-sized photographs <br /> <br />● A
                completed visa application form <br /> <br />● Evidence of your
                relationship status (if applicable) <br /> <br />● Evidence of
                your employment offer in the UK, such as a letter from your
                employer <br /> <br />● Evidence of your qualifications and
                experience, such as a degree certificate or employment reference
                <br /> <br />● Evidence of your financial status, such as bank
                statements or pay slips <br /> <br />● A tuberculosis test
                result (if required) <br /> <br />● A criminal record
                certificate from any country you have lived in for more than 12
                months in the past 10 years (if required) <br /> <br />● You may
                also need to provide additional documents depending on your
                specific circumstances. It is important to carefully read the
                visa application guidelines and follow the instructions to
                ensure that you submit all the necessary documents.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in United Kingdom?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who wish to work in England will typically need
                to apply for a worker visa at the UK embassy or consulate in
                their home country before traveling to England.
                <br /> <br />
                <span className="font-bold">
                  The specific requirements and procedures for applying for a
                  worker visa in England will depend on the foreign citizen's
                  country of origin and the nature of the work they will be
                  doing in England.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is recommended that foreign citizens carefully research the
                  specific requirements and procedures for the type of worker
                  visa they are seeking and seek guidance from the UK embassy or
                  consulate in their home country for specific information about
                  the worker visa application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in United Kingdom?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a student visa in England typically
                involves several steps, including being accepted into an
                educational program in England and applying for the student visa
                at the UK embassy or consulate in the foreign student's home
                country.
                <br /> <br /> Here is a general outline of the process for
                applying for a student visa in England: <br /> <br />● Apply to
                an educational program: Foreign students will need to apply to
                an educational program in England and be accepted into the
                program before they can apply for a student visa. The specific
                requirements and procedures for applying to an educational
                program in England will vary depending on the type of program
                and the institution. <br /> <br />● Gather the necessary
                documents: Foreign students will need to gather the necessary
                documents required for the student visa application process.
                These may include a valid passport, passport-sized photographs,
                and evidence of acceptance into an educational program in
                England, such as an enrollment certificate. <br /> <br />●
                Complete the student visa application form: Foreign students
                will need to complete and submit the necessary student visa
                application form, which can typically be obtained from the UK
                embassy or consulate in the foreign student's home country or
                online. <br /> <br />● Submit the student visa application:
                Foreign students will need to submit their completed student
                visa application, along with the necessary documents, at the UK
                embassy or consulate in their home country. It is important to
                note that the student visa application process can take several
                weeks or even months to complete, depending on the specific
                circumstances of the foreign student and the type of student
                visa they are seeking.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a United Kingdom student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for England, you will need to follow
                these steps: <br /> <br />● Choose a course and a school or
                university in England. Make sure the institution is recognized
                by the UK government and is able to sponsor your visa. <br />{" "}
                <br />● Check the visa requirements and make sure you meet all
                the eligibility criteria. <br /> <br />● Gather all the required
                documents, including your passport or travel document,
                passport-sized photographs, a completed visa application form, a
                letter of acceptance from the educational institution, and
                evidence of your financial status. <br /> <br />● Pay the visa
                fee and book an appointment at a visa application center to
                provide your biometric information (fingerprints and
                photograph). <br /> <br />● Submit your application either
                online or by post, along with all the required documents and the
                visa fee. <br /> <br />● Wait for a decision on your
                application. The processing times for a student visa can vary,
                so it is important to apply as early as possible.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                United Kingdom student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To study in England, foreign students will typically need to
                obtain a student visa. The specific requirements and procedures
                for obtaining a student visa for England will depend on the
                foreign student's country of origin and the type of educational
                program they will be enrolled in.
                <br /> <br /> Here are some of the documents that foreign
                students may be required to provide when applying for a student
                visa for England: <br /> <br />● Passport: Foreign students will
                need to provide a copy of their valid passport, including the
                identification page and any relevant visas or stamps. The
                passport must be valid for at least six months after the
                intended date of departure from England. <br /> <br />● Visa
                application form: Foreign students will need to complete and
                submit a visa application form, which can typically be obtained
                from the UK embassy or consulate in the foreign student's home
                country or online. <br /> <br />● Passport-sized photographs:
                Foreign students will need to provide two passport-sized
                photographs that meet the requirements of the UK embassy or
                consulate. <br /> <br />● Evidence of acceptance: Foreign
                students will need to provide evidence of acceptance into an
                educational program in England, such as a letter of acceptance
                from the educational institution. <br /> <br />● Evidence of
                sufficient financial resources: Foreign students may need to
                demonstrate that they have sufficient financial resources to
                support themselves while studying in England, such as bank
                statements or proof of sponsorship. <br /> <br />● Health
                insurance: Foreign students may need to provide evidence of
                health insurance coverage while studying in England.
                <br /> <br />● Evidence of education and professional
                qualifications: Foreign students may need to provide proof of
                their education and professional qualifications, such as
                transcripts or diplomas.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for United Kingdom student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for England depend on
                the length and type of course you will be studying.
                <br /> <br />
                There are two types of student visas available for England: the
                Tier 4 (General) Student Visa and the Tier 4 (Child) Student
                Visa.
                <br /> <br />
                The Tier 4 (General) Student Visa is for students aged 16 or
                over who are studying a course at or above National
                Qualification Framework (NQF) Level 6. This visa is usually
                valid for the duration of your course, plus an additional four
                months to allow you time to find a job or make arrangements to
                leave the UK. The visa fee for the Tier 4 (General) Student Visa
                is £348.
                <br /> <br />
                The Tier 4 (Child) Student Visa is for children aged 4 to 17 who
                are studying at an independent school in the UK. This visa is
                usually valid for the duration of your course, plus an
                additional four months to allow you time to make arrangements to
                leave the UK. The visa fee for the Tier 4 (Child) Student Visa
                is £348.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the visa fees are subject to
                  change and may vary depending on your specific circumstances.
                  You should check the UK government's website for the most
                  up-to-date information on visa fees.
                </span>
                <br /> <br />
                <span className="font-bold">
                  In addition to the visa fee, you may also need to pay the
                  Immigration Health Surcharge (IHS) as part of your visa
                  application. The IHS is a fee that covers the cost of using
                  the National Health Service (NHS) while you are in the UK. The
                  current IHS fee is £470 per year.
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

export default UnitedKingdom;
