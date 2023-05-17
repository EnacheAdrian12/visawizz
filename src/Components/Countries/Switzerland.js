import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Switzerland = () => {
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
        <title>Switzerland</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Switzerland travel visa, Switzerland work visa, Switzerland study visa, How to apply for an Switzerland visa, Switzerland visa requirements, Switzerland tourist visa, Switzerland student visa, Switzerland business visa, Switzerland visa processing time, Switzerland visa application process, Switzerland visa for Americans, Switzerland visa for Europeans, Switzerland visa for Sudanns, Switzerland visa for Canadians, Switzerland visa for Sudanns, Switzerland visa for Chinese, Switzerland visa for Africans, Switzerland visa for Asians, Switzerland visa for South Americans, Switzerland visa for Middle Easterners, Switzerland visa for UK citizens, Switzerland visa for EU citizens, Switzerland visa for Schengen area, Switzerland visa for non-EU citizens, Switzerland visa fees and charges"

     
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Switzerland
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Switzerland is a small European country that is known for its
              stunning natural scenery, rich culture, and fascinating history.
              It is a popular tourist destination, and its main attractions
              include the Swiss Alps, which are home to some of the most
              beautiful mountain scenery in the world, and the city of Geneva,
              which is known for its beautiful lake and world-class museums.
              Additionally, Switzerland is known for its delicious cuisine,
              which is heavily influenced by French, German, and Italian flavors
              and features a variety of cheeses, chocolates, and locally-sourced
              ingredients. The country is also known for its high-quality
              craftsmanship, particularly in the areas of watchmaking and
              precision engineering.
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
                Who can enter Switzerland without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries do not need a visa to enter
                Switzerland for stays of up to 90 days. These countries include:
                <br /> <br />●{" "}
                <span className="font-bold">EU and EEA member states.</span>
                <br /> <br />●{" "}
                <span className="font-bold">
                  Andorra, Australia, Canada, Japan, Monaco, New Zealand, San
                  Marino, United States.
                </span>
                <br /> <br />
                Citizens of other countries may need a visa to enter
                Switzerland, depending on the length of their stay and the
                purpose of their visit.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the rules for entering
                  Switzerland without a visa can vary depending on your country
                  of origin and the specifics of your trip. It is always a good
                  idea to check with the Swiss embassy or consulate in your
                  country for the most up-to-date information on the
                  requirements for entering Switzerland.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Switzerland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Switzerland, you will need to provide a
                number of documents as part of your application. These documents
                may include: <br /> <br />● A valid passport: You will need to
                provide a copy of your passport, as well as a copy of any
                previous passports you have held. -A completed visa application
                form: You will need to fill out an application form and sign it.
                You can find the application form on the website of the Swiss
                embassy or consulate in your country. <br /> <br />● A
                passport-sized photograph: You will need to provide a recent
                passport-sized photograph, taken within the last six months.
                <br /> <br />● Evidence of your purpose of stay: You will need
                to provide evidence of the purpose of your stay in Switzerland,
                such as a letter of invitation from a host in Switzerland, a
                confirmation of enrollment in a Swiss educational institution,
                or a letter from your employer stating the details of your work
                assignment in Switzerland. <br /> <br />● Evidence of your
                financial means: You will need to provide evidence that you have
                enough money to cover your living expenses in Switzerland, such
                as bank statements or a letter from a sponsor. <br /> <br />● A
                medical certificate: You may need to provide a medical
                certificate from a doctor to confirm that you are in good
                health. <br /> <br />● A police clearance certificate: You may
                need to provide a police clearance certificate from your country
                of origin to show that you have no criminal record.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Switzerland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Switzerland visa, you will need to follow these
                steps: <br /> <br />● Determine if you are eligible to apply for
                a Switzerland visa. In order to be eligible, you must meet the
                requirements for the type of visa you are applying for and have
                a valid reason for your stay in Switzerland. <br /> <br />●
                Collect the necessary documents. This includes your passport, a
                completed visa application form, a passport-sized photograph,
                and any other documents required for the specific type of visa
                you are applying for. <br /> <br />● Submit your application.
                You can submit your application in person at the Swiss embassy
                or consulate in your country, or at a designated visa
                application center. <br /> <br />● Pay the visa fee. You will
                need to pay a fee to process your visa application. The fee will
                vary depending on your country of origin and the specific type
                of visa you are applying for. <br /> <br />● Wait for a decision
                on your application. The processing time for a Switzerland visa
                can vary, so it is important to be patient. <br /> <br />● If
                your application is approved, collect your visa. Once your visa
                has been approved, you will need to collect it from the Swiss
                embassy or consulate, or from a designated visa application
                center. <br /> <br />● Once you have your visa, you can travel
                to Switzerland.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Switzerland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you can stay in Switzerland will depend on
                the type of visa you have and the purpose of your stay.
                <br /> <br />
                If you have a <span className="font-bold">
                  short-stay visa
                </span>{" "}
                for Switzerland, also known as a Schengen visa, you will be able
                to stay in Switzerland for up to 90 days within a 180-day
                period. This type of visa is intended for tourism, business, or
                short-term study or training.
                <br /> <br />
                If you have a <span className="font-bold">
                  long-stay visa
                </span>{" "}
                or residence permit for Switzerland, you will be able to stay in
                Switzerland for a longer period of time, depending on the
                specific terms of your visa or permit. This type of visa is
                intended for study, work, or family reunification.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the rules for staying in
                  Switzerland can vary depending on your country of origin and
                  the specifics of your trip. It is always a good idea to check
                  with the Swiss embassy or consulate in your country for the
                  most up-to-date information on the length of time you can stay
                  in Switzerland.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Switzerland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Switzerland has lifted all Covid-19 pandemic restrictions, there
                are no social distancing or mask wearing measures in place.
                There is no mandatory isolation requirement if you test positive
                for Covid19.
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
                In Switzerland, a diplomatic passport is issued to individuals
                who are working in a diplomatic capacity for their country, such
                as diplomats and members of a diplomatic mission. The Federal
                Department of Foreign Affairs (FDFA) is responsible for issuing
                diplomatic passports to eligible individuals in Switzerland.
                <br />
                <br />
                To obtain a diplomatic passport in Switzerland, an individual
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
                Diplomatic passport holders in Switzerland are generally granted
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
                  Passport in Switzerland can change over time. It's recommended
                  to check with the Federal Department of Foreign Affairs (FDFA)
                  of Switzerland for more updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Switzerland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa in Switzerland depends on your
                country of origin, the length of your stay, and the type of work
                you will be doing.
                <br /> <br />
                <span className="font-bold">
                  Citizens of EU and EEA member states and Switzerland do not
                  need a worker visa to work in Switzerland. They are able to
                  enter Switzerland with a valid passport or national ID card
                  and start working without the need for a separate work permit.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Citizens of other countries may need a worker visa to work in
                  Switzerland, depending on the length of their stay and the
                  type of work they will be doing. If you are planning to work
                  in Switzerland for less than 90 days, you may be able to enter
                  Switzerland without a worker visa as a short-term worker.
                  However, if you are planning to work in Switzerland for longer
                  than 90 days, you will need to apply for a worker visa in
                  order to work in Switzerland.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Switzerland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Switzerland, you will need to
                follow the steps below: <br /> <br />● Check if you need a visa:
                Citizens of certain countries do not need a visa to enter
                Switzerland for stays of up to 90 days. You can check if you
                need a visa by visiting the Swiss Federal Office for Migration's
                website. <br /> <br />● Choose the right visa: If you need a
                visa, you will need to choose the right type of visa for your
                purpose of stay. For work purposes, you can apply for a
                short-stay visa (for stays up to 90 days) or a long-stay visa
                (for stays longer than 90 days). <br /> <br />● Collect the
                necessary documents: To apply for a worker visa, you will need
                to provide certain documents, such as a valid passport, a
                completed visa application form, a recent passport-sized
                photograph, proof of your employment in Switzerland, and proof
                of sufficient financial means to support yourself during your
                stay. <br /> <br />● Submit your application: You will need to
                submit your visa application to the Swiss embassy or consulate
                in your country of residence. You may also need to attend an
                interview and provide biometric data (fingerprints and a
                photograph). <br /> <br />● Pay the fee: You will need to pay a
                visa fee to cover the cost of processing your application. The
                fee amount varies depending on the type of visa you are applying
                for and your nationality. <br /> <br />● Wait for a decision:
                The processing time for a worker visa can vary, so you will need
                to be patient. You will be notified by the embassy or consulate
                if your application has been approved or denied.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Switzerland Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are two types of worker visas for Switzerland: short-stay
                visas and long-stay visas. <br /> <br />
                <span className="font-bold">Short-stay visas</span>, also known
                as "Type C" visas, allow you to stay in Switzerland for up to 90
                days within a 180-day period. These visas are suitable for
                workers who are going to Switzerland for a short-term
                assignment, training, or internship.
                <br /> <br />
                <span className="font-bold">Long-stay visas</span>, also known
                as "Type D" visas, allow you to stay in Switzerland for more
                than 90 days. These visas are suitable for workers who are going
                to Switzerland for a longer-term assignment or to take up
                permanent employment.
                <br />
                <br />
                To apply for <span className="font-bold">a long-stay visa</span>
                , you will need to have a job offer from a Swiss employer. The
                employer will need to apply for a work permit on your behalf,
                and you will need to apply for a long-stay visa once the work
                permit has been approved.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Switzerland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Switzerland, you will need to
                provide the following documents: <br /> <br />● A valid
                passport: Your passport should be valid for at least three
                months beyond the end date of your planned stay in Switzerland.
                <br /> <br />● A completed visa application form: You will need
                to complete a visa application form and provide it along with
                your other documents. You can download the application form from
                the website of the Swiss embassy or consulate where you will be
                submitting your application. <br /> <br />● A recent
                passport-sized photograph: You will need to provide a recent,
                passport-sized photograph with your application. The photograph
                should meet the required specifications (e.g., size, background,
                etc.). <br /> <br />● Proof of your employment in Switzerland:
                You will need to provide evidence of your employment in
                Switzerland, such as a job offer letter or a contract of
                employment.
                <br /> <br />● Proof of sufficient financial means: You will
                need to show that you have sufficient financial means to support
                yourself during your stay in Switzerland. You can do this by
                providing bank statements, pay stubs, or other financial
                documents. <br /> <br />● Other documents: Depending on your
                specific situation, you may need to provide additional
                documents, such as a criminal record check, a medical
                certificate, or proof of health insurance.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Switzerland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Switzerland, you will need to
                submit your application to the Swiss embassy or consulate in
                your country of residence. You can find the nearest embassy or
                consulate by checking the website of the Swiss Federal
                Department of Foreign Affairs or by contacting the embassy or
                consulate directly.
                <br /> <br />
                You should apply for your worker visa as soon as possible, as
                the processing time can vary. It is a good idea to start the
                application process at least a few months before you plan to
                travel to Switzerland, to allow enough time for your application
                to be processed. <br /> <br />
                When you submit your application, you will need to provide all
                of the required documents and pay the visa fee. You may also
                need to attend an interview and provide biometric data
                (fingerprints and a photograph).
                <br /> <br />
                <span className="font-bold">
                  After you have submitted your application, you will need to
                  wait for a decision. The embassy or consulate will notify you
                  if your application has been approved or denied.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Switzerland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a visa to study in Switzerland depends
                on your nationality and the length of your stay.
                <br /> <br />
                <span className="font-bold">
                  Citizens of the European Union (EU), the European Free Trade
                  Association (EFTA), and some other countries do not need a
                  visa to enter Switzerland for stays of up to 90 days. If you
                  are from one of these countries and you plan to study in
                  Switzerland for a period of up to 90 days, you do not need a
                  visa. <br /> <br />
                  If you are from a country that requires a visa to enter
                  Switzerland, or if you plan to study in Switzerland for a
                  period longer than 90 days, you will need to apply for a
                  student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Switzerland student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Switzerland, you will need to
                follow the steps below: <br /> <br />● Check if you need a visa:
                You can check if you need a visa to study in Switzerland by
                visiting the Swiss Federal Office for Migration's website.
                <br /> <br />● Choose the right visa: If you need a visa, you
                will need to choose the right type of visa for your purpose of
                stay. For study purposes, you can apply for a short-stay visa
                (for stays up to 90 days) or a long-stay visa (for stays longer
                than 90 days). <br /> <br />● Collect the necessary documents:
                To apply for a student visa, you will need to provide certain
                documents, such as a valid passport, a completed visa
                application form, a recent passport-sized photograph, and proof
                of acceptance to a Swiss educational institution. You may also
                need to provide financial documents to show that you have
                sufficient funds to support yourself during your stay in
                Switzerland. <br /> <br />● Submit your application: You will
                need to submit your visa application to the Swiss embassy or
                consulate in your country of residence. You may also need to
                attend an interview and provide biometric data (fingerprints and
                a photograph). <br /> <br />● Pay the fee: You will need to pay
                a visa fee to cover the cost of processing your application. The
                fee amount varies depending on the type of visa you are applying
                for and your nationality. <br /> <br />● Wait for a decision:
                The processing time for a student visa can vary, so you will
                need to be patient. You will be notified by the embassy or
                consulate if your application has been approved or denied.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Switzerland student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Switzerland, you will need to
                provide the following documents: <br /> <br />● A valid
                passport: Your passport should be valid for at least three
                months beyond the end date of your planned stay in Switzerland.
                <br /> <br />● A completed visa application form: You will need
                to complete a visa application form and provide it along with
                your other documents. You can download the application form from
                the website of the Swiss embassy or consulate where you will be
                submitting your application. <br /> <br />● A recent
                passport-sized photograph: You will need to provide a recent,
                passport-sized photograph with your application. The photograph
                should meet the required specifications (e.g., size, background,
                etc.). <br /> <br />● Proof of acceptance to a Swiss educational
                institution: You will need to provide proof that you have been
                accepted to a Swiss educational institution, such as a letter of
                acceptance or an enrollment certificate. <br /> <br />● Proof of
                sufficient financial means: You will need to show that you have
                sufficient financial means to support yourself during your stay
                in Switzerland. You can do this by providing bank statements,
                proof of scholarships or financial aid, or other financial
                documents.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Switzerland student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Switzerland depends
                on the type of visa you are applying for.
                <br /> <br />
                Short-stay visas, also known as "Type C" visas, allow you to
                stay in Switzerland for up to 90 days within a 180-day period.
                These visas are suitable for students who are going to
                Switzerland for a short-term study program, such as a summer
                school or an exchange program. <br /> <br />
                Long-stay visas, also known as "Type D" visas, allow you to stay
                in Switzerland for more than 90 days. These visas are suitable
                for students who are going to Switzerland for a longer-term
                study program, such as a degree program. <br /> <br />
                The validity of a short-stay visa depends on the length of your
                stay in Switzerland. For example, if you are staying in
                Switzerland for 30 days, your visa will be valid for 30 days. If
                you are staying in Switzerland for 60 days, your visa will be
                valid for 60 days.
                <br /> <br />
                The validity of a long-stay visa depends on the length of your
                study program in Switzerland. For example, if you are studying
                in Switzerland for one year, your visa will be valid for one
                year. If you are studying in Switzerland for two years, your
                visa will be valid for two years.
                <br /> <br />
                <span className="font-bold">
                  The price of a student visa for Switzerland varies depending
                  on the type of visa you are applying for and your nationality.
                  You can find the current visa fees on the website of the Swiss
                  embassy or consulate where you will be submitting your
                  application. Other documents: Depending on your specific
                  situation, you may need to provide additional documents, such
                  as a criminal record check, a medical certificate, or proof of
                  health insurance.
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

export default Switzerland;
