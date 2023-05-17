import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const China = () => {
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
        <title>China</title>
        <meta name="description" content="China" />
        <meta
          name="keywords"
          content="China travel visa, China work visa, China study visa, How to apply for an China visa, China visa requirements, China tourist visa, China student visa, China business visa, China visa processing time, China visa application process, China visa for Americans, China visa for Europeans, China visa for Chinans, China visa for Canadians, China visa for Indians, China visa for Chinese, China visa for Africans, China visa for Asians, China visa for South Americans, China visa for Middle Easterners, China visa for UK citizens, China visa for EU citizens, China visa for Schengen area, China visa for non-EU citizens, China visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            China
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              China is a large country located in East Asia, and it is well
              known for its rich culture and history, beautiful landscapes, and
              vibrant economy. Some of the most notable things that China is
              known for include its Great Wall, which is one of the world's most
              famous landmarks, its many beautiful temples and palaces, such as
              the Forbidden City in Beijing, and its delicious cuisine, which is
              known for its use of herbs and spices. Additionally, China is
              known for its vibrant art and music scenes, and the country has a
              long and rich tradition of artistic expression. Finally, China is
              known for its strong economy, which is the world's second-largest,
              and its status as a global superpower.
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
                Who can enter China without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are a few categories of foreign nationals who are able to
                enter China without a visa, depending on the purpose and
                duration of their visit. Here are some examples of individuals
                who may be able to enter China without a visa:
                <br />
                <br />
                Transit passengers: Foreign nationals who are transiting through
                China and do not leave the airport transit area may be able to
                enter China without a visa, depending on the specific
                circumstances of their transit.
                <br />
                <br />
                Tourists: Foreign nationals who are visiting China for tourism
                purposes and will be staying in China for no more than 15 days
                may be able to enter China without a visa. This applies to
                citizens of certain countries, including the United States,
                Canada, the United Kingdom, and many other countries.
                <br />
                <br />
                Business travelers: Foreign nationals who are visiting China for
                business purposes and will be staying in China for no more than
                15 days may be able to enter China without a visa. This applies
                to citizens of certain countries, including the United States,
                Canada, the United Kingdom, and many other countries.
                <br />
                <br />
                <span className="font-bold">
                  It's worth noting that the eligibility requirements for
                  visa-free entry to China may vary depending on the specific
                  circumstances of the individual's visit and the country they
                  are a citizen of. Be sure to check the requirements carefully
                  and contact the embassy or consulate of China in your country
                  of residence for more information.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  If you do not qualify for visa-free entry to China, you will
                  typically need to obtain a visa before you can enter the
                  country. There are several types of visas available for
                  different purposes, such as business visas, work visas, and
                  student visas. Be sure to check the specific requirements and
                  follow the instructions provided by the embassy or consulate
                  to ensure that you are able to enter China legally.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for China Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to China, you will typically need to provide
                the following documents:
                <br />
                <br />● A completed and signed visa application form.
                <br />
                <br />● A valid passport with at least six months of validity
                remaining.
                <br />
                <br />● Two passport-size photographs.
                <br />
                <br />● A certificate of good conduct or police clearance
                certificate.
                <br />
                <br />● Any other documents that may be required, depending on
                the purpose of your visit to China and the type of visa you are
                applying for. For example, if you are applying for a business
                visa, you may need to provide an invitation letter from a
                Chinese company or organization. If you are applying for a work
                visa, you may need to provide a job offer or employment contract
                from a Chinese company..
                <br />
                <br />
                <span className="font-bold">
                  It's worth noting that the specific documents required for a
                  visa to China may vary depending on the embassy or consulate
                  where you are applying and the type of visa you are seeking.
                  Be sure to check the requirements carefully and provide all
                  required documents to avoid delays in the visa application
                  process.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's also important to note that you may need to provide
                  additional documents or meet other requirements depending on
                  the type of visa you are seeking. For example, if you are
                  applying for a student visa, you may need to provide an
                  acceptance letter from a Chinese educational institution. Be
                  sure to check the specific requirements and follow the
                  instructions provided by the embassy or consulate to ensure
                  that you provide all required documents and meet all necessary
                  requirements for your visa application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a China Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to China, you will need to follow these
                steps:
                <br />
                <br />● Determine your eligibility. To be eligible for a visa to
                China, you will typically need to meet certain requirements,
                such as having a valid passport and a clean criminal record. You
                will also need to have a specific purpose for your visit to
                China, such as tourism, business, work, or study.
                <br />
                <br />● Gather the required documents. As mentioned earlier, you
                will need to provide certain documents as part of your visa
                application, including a completed visa application form, a
                valid passport, passport-size photographs, and any other
                documents that may be required depending on the purpose of your
                visit to China and the type of visa you are applying for.
                <br />
                <br />● Schedule an appointment with the embassy or consulate.
                Contact the embassy or consulate of China in your country of
                residence to schedule an appointment to submit your visa
                application.
                <br />
                <br />● Attend the appointment and submit your application.
                Bring all required documents with you to the appointment, as
                well as any fees that are required. The embassy or consulate
                will review your application and may ask you additional
                questions or request additional documents.
                <br />
                <br />● Wait for a decision. It may take several weeks or longer
                for the embassy or consulate to process your visa application.
                You will be notified by mail or email when a decision has been
                made.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the visa application process may
                  vary depending on the embassy or consulate where you are
                  applying and the type of visa you are seeking. Be sure to
                  check the specific requirements and follow the instructions
                  provided by the embassy or consulate to ensure that your
                  application is processed smoothly.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in China?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are able to stay in China will depend on
                the specific circumstances of your case and the type of visa you
                have obtained. Here are some examples of how long you may be
                able to stay in China depending on the type of visa you have:
                <br />
                <br />
                <span className="font-bold">Tourist visa</span>
                : Tourist visas to China are typically granted for stays of up
                to 30 days, although in some cases they may be granted for
                longer periods of time.
                <br />
                <br />
                <span className="font-bold">Business visa</span>
                : Business visas to China are typically granted for stays of up
                to 90 days, although in some cases they may be granted for
                longer periods of time.
                <br />
                <br />
                <span className="font-bold">Work visa</span>
                : Work visas to China are typically granted for stays of up to
                one year, although in some cases they may be granted for shorter
                periods of time.
                <br />
                <br />
                <span className="font-bold">Student visa</span>
                : Student visas to China are typically granted for stays that
                correspond to the length of the academic program you will be
                enrolled in. For example, if you are enrolled in a one-year
                degree program, your student visa may be granted for one year.
                <br />
                <br />
                <span className="font-bold">
                  It's worth noting that the length of time you are able to stay
                  in China may vary depending on the specific circumstances of
                  your case and the type of visa you have obtained. Be sure to
                  check the specific terms of your visa and follow the
                  instructions provided by the embassy or consulate to ensure
                  that you are able to stay in China legally.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  If you want to stay in China for a longer period of time than
                  your visa allows, you may need to apply for an extension of
                  your visa before your initial visa expires. Be sure to check
                  the specific requirements and follow the instructions provided
                  by the embassy or consulate to ensure that you are able to
                  extend your stay in China legally.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in China?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Before the recent relaxation, China had one of the toughest
                anti-Covid regimes in the world - known as its zero-Covid
                policy.
                <br />
                <br />
                The measures included strict lockdowns even if only a handful of
                Covid cases had been found, mass testing in places where cases
                were reported, and people with Covid having to isolate at home
                or under quarantine at government facilities.
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
                In China, a diplomatic passport is a passport issued to
                diplomats, government officials, and other high-ranking
                individuals who are traveling abroad on official government
                business. Diplomatic passports are issued by the Chinese
                Ministry of Foreign Affairs and are intended to facilitate the
                holder's international travel and ensure their diplomatic
                immunity while representing the Chinese government abroad.
                <br />
                <br />
                Holders of diplomatic passports are typically entitled to a
                range of privileges and immunities while traveling, including:
                <br />
                <br />
                <span className="font-bold">
                  ● Exemption from visa requirements for certain countries.
                  <br />
                  <br />
                  ● Priority processing of visa applications for other
                  countries.
                  <br />
                  <br />
                  ● Exemption from customs duties and taxes on personal
                  belongings.
                  <br />
                  <br />
                  ● Exemption from immigration controls and quarantine
                  regulations.
                  <br />
                  <br />● Immunity from arrest, detention, and other legal
                  proceedings while in a foreign country.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are issued
                  only to individuals who are representing the Chinese
                  government on official business. Private citizens are not
                  eligible to hold a diplomatic passport. If you are not a
                  government official or diplomat, you will need to obtain a
                  regular Chinese passport in order to travel abroad.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in China?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you plan to work in China, you will need to obtain a worker
                visa, also known as a Z visa. This type of visa is issued to
                foreign nationals who are coming to China to take up employment
                or engage in other paid activities.
                <br />
                <br />
                To be eligible for a worker visa, you must have a job offer from
                a Chinese employer and be able to provide evidence of your
                qualifications and experience. Your employer will typically be
                responsible for sponsoring your worker visa application and
                helping you obtain the necessary documentation.
                <br />
                <br />
                <span className="font-bold">
                  In addition to a worker visa, you may also need to obtain a
                  work permit and a residence permit in order to work and live
                  in China legally. The process for obtaining these documents
                  can vary depending on your specific circumstances and the
                  regulations in the region where you will be working. It is
                  advisable to seek guidance from your employer or a legal
                  professional to ensure that you have all the necessary
                  documentation in place before beginning your job in China.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a China Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa (Z visa) to work in China, you will
                need to follow these steps:
                <br />
                <br />
                ● Obtain a job offer from a Chinese employer. Your employer will
                typically be responsible for sponsoring your worker visa
                application and helping you obtain the necessary documentation.
                <br />
                <br />● Gather the necessary documents. You will need to provide
                several documents as part of your worker visa application.
                <br />
                <br />● Submit your application. Once you have gathered all the
                necessary documents, you will need to submit your worker visa
                application to the Chinese embassy or consulate in your country
                of residence. You may be required to attend an interview as part
                of the application process.
                <br />
                <br />● Wait for a decision. The processing time for worker visa
                applications can vary, so it is important to allow sufficient
                time for your application to be reviewed. If your application is
                approved, you will receive a visa stamp in your passport.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the worker visa process can be
                  complex and may vary depending on your specific circumstances
                  and the regulations in the region where you will be working.
                  It is advisable to seek guidance from your employer or a legal
                  professional to ensure that you have all the necessary
                  documentation in place before beginning your job in China.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of China Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                <span className="font-bold">Z visa for employees</span>
                : This type of visa is issued to foreign nationals who have been
                offered employment by a Chinese company or organization. It
                allows the holder to work in China for a specific employer for a
                set period of time.
                <br />
                <br />
                <span className="font-bold">Z visa for personal matters</span>
                : This type of visa is issued to foreign nationals who are
                coming to China to work for a Chinese family or individual as a
                domestic worker, tutor, or other personal assistant.
                <br />
                <br />
                <span className="font-bold">Z visa for internships</span>
                : This type of visa is issued to foreign students or recent
                graduates who are coming to China to participate in a formal
                internship program.
                <br />
                <br />
                <span className="font-bold">Z visa for performers</span>
                : This type of visa is issued to foreign artists, performers,
                and other creative professionals who are coming to China to work
                on a temporary basis.
                <br />
                <br />
                <span className="font-bold">Z visa for journalists</span>
                : This type of visa is issued to foreign journalists who are
                coming to China to work on a temporary basis.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  eligibility criteria for each type of worker visa may vary,
                  and the process for obtaining a worker visa can be complex. It
                  is advisable to seek guidance from your employer or a legal
                  professional to ensure that you have all the necessary
                  documentation in place before beginning your job in China.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for China Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to travel to China, you will need to have a
                valid passport and a visa. Depending on the purpose of your trip
                and the length of your stay, you may need to apply for a
                different type of visa. Some common types of visas for travel to
                China include:
                <br />
                <br />
                <span className="font-bold">Tourist visa (L visa)</span>
                : This type of visa is issued to foreign nationals who are
                traveling to China for tourism or leisure purposes. It allows
                the holder to stay in China for a specific period of time,
                typically up to 90 days.
                <br />
                <br />
                <span className="font-bold">Business visa (M visa)</span>
                : This type of visa is issued to foreign nationals who are
                traveling to China for business purposes, such as attending
                meetings, conferences, or exhibitions. It allows the holder to
                stay in China for a specific period of time, typically up to 90
                days.
                <br />
                <br />
                <span className="font-bold">Student visa (X visa)</span>
                : This type of visa is issued to foreign students who are coming
                to China to study at a Chinese educational institution. It
                allows the holder to stay in China for the duration of their
                studies.
                <br />
                <br />
                <span className="font-bold">Work visa (Z visa)</span>
                : This type of visa is issued to foreign nationals who are
                coming to China to work for a Chinese employer. It allows the
                holder to work in China for a specific employer for a set period
                of time.
                <br />
                <br />
                To apply for a visa to China, you will need to provide several
                documents as part of your application, including:
                <br />
                <br />● A valid passport with at least six months of remaining
                validity and at least two blank visa pages.
                <br />
                <br />● A completed visa application form, which can be obtained
                from the Chinese embassy or consulate in your country of
                residence.
                <br />
                <br />
                ● Two recent passport-style photographs.
                <br />
                <br />
                ● Any additional documents required for your specific type of
                visa, such as proof of employment, a letter of invitation, or
                evidence of your qualifications and experience.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa process can be complex
                  and may vary depending on your specific circumstances and the
                  regulations in the region where you will be traveling. It is
                  advisable to consult the Chinese embassy or consulate in your
                  country of residence for the most up-to-date information on
                  the documents required for your specific type of visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in China?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national seeking to work in China, you will
                need to apply for a worker visa, also known as a Z visa. The
                process for obtaining a worker visa can vary depending on your
                specific circumstances and the regulations in the region where
                you will be working. In general, however, you will need to
                follow these steps to apply for a worker visa in China:
                <br />
                <br />
                Obtain a job offer from a Chinese employer. Your employer will
                typically be responsible for sponsoring your worker visa
                application and helping you obtain the necessary documentation.
                <br />
                <br />
                Gather the necessary documents. You will need to provide several
                documents as part of your worker visa application.
                <br />
                <br />
                Submit your application. Once you have gathered all the
                necessary documents, you will need to submit your worker visa
                application to the Chinese embassy or consulate in your country
                of residence. You may be required to attend an interview as part
                of the application process.
                <br />
                <br />
                Wait for a decision. The processing time for worker visa
                applications can vary, so it is important to allow sufficient
                time for your application to be reviewed. If your application is
                approved, you will receive a visa stamp in your passport.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the worker visa process can be
                  complex and may vary depending on your specific circumstances
                  and the regulations in the region where you will be working.
                  It is advisable to seek guidance from your employer or a legal
                  professional to ensure that you have all the necessary
                  documentation in place before beginning your job in China.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in China?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, if you are a foreign national planning to study in China,
                you will need to obtain a student visa (X visa). This type of
                visa is issued to foreign students who are coming to China to
                study at a Chinese educational institution. It allows the holder
                to stay in China for the duration of their studies.
                <br />
                <br />
                To be eligible for a student visa, you must have been accepted
                to a Chinese educational institution and have a valid enrollment
                letter from the institution. You will also need to provide
                evidence of your financial resources, such as a bank statement
                or sponsorship letter, to show that you have sufficient funds to
                cover your tuition and living expenses while in China.
                <br />
                <br />
                To apply for a student visa, you will need to provide several
                documents as part of your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the student visa process can be
                  complex and may vary depending on your specific circumstances
                  and the regulations in the region where you will be studying.
                  It is advisable to seek guidance from your educational
                  institution or a legal professional to ensure that you have
                  all the necessary documentation in place before beginning your
                  studies in China.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a China Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● Acceptance to a Chinese educational institution. You must have
                been accepted to a Chinese educational institution and have a
                valid enrollment letter from the institution.
                <br />
                <br />● Gather the necessary documents. You will need to provide
                several documents as part of your student visa application.
                <br />
                <br />● Submit your application. Once you have gathered all the
                necessary documents, you will need to submit your student visa
                application to the Chinese embassy or consulate in your country
                of residence. You may be required to attend an interview as part
                of the application process.
                <br />
                <br />● Wait for a decision. The processing time for student
                visa applications can vary, so it is important to allow
                sufficient time for your application to be reviewed. If your
                application is approved, you will receive a visa stamp in your
                passport.
                <br />
                <br />
                Also you will need:
                <br />
                <br />
                <span className="font-bold">
                  A valid passport with at least six months of remaining
                  validity and at least two blank visa pages.
                  <br />
                  <br />
                  A completed visa application form, which can be obtained from
                  the Chinese embassy or consulate in your country of residence.
                  <br />
                  <br />
                  Two recent passport-style photographs.
                  <br />
                  <br />
                  An enrollment letter from your Chinese educational
                  institution.
                  <br />
                  <br />
                  Evidence of your financial resources, such as a bank statement
                  or sponsorship letter.
                  <br />
                  <br />A physical examination record, which must be completed
                  by a Chinese embassy-approved medical facility in your country
                  of residence.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the student visa process can be
                  complex and may vary depending on your specific circumstances
                  and the regulations in the region where you will be studying.
                  It is advisable to seek guidance from your educational
                  institution or a legal professional to ensure that you have
                  all the necessary documentation in place before beginning your
                  studies in China.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                China Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa (X visa) to study in China,
                you must meet the following requirements:
                <br />
                <br />
                ● Acceptance to a Chinese educational institution. You must have
                been accepted to a Chinese educational institution and have a
                valid enrollment letter from the institution.
                <br />
                <br />● Financial resources. You must be able to provide
                evidence of your financial resources, such as a bank statement
                or sponsorship letter, to show that you have sufficient funds to
                cover your tuition and living expenses while in China.
                <br />
                <br />● Health and character. You must be in good health and
                have a clean criminal record. You may be required to undergo a
                medical examination and provide a police clearance certificate
                as part of your student visa application.
                <br />
                <br />● Language proficiency. Depending on the program you are
                enrolling in and the language of instruction, you may be
                required to provide evidence of your language proficiency, such
                as a TOEFL or IELTS score.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for a student
                  visa can vary depending on your specific circumstances and the
                  regulations in the region where you will be studying. It is
                  advisable to consult the Chinese embassy or consulate in your
                  country of residence for the most up-to-date information on
                  the requirements for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for China Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa (X visa) for study in
                China can vary depending on your specific circumstances and the
                regulations in the region where you will be studying. In
                general, however, student visas are typically valid for the
                duration of your studies in China, up to a maximum of five
                years.
                <br />
                <br />
                The price of a student visa for China may also vary depending on
                the embassy or consulate where you apply and the processing time
                you choose. You may be required to pay a fee for the visa
                application, as well as any additional fees for additional
                services, such as express processing.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the price and validity of a
                  student visa can vary depending on your specific circumstances
                  and the regulations in the region where you will be studying.
                  It is advisable to consult the Chinese embassy or consulate in
                  your country of residence for the most up-to-date information
                  on the price and validity of a student visa for China.
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

export default China;
