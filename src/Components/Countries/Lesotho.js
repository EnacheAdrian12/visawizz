import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Lesotho = () => {
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
        <title>Lesotho</title>
        <meta name="description" content="Lesotho" />
        <meta
          name="keywords"
          content="Lesotho travel visa, Lesotho work visa, Lesotho study visa, How to apply for an Lesotho visa, Lesotho visa requirements, Lesotho tourist visa, Lesotho student visa, Lesotho business visa, Lesotho visa processing time, Lesotho visa application process, Lesotho visa for Americans, Lesotho visa for Europeans, Lesotho visa for Lesothons, Lesotho visa for Canadians, Lesotho visa for Lesothons, Lesotho visa for Chinese, Lesotho visa for Africans, Lesotho visa for Asians, Lesotho visa for South Americans, Lesotho visa for Middle Easterners, Lesotho visa for UK citizens, Lesotho visa for EU citizens, Lesotho visa for Schengen area, Lesotho visa for non-EU citizens, Lesotho visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Lesotho
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Lesotho is a small, landlocked country in Southern Africa,
              surrounded by South Africa. It is known for its rugged,
              mountainous terrain, which includes the highest peak in Southern
              Africa, Thabana Ntlenyana. Lesotho is also known for its unique
              culture and way of life, as it is the only country in the world
              that is entirely above 1,000 meters in elevation. The country is
              known for its hand-crafted blankets, known as Basotho blankets,
              which are made from local wool and are an important part of the
              country's cultural heritage.
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
                Who can enter Lesotho without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Lesotho is a landlocked country located in southern Africa.
                Depending on your nationality, you may be required to obtain a
                visa in order to enter Lesotho.
                <br />
                <br />
                Lesotho has visa-free arrangements with a number of countries,
                which allows their citizens to enter Lesotho without a visa for
                short stays. These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Botswana, Eswatini, Malawi, South Africa, Zambia.
                </span>
                <br />
                <br />
                Citizens of these countries can enter Lesotho without a visa for
                up to 90 days for tourism or business purposes.
                <br />
                <br />
                Citizens of other countries may be required to obtain a visa in
                order to enter Lesotho. You should contact the Embassy of
                Lesotho in your country for more detailed information on the
                specific requirements for entering Lesotho.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for entering Lesotho
                  may change from time to time, so you should check the most
                  up-to-date information before planning your trip.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Lesotho Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa in Lesotho, you will need to provide several
                documents. These may include:
                <br />
                <br />
                ● A valid passport: You will need to provide a passport that is
                valid for at least six months from the date of your intended
                arrival in Lesotho.
                <br />
                <br />
                ● A completed and signed visa application form: You will need to
                complete a visa application form and sign it as part of your
                visa application.
                <br />
                <br />
                ● Passport-sized photographs: You will need to provide one or
                more passport-sized photographs of yourself as part of your visa
                application.
                <br />
                <br />
                ● Evidence of your financial ability to support yourself while
                in Lesotho: You may need to provide evidence of your financial
                ability to support yourself while in Lesotho, such as bank
                statements or a letter from your bank.
                <br />
                <br />
                ● A medical certificate: You may be required to provide a
                medical certificate as part of your visa application. This
                certificate should confirm that you are in good health and do
                not have any communicable diseases.
                <br />
                <br />
                ● A police clearance certificate: You may be required to provide
                a police clearance certificate as part of your visa application.
                This certificate should confirm that you do not have any
                criminal record.
                <br />
                <br />● A letter of invitation: You may be required to provide a
                letter of invitation from a host in Lesotho, if you are visiting
                someone.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lesotho Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa in Lesotho, you will need to follow the
                steps below:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of visas available for travel to Lesotho, including tourist
                visas, business visas, and student visas. You should determine
                the type of visa that is appropriate for your trip, based on the
                purpose of your visit and the length of your stay.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide
                several documents when applying for a visa in Lesotho. These may
                include a valid passport, a completed and signed visa
                application form, passport-sized photographs, and evidence of
                your financial ability to support yourself while in the country.
                You may also be required to provide a medical certificate and a
                police clearance certificate.
                <br />
                <br />
                ● Submit your application: You will need to submit your visa
                application to the Embassy or Consulate of Lesotho in your
                country. You may be required to submit your application in
                person, by mail, or online, depending on the specific
                requirements of the Embassy or Consulate.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay a fee to process your
                visa application. The visa fee may vary depending on your
                nationality and the type of visa you are applying for.
                <br />
                <br />
                ● Wait for a decision: The processing time for a visa in Lesotho
                may vary, but you can expect to wait at least a few weeks for a
                decision on your application. You should not make any travel
                arrangements until you have received your visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a visa in Lesotho may vary depending on your nationality
                  and the type of visa you are applying for. You should contact
                  the Embassy or Consulate of Lesotho in your country for more
                  detailed information on how to apply for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Lesotho?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you can stay in Lesotho will depend on the
                type of visa you have obtained and the purpose of your visit.
                <br />
                <br />
                If you are traveling to Lesotho on a tourist visa, you will
                generally be allowed to stay in the country for up to 90 days.
                If you are traveling to Lesotho on a business visa, you may be
                allowed to stay for up to 60 days, depending on the specific
                terms of your visa.
                <br />
                <br />
                If you are studying in Lesotho on a student visa, you will
                generally be allowed to stay in the country for the duration of
                your studies, up to a maximum of four years.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for staying in Lesotho
                  may change from time to time, so you should check the most
                  up-to-date information before planning your trip. You should
                  also make sure that you have a valid passport that is valid
                  for at least six months from the date of your intended arrival
                  in Lesotho.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Lesotho?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Anyone entering Lesotho will be required to present a negative
                COVID-19 test result, no older than 72 hours. Fully vaccinated
                arrivals are exempt.
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
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials who are
                representing their country abroad. It allows the holder to
                travel internationally on official government business. In
                Lesotho, diplomatic passports are issued by the Ministry of
                Foreign Affairs and International Relations.
                <br />
                <br />
                Holders of a diplomatic passport are granted certain privileges
                and immunity while traveling abroad, as specified by the Vienna
                Convention on Diplomatic Relations. These privileges may include
                exemption from visas, customs duties, and local laws, as well as
                access to consular assistance in the event of an emergency.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a diplomatic passport is a
                  privilege, not a right, and it is only granted to individuals
                  who are representing their country in an official capacity. If
                  you are not a diplomat or government official, you will not be
                  eligible for a diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Lesotho?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Lesotho, you will need to obtain
                a worker visa. The type of worker visa that you will need
                depends on the nature of your work and how long you will be
                staying in the country.
                <br />
                <br />
                To apply for a worker visa, you will need to provide a number of
                documents, including a valid passport, a job offer letter, and
                proof of sufficient funds to support yourself while in Lesotho.
                You may also be required to undergo a medical examination and
                obtain a police clearance certificate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Lesotho may vary depending on your country of
                  origin and the type of work that you will be doing. It is
                  always a good idea to check with the Lesotho embassy or
                  consulate in your home country for the most up-to-date
                  information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lesotho Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lesotho, you will need to follow
                the steps below:
                <br />
                <br />
                ● Contact the Lesotho embassy or consulate in your home country
                to obtain the most up-to-date information on visa requirements
                and to request a visa application form. You can also download
                the visa application form from the website of the Ministry of
                Home Affairs.
                <br />
                <br />
                ● Fill out the visa application form and gather the required
                documents, which may include a valid passport, a job offer
                letter, proof of sufficient funds to support yourself while in
                Lesotho, and a police clearance certificate.
                <br />
                <br />
                ● Schedule an appointment with the Lesotho embassy or consulate
                to submit your visa application and supporting documents.
                <br />
                <br />
                ● Pay the visa application fee, which may vary depending on the
                type of worker visa that you are applying for and your country
                of origin.
                <br />
                <br />
                ● Attend your visa interview, if required. During the interview,
                you may be asked questions about your work in Lesotho and your
                reasons for wanting to work in the country.
                <br />
                <br />
                ● Wait for a decision on your visa application. If your visa is
                approved, you will be issued with a visa approval letter, which
                you will need to present to immigration officials when you
                arrive in Lesotho.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  take several weeks or even months, so it is a good idea to
                  start the process as early as possible. It is also a good idea
                  to check with the Lesotho embassy or consulate in your home
                  country for the most up-to-date information on visa
                  requirements and the visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Lesotho Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available in Lesotho,
                including:
                <br />
                <br />
                <span className="font-bold">Temporary worker visa</span>
                : This type of visa is issued to individuals who are coming to
                Lesotho to work for a specific period of time. It is usually
                valid for up to one year, and can be extended for up to three
                years in total.
                <br />
                <br />
                <span className="font-bold">Permanent worker visa</span>
                : This type of visa is issued to individuals who are coming to
                Lesotho to work on a long-term basis. It is usually valid for up
                to five years, and can be extended indefinitely.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : This type of visa is issued to individuals who are coming to
                Lesotho to work on a seasonal basis, such as for agricultural or
                tourism-related industries. It is usually valid for up to six
                months.
                <br />
                <br />
                <span className="font-bold">Student worker visa</span>
                : This type of visa is issued to students who are coming to
                Lesotho to work part-time while studying. It is usually valid
                for the duration of the student's studies, and allows the
                student to work up to 20 hours per week.
                <br />
                <br />
                <span className="font-bold">Volunteer worker visa</span>
                : This type of visa is issued to individuals who are coming to
                Lesotho to work as volunteers for a non-profit organization. It
                is usually valid for up to one year.
                <br />
                <br />
                <span className="font-bold">
                  The type of worker visa that you will need will depend on the
                  nature of your work and how long you will be staying in
                  Lesotho. It is always a good idea to check with the Lesotho
                  embassy or consulate in your home country for the most
                  up-to-date information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Lesotho Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lesotho, you will need to provide
                a number of documents, including:
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of the photo
                page of your passport, which must be valid for at least six
                months beyond the date of your intended stay in Lesotho.
                <br />
                <br />
                ● A completed visa application form: You can obtain a visa
                application form from the website of the Ministry of Home
                Affairs or from the Lesotho embassy or consulate in your home
                country.
                <br />
                <br />
                ● A job offer letter: You will need to provide a letter from
                your employer in Lesotho stating the nature of your work and the
                length of your contract.
                <br />
                <br />
                ● Proof of sufficient funds: You will need to provide evidence
                that you have sufficient funds to support yourself while in
                Lesotho, such as bank statements or a letter from your employer
                stating that you will be provided with a salary or allowance.
                <br />
                <br />
                ● A police clearance certificate: You may be required to obtain
                a police clearance certificate from your home country, which
                shows that you have no criminal record.
                <br />
                <br />
                ● A medical certificate: You may be required to undergo a
                medical examination and obtain a medical certificate from a
                licensed physician.
                <br />
                <br />
                ● Other documents: Depending on your specific circumstances, you
                may be required to provide additional documents, such as
                evidence of your educational qualifications or proof of your
                relationship status.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the documents required for a
                  worker visa in Lesotho may vary depending on the type of
                  worker visa that you are applying for and your country of
                  origin. It is always a good idea to check with the Lesotho
                  embassy or consulate in your home country for the most
                  up-to-date information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Lesotho?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lesotho, you will need to contact
                the Lesotho embassy or consulate in your home country. You can
                find a list of Lesotho's embassies and consulates on the website
                of the Ministry of Foreign Affairs and International Relations.
                <br />
                <br />
                You can also apply for a worker visa online, through the website
                of the Ministry of Home Affairs. However, you may still be
                required to visit the Lesotho embassy or consulate in your home
                country to submit your application and supporting documents in
                person.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  take several weeks or even months, so it is a good idea to
                  start the process as early as possible. It is also a good idea
                  to check with the Lesotho embassy or consulate in your home
                  country for the most up-to-date information on visa
                  requirements and the visa application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Lesotho?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Lesotho, you will need to obtain
                a student visa. The type of student visa that you will need
                depends on the length of your studies and the type of
                institution that you will be attending.
                <br />
                <br />
                To apply for a student visa, you will need to provide a number
                of documents, including a valid passport, proof of acceptance to
                a Lesotho educational institution, and proof of sufficient funds
                to support yourself while in Lesotho. You may also be required
                to undergo a medical examination and obtain a police clearance
                certificate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  student visa in Lesotho may vary depending on your country of
                  origin and the type of institution that you will be attending.
                  It is always a good idea to check with the Lesotho embassy or
                  consulate in your home country for the most up-to-date
                  information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lesotho Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Lesotho, you will need to follow
                the steps below:
                <br />
                <br />
                ● Contact the Lesotho embassy or consulate in your home country
                to obtain the most up-to-date information on visa requirements
                and to request a student visa application form. You can also
                download the student visa application form from the website of
                the Ministry of Home Affairs.
                <br />
                <br />
                ● Fill out the student visa application form and gather the
                required documents, which may include a valid passport, proof of
                acceptance to a Lesotho educational institution, and proof of
                sufficient funds to support yourself while in Lesotho. You may
                also be required to obtain a police clearance certificate and
                undergo a medical examination.
                <br />
                <br />
                ● Schedule an appointment with the Lesotho embassy or consulate
                to submit your student visa application and supporting
                documents.
                <br />
                <br />
                ● Pay the student visa application fee, which may vary depending
                on the type of student visa that you are applying for and your
                country of origin.
                <br />
                <br />
                ● Attend your visa interview, if required. During the interview,
                you may be asked questions about your studies in Lesotho and
                your reasons for wanting to study in the country.
                <br />
                <br />
                ● Wait for a decision on your student visa application. If your
                student visa is approved, you will be issued with a student visa
                approval letter, which you will need to present to immigration
                officials when you arrive in Lesotho.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the student visa application
                  process can take several weeks or even months, so it is a good
                  idea to start the process as early as possible. It is also a
                  good idea to check with the Lesotho embassy or consulate in
                  your home country for the most up-to-date information on visa
                  requirements and the student visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Lesotho Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Lesotho, you will need to provide
                the following documents:
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of the photo
                page of your passport, which must be valid for at least six
                months beyond the date of your intended stay in Lesotho.
                <br />
                <br />
                ● A completed student visa application form: You can obtain a
                student visa application form from the website of the Ministry
                of Home Affairs or from the Lesotho embassy or consulate in your
                home country.
                <br />
                <br />
                ● Proof of acceptance to a Lesotho educational institution: You
                will need to provide a letter of acceptance from the institution
                that you will be attending, stating the nature of your studies
                and the duration of your program.
                <br />
                <br />
                ● Proof of sufficient funds: You will need to provide evidence
                that you have sufficient funds to support yourself while in
                Lesotho, such as bank statements or a letter from your sponsor
                stating that you will be provided with a salary or allowance.
                <br />
                <br />
                ● A police clearance certificate: You may be required to obtain
                a police clearance certificate from your home country, which
                shows that you have no criminal record.
                <br />
                <br />
                ● A medical certificate: You may be required to undergo a
                medical examination and obtain a medical certificate from a
                licensed physician.
                <br />
                <br />
                ● Other documents: Depending on your specific circumstances, you
                may be required to provide additional documents, such as
                evidence of your educational qualifications or proof of your
                relationship status.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the documents required for a
                  student visa in Lesotho may vary depending on the type of
                  student visa that you are applying for and your country of
                  origin. It is always a good idea to check with the Lesotho
                  embassy or consulate in your home country for the most
                  up-to-date information on visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Lesotho Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Lesotho will depend
                on the type of student visa that you are applying for and your
                country of origin.
                <br />
                <br />
                There are two main types of student visas available in Lesotho:
                <br />
                <br />
                <span className="font-bold">Short-term student visa</span>
                : This type of visa is issued to individuals who are coming to
                Lesotho to study for a specific period of time, such as for a
                language course or a short-term study abroad program. It is
                usually valid for up to three months.
                <br />
                <br />
                <span className="font-bold">Long-term student visa</span>
                : This type of visa is issued to individuals who are coming to
                Lesotho to study for a longer period of time, such as for a
                degree program. It is usually valid for the duration of the
                student's studies, up to a maximum of four years.
                <br />
                <br />
                The price of a student visa in Lesotho may vary depending on the
                type of student visa that you are applying for and your country
                of origin. It is always a good idea to check with the Lesotho
                embassy or consulate in your home country for the most
                up-to-date information on visa fees.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a student visa is a temporary
                  permit that allows you to study in Lesotho for a specific
                  period of time. If you wish to extend your stay in Lesotho
                  beyond the validity of your student visa, you will need to
                  apply for a visa extension.
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

export default Lesotho;
