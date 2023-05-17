import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Libya = () => {
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
        <title>Libya</title>
        <meta name="description" content="Libya" />
        <meta
          name="keywords"
          content="Libya travel visa, Libya work visa, Libya study visa, How to apply for an Libya visa, Libya visa requirements, Libya tourist visa, Libya student visa, Libya business visa, Libya visa processing time, Libya visa application process, Libya visa for Americans, Libya visa for Europeans, Libya visa for Libyans, Libya visa for Canadians, Libya visa for Libyans, Libya visa for Chinese, Libya visa for Africans, Libya visa for Asians, Libya visa for South Americans, Libya visa for Middle Easterners, Libya visa for UK citizens, Libya visa for EU citizens, Libya visa for Schengen area, Libya visa for non-EU citizens, Libya visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Libya
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Libya is a country in North Africa that is known for its vast
              deserts and oil reserves. It is also known for its long and rich
              history, with many ancient ruins and historical sites, such as the
              city of Leptis Magna and the ruins of Cyrene. In recent years,
              Libya has been in the news due to the ongoing political and
              security challenges it has faced. However, despite these
              challenges, Libya remains a country with a unique and fascinating
              culture and history, and it is a popular destination for tourists
              who want to explore its many ancient ruins and natural wonders.
            </p>
          </Col>
        </Row>

        <p className="text-center pt-[6rem] text-[2.8rem] font-bold">
          Do not travel to Libya due to crime, terrorism, civil unrest,
          kidnapping, and armed conflict.
          <br /> Country Summary: Crime levels in Libya remain high, including
          the threat of kidnapping for ransom.
          <br /> Westerners and U.S. citizens have been targets of these crimes.
          <br />
          Terrorist groups continue plotting attacks in Libya.
        </p>
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
                Who can enter Libya without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are a few categories of people who are allowed to enter
                Libya without a visa, depending on their nationality and the
                purpose of their visit. Here are some general categories of
                people who may be able to enter Libya without a visa:
                <br />
                <br />
                ● Citizens of Libya: Libyan citizens do not need a visa to enter
                Libya.
                <br />
                <br />● Citizens of countries with visa-free agreements with
                Libya:
                <span className="font-bold">
                  &nbsp;Algeria, Egypt, Jordan, Lebanon, Mauritania, Morocco,
                  Palestine, Sudan, Tunisia, Turkey.
                </span>
                <br />
                <br />
                ● Holders of diplomatic and official passports: Holders of
                diplomatic and official passports from some countries may be
                able to enter Libya without a visa for short stays.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for entry into Libya
                  may change from time to time, and you should check with the
                  embassy or consulate of Libya for the most up-to-date
                  information. If you are planning to visit Libya for a longer
                  period of time or for a purpose other than tourism, you will
                  generally need to obtain a visa in advance of your trip.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Libya Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Libya, you will generally need to provide
                the following documents:
                <br />
                <br />
                ● A completed visa application form: You will need to complete a
                visa application form and provide a recent passport-style
                photograph.
                <br />
                <br />
                ● Your passport: You will need to provide your passport, which
                should have at least six months of validity remaining and at
                least one blank page.
                <br />
                <br />
                ● A letter of invitation: You may need to provide a letter of
                invitation from a host in Libya, such as a business or
                government organization, or from a sponsor in your home country.
                <br />
                <br />
                ● Proof of your financial means: You may need to provide proof
                of your financial means, such as bank statements or a letter
                from your sponsor, to show that you have sufficient funds to
                cover your living expenses in Libya.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate showing that you are in good health.
                <br />
                <br />
                ● Proof of your travel arrangements: You may need to provide
                proof of your travel arrangements, such as a round-trip ticket
                and a confirmed hotel reservation.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for obtaining a
                  visa to Libya. The requirements may vary depending on the type
                  of visa do you need.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Libya Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Libya, you will need to follow these
                steps:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of visas available for travel to Libya, including tourist visas,
                business visas, and student visas. You will need to determine
                which type of visa is appropriate for your purpose of travel to
                the country.
                <br />
                <br />
                ● Check the visa requirements: You will need to check the visa
                requirements for your country of residence to ensure that you
                meet all of the necessary criteria for obtaining a visa to
                Libya. This may include providing a letter of invitation, proof
                of your financial means, and a medical certificate.
                <br />
                <br />
                ● Complete the visa application form: You will need to complete
                a visa application form and provide a recent passport-style
                photograph.
                <br />
                <br />
                ● Submit the required documents: You will need to submit the
                required documents, including your passport and any other
                required documents, such as a letter of invitation or proof of
                your financial means.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee, which
                will vary depending on the type of visa you are applying for and
                the duration of your stay.
                <br />
                <br />
                ● Wait for your visa to be processed: The processing time for a
                visa to Libya will vary depending on the embassy or consulate
                and the type of visa you are applying for. You should allow
                sufficient time for your application to be processed before your
                planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for your visa
                  application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Libya?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Libya will
                depend on the type of visa you have and the purpose of your
                visit.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;tourist visa</span>, you may
                be allowed to stay in Libya for up to 90 days. If you want to
                stay in the country for a longer period of time, you will need
                to apply for an extension of your visa or apply for a different
                type of visa.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;business visa</span>, you may
                be allowed to stay in Libya for a longer period of time,
                depending on the nature of your business activities and the
                duration of your stay.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;student visa</span>, you may
                be allowed to stay in Libya for the duration of your studies, up
                to a maximum of one year.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for staying in Libya
                  may change from time to time, and you should check with the
                  embassy or consulate of Libya for the most up-to-date
                  information. If you overstay your visa, you may be subject to
                  fines and deportation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Libya?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                -
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
                A diplomatic passport is a type of passport issued to
                individuals who are representing their country in an official
                capacity, such as diplomats, consular officials, and other
                government representatives.
                <br />
                <br />
                Holders of diplomatic passports are generally entitled to
                certain privileges and immunities under international law,
                including immunity from arrest, detention, and prosecution in
                the host country.
                <br />
                <br />
                In Libya, holders of diplomatic passports may be able to enter
                the country without a visa and may be allowed to stay for a
                longer period of time than other foreign nationals.
                <br />
                <br />
                To obtain a diplomatic passport in Libya, you will generally
                need to be an accredited diplomat or consular official, or a
                government employee working on official business in the country.
                You will need to apply for a diplomatic passport through the
                Ministry of Foreign Affairs in Libya or the embassy or consulate
                of Libya in your country of residence.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for obtaining a
                  diplomatic passport in Libya may change from time to time, and
                  you should check with the embassy or consulate of Libya for
                  the most up-to-date information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Libya?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Libya, you will generally need to obtain
                a worker visa. The specific type of worker visa that you will
                need will depend on the nature of your work and the duration of
                your stay in the country.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for obtaining a
                  worker visa. You may also need to obtain a work permit from
                  the Ministry of Labor in Libya in order to legally work in the
                  country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Libya Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Libya, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need: There are several
                types of worker visas available for travel to Libya, including
                short-term worker visas and long-term worker visas. You will
                need to determine which type of visa is appropriate for the
                nature of your work and the duration of your stay in the
                country.
                <br />
                <br />
                ● Check the visa requirements: You will need to check the visa
                requirements for your country of residence to ensure that you
                meet all of the necessary criteria for obtaining a worker visa
                to Libya. This may include providing a letter of invitation from
                your employer in Libya, a copy of your employment contract, and
                proof of your qualifications and experience.
                <br />
                <br />
                ● Complete the visa application form: You will need to complete
                a visa application form and provide a recent passport-style
                photograph.
                <br />
                <br />
                ● Submit the required documents: You will need to submit the
                required documents, including your passport, a letter of
                invitation from your employer in Libya, and any other required
                documents.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee, which
                will vary depending on the type of visa you are applying for and
                the duration of your stay.
                <br />
                <br />● Wait for your visa to be processed: The processing time
                for a worker visa to Libya will vary depending on the embassy or
                consulate and the type of visa you are applying for. You should
                allow sufficient time for your application to be processed
                before your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for your worker
                  visa application. You may also need to obtain a work permit
                  from the Ministry of Labor in Libya in order to legally work
                  in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Libya Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for travel to
                Libya, including short-term worker visas and long-term worker
                visas.
                <br />
                <br />A{" "}
                <span className="font-bold">
                  &nbsp;short-term worker visa
                </span>{" "}
                is generally valid for a period of up to one year and is
                typically issued for temporary work assignments in Libya.
                <br />
                <br />A{" "}
                <span className="font-bold">
                  &nbsp;long-term worker visa
                </span>{" "}
                is generally valid for a longer period of time and is typically
                issued for permanent work assignments in Libya.
                <br />
                <br />
                It is important to note that the rules for worker visas in Libya
                may change from time to time, and you should check with the
                embassy or consulate of Libya for the most up-to-date
                information.
                <br />
                <br />
                <span className="font-bold">
                  The specific type of worker visa that you will need will
                  depend on the nature of your work and the duration of your
                  stay in the country. You should check with the embassy or
                  consulate of Libya to confirm the specific requirements for
                  each type of worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Libya Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Libya, you will generally need to
                provide the following documents:
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● Your passport: You will need a valid passport with at least
                six months of validity remaining and at least one blank page.
                <br />
                <br />
                ● A passport-style photograph: You will need to provide a recent
                passport-style photograph.
                <br />
                <br />
                ● A letter of invitation from your employer in Libya: You will
                need to provide a letter of invitation from your employer in
                Libya stating the nature of your work and the duration of your
                stay in the country.
                <br />
                <br />
                ● A copy of your employment contract: You will need to provide a
                copy of your employment contract, which should outline the terms
                of your employment in Libya.
                <br />
                <br />
                ● Proof of your qualifications and experience: You may need to
                provide proof of your qualifications and experience, such as
                copies of your educational certificates and references from
                previous employers.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate showing that you are in good health.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for obtaining a
                  worker visa. You may also need to obtain a work permit from
                  the Ministry of Labor in Libya in order to legally work in the
                  country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Libya?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Libya, you will generally need to
                submit your application to the embassy or consulate of Libya in
                your country of residence. You should check with the embassy or
                consulate to confirm their specific procedures for accepting
                visa applications.
                <br />
                <br />
                You should apply for your worker visa as early as possible, as
                the processing time for a visa can vary depending on the embassy
                or consulate and the type of visa you are applying for. You
                should allow sufficient time for your application to be
                processed before your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for worker visas in
                  Libya may change from time to time, and you should check with
                  the embassy or consulate of Libya for the most up-to-date
                  information. You may also need to obtain a work permit from
                  the Ministry of Labor in Libya in order to legally work in the
                  country.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Libya?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Libya, you will generally need to obtain
                a student visa. The specific type of student visa that you will
                need will depend on the duration of your studies in the country
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for obtaining a
                  student visa. You may also need to obtain a study permit from
                  the Ministry of Education in Libya in order to legally study
                  in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Libya Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Libya, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of student visa you need: There are several
                types of student visas available for travel to Libya, including
                short-term student visas and long-term student visas. You will
                need to determine which type of visa is appropriate for the
                duration of your studies in the country.
                <br />
                <br />
                ● Check the visa requirements: You will need to check the visa
                requirements for your country of residence to ensure that you
                meet all of the necessary criteria for obtaining a student visa
                to Libya. This may include providing a letter of acceptance from
                your educational institution in Libya, proof of your financial
                means, and a medical certificate.
                <br />
                <br />
                ● Complete the visa application form: You will need to complete
                a visa application form and provide a recent passport-style
                photograph.
                <br />
                <br />
                ● Submit the required documents: You will need to submit the
                required documents, including your passport, a letter of
                acceptance from your educational institution in Libya, and any
                other required documents.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee, which
                will vary depending on the type of visa you are applying for and
                the duration of your stay.
                <br />
                <br />
                ● Wait for your visa to be processed: The processing time for a
                student visa to Libya will vary depending on the embassy or
                consulate and the type of visa you are applying for. You should
                allow sufficient time for your application to be processed
                before your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for your student
                  visa application. You may also need to obtain a study permit
                  from the Ministry of Education in Libya in order to legally
                  study in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Libya Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Libya, you will generally need
                to provide the following documents:
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● Your passport: You will need a valid passport with at least
                six months of validity remaining and at least one blank page.
                <br />
                <br />
                ● A passport-style photograph: You will need to provide a recent
                passport-style photograph.
                <br />
                <br />
                ● A letter of acceptance from your educational institution in
                Libya: You will need to provide a letter of acceptance from the
                educational institution in Libya where you will be studying.
                <br />
                <br />
                ● Proof of your financial means: You may need to provide proof
                of your financial means, such as bank statements or a letter
                from your sponsor, to show that you have sufficient funds to
                cover your living expenses in Libya.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate showing that you are in good health.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Libya to confirm the specific requirements for obtaining a
                  student visa. You may also need to obtain a study permit from
                  the Ministry of Education in Libya in order to legally study
                  in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Libya Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Libya will depend
                on the type of visa you are applying for and the duration of
                your studies in the country.
                <br />
                <br />A{" "}
                <span className="font-bold">short-term student visa</span> is
                generally valid for a period of up to one year and is typically
                issued for temporary study assignments in Libya.
                <br />
                <br />A{" "}
                <span className="font-bold">long-term student visa</span> is
                generally valid for a longer period of time and is typically
                issued for more extended study assignments in Libya.
                <br />
                <br />
                The price of a student visa for Libya will vary depending on the
                type of visa you are applying for and the duration of your stay
                in the country. You should check with the embassy or consulate
                of Libya to confirm the specific fees for each type of student
                visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for student visas in
                  Libya may change from time to time, and you should check with
                  the embassy or consulate of Libya for the most up-to-date
                  information. You may also need to obtain a study permit from
                  the Ministry of Education in Libya in order to legally study
                  in the country.
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

export default Libya;
