import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const NorthMacedonia = () => {
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
        <title>North Macedonia</title>
        <meta name="description" content="North Macedonia" />
        <meta
          name="keywords"
          content="North Macedonia travel visa, North Macedonia work visa, North Macedonia study visa, How to apply for an North Macedonia visa, North Macedonia visa requirements, North Macedonia tourist visa, North Macedonia student visa, North Macedonia business visa, North Macedonia visa processing time, North Macedonia visa application process, North Macedonia visa for Americans, North Macedonia visa for Europeans, North Macedonia visa for North Macedonians, North Macedonia visa for Canadians, North Macedonia visa for North Macedonians, North Macedonia visa for Chinese, North Macedonia visa for Africans, North Macedonia visa for Asians, North Macedonia visa for South Americans, North Macedonia visa for Middle Easterners, North Macedonia visa for UK citizens, North Macedonia visa for EU citizens, North Macedonia visa for Schengen area, North Macedonia visa for non-EU citizens, North Macedonia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            North Macedonia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              North Macedonia is a small country in the Balkans region of
              Europe, known for its rich culture, beautiful landscapes, and
              friendly people. The country has a long and complex history, with
              roots in the ancient kingdom of Paeonia and the Roman and
              Byzantine empires. Today, North Macedonia is known for its
              beautiful mountains, lakes, and rivers, which are popular with
              hikers and outdoor enthusiasts. The capital city of Skopje is a
              major cultural and economic hub, with many historic landmarks,
              museums, and cultural institutions. North Macedonia is also known
              for its vibrant music and arts scene, and its rich folk traditions
              that have been preserved and celebrated by generations of
              Macedonians. The country is a popular tourist destination, with
              many visitors coming to experience its beautiful landscapes and
              rich culture.
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
                Who can enter North Macedonia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter North Macedonia
                without a visa for stays of up to 90 days within a 180-day
                period. The countries whose citizens are able to enter North
                Macedonia without a visa are:
                <br />
                <br />
                <span className="font-bold">
                  Albania Andorra, Antigua and Barbuda, Argentina, Australia,
                  Austria, Bahamas, Barbados, Belgium, Bosnia and Herzegovina,
                  Brazil, Brunei, Bulgaria, Canada, Chile, Costa Rica, Croatia,
                  Cyprus, Czech Republic, Denmark, Estonia, Finland, France,
                  Germany, Greece, Guatemala, Holy See, Honduras, Hungary,
                  Iceland, Ireland, Israel, Italy, Japan, Kosovo, Latvia,
                  Liechtenstein, Lithuania, Luxembourg, Malta, Mexico, Moldova,
                  Monaco, Montenegro, Netherlands, New Zealand, Nicaragua,
                  Norway, Panama, Paraguay, Peru, Poland, Portugal, Romania, San
                  Marino, Serbia, Seychelles, Slovakia, Slovenia, South Korea,
                  Spain, Sweden, Switzerland, Uruguay, United Kingdom, United
                  States, Venezuela.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for visa-free travel to
                  North Macedonia may vary depending on your specific
                  circumstances and the country where you are traveling from. It
                  is recommended that you check the specific requirements for
                  travel to North Macedonia before your trip and contact the
                  embassy or consulate of North Macedonia in your country for
                  more information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for North Macedonia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to North Macedonia, you will need to provide
                the following documents:
                <br />
                <br />
                ● A completed and signed visa application form: You can download
                the application form from the embassy or consulate of North
                Macedonia in your country or from the website of the Ministry of
                Foreign Affairs of North Macedonia.
                <br />
                <br />
                ● A valid passport or travel document: You will need to have a
                valid passport or travel document that is valid for at least six
                months after the planned end of your stay in North Macedonia and
                has at least two blank pages for visa stamps.
                <br />
                <br />
                ● Two recent passport-size photographs: You will need to provide
                two recent passport-size photographs that meet the specific
                requirements for passport photos.
                <br />
                <br />
                ● A letter of invitation or a proof of accommodation: Depending
                on the purpose of your visit to North Macedonia, you may need to
                provide a letter of invitation from a host in North Macedonia or
                a proof of accommodation, such as a hotel reservation.
                <br />
                <br />
                ● A travel insurance policy: You will need to provide proof of a
                valid travel insurance policy that covers the duration of your
                stay in North Macedonia.
                <br />
                <br />
                ● Other documents as required: Depending on the specific
                circumstances of your visit and the type of visa you are
                applying for, you may need to provide additional documents, such
                as a certificate of employment, a proof of financial means, or a
                letter from your educational institution.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the documents required for a visa
                  to North Macedonia may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of North Macedonia in your country for more
                  information on the specific documents required for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a North Macedonia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                If you want to apply for a North Macedonia visa, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine the type of visa you need: North Macedonia offers
                several types of visas, including tourist visas, business visas,
                and student visas. Determine the type of visa that best fits
                your purpose of travel.
                <br />
                <br />
                ● Collect the required documents: You will need to submit
                several documents as part of your visa application, including a
                valid passport, a completed visa application form, and proof of
                financial means.
                <br />
                <br />
                ● Schedule an appointment: You will need to schedule an
                appointment with the nearest North Macedonia embassy or
                consulate to submit your application in person.
                <br />
                <br />
                ● Attend the appointment: On the day of your appointment, you
                will need to bring all of your required documents with you to
                the embassy or consulate. You may also be required to undergo an
                interview as part of the visa application process.
                <br />
                <br />
                ● Wait for a decision: After you have submitted your
                application, the embassy or consulate will review your
                application and make a decision. You should receive a
                notification about the outcome of your application within a few
                weeks.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the embassy or
                  consulate for the most up-to-date information and
                  requirements, as these can change over time.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in North Macedonia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you can stay in North Macedonia depends
                on the type of visa that you have. For example:
                <br />
                <br />
                <span className="font-bold">Tourist visas</span>: Tourist visas
                are usually issued for stays of up to 90 days within a 180-day
                period.
                <br />
                <br />
                <span className="font-bold">Business visas</span>: Business
                visas are usually issued for stays of up to 90 days within a
                180-day period.
                <br />
                <br />
                <span className="font-bold">Student visas</span>: Student visas
                are typically issued for the duration of your studies in North
                Macedonia, up to a maximum of one year.
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that these are general guidelines and the actual
                  length of stay may vary depending on your specific
                  circumstances and the policies of the North Macedonia embassy
                  or consulate where you apply for your visa. You should check
                  with the embassy or consulate for the most up-to-date
                  information on the length of stay for the type of visa that
                  you are applying for.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in North Macedonia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID test is not required when arriving in North Macedonia.
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
                About Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials who are
                traveling abroad on official business. In North Macedonia,
                diplomatic passports are issued by the Ministry of Foreign
                Affairs to individuals who are representing the country abroad
                in an official capacity.
                <br />
                <br />
                Holders of diplomatic passports are generally entitled to
                certain privileges and exemptions, such as immunity from
                prosecution, customs, and immigration regulations. They may also
                receive special treatment and assistance from foreign
                governments while traveling abroad.
                <br />
                <br />
                To be eligible for a diplomatic passport in North Macedonia, you
                must be a government official or employee who has been
                authorized to represent the country abroad in an official
                capacity. You will need to provide proof of your official status
                and the purpose of your trip when applying for a diplomatic
                passport.
                <br />
                <br />
                <span className="font-bold">
                  The specific requirements for obtaining a diplomatic passport
                  in North Macedonia may vary depending on your circumstances
                  and the policies of the Ministry of Foreign Affairs. You
                  should contact the Ministry or the nearest North Macedonia
                  embassy or consulate for more information on the process of
                  applying for a diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in North Macedonia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in North Macedonia, you may need a
                worker visa. A worker visa is a type of visa that allows you to
                enter North Macedonia for the purpose of working.
                <br />
                <br />
                To be eligible for a worker visa in North Macedonia, you will
                generally need to have a job offer from a North Macedonian
                employer and meet other requirements, such as having the
                necessary qualifications and skills for the job. You will also
                need to provide certain documents as part of your visa
                application, such as a valid passport, a completed visa
                application form, and proof of your employment offer.
                <br />
                <br />
                The process for applying for a worker visa in North Macedonia
                may vary depending on your circumstances and the policies of the
                North Macedonian embassy or consulate where you apply. You
                should contact the embassy or consulate for more information on
                the specific requirements and procedures for obtaining a worker
                visa in North Macedonia.
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that you may also need to obtain a work permit in
                  addition to a worker visa in order to legally work in North
                  Macedonia. You should check with the Ministry of Labor and
                  Social Policy for information on the process of obtaining a
                  work permit in North Macedonia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a North Macedonia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in North Macedonia, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine your eligibility: Make sure you meet the
                requirements for a worker visa in North Macedonia, including
                having a job offer from a North Macedonian employer and the
                necessary qualifications and skills for the job.
                <br />
                <br />
                ● Gather the required documents: You will need to submit several
                documents as part of your worker visa application, including a
                valid passport, a completed visa application form, and proof of
                your employment offer. You may also need to provide other
                documents, such as a police clearance certificate and proof of
                financial means.
                <br />
                <br />
                ● Schedule an appointment: You will need to schedule an
                appointment with the nearest North Macedonia embassy or
                consulate to submit your worker visa application in person.
                <br />
                <br />
                ● Attend the appointment: On the day of your appointment, you
                will need to bring all of your required documents with you to
                the embassy or consulate. You may also be required to undergo an
                interview as part of the worker visa application process.
                <br />
                <br />
                ● Wait for a decision: After you have submitted your worker visa
                application, the embassy or consulate will review your
                application and make a decision. You should receive a
                notification about the outcome of your application within a few
                weeks.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the embassy or
                  consulate for the most up-to-date information and
                  requirements, as these can change over time.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of North Macedonia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In North Macedonia, there are several types of worker visas that
                you can apply for, depending on your circumstances and the
                purpose of your work in the country. Some common types of worker
                visas in North Macedonia include:
                <br />
                <br />
                <span className="font-bold">Temporary worker visa</span>: A
                temporary worker visa is issued for a specific period of time
                and allows you to work in North Macedonia for a temporary job or
                project.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : A seasonal worker visa is issued for a specific period of time
                and allows you to work in North Macedonia on a seasonal basis,
                such as during the summer months.
                <br />
                <br />
                <span className="font-bold">Highly skilled worker visa</span>: A
                highly skilled worker visa is issued to individuals who have
                specialized skills or expertise that are in high demand in North
                Macedonia.
                <br />
                <br />
                <span className="font-bold">Self-employed worker visa</span>: A
                self-employed worker visa is issued to individuals who are
                planning to work in North Macedonia as self-employed individuals
                or freelancers.
                <br />
                <br />
                <span className="font-bold">
                  The specific requirements and procedures for obtaining each
                  type of worker visa in North Macedonia may vary, so it is
                  important to check with the embassy or consulate for the most
                  up-to-date information. You should also make sure to apply for
                  the type of worker visa that best fits your circumstances and
                  the purpose of your work in North Macedonia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for North Macedonia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in North Macedonia, you will
                generally need to provide the following documents:
                <br />
                <br />
                ● A valid passport: You will need to submit a copy of your
                passport, which must be valid for at least six months beyond the
                expected duration of your stay in North Macedonia.
                <br />
                <br />
                ● A completed visa application form: You will need to fill out a
                visa application form and submit it along with your other
                documents.
                <br />
                <br />
                ● Proof of your employment offer: You will need to provide a
                copy of your employment contract or offer letter from your North
                Macedonian employer.
                <br />
                <br />
                ● Proof of your qualifications and skills: You will need to
                provide evidence of your qualifications and skills, such as
                copies of your education certificates or professional licenses.
                <br />
                <br />
                ● A police clearance certificate: You may be required to provide
                a police clearance certificate from your country of residence,
                which indicates that you have no criminal record.
                <br />
                <br />
                ● Proof of financial means: You may need to provide proof of
                your financial means, such as bank statements or a letter from
                your employer stating that your salary will be paid in North
                Macedonia.
                <br />
                <br />
                ● Other documents: Depending on your specific circumstances, you
                may need to provide other documents as part of your worker visa
                application.
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that the requirements for obtaining a worker visa
                  in North Macedonia can vary depending on the embassy or
                  consulate where you apply and the specific type of worker visa
                  you are applying for. You should check with the embassy or
                  consulate for the most up-to-date information on the specific
                  documents that you will need to provide.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in North Macedonia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in North Macedonia, you will need to
                schedule an appointment with the nearest North Macedonia embassy
                or consulate. You can usually find information on how to
                schedule an appointment on the embassy or consulate's website,
                or you may be able to do so by contacting them directly.
                <br />
                <br />
                It is important to apply for your worker visa well in advance of
                your intended travel date, as the visa application process can
                take several weeks. You should plan to submit your application
                at least a few months before you plan to travel, to allow enough
                time for the embassy or consulate to review your application and
                make a decision.
                <br />
                <br />
                Keep in mind that you may need to attend an interview as part of
                the worker visa application process, so it is a good idea to be
                prepared for this. You may also be required to provide
                additional documents or information during the interview.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the embassy or
                  consulate for the most up-to-date information and
                  requirements, as these can change over time.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in North Macedonia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in North Macedonia, you may need a
                student visa. A student visa is a type of visa that allows you
                to enter North Macedonia for the purpose of studying at an
                educational institution.
                <br />
                <br />
                To be eligible for a student visa in North Macedonia, you will
                generally need to have been accepted to a North Macedonian
                educational institution and meet other requirements, such as
                having the necessary qualifications and sufficient financial
                means to support your studies. You will also need to provide
                certain documents as part of your visa application, such as a
                valid passport, a completed visa application form, and proof of
                your acceptance to an educational institution.
                <br />
                <br />
                The process for applying for a student visa in North Macedonia
                may vary depending on your circumstances and the policies of the
                North Macedonian embassy or consulate where you apply. You
                should contact the embassy or consulate for more information on
                the specific requirements and procedures for obtaining a student
                visa in North Macedonia.
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that you may also need to obtain a residence
                  permit in addition to a student visa in order to legally study
                  in North Macedonia. You should check with the Ministry of
                  Interior for information on the process of obtaining a
                  residence permit in North Macedonia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a North Macedonia student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for North Macedonia, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine the type of student visa you need: There are several
                types of student visas available for North Macedonia, including
                short-term student visas and long-term student visas. The
                specific type of visa you will need will depend on the length of
                your studies in North Macedonia.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                completed and signed visa application form, a valid passport or
                travel document, two recent passport-size photographs, and other
                documents as required. The specific documents required will
                depend on the type of student visa you are applying for and the
                country where you are applying.
                <br />
                <br />
                ● Pay the visa processing fee: You will need to pay a fee to
                cover the cost of processing your student visa application. The
                fee amount will depend on the type of student visa you are
                applying for and the country where you are applying.
                <br />
                <br />
                ● Submit your application: You will need to submit your student
                visa application, along with all required documents and the visa
                processing fee, to the embassy or consulate of North Macedonia
                in your country. You may be required to attend an interview as
                part of the application process.
                <br />
                <br />
                ● Wait for a decision on your application: The processing time
                for a North Macedonia student visa can vary, but it is usually
                within 15 days of the date of submission. You will be notified
                of the decision on your application by the embassy or consulate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  student visa to North Macedonia may vary depending on the
                  specific circumstances of your visit and the country where you
                  are applying. It is recommended that you contact the embassy
                  or consulate of North Macedonia in your country for more
                  information on the specific process for applying for a student
                  visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                North Macedonia student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In order to obtain a student visa for North Macedonia, you will
                typically need to provide the following documents:
                <br />
                <br />
                ● A valid passport with at least six months of validity
                remaining.
                <br />
                <br />
                ● Completed student visa application form.
                <br />
                <br />
                ● Recent passport-size photograph.
                <br />
                <br />
                ● Proof of payment of visa fees.
                <br />
                <br />
                ● Original and a copy of acceptance letter from the University
                in North Macedonia.
                <br />
                <br />
                ● Original and a copy of the contract signed between the
                applicant and the University.
                <br />
                <br />
                ● Original and a copy of the health insurance valid in North
                Macedonia.
                <br />
                <br />
                ● Proof of financial means for covering the expenses during the
                stay, such as bank statements.
                <br />
                <br />
                ● Criminal record check certificate.
                <br />
                <br />
                ● Medical certificate.
                <br />
                <br />
                ● Proof of accommodation.
                <br />
                <br />
                <span className="font-bold">
                  It's also important to note that, North Macedonia is not a
                  member of the European Union but it's a candidate country and
                  has applied for accession to the EU. North Macedonia is also a
                  party to the Visa Waiver Agreement with EU Member States,
                  which allows citizens of some countries to enter North
                  Macedonia without a visa for short stays. However, for longer
                  stays, such as for studying, a visa is still required.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Please note that the visa requirements may vary depending on
                  the individual's nationality, purpose of the visit and
                  duration of the stay. And also, it is always recommended to
                  double check the requirement via the nearest North Macedonia
                  Embassy or Consulate in your home country as the requirements
                  can vary based on time and situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for North Macedonia student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for North Macedonia can
                vary depending on the length of the study program and the
                individual's nationality.
                <br />
                <br />
                Generally, student visas for North Macedonia are valid for the
                duration of the study program, up to a maximum of one year. They
                can be renewed for additional periods if the student's program
                of study is longer than one year.
                <br />
                <br />
                <span className="font-bold">Short-term student visas</span>:
                These visas are issued for a period of up to 90 days and are
                typically used for short-term study programs or exchange
                programs.
                <br />
                <br />
                The cost of a student visa for North Macedonia can vary
                depending on the individual's country of citizenship. The visa
                fee for student visa is around €30, but it may vary based on the
                time and location. It is best to check with the North Macedonian
                consulate or embassy in your home country for the most
                up-to-date information on visa fees.
                <br />
                <br />
                It's also worth noting that, Sometimes student visas are issued
                without any fee for students from some countries based on mutual
                agreement between countries. So you should double check with the
                North Macedonian embassy in your home country for the most
                updated information about the fee for your case.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that, the fees and requirements for
                  visa can change over time, so it's recommended to check with
                  the nearest North Macedonia Embassy or Consulate in your home
                  country for the most up-to-date and accurate information.
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

export default NorthMacedonia;
