import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Spain = () => {
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
        <title>Spain</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Spain travel visa, Spain work visa, Spain study visa, How to apply for an Spain visa, Spain visa requirements, Spain tourist visa, Spain student visa, Spain business visa, Spain visa processing time, Spain visa application process, Spain visa for Americans, Spain visa for Europeans, Spain visa for Spainns, Spain visa for Canadians, Spain visa for Spainns, Spain visa for Chinese, Spain visa for Africans, Spain visa for Asians, Spain visa for South Americans, Spain visa for Middle Easterners, Spain visa for UK citizens, Spain visa for EU citizens, Spain visa for Schengen area, Spain visa for non-EU citizens, Spain visa fees and charges"

          
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Spain
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Spain is a large European country that is known for its rich
              culture, fascinating history, and beautiful landscapes. It is a
              popular tourist destination, and its main attractions include the
              capital city of Madrid, which is known for its vibrant nightlife
              and world-class museums, and the island of Mallorca, which is
              known for its beautiful beaches and crystal clear waters.
              Additionally, Spain is known for its delicious cuisine, which is
              heavily influenced by Mediterranean flavors and features a variety
              of fresh seafood and locally-sourced ingredients. The country is
              also known for its vibrant music and dance traditions, including
              the popular genre of flamenco.
            </p>
          </Col>
        </Row>

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
                Who can enter Spain without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are permitted to enter Spain
                without a visa for stays of up to 90 days for tourist or
                business purposes.
                <br /> <br />
                These countries include: European Union (EU) and European
                Economic Area (EEA) countries Switzerland Andorra, Argentina,
                Australia, Bolivia, Brazil, Brunei, Canada, Chile, Costa Rica,
                El Salvador, Guatemala, Honduras, Israel, Japan, Malaysia,
                Mexico, Monaco, New Zealand, Nicaragua, Panama, Paraguay,
                Singapore, South Korea, United States, Uruguay, Vatican City,
                Venezuela
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the rules for entry into Spain
                  without a visa can vary depending on your country of origin
                  and the purpose of your trip. It is always a good idea to
                  check with the Spanish embassy or consulate in your country
                  for the most up-to-date information on the requirements for
                  entry into Spain.
                </span>
                <br /> <br />
                <span className="font-bold">
                  If you are not a citizen of one of the countries listed above,
                  or if you are planning to stay in Spain for longer than 90
                  days, you will need to apply for a visa in order to enter
                  Spain. The type of visa you will need will depend on the
                  purpose of your trip and the length of your stay.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Spain Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Spain, you will need to provide a number
                of documents as part of your application. These documents may
                include: <br /> <br />● A valid passport: You will need to
                provide a copy of your passport, as well as a copy of any
                previous passports you have held. <br /> <br />● A completed
                visa application form: You will need to fill out an application
                form and sign it. You can find the application form on the
                website of the Spanish embassy or consulate in your country.{" "}
                <br /> <br />● A passport-sized photograph: You will need to
                provide a recent passport-sized photograph, taken within the
                last six months. <br /> <br />● Evidence of your purpose of
                travel: This may include a letter from your employer stating the
                purpose of your trip, a letter from your educational institution
                if you are studying in Spain, or proof of your hotel reservation
                if you are traveling for tourism. <br /> <br />● Evidence of
                your financial means: You will need to provide evidence that you
                have enough money to cover your living expenses in Spain, such
                as bank statements or a letter from a sponsor. <br /> <br />● A
                medical certificate: You will need to provide a medical
                certificate from a doctor to confirm that you are in good
                health. <br /> <br />● A police clearance certificate: You will
                need to provide a police clearance certificate from your country
                of origin to show that you have no criminal record.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Spain Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Spain visa, you will need to follow these steps:
                <br /> <br />● Determine if you are eligible to apply for a
                Spain visa. In order to be eligible, you must meet the
                requirements for the specific type of visa you are applying for
                and have a valid reason for your trip to Spain. <br /> <br />●
                Collect the necessary documents. This includes your passport, a
                completed visa application form, a passport-sized photograph,
                and any other supporting documents required for your visa
                application. <br /> <br />● Submit your application. You can
                submit your application in person at the Spanish embassy or
                consulate in your country, or at a designated visa application
                center. <br /> <br />● Pay the visa fee. You will need to pay a
                fee to process your visa application. The fee will vary
                depending on your country of origin and the specific type of
                visa you are applying for. <br /> <br />● Wait for a decision on
                your application. The processing time for a Spain visa can vary,
                so it is important to be patient. <br /> <br />● If your
                application is approved, collect your visa. Once your visa has
                been approved, you will need to collect it from the Spanish
                embassy or consulate, or from a designated visa application
                center. <br /> <br />● Once you have your visa, you can travel
                to Spain.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Spain?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Spain will depend on the
                specific type of visa you have and the purpose of your trip.{" "}
                <br /> <br />
                If you are a citizen of the European Union (EU), European
                Economic Area (EEA), or Switzerland, you do not need a visa to
                enter Spain and you can stay for up to 90 days for tourist or
                business purposes.
                <br /> <br />
                If you are a citizen of a country that requires a visa to enter
                Spain, the length of your stay will depend on the specific type
                of visa you have. Tourist visas are typically valid for stays of
                up to 90 days, while other types of visas, such as work visas or
                student visas, may be valid for longer periods of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for staying in Spain
                  can vary depending on your country of origin and the purpose
                  of your trip. It is always a good idea to check with the
                  Spanish embassy or consulate in your country for the most
                  up-to-date information on the length of time you can stay in
                  Spain.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  If you wish to stay in Spain for longer than the period of
                  time allowed by your visa, you may need to apply for a
                  residence permit in order to extend your stay.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Spain?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Currently, there are no restrictions to travel to Spain, so it
                is not necessary to present any type of health certificate or
                control form.
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
                In Spain, a diplomatic passport is issued to individuals who are
                working in a diplomatic capacity for their country, such as
                diplomats and members of a diplomatic mission. The Ministry of
                Foreign Affairs is responsible for issuing diplomatic passports
                to eligible individuals in Spain.
                <br />
                <br />
                To obtain a diplomatic passport in Spain, an individual must
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
                Diplomatic passport holders in Spain are generally granted
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
                  Passport in Spain can change over time. It's recommended to
                  check with the Ministry of Foreign Affairs of Spain for more
                  updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Spain?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa in Spain depends on your country
                of origin and the specific details of your job offer. <br />{" "}
                <br />
                <span className="font-bold">
                  Citizens of the European Union (EU), European Economic Area
                  (EEA), and Switzerland do not need a worker visa to work in
                  Spain. They can enter Spain with a valid passport or national
                  ID card and start working without the need for a separate work
                  permit.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Citizens of other countries may need a worker visa to work in
                  Spain, depending on the specific details of their job offer.
                  If you are offered a job in Spain and you are a citizen of a
                  country that requires a visa to enter Spain, you will need to
                  apply for a worker visa in order to work in Spain.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Spain Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Spain worker visa, you will need to follow these
                steps: <br /> <br />● Determine if you are eligible to apply for
                a Spain worker visa. In order to be eligible, you must have a
                job offer from a Spanish employer and meet the other
                requirements for the visa. <br /> <br />● Collect the necessary
                documents. This includes your passport, a completed visa
                application form, a passport-sized photograph, and evidence of
                your job offer and employment contract. <br /> <br />● Submit
                your application. You can submit your application in person at
                the Spanish embassy or consulate in your country, or at a
                designated visa application center. <br /> <br />● Pay the visa
                fee. You will need to pay a fee to process your visa
                application. The fee will vary depending on your country of
                origin and the specific type of visa you are applying for.{" "}
                <br /> <br />● Wait for a decision on your application. The
                processing time for a Spain worker visa can vary, so it is
                important to be patient. <br /> <br />● If your application is
                approved, collect your visa. Once your visa has been approved,
                you will need to collect it from the Spanish embassy or
                consulate, or from a designated visa application center. <br />{" "}
                <br />● Once you have your visa, you can travel to Spain and
                start working.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Spain Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas for Spain, depending on
                the specific details of your job offer and your intended length
                of stay in the country. Some of the most common types of worker
                visas for Spain include: <br /> <br />●{" "}
                <span className="font-bold">Temporary worker visa</span>: This
                type of visa is for workers who have been offered a temporary
                job in Spain, usually for a period of up to one year.
                <br /> <br />●{" "}
                <span className="font-bold">Seasonal worker visa</span>: This
                type of visa is for workers who have been offered a temporary
                job in Spain that is tied to a specific season, such as a
                tourist industry job.
                <br /> <br />●{" "}
                <span className="font-bold">Self-employed worker visa</span>:
                This type of visa is for workers who are planning to start their
                own business or be self-employed in Spain. <br /> <br />●{" "}
                <span className="font-bold">Highly qualified worker visa</span>:
                This type of visa is for workers who have been offered a job in
                Spain that requires specialized knowledge or qualifications.{" "}
                <br /> <br />●{" "}
                <span className="font-bold">Intra-company transferee visa</span>
                : This type of visa is for workers who are being transferred to
                a Spanish branch of their current employer.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Spain Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Spain worker visa, you will need to provide a
                number of documents as part of your application. These documents
                may include: <br /> <br />● A valid passport: You will need to
                provide a copy of your passport, as well as a copy of any
                previous passports you have held. <br /> <br />● A completed
                visa application form: You will need to fill out an application
                form and sign it. You can find the application form on the
                website of the Spanish embassy or consulate in your country.{" "}
                <br /> <br />● A passport-sized photograph: You will need to
                provide a recent passport-sized photograph, taken within the
                last six months. <br /> <br />● Evidence of your job offer and
                employment contract: You will need to provide a copy of your
                employment contract, as well as a letter from your employer
                stating the details of your job offer, including the start and
                end dates, salary, and any other relevant information. <br />{" "}
                <br />● Evidence of your financial means: You will need to
                provide evidence that you have enough money to cover your living
                expenses in Spain, such as bank statements or a letter from a
                sponsor. <br /> <br />● A medical certificate: You will need to
                provide a medical certificate from a doctor to confirm that you
                are in good health. <br /> <br />● A police clearance
                certificate: You will need to provide a police clearance
                certificate from your country of origin to show that you have no
                criminal record.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Spain?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Spain, you will need to submit
                your application to the Spanish embassy or consulate in your
                country, or to a designated visa application center.
                <br /> <br />
                You can find the contact information for the Spanish embassy or
                consulate in your country on the website of the Ministry of
                Foreign Affairs of Spain. You can also find information on the
                visa application process on the website of the Spanish embassy
                or consulate in your country.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  worker visa in Spain can vary depending on your country of
                  origin and the specific details of your job offer. It is
                  always a good idea to check with the Spanish embassy or
                  consulate in your country for the most up-to-date information
                  on the process for applying for a worker visa in Spain.
                </span>
                <br /> <br />
                <span className="font-bold">
                  In general, you will need to apply for a worker visa in Spain
                  at least two months before the start date of your job. It is a
                  good idea to start the process as early as possible to ensure
                  that you have enough time to gather all of the necessary
                  documents and complete the application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Spain?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in Spain depends on your
                country of origin and the length of your study program.
                <br /> <br />
                <span className="font-bold">
                  Citizens of the European Union (EU), European Economic Area
                  (EEA), and Switzerland do not need a visa to study in Spain.
                  They can enter Spain with a valid passport or national ID card
                  and start studying without the need for a separate study
                  permit.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Citizens of other countries may need a visa to study in Spain,
                  depending on the length of their study program. If you are
                  planning to study in Spain for less than 90 days, you may be
                  able to enter Spain without a visa as a tourist. However, if
                  you are planning to study in Spain for longer than 90 days,
                  you will need to apply for a student visa in order to study in
                  Spain.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Spain student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Spain student visa, you will need to follow these
                steps: <br /> <br />● Determine if you are eligible to apply for
                a Spain student visa. In order to be eligible, you must have
                been accepted into a Spanish educational institution and meet
                the other requirements for the visa. <br /> <br />● Collect the
                necessary documents. This includes your passport, a completed
                visa application form, a passport-sized photograph, and evidence
                of your acceptance into a Spanish educational institution.
                <br /> <br />● Submit your application. You can submit your
                application in person at the Spanish embassy or consulate in
                your country, or at a designated visa application center. <br />{" "}
                <br />● Pay the visa fee. You will need to pay a fee to process
                your visa application. The fee will vary depending on your
                country of origin and the specific type of visa you are applying
                for. <br /> <br />● Wait for a decision on your application. The
                processing time for a Spain student visa can vary, so it is
                important to be patient. <br /> <br />● If your application is
                approved, collect your visa. Once your visa has been approved,
                you will need to collect it from the Spanish embassy or
                consulate, or from a designated visa application center. <br />{" "}
                <br />● Once you have your visa, you can travel to Spain and
                start studying.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Spain student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Spain, you will typically need to
                provide the following documents:
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
                ● Proof of acceptance from a Spanish educational institution
                such as a university or language school.
                <br />
                <br />
                ● Proof of sufficient funds to cover your expenses during your
                stay in Spain, including tuition fees and living costs.
                <br />
                <br />
                ● A health insurance policy that covers you for the duration of
                your stay in Spain.
                <br />
                <br />
                ● Proof of accommodation in Spain, such as a letter of
                acceptance from a student residence or a rental agreement.
                <br />
                <br />
                ● A Police clearance certificate or a criminal record check.
                <br />
                <br />
                ● Any additional documents required by the Spanish embassy or
                consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements may vary
                  depending on the type of student visa you are applying for and
                  the country where you are applying from. It's recommended to
                  check with the Spanish embassy or consulate in your home
                  country or the Spanish Immigration Office for more detailed
                  information and requirements.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's also important to keep in mind that the process of
                  obtaining a student visa can take several weeks or even
                  months, so it's recommended to start the process well in
                  advance of your planned departure date.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Spain student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a Spain student visa will depend on
                your country of origin and the length of your study program.
                <br /> <br />
                If you are a citizen of a country that requires a visa to enter
                Spain, your student visa will typically be valid for the
                duration of your study program, up to a maximum of one year. If
                your study program is longer than one year, you will need to
                apply for a residence permit in order to extend your stay in
                Spain. <br /> <br />
                The price of a Spain student visa will vary depending on your
                country of origin. In general, the visa fee for a Spain student
                visa will be around 60 EUR (about 70 USD). However, the exact
                fee may vary depending on your country of origin and the
                specific type of visa you are applying for.
                <br /> <br />
                It is important to note that the rules for student visas in
                Spain can vary depending on your country of origin and the
                specifics of your study program. It is always a good idea to
                check with the Spanish embassy or consulate in your country for
                the most up-to-date information on the validity and price of a
                Spain student visa.
              </p>
            </Container>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Spain;
