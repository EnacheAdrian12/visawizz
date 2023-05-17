import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const SanMarino = () => {
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
        <title>San Marino</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="San Marino travel visa, San Marino work visa, San Marino study visa, How to apply for an San Marino visa, San Marino visa requirements, San Marino tourist visa, San Marino student visa, San Marino business visa, San Marino visa processing time, San Marino visa application process, San Marino visa for Americans, San Marino visa for Europeans, San Marino visa for San Marinons, San Marino visa for Canadians, San Marino visa for San Marinons, San Marino visa for Chinese, San Marino visa for Africans, San Marino visa for Asians, San Marino visa for South Americans, San Marino visa for Middle Easterners, San Marino visa for UK citizens, San Marino visa for EU citizens, San Marino visa for Schengen area, San Marino visa for non-EU citizens, San Marino visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            San Marino
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              San Marino is a small, landlocked country located in the heart of
              Italy. It is the oldest surviving sovereign state and
              constitutional republic in the world, having been founded in the
              year 301. San Marino is known for its rich history, beautiful
              landscapes, and cultural attractions. It is a popular tourist
              destination, and its main attractions include the historic center
              of the capital city, San Marino, which is a UNESCO World Heritage
              Site, and the Three Towers of San Marino, which are the country's
              most famous landmarks. Additionally, San Marino is known for its
              high-quality craftsmanship, particularly in the areas of
              glassmaking and ceramics.
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
                Who can enter San Marino without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                San Marino is a small, independent state located within Italy.
                As a member of the European Union (EU), San Marino follows the
                EU's visa policies and regulations for foreign citizens who wish
                to enter the country.
                <br /> <br />● Foreign citizens who are citizens of EU member
                states, Iceland, Liechtenstein, Norway, and Switzerland are
                allowed to enter San Marino without a visa for stays of up to 90
                days within a 180-day period.
                <br /> <br />● Foreign citizens who are citizens of countries
                that have signed the Schengen Agreement, which allows for the
                free movement of people within the signatory countries, are also
                allowed to enter San Marino without a visa for stays of up to 90
                days within a 180-day period.
                <br /> <br />● Foreign citizens who are citizens of countries
                that are not EU member states, Iceland, Liechtenstein, Norway,
                Switzerland, or signatories of the Schengen Agreement may need
                to obtain a visa to enter San Marino. The specific requirements
                and procedures for obtaining a visa to enter San Marino will
                depend on the foreign citizen's country of origin and the
                purpose of their visit to San Marino. <br /> <br />
                <span className="font-bold">
                  It is important for foreign citizens to carefully research the
                  requirements and procedures for entering San Marino before
                  initiating their travel plans. Foreign citizens should also
                  seek guidance from the San Marino embassy or consulate in
                  their home country for specific information about the visa
                  application process, if applicable.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a San Marino Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The specific documents required for a visa to enter San Marino
                will depend on the foreign citizen's country of origin and the
                purpose of their visit to San Marino. <br /> <br />
                In general, foreign citizens will need to provide the following
                documents when applying for a visa to enter San Marino: <br />{" "}
                <br />● Passport: Foreign citizens will need to provide a copy
                of their valid passport, including the identification page and
                any relevant visas or stamps. The passport must be valid for at
                least six months after the intended date of departure from San
                Marino. <br /> <br />● Visa application form: Foreign citizens
                will need to complete and submit a visa application form, which
                can typically be obtained from the San Marino embassy or
                consulate in the foreign citizen's home country or online.
                <br /> <br />● Passport-sized photographs: Foreign citizens will
                need to provide two passport-sized photographs that meet the
                requirements of the San Marino embassy or consulate. <br />{" "}
                <br />● Evidence of purpose of visit: Foreign citizens will need
                to provide evidence of the purpose of their visit to San Marino,
                such as a letter of invitation, a hotel reservation, or a tour
                itinerary. <br /> <br />● Evidence of sufficient financial
                resources: Foreign citizens may need to demonstrate that they
                have sufficient financial resources to support themselves while
                in San Marino, such as bank statements or proof of sponsorship.
                <br /> <br />● Health insurance: Foreign citizens may need to
                provide evidence of health insurance coverage while in San
                Marino.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a San Marino Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The process for applying for a visa to enter San Marino
                typically involves several steps, including completing and
                submitting the necessary application forms and documents at the
                San Marino embassy or consulate in the foreign citizen's home
                country.
                <br /> <br />
                Here is a general outline of the process for applying for a visa
                to enter San Marino: <br /> <br />● Determine the type of visa
                needed: Foreign citizens will need to determine the type of visa
                they need to enter San Marino based on the purpose of their
                visit and their country of origin. Different types of visas may
                have different requirements and procedures. <br /> <br />●
                Gather the necessary documents: Foreign citizens will need to
                gather the necessary documents required for the visa application
                process. These may include a valid passport, passport-sized
                photographs, and evidence of the purpose of their visit to San
                Marino, such as a letter of invitation, a hotel reservation, or
                a tour itinerary. <br /> <br />● Complete the visa application
                form: Foreign citizens will need to complete and submit the
                necessary visa application form, which can typically be obtained
                from the San Marino embassy or consulate in the foreign
                citizen's home country or online. <br /> <br />● Submit the visa
                application: Foreign citizens will need to submit their
                completed visa application, along with the necessary documents,
                at the San Marino embassy or consulate in their home country. It
                is important to note that the visa application process can take
                several weeks or even months to complete, depending on the
                specific circumstances of the foreign citizen and the type of
                visa they are seeking.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in San Marino?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who are allowed to enter San Marino without a
                visa, such as citizens of EU member states, Iceland,
                Liechtenstein, Norway, and Switzerland, are allowed to stay in
                San Marino for up to 90 days within a 180-day period. This means
                that foreign citizens can stay in San Marino for a maximum of 90
                days within a six-month period, and then must leave the country
                for a minimum of 90 days before returning.
                <br />
                <br />
                For foreign citizens who are required to obtain a visa to enter
                San Marino, the length of stay will depend on the specific type
                of visa they have obtained. Some visas may allow for a single
                stay of a specific duration, while others may allow for multiple
                stays of shorter duration over a longer period of time.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in San Marino?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no longer any COVID-19 related restrictions on entry
                into San Marino, although all visitors must comply with social
                distancing and sanitisation regulations. You will also be
                required to wear a face mask on public transport, and in public
                spaces (including outdoors) where social distancing is not
                possible. Food and drink can only be consumed when seated in
                restaurants and bars. Internal Restrictions:
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
                San Marino is a small country and I couldn't find information
                about Diplomatic Passport in San Marino. However, generally
                speaking, a diplomatic passport is issued to individuals who are
                working in a diplomatic capacity for their country, such as
                diplomats and members of a diplomatic mission. The Ministry of
                Foreign Affairs is responsible for issuing diplomatic passports
                to eligible individuals in San Marino.
                <br />
                <br />
                To obtain a diplomatic passport in San Marino, an individual
                must meet certain criteria and provide certain documents, such
                as:
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
                Diplomatic passport holders in San Marino are generally granted
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
                  It's recommended to check with the Ministry of Foreign Affairs
                  of San Marino for more detailed information and requirements
                  about Diplomatic Passport in San Marino.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in San Marino?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who wish to work in San Marino may need to
                obtain a worker visa in order to legally work in the country.
                The specific requirements and procedures for obtaining a worker
                visa in San Marino will depend on the foreign citizen's country
                of origin and the type of work they will be doing in San Marino.
                <br /> <br />
                In general, foreign citizens who are citizens of EU member
                states, Iceland, Liechtenstein, Norway, and Switzerland are
                allowed to work in San Marino without a worker visa for stays of
                up to 90 days within a 180-day period. <br /> <br />
                Foreign citizens who are citizens of countries that have signed
                the Schengen Agreement, which allows for the free movement of
                people within the signatory countries, may also be allowed to
                work in San Marino without a worker visa for stays of up to 90
                days within a 180-day period.
                <br /> <br />
                <span className="font-bold">
                  Foreign citizens who are citizens of countries that are not EU
                  member states, Iceland, Liechtenstein, Norway, Switzerland, or
                  signatories of the Schengen Agreement may need to obtain a
                  worker visa to work in San Marino. The specific requirements
                  and procedures for obtaining a worker visa in San Marino will
                  depend on the foreign citizen's country of origin and the type
                  of work they will be doing in San Marino
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an San Marino Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                As a member of the European Union (EU), San Marino follows the
                EU's visa policies and regulations for foreign citizens who wish
                to enter the country to work.
                <br /> <br />
                Foreign citizens who are citizens of EU member states, Iceland,
                Liechtenstein, Norway, and Switzerland are allowed to work in
                San Marino without a worker visa for stays of up to 90 days
                within a 180-day period.
                <br /> <br />
                Foreign citizens who are citizens of countries that have signed
                the Schengen Agreement, which allows for the free movement of
                people within the signatory countries, may also be allowed to
                work in San Marino without a worker visa for stays of up to 90
                days within a 180-day period.
                <br />
                <br />
                <span className="font-bold">
                  Foreign citizens who are citizens of countries that are not EU
                  member states, Iceland, Liechtenstein, Norway, Switzerland, or
                  signatories of the Schengen Agreement may need to obtain a
                  worker visa to work in San Marino. The specific type of worker
                  visa that is needed will depend on the foreign citizen's
                  country of origin and the type of work they will be doing in
                  San Marino.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of San Marino Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                San Marino is a small country and it's hard to find information
                about worker visa in San Marino. However, generally speaking
                there are two types of worker visa, short-term and long-term.
                The specific requirements for each type of visa may vary
                depending on the type of work and the country where you are
                applying from.
                <br />
                <br />● <span className="font-bold">Short-term work visa</span>:
                This type of visa is for individuals who will be working in San
                Marino for a short period of time, usually up to 90 days. This
                type of visa may be suitable for individuals who are working on
                a specific project or assignment, and it is usually not
                renewable.
                <br />
                <br />● <span className="font-bold">Long-term work visa</span>:
                This type of visa is for individuals who will be working in San
                Marino for an extended period of time, usually longer than 90
                days. This type of visa may be suitable for individuals who have
                been offered a permanent job, and it is usually renewable.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the process of obtaining a worker
                  visa can take several weeks or even months, so it's
                  recommended to start the process well in advance of your
                  planned departure date. It's also recommended to check with
                  the San Marino embassy or consulate in your home country or
                  the San Marino Immigration Office for more detailed
                  information and requirements about worker visa in San Marino.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for San Marino Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The specific documents required for a worker visa in San Marino
                will depend on the foreign citizen's country of origin and the
                type of work they will be doing in San Marino.
                <br /> <br /> In general, foreign citizens will need to provide
                the following documents when applying for a worker visa in San
                Marino: <br /> <br />● Passport: Foreign citizens will need to
                provide a copy of their valid passport, including the
                identification page and any relevant visas or stamps. The
                passport must be valid for at least six months after the
                intended date of departure from San Marino. <br /> <br />●
                Worker visa application form: Foreign citizens will need to
                complete and submit a worker visa application form, which can
                typically be obtained from the San Marino embassy or consulate
                in the foreign citizen's home country or online. <br /> <br />●
                Passport-sized photographs: Foreign citizens will need to
                provide two passport-sized photographs that meet the
                requirements of the San Marino embassy or consulate. <br />{" "}
                <br />● Evidence of employment: Foreign citizens will need to
                provide evidence of their employment in San Marino, such as a
                letter of employment or a contract. <br /> <br />● Evidence of
                sufficient financial resources: Foreign citizens may need to
                demonstrate that they have sufficient financial resources to
                support themselves while working in San Marino, such as bank
                statements or proof of sponsorship. <br /> <br />● Health
                insurance: Foreign citizens may need to provide evidence of
                health insurance coverage while working in San Marino.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in San Marino?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who wish to apply for a worker visa in San
                Marino should typically do so at the San Marino embassy or
                consulate in their home country.
                <br /> <br />
                The process for applying for a worker visa in San Marino
                typically involves several steps, including completing and
                submitting the necessary application forms and documents at the
                San Marino embassy or consulate in the foreign citizen's home
                country.
                <br /> <br />
                <span className="font-bold">
                  It is important for foreign citizens to carefully research the
                  requirements and procedures for obtaining a worker visa in San
                  Marino before initiating the process. Foreign citizens should
                  also seek guidance from the San Marino embassy or consulate in
                  their home country for specific information about the worker
                  visa application process, including where and when to apply
                  for a worker visa in San Marino.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in San Marino?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who wish to study in San Marino may need to
                obtain a student visa in order to legally study in the country.
                The specific requirements and procedures for obtaining a student
                visa in San Marino will depend on the foreign student's country
                of origin and the type of educational program they will be
                enrolled in.
                <br /> <br />
                In general, foreign citizens who are citizens of EU member
                states, Iceland, Liechtenstein, Norway, and Switzerland are
                allowed to study in San Marino without a student visa for stays
                of up to 90 days within a 180-day period.
                <br /> <br />
                Foreign citizens who are citizens of countries that have signed
                the Schengen Agreement, which allows for the free movement of
                people within the signatory countries, may also be allowed to
                study in San Marino without a student visa for stays of up to 90
                days within a 180-day period. <br /> <br />
                <span className="font-bold">
                  Foreign citizens who are citizens of countries that are not EU
                  member states, Iceland, Liechtenstein, Norway, Switzerland, or
                  signatories of the Schengen Agreement may need to obtain a
                  student visa to study in San Marino. The specific requirements
                  and procedures for obtaining a student visa in San Marino will
                  depend on the foreign student's country of origin and the type
                  of educational program they will be enrolled in.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a San Marino student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a student visa in San Marino
                typically involves several steps, including completing and
                submitting the necessary application forms and documents at the
                San Marino embassy or consulate in the foreign student's home
                country.
                <br /> <br />
                Here is a general outline of the process for applying for a
                student visa in San Marino: <br /> <br />● Determine the type of
                student visa needed: Foreign students will need to determine the
                type of student visa they need to study in San Marino based on
                the type of educational program they will be enrolled in and
                their country of origin. Different types of student visas may
                have different requirements and procedures.
                <br /> <br />● Gather the necessary documents: Foreign students
                will need to gather the necessary documents required for the
                student visa application process. These may include a valid
                passport, passport-sized photographs, and evidence of acceptance
                into an educational program in San Marino, such as a letter of
                acceptance from the educational institution. <br /> <br />●
                Complete the student visa application form: Foreign students
                will need to complete and submit the necessary student visa
                application form, which can typically be obtained from the San
                Marino embassy or consulate in the foreign student's home
                country or online. <br /> <br />● Submit the student visa
                application: Foreign students will need to submit their
                completed student visa application, along with the necessary
                documents, at the San Marino embassy or consulate in their home
                country. It is important to note that the student visa
                application process can take several weeks or even months to
                complete, depending on the specific circumstances of the foreign
                student and the type of student visa they are seeking.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                San Marino student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The specific requirements for a student visa in San Marino will
                depend on the foreign student's country of origin and the type
                of educational program they will be enrolled in.
                <br /> <br /> In general, foreign students will need to meet the
                following requirements in order to be eligible for a student
                visa in San Marino: <br /> <br />● Valid passport: Foreign
                students will need to have a valid passport, including the
                identification page and any relevant visas or stamps. The
                passport must be valid for at least six months after the
                intended date of departure from San Marino. <br /> <br />●
                Acceptance into an educational program: Foreign students will
                need to provide evidence of acceptance into an educational
                program in San Marino, such as a letter of acceptance from the
                educational institution. <br /> <br />● Financial resources:
                Foreign students may need to demonstrate that they have
                sufficient financial resources to support themselves while
                studying in San Marino, such as bank statements or proof of
                sponsorship. <br /> <br />● Health insurance: Foreign students
                may need to provide evidence of health insurance coverage while
                studying in San Marino. <br /> <br />● Return or onward ticket:
                Foreign students may need to provide evidence of a return or
                onward ticket to their home country or a third country after
                completing their studies in San Marino.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for San Marino student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in San Marino will
                depend on the specific type of student visa that is issued and
                the foreign student's country of origin.
                <br /> <br />
                In general, student visas in San Marino are valid for the
                duration of the educational program that the foreign student is
                enrolled in, up to a maximum of one year. After completing their
                studies in San Marino, foreign students may be able to apply for
                an extension of their student visa, depending on the specific
                circumstances of their case.
                <br /> <br />
                The price of a student visa in San Marino may vary depending on
                the foreign student's country of origin and the type of student
                visa they are seeking. In general, student visas in San Marino
                may require a fee to be paid at the time of application.
                <br /> <br />
                <span className="font-bold">
                  It is important for foreign students to carefully research the
                  specific requirements and procedures for the type of student
                  visa they are seeking before initiating the process. Foreign
                  students should also seek guidance from the San Marino embassy
                  or consulate in their home country for specific information
                  about the student visa application process, including the
                  validity and price of the student visa.
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

export default SanMarino;
