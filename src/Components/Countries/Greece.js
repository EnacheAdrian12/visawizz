import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Greece = () => {
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
        <title>Greece</title>
        <meta name="description" content="Greece" />
        <meta
          name="keywords"
          content="Greece travel visa, Greece work visa, Greece study visa, How to apply for an Greece visa, Greece visa requirements, Greece tourist visa, Greece student visa, Greece business visa, Greece visa processing time, Greece visa application process, Greece visa for Americans, Greece visa for Europeans, Greece visa for Greecens, Greece visa for Canadians, Greece visa for Indians, Greece visa for Chinese, Greece visa for Africans, Greece visa for Asians, Greece visa for South Americans, Greece visa for Middle Easterners, Greece visa for UK citizens, Greece visa for EU citizens, Greece visa for Schengen area, Greece visa for non-EU citizens, Greece visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Greece
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Greece is a country located in southeastern Europe. It is known
              for its rich history and cultural heritage, as well as its
              beautiful landscapes and picturesque islands. Some of the things
              that Greece is famous for include its ancient ruins and historical
              sites, such as the Acropolis in Athens and the Temple of Apollo at
              Delphi. The country is also known for its delicious cuisine, which
              includes dishes such as gyros, souvlaki, and spanakopita, as well
              as its vibrant music and dance traditions. In addition, Greece is
              known for its beautiful islands, such as Santorini and Mykonos,
              which are popular tourist destinations.
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
                Who can enter Greece without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Nationals of certain countries are allowed to enter Greece
                without a visa for short stays (typically up to 90 days in a
                180-day period) for purposes such as tourism, business, or
                transit. These countries are part of the Schengen Area, which is
                a group of European countries that have abolished passport and
                other types of border control at their mutual borders.
                <br />
                <br />
                The countries whose nationals are allowed to enter Greece
                without a visa are:
                <br />
                <br />
                - EU member states
                <br />
                <br />- Iceland, Liechtenstein, Norway, and Switzerland (EFTA
                countries)
                <br />
                <br />
                - Andorra, Monaco, San Marino, and the Vatican City
                <br />
                <br />
                In addition, some non-EU/EFTA countries have visa-free travel
                agreements with Greece and their nationals can also enter Greece
                without a visa for short stays. These countries include:
                <br />
                <br />
                - Albania
                <br />
                <br />
                - Bosnia and Herzegovina
                <br />
                <br />
                - Montenegro
                <br />
                <br />
                - Moldova
                <br />
                <br />
                - North Macedonia
                <br />
                <br />
                - Serbia
                <br />
                <br />
                - Ukraine
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that this list is subject to change
                  and it is always a good idea to check with the Greek embassy
                  or consulate in your country of residence for the most
                  up-to-date information on visa requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Greece Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Greece, you will need to provide the
                following documents:
                <br />
                <br />● A completed visa application form. This form can be
                obtained from the Greek embassy or consulate in your country of
                residence, or it can be downloaded from the embassy's website.
                <br />
                <br />● A valid passport or travel document. Your passport must
                be valid for at least three months beyond the date you plan to
                leave Greece, and it must have at least two blank pages for the
                visa stamp.
                <br />
                <br />● Passport-sized photographs. You will need to submit two
                recent, passport-sized photographs with your visa application.
                The photos should meet the requirements for passport
                photographs, which include being taken against a white
                background and showing your face clearly.
                <br />
                <br />● A letter of invitation or sponsorship. Depending on the
                purpose of your trip to Greece, you may need to provide a letter
                of invitation or sponsorship from a host in Greece, such as a
                relative, friend, or business associate.
                <br />
                <br />● Evidence of your purpose of travel. You will need to
                provide documentation that explains the purpose of your trip to
                Greece, such as a letter from your employer or a copy of your
                round-trip tickets.
                <br />
                <br />
                ● Evidence of your financial means. You will need to demonstrate
                that you have sufficient funds to support yourself during your
                stay in Greece. This can be done by providing bank statements or
                a letter of financial support from a sponsor.
                <br />
                <br />● Proof of travel insurance. You will need to show that
                you have valid travel insurance that covers medical expenses,
                repatriation, and other expenses that may arise.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Greece Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Greece, you will need to follow these
                steps:
                <br />
                <br />● Determine your eligibility: In order to be eligible for
                a visa to Greece, you must meet the requirements for the type of
                visa you are applying for. You may need to demonstrate that you
                have a valid reason for traveling to Greece, such as tourism,
                business, study, or work. You may also need to meet certain
                financial and health requirements.
                <br />
                <br />● Gather the required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a completed visa application form, a valid passport or
                travel document, passport-sized photographs, a letter of
                invitation or sponsorship, evidence of your purpose of travel,
                and evidence of your financial means. Check with the Greek
                embassy or consulate in your country of residence for specific
                requirements.
                <br />
                <br />● Make an appointment: Most Greek embassies and consulates
                require applicants to make an appointment to submit their visa
                applications in person. Check the embassy or consulate's website
                or call to schedule an appointment.
                <br />
                <br />● Submit your application: Bring all the required
                documents to your appointment at the embassy or consulate. You
                may also need to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The processing time for visa
                applications can vary depending on the type of visa and the
                embassy or consulate. You will be notified by the embassy or
                consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the Greek embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Greece?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Greece depends on the type of
                visa you have and the purpose of your trip.
                <br />
                <br />
                If you have a short-stay visa (also known as a Schengen visa),
                you are allowed to stay in Greece for up to 90 days in a 180-day
                period. This type of visa is issued for purposes such as
                tourism, business, or transit, and allows you to travel freely
                within the Schengen Area (a group of European countries that
                have abolished passport and other types of border control at
                their mutual borders).
                <br />
                <br />
                If you have a long-stay visa (also known as a national visa),
                you are allowed to stay in Greece for an extended period of time
                for the purpose of studying, working, or living with a family
                member who is a resident of Greece. The length of time you can
                stay in Greece on a long-stay visa depends on the specific
                purpose of your trip and the duration of your studies or
                employment.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that overstaying your visa can have
                  serious consequences, including fines, deportation, and a ban
                  on future travel to Greece. It is always a good idea to check
                  the expiration date of your visa and make sure you leave
                  Greece before it expires.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Greece?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                All restrictions remain under regular review. In Regional Units
                (περιφερειακές ενότητες) where the spread of COVID-19 is
                particularly high and hospital capacity is limited, restrictions
                may be tighter or re-imposed with limited notice.
                <br />
                <br />
                Proof of a negative COVID-19 test result:
                <span className="font-bold">
                  &nbsp;the test should not be older than 72 hours
                </span>
                &nbsp;when entering Greece if it is a PCR test. Yet,
                <span className="font-bold">
                  &nbsp;if it is a rapid test, then it must not be older than 48
                  hours
                </span>
                .
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
                issued to diplomats and other officials who are representing
                their countries in international relations and diplomacy.
                Diplomatic passports are typically issued to individuals who are
                traveling on official business and are entitled to certain
                privileges and immunities while abroad.
                <br />
                <br />
                In Greece, diplomatic passports are issued by the Ministry of
                Foreign Affairs and are valid for a period of five years.
                Diplomatic passports are issued to Greek diplomats and other
                officials, as well as to foreign diplomats who are accredited to
                Greece. Diplomatic passports allow the holder to enter and leave
                Greece without a visa, and are typically issued with a red
                cover.
                <br />
                <br />
                Diplomatic passport holders are generally entitled to certain
                privileges and immunities while traveling abroad, including
                immunity from arrest and detention, as well as exemption from
                customs duties and taxes. These privileges and immunities are
                granted to facilitate the work of diplomats and ensure that they
                can carry out their duties without interference.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are issued
                  to individuals who are representing their countries in an
                  official capacity and are not intended for personal travel or
                  other non-official purposes. Misuse of a diplomatic passport
                  can result in the revocation of the passport and other
                  consequences.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Greece?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU/EFTA country, you do not need a
                worker visa to work in Greece. As an EU/EFTA citizen, you have
                the right to live and work in Greece without the need for a visa
                or work permit.
                <br />
                <br />
                If you are a citizen of a non-EU/EFTA country, you may need a
                worker visa to work in Greece, depending on the nature and
                duration of your work. If you are planning to work in Greece for
                more than 90 days, you will need to apply for a long-stay visa
                (also known as a national visa). This type of visa allows you to
                stay in Greece for an extended period of time for the purpose of
                working.
                <br />
                <br />
                To apply for a worker visa to Greece, you will need to follow
                the same steps as for any other type of visa. This includes
                determining your eligibility, gathering the required documents,
                making an appointment at the embassy or consulate, and
                submitting your application. You may also need to pay a visa fee
                at the time of your application.
                <br />
                <br />
                <span className="font-bold">
                  The specific documents and requirements for a worker visa to
                  Greece will depend on the nature of your work, the duration of
                  your stay, and the country where you are applying. It is
                  recommended that you check with the Greek embassy or consulate
                  in your country of residence for specific requirements and
                  instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Greece Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to Greece, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine your eligibility: In order to be eligible for a
                worker visa to Greece, you must meet the requirements for the
                type of visa you are applying for. You may need to demonstrate
                that you have a valid job offer or employment contract in
                Greece, and that you meet the necessary qualifications and
                experience for the job. You may also need to meet certain
                financial and health requirements.
                <br />
                <br />● Gather the required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a completed visa application form, a valid passport or
                travel document, passport-sized photographs, a letter of
                invitation or sponsorship, evidence of your purpose of travel,
                and evidence of your financial means. Check with the Greek
                embassy or consulate in your country of residence for specific
                requirements.
                <br />
                <br />● Make an appointment: Most Greek embassies and consulates
                require applicants to make an appointment to submit their visa
                applications in person. Check the embassy or consulate's website
                or call to schedule an appointment.
                <br />
                <br />● Submit your application: Bring all the required
                documents to your appointment at the embassy or consulate. You
                may also need to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The processing time for visa
                applications can vary depending on the type of visa and the
                embassy or consulate. You will be notified by the embassy or
                consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the Greek embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Greece Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that may be available to
                you if you are planning to work in Greece. These include:
                <br />
                <br />
                <span className="font-bold">Employment visa</span>
                : An employment visa is issued to individuals who have a job
                offer or employment contract in Greece and will be working in
                the country for an extended period of time. This type of visa
                allows you to work in Greece for up to one year, and it may be
                renewable.
                <br />
                <br />
                <span className="font-bold">Self-employment visa</span>
                : A self-employment visa is issued to individuals who are
                planning to start their own business or work as a freelancer in
                Greece. This type of visa allows you to work in Greece for up to
                one year, and it may be renewable.
                <br />
                <br />
                <span className="font-bold">Internship visa</span>
                : An internship visa is issued to individuals who are
                participating in an internship program in Greece. This type of
                visa allows you to work in Greece for the duration of your
                internship, which is typically up to one year.
                <br />
                <br />
                <span className="font-bold">Seasonal work visa</span>: A
                seasonal work visa is issued to individuals who are planning to
                work in Greece for a specific period of time, typically during
                the tourist season. This type of visa allows you to work in
                Greece for up to six months.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the type of worker visa you are
                  eligible for will depend on the nature of your work and the
                  duration of your stay in Greece. It is recommended that you
                  check with the Greek embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Greece Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to Greece, you will need to provide
                the following documents:
                <br />
                <br />● A completed visa application form. This form can be
                obtained from the Greek embassy or consulate in your country of
                residence, or it can be downloaded from the embassy's website.
                <br />
                <br />● A valid passport or travel document. Your passport must
                be valid for at least three months beyond the date you plan to
                leave Greece, and it must have at least two blank pages for the
                visa stamp.
                <br />
                <br />
                ● Passport-sized photographs. You will need to submit two
                recent, passport-sized photographs with your visa application.
                The photos should meet the requirements for passport
                photographs, which include being taken against a white
                background and showing your face clearly.
                <br />
                <br />
                ● A letter of invitation or sponsorship. Depending on the
                purpose of your trip to Greece, you may need to provide a letter
                of invitation or sponsorship from a host in Greece, such as an
                employer, relative, friend, or business associate.
                <br />
                <br />● Evidence of your purpose of travel. You will need to
                provide documentation that explains the purpose of your trip to
                Greece, such as a job offer or employment contract, a letter
                from your employer, or a copy of your round-trip tickets.
                <br />
                <br />● Evidence of your financial means. You will need to
                demonstrate that you have sufficient funds to support yourself
                during your stay in Greece. This can be done by providing bank
                statements or a letter of financial support from a sponsor.
                <br />
                <br />
                ● Proof of travel insurance. You will need to show that you have
                valid travel insurance that covers medical expenses,
                repatriation, and other expenses that may arise.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific documents and
                  requirements for a worker visa to Greece will depend on the
                  nature of your work, the duration of your stay, and the
                  country where you are applying. It is recommended that you
                  check with the Greek embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Greece?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to Greece, you will need to go to the
                Greek embassy or consulate in your country of residence. You
                will need to make an appointment to submit your visa application
                in person, and you will need to bring all the required documents
                with you to your appointment.
                <br />
                <br />
                It is important to note that the processing time for visa
                applications can vary depending on the type of visa and the
                embassy or consulate. You should apply for your visa well in
                advance of your planned trip to ensure that you have enough time
                to get your visa before your departure date. It is recommended
                that you check with the embassy or consulate for specific
                processing times and instructions.
                <br />
                <br />
                It is also important to note that you may need to provide
                additional documents or information during the visa application
                process, and you may be required to attend an interview with a
                consular officer. You should be prepared to provide any
                additional information or documents that may be requested, and
                you should be sure to follow any instructions given by the
                embassy or consulate.
                <br />
                <br />
                <span className="font-bold">
                  If you have any questions about the worker visa application
                  process, it is recommended that you contact the Greek embassy
                  or consulate in your country of residence for specific
                  instructions and guidance.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Greece?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU/EFTA country, you do not need a
                visa to study in Greece. As an EU/EFTA citizen, you have the
                right to live and study in Greece without the need for a visa or
                study permit.
                <br />
                <br />
                If you are a citizen of a non-EU/EFTA country, you will need a
                student visa to study in Greece. To be eligible for a student
                visa, you must be accepted into a recognized educational
                institution in Greece and be able to demonstrate that you have
                the financial means to support yourself during your studies.
                <br />
                <br />
                To apply for a student visa to Greece, you will need to follow
                the same steps as for any other type of visa. This includes
                determining your eligibility, gathering the required documents,
                making an appointment at the embassy or consulate, and
                submitting your application. You may also need to pay a visa fee
                at the time of your application.
                <br />
                <br />
                <span className="font-bold">
                  The specific documents and requirements for a student visa to
                  Greece will depend on the nature of your studies, the duration
                  of your stay, and the country where you are applying. It is
                  recommended that you check with the Greek embassy or consulate
                  in your country of residence for specific requirements and
                  instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Greece Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to Greece, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine your eligibility: In order to be eligible for a
                student visa to Greece, you must meet the requirements for the
                type of visa you are applying for. You must be accepted into a
                recognized educational institution in Greece, and you must be
                able to demonstrate that you have the financial means to support
                yourself during your studies. You may also need to meet certain
                health requirements.
                <br />
                <br />
                ● Gather the required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a completed visa application form, a valid passport or
                travel document, passport-sized photographs, a letter of
                acceptance from your educational institution in Greece, evidence
                of your financial means, and proof of travel insurance. Check
                with the Greek embassy or consulate in your country of residence
                for specific requirements.
                <br />
                <br />
                ● Make an appointment: Most Greek embassies and consulates
                require applicants to make an appointment to submit their visa
                applications in person. Check the embassy or consulate's website
                or call to schedule an appointment.
                <br />
                <br />
                ● Submit your application: Bring all the required documents to
                your appointment at the embassy or consulate. You may also need
                to pay a visa fee at this time.
                <br />
                <br />
                ● Wait for a decision: The processing time for visa applications
                can vary depending on the type of visa and the embassy or
                consulate. You will be notified by the embassy or consulate when
                a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the Greek embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Greece Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● Acceptance into a recognized educational institution in
                Greece: You must have been accepted into a recognized
                educational institution in Greece, such as a university,
                college, or language school. You will need to provide a letter
                of acceptance from the educational institution as part of your
                visa application.
                <br />
                <br />● Financial means: You must be able to demonstrate that
                you have sufficient financial means to support yourself during
                your studies in Greece. This can be done by providing bank
                statements, a letter of financial support from a sponsor, or
                other evidence of your financial resources.
                <br />
                <br />● Health insurance: You must have valid health insurance
                that covers medical expenses and repatriation during your stay
                in Greece. You will need to provide proof of insurance as part
                of your visa application.
                <br />
                <br />● Passport: You must have a valid passport or travel
                document that is valid for at least three months beyond the date
                you plan to leave Greece, and that has at least two blank pages
                for the visa stamp.
                <br />
                <br />● Passport-sized photographs: You will need to provide two
                recent, passport-sized photographs with your visa application.
                The photos should meet the requirements for passport
                photographs, which include being taken against a white
                background and showing your face clearly.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  student visa to Greece will depend on the nature of your
                  studies, the duration of your stay, and the country where you
                  are applying. It is recommended that you check with the Greek
                  embassy or consulate in your country of residence for specific
                  requirements and instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Greece Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price for a student visa to Greece will depend
                on the nature of your studies, the duration of your stay, and
                the country where you are applying.
                <br />
                <br />
                Student visas to Greece are typically issued for the duration of
                your studies, up to a maximum of one year. In some cases, you
                may be able to extend your student visa if you need to continue
                your studies beyond the initial period of validity.
                <br />
                <br />
                The price for a student visa to Greece will vary depending on
                the embassy or consulate where you are applying and the type of
                visa you are seeking. You may be required to pay a visa fee at
                the time of your application. It is recommended that you check
                with the Greek embassy or consulate in your country of residence
                for specific pricing information.
                <br />
                <br />
                In addition to the visa fee, you may also need to pay for other
                expenses related to your student visa application, such as
                passport fees, translation fees, or courier fees. It is
                important to budget for these expenses and to factor them into
                your overall costs for studying in Greece.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the Greek embassy or consulate in your country of
                  residence for specific requirements and instructions.
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

export default Greece;
