import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Iceland = () => {
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
        <title>Iceland</title>
        <meta name="description" content="Iceland" />
        <meta
          name="keywords"
          content="Iceland travel visa, Iceland work visa, Iceland study visa, How to apply for an Iceland visa, Iceland visa requirements, Iceland tourist visa, Iceland student visa, Iceland business visa, Iceland visa processing time, Iceland visa application process, Iceland visa for Americans, Iceland visa for Europeans, Iceland visa for Icelandns, Iceland visa for Canadians, Iceland visa for Indians, Iceland visa for Chinese, Iceland visa for Africans, Iceland visa for Asians, Iceland visa for South Americans, Iceland visa for Middle Easterners, Iceland visa for UK citizens, Iceland visa for EU citizens, Iceland visa for Schengen area, Iceland visa for non-EU citizens, Iceland visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Iceland
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Iceland is a small island nation in the North Atlantic Ocean that
              is known for its stunning natural beauty, unique culture, and
              friendly people. The country is known for its rugged coastline,
              towering waterfalls, and geothermal hot springs. Iceland is also
              known for its rich cultural heritage, including its traditional
              Icelandic cuisine, folklore, and literature. Additionally, Iceland
              is known for its thriving music and arts scene, and its annual
              music festivals, such as the Iceland Airwaves festival, are
              popular with tourists and locals alike.
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
                Who can enter Iceland without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Iceland is a member of the Schengen Area, a group of 26 European
                countries that have abolished passport and other types of border
                control at their mutual borders. This means that citizens of
                other Schengen countries can enter Iceland without a visa for
                stays of up to 90 days in any 180-day period.
                <br />
                <br />
                Citizens of certain countries outside the Schengen Area can also
                enter Iceland without a visa for stays of up to 90 days in any
                180-day period. These countries include:
                <br />
                <br />
                - Australia
                <br />
                <br />
                - Canada
                <br />
                <br />
                - Japan
                <br />
                <br />
                - New Zealand
                <br />
                <br />
                - South Korea
                <br />
                <br />
                - United States
                <br />
                <br />
                <span className="font-bold">
                  However, it is important to note that all travelers,
                  regardless of their nationality, will need a valid passport to
                  enter Iceland. Travelers from countries that are not
                  visa-exempt may need to apply for a visa before traveling to
                  Iceland. It is advisable to check the requirements for your
                  country of citizenship on the website of the Icelandic
                  Directorate of Immigration or the nearest Icelandic embassy or
                  consulate before planning your trip.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Iceland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Iceland, you will need to submit
                the following documents:
                <br />
                <br />● A completed and signed application form. You can
                download the form from the website of the Icelandic Directorate
                of Immigration or obtain it from the nearest Icelandic embassy
                or consulate.
                <br />
                <br />● A valid passport or travel document that is valid for at
                least three months beyond the planned date of departure from
                Iceland.
                <br />
                <br />● Two recent passport-sized photographs that meet the
                requirements for visa photographs.
                <br />
                <br />● Proof of sufficient financial means to cover the cost of
                your stay in Iceland. This can include bank statements, pay
                slips, or a letter from your employer stating that they will
                cover your expenses.
                <br />
                <br />
                ● A letter of invitation or sponsorship, if applicable.
                <br />
                <br />
                ● Evidence of the purpose of your visit to Iceland, such as a
                letter from your employer or a copy of your travel itinerary.
                <br />
                <br />● Evidence of medical insurance that covers you for the
                duration of your stay in Iceland.
                <br />
                <br />● Any other documents that may be required for your
                specific visa category, such as a marriage certificate or a
                letter from your school or university.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific documents required
                  may vary depending on the purpose of your visit and the type
                  of visa you are applying for. It is advisable to check the
                  requirements on the website of the Icelandic Directorate of
                  Immigration or contact the nearest Icelandic embassy or
                  consulate for more information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Iceland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Iceland, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of visa you need based on the purpose
                of your visit to Iceland and the length of your stay. There are
                several types of visas available, including short-term visas for
                tourism, business, study, or transit, and long-term visas for
                work, study, or family reunification.
                <br />
                <br />● Gather all the required documents, as listed in the
                previous answer. Make sure that you have all the necessary
                documents and that they are complete and accurate.
                <br />
                <br />● Fill out the application form. You can download the form
                from the website of the Icelandic Directorate of Immigration or
                obtain it from the nearest Icelandic embassy or consulate. Make
                sure to fill out the form completely and accurately.
                <br />
                <br />● Submit your application and pay the applicable fee. You
                can submit your application in person at the nearest Icelandic
                embassy or consulate, or you can mail it to the embassy or
                consulate along with the required documents and the applicable
                fee. Some embassies and consulates may also accept applications
                by email or through an online portal.
                <br />
                <br />● Wait for a decision on your application. The processing
                time for a visa application can vary depending on the type of
                visa and the country where you are applying. It is advisable to
                submit your application well in advance of your planned trip to
                allow for sufficient time for processing.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a visa to enter Iceland may vary depending on your country
                  of citizenship and the type of visa you are applying for. It
                  is advisable to check the requirements on the website of the
                  Icelandic Directorate of Immigration or contact the nearest
                  Icelandic embassy or consulate for more information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Iceland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of a country that is a member of the
                Schengen Area, you can stay in Iceland for up to 90 days in any
                180-day period without a visa. This applies to citizens of the
                following countries:
                <br />
                <br />
                <span className="font-bold">
                  Austria, Belgium, Czech Republic, Denmark, Estonia, Finland,
                  France, Germany, Greece, Hungary, Iceland, Italy, Latvia,
                  Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland,
                  Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland.
                </span>
                <br />
                <br />
                If you are a citizen of a country that is not a member of the
                Schengen Area, the length of your stay in Iceland will depend on
                the specific visa that you have obtained. Some visas, such as
                short-term visas for tourism or business, may allow you to stay
                in Iceland for up to 90 days in any 180-day period. Other visas,
                such as long-term visas for work or study, may allow you to stay
                in Iceland for a longer period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of your stay in
                  Iceland will also depend on the specific purpose of your visit
                  and the conditions of your visa. It is advisable to check the
                  requirements on the website of the Icelandic Directorate of
                  Immigration or contact the nearest Icelandic embassy or
                  consulate for more information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Iceland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Effective February 25, 2022, all regulations pertaining to
                public restrictions and border restrictions, as well as the
                quarantine requirement for those infected by COVID-19, are
                removed.
                <br />
                <br />
                All infection prevention rules for COVID-19 have been lifted at
                the Icelandic border, regardless of tourists' vaccination
                status.
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
                issued to individuals who are representing their country in an
                official capacity, such as diplomats, officials, and other
                government representatives. Diplomatic passports are issued by
                the government of the individual's country of citizenship and
                are used for official travel on behalf of the government.
                <br />
                <br />
                In Iceland, diplomatic passports are issued by the Ministry of
                Foreign Affairs to Icelandic diplomats and other officials who
                are traveling abroad on official business. Diplomatic passports
                are also issued to foreign diplomats and officials who are
                accredited to Iceland and are traveling to and from their
                country of origin.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while traveling abroad, as outlined in
                the Vienna Convention on Diplomatic Relations. These privileges
                and immunities are designed to protect the status and dignity of
                diplomats and to ensure that they can carry out their duties
                without interference.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are
                  different from official passports, which are issued to
                  individuals who are traveling abroad on official business but
                  are not diplomats or officials. Official passport holders do
                  not enjoy the same privileges and immunities as holders of
                  diplomatic passports.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Iceland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa to work in Iceland will depend on
                your country of citizenship and the length of your stay.
                <br />
                <br />
                Citizens of countries that are members of the European Union
                (EU), the European Economic Area (EEA), or Switzerland do not
                need a visa to work in Iceland. They have the right to live and
                work in Iceland without any additional documentation, as long as
                they are registered with the Icelandic Directorate of
                Immigration.
                <br />
                <br />
                Citizens of countries that are not members of the EU, the EEA,
                or Switzerland may need a worker visa to work in Iceland,
                depending on the length of their stay. If you are planning to
                work in Iceland for less than six months, you will need a
                short-term worker visa. If you are planning to work in Iceland
                for more than six months, you will need a long-term worker visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  worker visa may vary depending on your country of citizenship
                  and the type of visa you are applying for. It is advisable to
                  check the requirements on the website of the Icelandic
                  Directorate of Immigration or contact the nearest Icelandic
                  embassy or consulate for more information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Iceland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Iceland, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need based on the length
                of your stay in Iceland. If you are planning to work in Iceland
                for less than six months, you will need a short-term worker
                visa. If you are planning to work in Iceland for more than six
                months, you will need a long-term worker visa.
                <br />
                <br />● Gather all the required documents, as listed in the
                previous answer. Make sure that you have all the necessary
                documents and that they are complete and accurate.
                <br />
                <br />● Fill out the application form. You can download the form
                from the website of the Icelandic Directorate of Immigration or
                obtain it from the nearest Icelandic embassy or consulate. Make
                sure to fill out the form completely and accurately.
                <br />
                <br />● Submit your application and pay the applicable fee. You
                can submit your application in person at the nearest Icelandic
                embassy or consulate, or you can mail it to the embassy or
                consulate along with the required documents and the applicable
                fee. Some embassies and consulates may also accept applications
                by email or through an online portal.
                <br />
                <br />● Wait for a decision on your application. The processing
                time for a worker visa application can vary depending on the
                type of visa and the country where you are applying. It is
                advisable to submit your application well in advance of your
                planned trip to allow for sufficient time for processing.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a worker visa to work in Iceland may vary depending on
                  your country of citizenship and the type of visa you are
                  applying for. It is advisable to check the requirements on the
                  website of the Icelandic Directorate of Immigration or contact
                  the nearest Icelandic embassy or consulate for more
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Iceland Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are two types of worker visas for individuals who want to
                work in Iceland:
                <br />
                <br />
                <span className="font-bold">Short-term worker visa</span>
                : This type of visa is for individuals who are planning to work
                in Iceland for less than six months. To apply for a short-term
                worker visa, you will need to submit a completed and signed
                application form, a valid passport or travel document, two
                recent passport-sized photographs, a letter from your employer
                in Iceland stating the nature of your work and the duration of
                your stay, evidence of sufficient financial means to cover the
                cost of your stay in Iceland, and evidence of medical insurance
                that covers you for the duration of your stay in Iceland.
                <br />
                <br />
                <span className="font-bold">Long-term worker visa</span>
                : This type of visa is for individuals who are planning to work
                in Iceland for more than six months. To apply for a long-term
                worker visa, you will need to submit a completed and signed
                application form, a valid passport or travel document, two
                recent passport-sized photographs, a letter from your employer
                in Iceland stating the nature of your work and the duration of
                your stay, evidence of sufficient financial means to cover the
                cost of your stay in Iceland, evidence of medical insurance that
                covers you for the duration of your stay in Iceland, and a copy
                of your contract of employment or a letter from your employer
                outlining the terms and conditions of your employment.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  worker visa may vary depending on your country of citizenship
                  and the type of visa you are applying for. It is advisable to
                  check the requirements on the website of the Icelandic
                  Directorate of Immigration or contact the nearest Icelandic
                  embassy or consulate for more information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Iceland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Iceland, you will need to
                submit the following documents:
                <br />
                <br />
                ● A completed and signed application form. You can download the
                form from the website of the Icelandic Directorate of
                Immigration or obtain it from the nearest Icelandic embassy or
                consulate.
                <br />
                <br />● A valid passport or travel document that is valid for at
                least three months beyond the planned date of departure from
                Iceland.
                <br />
                <br />
                ● Two recent passport-sized photographs that meet the
                requirements for visa photographs.
                <br />
                <br />
                ● A letter from your employer in Iceland stating the nature of
                your work and the duration of your stay. This should include
                information about your job duties, the hours you will be
                working, and the terms and conditions of your employment.
                <br />
                <br />● Evidence of sufficient financial means to cover the cost
                of your stay in Iceland. This can include bank statements, pay
                slips, or a letter from your employer stating that they will
                cover your expenses.
                <br />
                <br />● Evidence of medical insurance that covers you for the
                duration of your stay in Iceland. This should include coverage
                for medical treatment, hospitalization, and repatriation in case
                of illness or injury.
                <br />
                <br />
                ● If you are applying for a long-term worker visa, you will also
                need to provide a copy of your contract of employment or a
                letter from your employer outlining the terms and conditions of
                your employment.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific documents required
                  may vary depending on the type of worker visa you are applying
                  for and your country of citizenship. It is advisable to check
                  the requirements on the website of the Icelandic Directorate
                  of Immigration or contact the nearest Icelandic embassy or
                  consulate for more information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Iceland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Iceland, you will need to
                submit your application to the nearest Icelandic embassy or
                consulate. You can find a list of Icelandic embassies and
                consulates on the website of the Ministry of Foreign Affairs of
                Iceland.
                <br />
                <br />
                It is advisable to apply for your worker visa well in advance of
                your planned trip to allow for sufficient time for processing.
                The processing time for a worker visa application can vary
                depending on the type of visa and the country where you are
                applying, so it is important to check the specific processing
                time for your country on the website of the Icelandic
                Directorate of Immigration or with the nearest Icelandic embassy
                or consulate.
                <br />
                <br />
                You can submit your worker visa application in person at the
                embassy or consulate, or you can mail it to the embassy or
                consulate along with the required documents and the applicable
                fee. Some embassies and consulates may also accept applications
                by email or through an online portal.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a worker visa to work in Iceland may vary depending on
                  your country of citizenship and the type of visa you are
                  applying for. It is advisable to check the requirements on the
                  website of the Icelandic Directorate of Immigration or contact
                  the nearest Icelandic embassy or consulate for more
                  information.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Iceland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in Iceland will depend on your
                country of citizenship and the length of your stay.
                <br />
                <br />
                Citizens of countries that are members of the European Union
                (EU), the European Economic Area (EEA), or Switzerland do not
                need a visa to study in Iceland. They have the right to live and
                study in Iceland without any additional documentation, as long
                as they are registered with the Icelandic Directorate of
                Immigration.
                <br />
                <br />
                Citizens of countries that are not members of the EU, the EEA,
                or Switzerland may need a visa to study in Iceland, depending on
                the length of their stay. If you are planning to study in
                Iceland for less than six months, you will need a short-term
                student visa. If you are planning to study in Iceland for more
                than six months, you will need a long-term student visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  student visa may vary depending on your country of citizenship
                  and the type of visa you are applying for. It is advisable to
                  check the requirements on the website of the Icelandic
                  Directorate of Immigration or contact the nearest Icelandic
                  embassy or consulate for more information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Iceland Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Iceland, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine the type of student visa you need based on the
                length of your stay in Iceland. If you are planning to study in
                Iceland for less than six months, you will need a short-term
                student visa. If you are planning to study in Iceland for more
                than six months, you will need a long-term student visa.
                <br />
                <br />
                ● Gather all the required documents, as listed in the previous
                answer. Make sure that you have all the necessary documents and
                that they are complete and accurate.
                <br />
                <br />
                ● Fill out the application form. You can download the form from
                the website of the Icelandic Directorate of Immigration or
                obtain it from the nearest Icelandic embassy or consulate. Make
                sure to fill out the form completely and accurately.
                <br />
                <br />
                ● Submit your application and pay the applicable fee. You can
                submit your application in person at the nearest Icelandic
                embassy or consulate, or you can mail it to the embassy or
                consulate along with the required documents and the applicable
                fee. Some embassies and consulates may also accept applications
                by email or through an online portal.
                <br />
                <br />
                ● Wait for a decision on your application. The processing time
                for a student visa application can vary depending on the type of
                visa and the country where you are applying. It is advisable to
                submit your application well in advance of your planned trip to
                allow for sufficient time for processing.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a student visa to study in Iceland may vary depending on
                  your country of citizenship and the type of visa you are
                  applying for. It is advisable to check the requirements on the
                  website of the Icelandic Directorate of Immigration or contact
                  the nearest Icelandic embassy or consulate for more
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Iceland Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A completed and signed application form. You can download the
                form from the website of the Icelandic Directorate of
                Immigration or obtain it from the nearest Icelandic embassy or
                consulate.
                <br />
                <br />● A valid passport or travel document that is valid for at
                least three months beyond the planned date of departure from
                Iceland.
                <br />
                <br />● Two recent passport-sized photographs that meet the
                requirements for visa photographs.
                <br />
                <br />● A letter of acceptance from an Icelandic educational
                institution stating that you have been accepted to study in
                Iceland. This should include information about the program of
                study, the duration of the program, and any fees that are
                required.
                <br />
                <br />● Evidence of sufficient financial means to cover the cost
                of your stay in Iceland, including tuition fees, accommodation,
                and living expenses. This can include bank statements, pay
                slips, or a letter from your sponsor stating that they will
                cover your expenses.
                <br />
                <br />
                ● Evidence of medical insurance that covers you for the duration
                of your stay in Iceland. This should include coverage for
                medical treatment, hospitalization, and repatriation in case of
                illness or injury.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  student visa may vary depending on your country of citizenship
                  and the type of visa you are applying for.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Iceland Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of an Iceland student visa will depend on
                the length of your stay and the type of visa you are applying
                for.
                <br />
                <br />
                If you are planning to study in Iceland for less than six
                months, you will need a short-term student visa. Short-term
                student visas are usually valid for the duration of your
                studies, up to a maximum of six months. The fee for a short-term
                student visa is currently ISK 11,500 (about EUR 90).
                <br />
                <br />
                If you are planning to study in Iceland for more than six
                months, you will need a long-term student visa. Long-term
                student visas are usually valid for the duration of your
                studies, up to a maximum of one year. The fee for a long-term
                student visa is currently ISK 23,000 (about EUR 180).
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the validity and price of a
                  student visa may vary depending on your country of citizenship
                  and the specific circumstances of your case. It is advisable
                  to check the requirements on the website of the Icelandic
                  Directorate of Immigration or contact the nearest Icelandic
                  embassy or consulate for more accurate and up-to-date
                  information.
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

export default Iceland;
