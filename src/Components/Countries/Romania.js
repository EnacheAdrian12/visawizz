import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Romania = () => {
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
        <title>Romania</title>
        <meta name="description" content="Romania" />
        <meta
          name="keywords"
          content="Romania travel visa, Romania work visa, Romania study visa, How to apply for an Romania visa, Romania visa requirements, Romania tourist visa, Romania student visa, Romania business visa, Romania visa processing time, Romania visa application process, Romania visa for Americans, Romania visa for Europeans, Romania visa for Romanians, Romania visa for Canadians, Romania visa for Romanians, Romania visa for Chinese, Romania visa for Africans, Romania visa for Asians, Romania visa for South Americans, Romania visa for Middle Easterners, Romania visa for UK citizens, Romania visa for EU citizens, Romania visa for Schengen area, Romania visa for non-EU citizens, Romania visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Romania
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Romania is a country in Eastern Europe, located on the Balkan
              Peninsula. It is known for its beautiful landscapes, including the
              Carpathian Mountains, the Danube Delta, and the Black Sea coast,
              and for its rich cultural heritage, which blends Eastern European
              and Balkan influences. Romania is also known for its vibrant
              cities, such as the capital city, Bucharest, and for its rich
              history, which includes the legend of Count Dracula and the Dacian
              civilization. The country is known for its delicious cuisine,
              which features a blend of meats, vegetables, and delicious
              desserts, and for its lively music and dance scene.
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
                Who can enter Romania without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Romania
                without a visa for stays of up to 90 days within a 180-day
                period. These countries are: <br /> <br />●{" "}
                <span className="font-bold">EU member countries.</span>
                <br /> <br />●{" "}
                <span className="font-bold">
                  European Free Trade Association (EFTA) member countries
                  (Iceland, Liechtenstein, Norway, and Switzerland).
                </span>
                <br /> <br />●{" "}
                <span className="font-bold">
                  Andorra, Argentina, Australia, Bolivia, Bosnia and
                  Herzegovina, Brazil, Brunei, Canada, Chile, Costa Rica,
                  Colombia, Georgia, Honduras, Israel, Japan, Kosovo, Macao,
                  Malaysia, Moldova, Monaco, Montenegro, New Zealand, Panama,
                  Paraguay, Peru, San Marino, Serbia, Singapore, South Korea,
                  United Arab Emirates, United States, Uruguay, Vatican City,
                  and Venezuela.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Citizens of other countries may be required to obtain a visa
                  in order to enter Romania. The requirements for obtaining a
                  visa may vary depending on the purpose of your trip and your
                  country of residence. It's always a good idea to check with
                  the embassy or consulate of Romania or with a travel agent for
                  the most up-to-date information about visa requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Romania Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The specific documents that you need to apply for a visa for
                Romania will depend on the purpose of your trip and your country
                of residence. In general, you may be required to provide the
                following documents: <br /> <br />● A valid passport with at
                least six months' validity remaining <br /> <br />●
                Passport-sized photographs <br /> <br />● A completed visa
                application form <br /> <br />● A letter of invitation or a
                letter of support from a host in Romania, if applicable <br />{" "}
                <br />● Proof of your travel itinerary or round-trip ticket
                <br /> <br />● Proof of sufficient funds to support your stay in
                Romania <br /> <br />● Proof of accommodation in Romania, such
                as a hotel reservation or a letter of invitation from a host
                <br /> <br />● Proof of medical insurance that is valid in
                Romania <br /> <br />● Other documents as required by the
                embassy or consulate of Romania It's worth noting that this is
                just a general list, and the specific documents required for
                your visa application may vary depending on your situation.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Romania Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Romania, you will need to follow the
                steps below: <br /> <br />● Check the visa requirements: The
                first step in applying for a visa for Romania is to determine
                whether you need a visa and, if so, what type of visa you need.
                You can check the visa requirements for your country of
                citizenship on the website of the embassy or consulate of
                Romania or by contacting a travel agent. <br /> <br />● Gather
                the necessary documents: Once you know what type of visa you
                need, you will need to gather the necessary documents for your
                visa application. This may include your passport, passport-sized
                photographs, a completed visa application form, and other
                documents as required by the embassy or consulate of Romania.
                <br /> <br />● Submit your application: You will need to submit
                your visa application, along with the necessary documents, to
                the embassy or consulate of Romania. You may be able to submit
                your application in person, by mail, or online, depending on
                your location and the specific requirements of the embassy or
                consulate.
                <br /> <br />● Wait for a decision: After you submit your visa
                application, it will be reviewed by the authorities. If your
                application is approved, you will receive your visa. If it is
                denied, you may have the opportunity to appeal the decision or
                reapply.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Romania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Romania on a
                visa will depend on the type of visa you have and the specific
                terms of your visa. Here are some general guidelines: <br />{" "}
                <br />● <span className="font-bold">Tourist visa</span>: Tourist
                visas are issued to individuals who are traveling to Romania for
                leisure or business purposes. Tourist visas are typically valid
                for stays of up to 90 days within a 180-day period. <br />{" "}
                <br />● <span className="font-bold">Business visa</span>:
                Business visas are issued to individuals who are traveling to
                Romania for business purposes, such as attending meetings or
                conferences. Business visas are typically valid for stays of up
                to 90 days within a 180-day period. <br /> <br />●{" "}
                <span className="font-bold">Student visa</span>: Student visas
                are issued to individuals who are enrolled in a Romanian
                educational institution. Student visas are typically valid for
                the duration of your studies, plus a grace period of up to 30
                days after your studies are completed. <br /> <br />●{" "}
                <span className="font-bold">Work visa</span>: Work visas are
                issued to individuals who are coming to Romania to work on a
                temporary or permanent basis. Work visas are typically valid for
                the duration of your employment contract, plus a grace period of
                up to 30 days after your contract ends.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Romania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A negative COVID-19 test is not required when arriving to
                Romania.
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
                In Romania, a diplomatic passport is issued to individuals who
                are working in a diplomatic capacity for their country, such as
                diplomats and members of a diplomatic mission. The Ministry of
                Foreign Affairs is responsible for issuing diplomatic passports
                to eligible individuals in Romania.
                <br />
                <br />
                To obtain a diplomatic passport in Romania, an individual must
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
                Diplomatic passport holders in Romania are generally granted
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
                  Passport in Romania can change over time. It's recommended to
                  check with the Ministry of Foreign Affairs of Romania for more
                  updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Romania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who want to work in Romania typically need to
                obtain a worker visa in order to be legally employed in the
                country. The specific requirements and procedures for obtaining
                a worker visa in Romania will depend on the foreign worker's
                country of origin and the type of work they will be doing in
                Romania.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Romania Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a worker visa in Romania typically
                involves several steps, including obtaining a job offer from a
                Romanian employer, obtaining a work permit, and applying for a
                visa at the Romanian embassy or consulate in the foreign
                worker's home country.
                <br /> <br /> Here is a general outline of the process for
                applying for a worker visa in Romania: <br /> <br />● Obtain a
                job offer from a Romanian employer: Foreign workers will need to
                have a job offer from a Romanian employer in order to be
                eligible for a worker visa. The employer will typically be
                responsible for initiating the process for obtaining a work
                permit on behalf of the foreign worker. <br /> <br />● Obtain a
                work permit: Foreign workers will need to apply for a work
                permit in order to be legally employed in Romania. The process
                for obtaining a work permit typically involves the employer
                submitting a request for a work permit to the Romanian Ministry
                of Labor. The foreign worker will also need to provide proof of
                their education and professional qualifications. <br /> <br />●
                Apply for a visa: Once the foreign worker has obtained a job
                offer and a work permit, they can apply for a worker visa at the
                Romanian embassy or consulate in their home country. The foreign
                worker will need to complete and submit the necessary
                application forms and documents, including a valid passport,
                proof of the job offer and work permit, and proof of sufficient
                financial resources.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Romania Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Romania, there are several types of worker visas that may be
                available to foreign citizens who want to work in the country.
                The specific type of worker visa that a foreign worker will need
                to apply for will depend on the nature of their work and the
                duration of their stay in Romania.
                <br /> <br /> Here are some of the main types of worker visas
                that may be available in Romania: <br /> <br />●{" "}
                <span className="font-bold">Short-term worker visa</span>: This
                type of visa is typically issued for a period of up to 90 days
                and is intended for foreign workers who will be in Romania for a
                short period of time, such as for a business trip or temporary
                assignment. <br /> <br />●{" "}
                <span className="font-bold">Long-term worker visa</span>: This
                type of visa is typically issued for a period of up to one year
                and is intended for foreign workers who will be in Romania for
                an extended period of time, such as for a long-term employment
                contract. <br /> <br />●{" "}
                <span className="font-bold">
                  Intra-corporate transferee visa
                </span>
                : This type of visa is intended for foreign workers who are
                being transferred within their company to work in a Romanian
                branch or subsidiary.
                <br />
                <br />● <span className="font-bold">Seasonal worker visa</span>:
                This type of visa is intended for foreign workers who will be
                working in Romania on a seasonal basis, such as for agricultural
                or tourism-related jobs.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Romania Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Romania, you will typically need
                to provide the following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months remaining before
                expiry.
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● A recent passport-size photograph.
                <br />
                <br />
                ● A valid work permit issued by the Romanian Ministry of Labour
                and Social Justice.
                <br />
                <br />
                ● A labor contract or employment offer letter from the Romanian
                employer.
                <br />
                <br />
                ● Proof of sufficient funds to support yourself during your stay
                in Romania.
                <br />
                <br />
                ● A health insurance policy that covers you for the duration of
                your stay in Romania.
                <br />
                <br />
                ● Proof of accommodation in Romania, such as a hotel reservation
                or rental agreement.
                <br />
                <br />
                ● Any additional documents required by the Romanian embassy or
                consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements may vary
                  depending on the type of work visa you are applying for and
                  the country where you are applying from. It's recommended to
                  check with the Romanian embassy or consulate in your home
                  country or the Romanian Immigration Office for more detailed
                  information and requirements.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's also important to keep in mind that the process of
                  obtaining a worker visa can take several weeks or even months,
                  so it's recommended to start the process well in advance of
                  your planned departure date.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Romania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Romania, the process for obtaining a worker visa typically
                begins with the foreign worker obtaining a job offer and work
                permit from a Romanian employer. Once the foreign worker has a
                job offer and work permit, they can then apply for a worker visa
                at the Romanian embassy or consulate in their home country.{" "}
                <br /> <br />
                The specific requirements and procedures for obtaining a worker
                visa in Romania may vary depending on the foreign worker's
                country of origin and the type of work they will be doing in
                Romania. In general, foreign workers will need to complete and
                submit the necessary application forms and documents, including
                a valid passport, proof of the job offer and work permit, and
                proof of sufficient financial resources.
                <br /> <br />
                <span className="font-bold">
                  It is important for foreign workers to carefully research the
                  requirements and procedures for obtaining a worker visa in
                  Romania before initiating the process. It is also recommended
                  that foreign workers seek guidance from a legal professional
                  or the Romanian embassy or consulate in their home country for
                  specific information about the worker visa application
                  process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Romania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who want to study in Romania typically need to
                obtain a student visa in order to be legally enrolled in a
                Romanian educational institution. The specific requirements and
                procedures for obtaining a student visa in Romania will depend
                on the foreign student's country of origin and the type of
                studies they will be pursuing in Romania.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Romania student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a student visa in Romania typically
                involves several steps, including obtaining acceptance into a
                Romanian educational institution, obtaining a study permit, and
                applying for a visa at the Romanian embassy or consulate in the
                foreign student's home country.
                <br /> <br /> Here is a general outline of the process for
                applying for a student visa in Romania: <br /> <br />● Obtain
                acceptance into a Romanian educational institution: Foreign
                students will need to be accepted into a Romanian educational
                institution in order to be eligible for a student visa. The
                educational institution will typically be responsible for
                initiating the process for obtaining a study permit on behalf of
                the foreign student.
                <br /> <br />● Obtain a study permit: Foreign students will need
                to apply for a study permit in order to be legally enrolled in a
                Romanian educational institution. The process for obtaining a
                study permit typically involves the educational institution
                submitting a request for a study permit to the Romanian Ministry
                of Education. The foreign student will also need to provide
                proof of their education and academic qualifications. <br />{" "}
                <br />● Apply for a visa: Once the foreign student has been
                accepted into a Romanian educational institution and has
                obtained a study permit, they can apply for a student visa at
                the Romanian embassy or consulate in their home country. The
                foreign student will need to complete and submit the necessary
                application forms and documents, including a valid passport,
                proof of the study permit and acceptance into a Romanian
                educational institution, and proof of sufficient financial
                resources.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Romania student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In order to apply for a student visa in Romania, foreign
                students will typically need to provide a range of documents to
                demonstrate their eligibility for the visa and their intentions
                in Romania. The specific documents required for a student visa
                in Romania may vary depending on the foreign student's country
                of origin and the type of studies they will be pursuing in
                Romania.
                <br /> <br /> Here are some of the documents that foreign
                students may be required to provide when applying for a student
                visa in Romania: <br /> <br />● Passport: Foreign students will
                need to provide a copy of their valid passport, including the
                identification page and any relevant visas or stamps. <br />{" "}
                <br />● Visa application form: Foreign students will need to
                complete and submit a visa application form, which can typically
                be obtained from the Romanian embassy or consulate in the
                foreign student's home country or online. <br /> <br />●
                Acceptance letter from a Romanian educational institution:
                Foreign students will need to provide a copy of the acceptance
                letter from the Romanian educational institution where they will
                be studying. <br /> <br />● Evidence of education and academic
                qualifications: Foreign students may need to provide proof of
                their education and academic qualifications, such as transcripts
                or diplomas. <br /> <br />● Evidence of sufficient financial
                resources: Foreign students will need to demonstrate that they
                have sufficient financial resources to support themselves while
                studying in Romania, such as bank statements or proof of
                sponsorship. <br /> <br />● Health insurance: Foreign students
                may need to provide evidence of health insurance coverage while
                in Romania.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Romania student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Romania will depend
                on the specific circumstances of the foreign student and the
                duration of their studies in Romania. <br /> <br />
                In general, student visas in Romania are issued for the duration
                of the foreign student's studies in the country. This means that
                the student visa will typically be valid for the same period of
                time as the study permit that the foreign student has obtained.
                <br /> <br />
                As for the price of a student visa in Romania, foreign students
                will typically need to pay a visa fee when applying for a
                student visa. The exact amount of the visa fee will depend on
                the foreign student's country of origin and the duration of
                their studies in Romania.
                <br /> <br />
                <span className="font-bold">
                  It is important for foreign students to carefully research the
                  specific requirements and procedures for obtaining a student
                  visa in Romania before initiating the process. It is also
                  recommended that foreign students seek guidance from a legal
                  professional or the Romanian embassy or consulate in their
                  home country for specific information about the student visa
                  application process, including the validity and price of a
                  student visa.
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

export default Romania;
