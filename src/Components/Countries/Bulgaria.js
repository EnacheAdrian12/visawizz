import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Bulgaria = () => {
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
        <title>Bulgaria</title>
        <meta name="description" content="Bulgaria" />
        <meta
          name="keywords"
          content="Bulgaria travel visa, Bulgaria work visa, Bulgaria study visa, How to apply for an Bulgaria visa, Bulgaria visa requirements, Bulgaria tourist visa, Bulgaria student visa, Bulgaria business visa, Bulgaria visa processing time, Bulgaria visa application process, Bulgaria visa for Americans, Bulgaria visa for Europeans, Bulgaria visa for Bulgarians, Bulgaria visa for Canadians, Bulgaria visa for Indians, Bulgaria visa for Chinese, Bulgaria visa for Africans, Bulgaria visa for Asians, Bulgaria visa for South Americans, Bulgaria visa for Middle Easterners, Bulgaria visa for UK citizens, Bulgaria visa for EU citizens, Bulgaria visa for Schengen area, Bulgaria visa for non-EU citizens, Bulgaria visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Bulgaria
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Bulgaria is a country located in the Balkans region of Europe. It
              is well known for its rich cultural heritage and its beautiful
              natural landscapes. Bulgaria is known for its many fascinating
              historical sites, such as the ancient city of Plovdiv and the
              Thracian tombs, which are considered to be some of the
              best-preserved examples of ancient architecture in Europe.
              Bulgaria is also known for its delicious cuisine, which features a
              variety of fresh, local ingredients, and its thriving wine
              industry, which produces some of the best wines in the region.
              Some other things that Bulgaria is known for include its vibrant
              arts and music scene, and its many natural parks and outdoor
              recreation areas.
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
                Who can enter Bulgaria without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Bulgaria
                without a visa for short stays of up to 90 days within a 180-day
                period. These countries include EU member states, as well as
                several non-EU countries such as the United States, Canada, and
                Australia.
                <br />
                <br /> If you are a citizen of a country that is not listed
                above, you will generally need to obtain a visa before traveling
                to Bulgaria. The specific type of visa you will need will depend
                on the purpose of your visit and the length of your stay.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the list of countries whose
                  citizens are allowed to enter Bulgaria without a visa may
                  change over time, and you should check with the Bulgarian
                  embassy or consulate in your country of residence for the most
                  up-to-date information. You should also be prepared to provide
                  evidence of your purpose of travel and sufficient financial
                  means to cover your expenses while in Bulgaria.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Bulgaria Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bulgaria, you will need to provide
                a number of documents as part of your application. The specific
                documents required will depend on the type of visa you are
                applying for and the purpose of your visit to Bulgaria. <br />
                <br />● In general, you will need to provide the following
                documents: <br />
                <br />● A completed visa application form, which you can obtain
                from the Bulgarian embassy or consulate in your country of
                residence. <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least three months beyond the date you
                intend to leave Bulgaria. <br />
                <br />● Two recent passport-sized photographs. <br />
                <br /> A cover letter explaining the purpose of your visit to
                Bulgaria. <br />
                <br />● Proof of sufficient financial means to cover your
                expenses while in Bulgaria, such as bank statements or a letter
                of sponsorship. <br />
                <br />● Proof of accommodation in Bulgaria, such as a hotel
                reservation or a letter of invitation from a host in Bulgaria.{" "}
                <br />
                <br />
                <span className="font-bold">
                  If you are applying for a visa for a specific purpose, such as
                  work or study, you may also need to provide additional
                  documents, such as a job offer or a letter of acceptance from
                  an educational institution.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bulgaria Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bulgaria, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of visa you need based on the length
                of your stay and the purpose of your visit to Bulgaria. There
                are several types of visas available, including short-stay visas
                for stays of up to 90 days and long-stay visas for stays of
                longer than 90 days.
                <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport, passport-sized photographs, and any
                additional documents that are specific to the type of visa you
                are applying for.
                <br />
                <br />● Find the Bulgarian embassy or consulate in your country
                of residence and make an appointment to submit your application.
                You may be able to schedule an appointment online or by phone.
                <br />
                <br />
                ● Attend your appointment and bring all of the required
                documents with you. You may also be asked to provide biometric
                data, such as fingerprints, at this time.
                <br />
                <br />● Wait for a decision on your visa application. Processing
                times can vary, so it is a good idea to apply for your visa well
                in advance of your intended travel date.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Bulgaria ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Bulgaria will depend on the
                type of visa you have and the purpose of your visit.
                <br />
                <br /> If you have a{" "}
                <span className="font-bold">short-stay visa</span>, also known
                as a Schengen visa, you will generally be allowed to stay in
                Bulgaria for a period of up to 90 days within a 180-day period.
                This type of visa is issued for tourism, business, or other
                short-term purposes.
                <br />
                <br /> If you have a{" "}
                <span className="font-bold">long-stay visa</span>, you will
                generally be allowed to stay in Bulgaria for a longer period of
                time. The length of your stay will depend on the specific type
                of long-stay visa you have and the purpose of your visit. For
                example, if you have a work or study visa, your stay may be
                limited to the duration of your work or studies.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Bulgaria?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Travelers arriving to Bulgaria no longer must provide COVID-19
                related documents to enter the country and they are not required
                to quarantine upon arrival.
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
                About Diplomatic Passport !
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a type of passport that is issued to
                diplomats, high-ranking government officials, and other
                individuals representing their country abroad. Diplomatic
                passports are issued by the government of the individual's
                country of citizenship and are generally valid for a longer
                period of time than ordinary passports. <br />
                <br /> Diplomatic passports are issued to individuals who have
                been accredited by their country's government as representatives
                to a foreign government, international organization, or other
                diplomatic mission. They are used to facilitate international
                travel and to provide protection and immunity from local laws in
                the countries where the individual is traveling. <br />
                <br />
                <span className="font-bold">
                  In Bulgaria, diplomatic passports are issued by the Bulgarian
                  Ministry of Foreign Affairs to Bulgarian diplomats and other
                  individuals representing the Bulgarian government abroad. They
                  are issued for a period of five years and are renewable.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Bulgaria ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a non-EU/EEA citizen and you want to work in
                Bulgaria, you will generally need to obtain a long-stay visa.
                This type of visa allows you to stay in Bulgaria for a period of
                longer than 90 days and is issued for work or other long-term
                purposes.
                <br />
                <br /> To apply for a long-stay visa to work in Bulgaria, you
                will generally need to have a job offer from a Bulgarian
                employer and provide a number of documents as part of your
                application, such as a completed visa application form, a valid
                passport, and proof of your employment in Bulgaria.
                <br />
                <br /> If you are accepted for a job in Bulgaria, your employer
                will generally be responsible for applying for a work permit on
                your behalf. You will need to provide your employer with the
                necessary documents, such as a copy of your passport and a
                criminal background check, to allow them to apply for a work
                permit on your behalf.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bulgaria Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Bulgaria, you will need to
                follow these steps:
                <br />
                <br />● Determine the type of worker visa you need based on the
                length of your stay and the nature of your work in Bulgaria. You
                will generally need to obtain a long-stay visa, which allows you
                to stay in Bulgaria for a period of longer than 90 days.
                <br />
                <br />● Find a job in Bulgaria. You will generally need to have
                a job offer from a Bulgarian employer in order to apply for a
                worker visa.
                <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport, passport-sized photographs, and any
                additional documents that are specific to the type of visa you
                are applying for. You will also need to provide proof of your
                employment in Bulgaria, such as a job offer or a work contract.
                <br />
                <br />
                ● Contact your employer and ask them to apply for a work permit
                on your behalf. Your employer will generally be responsible for
                applying for a work permit and will need to provide the
                necessary documents, such as a copy of your passport and a
                criminal background check.
                <br />
                <br />● Find the Bulgarian embassy or consulate in your country
                of residence and make an appointment to submit your visa
                application. You may be able to schedule an appointment online
                or by phone.
                <br />
                <br />● Attend your appointment and bring all of the required
                documents with you. You may also be asked to provide biometric
                data, such as fingerprints, at this time.
                <br />
                <br />● Wait for a decision on your visa application. Processing
                times can vary, so it is a good idea to apply for your visa well
                in advance of your intended travel date.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Bulgaria Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you can apply for
                to work in Bulgaria, depending on the nature of your work and
                the length of your stay. These visas include:
                <br />
                <br />● A{" "}
                <span className="font-bold">long-stay visa for employment</span>
                , which allows you to work in Bulgaria for a period of longer
                than 90 days. This type of visa is generally issued for work in
                a specific occupation or sector and is valid for the duration of
                your employment.
                <br />
                <br />● A{" "}
                <span className="font-bold">long-seasonal work visa</span>,
                which allows you to work in Bulgaria for a specific period of
                time, typically up to six months. This type of visa is generally
                issued for work in the agricultural or tourism sectors.
                <br />
                <br />● A{" "}
                <span className="font-bold">
                  long-stay visa for self-employment
                </span>
                , which allows you to work in Bulgaria as a self-employed
                individual for a period of longer than 90 days. This type of
                visa is issued to individuals who plan to start their own
                business in Bulgaria or who are working as freelancers.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Bulgaria Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Bulgaria, you will
                generally need to provide the following documents as part of
                your application:
                <br />
                <br />● A completed visa application form, which you can obtain
                from the Bulgarian embassy or consulate in your country of
                residence.
                <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least three months beyond the date you
                intend to leave Bulgaria.
                <br />
                <br />● Two recent passport-sized photographs.
                <br />
                <br />● A cover letter explaining the purpose of your visit to
                Bulgaria and details of your employment, including your job
                offer or work contract.
                <br />
                <br />● Proof of sufficient financial means to cover your
                expenses while in Bulgaria, such as bank statements or a letter
                of sponsorship.
                <br />
                <br />● Proof of accommodation in Bulgaria, such as a hotel
                reservation or a letter of invitation from a host in Bulgaria.
                <br />
                <br />
                <span className="font-bold">
                  If you are applying for a specific type of worker visa, such
                  as a long-seasonal work visa or a long-stay visa for
                  self-employment, you may also need to provide additional
                  documents, such as evidence of your employment in the
                  agricultural or tourism sectors or a business plan for your
                  self-employed activity in Bulgaria.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Bulgaria ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Bulgaria, you will need to
                submit your application at the Bulgarian embassy or consulate in
                your country of residence. You will generally need to make an
                appointment to submit your application in person.
                <br />
                <br /> It is a good idea to start the application process as
                early as possible, as processing times can vary. You should make
                sure to have all of the necessary documents ready before you
                schedule an appointment to submit your application.
                <br />
                <br />
                <span className="font-bold">
                  You can find information on the location and contact details
                  of the Bulgarian embassy or consulate in your country of
                  residence on the website of the Bulgarian Ministry of Foreign
                  Affairs. You may also be able to schedule an appointment
                  online or by phone.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Bulgaria ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a non-EU/EEA citizen and you want to study in
                Bulgaria, you will generally need to obtain a long-stay visa.
                This type of visa allows you to stay in Bulgaria for a period of
                longer than 90 days and is issued for study or other long-term
                purposes. <br />
                <br /> To apply for a long-stay visa to study in Bulgaria, you
                will generally need to provide a number of documents as part of
                your application, such as a completed visa application form, a
                valid passport, and proof of your enrollment in a recognized
                educational institution in Bulgaria. <br />
                <br />
                <span className="font-bold">
                  If you are accepted for a study program in Bulgaria, your
                  educational institution will generally be responsible for
                  applying for a residence permit on your behalf. You will need
                  to provide your educational institution with the necessary
                  documents, such as a copy of your passport and a criminal
                  background check, to allow them to apply for a residence
                  permit on your behalf.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bulgaria student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Bulgaria, you will need
                to follow these steps:
                <br />
                <br />● Determine the type of student visa you need based on the
                length of your stay and the nature of your studies in Bulgaria.
                You will generally need to obtain a long-stay visa, which allows
                you to stay in Bulgaria for a period of longer than 90 days.
                <br />
                <br />
                ● Find a recognized educational institution in Bulgaria that
                offers the study program you are interested in. You will
                generally need to have a letter of acceptance from the
                educational institution in order to apply for a student visa.
                <br />
                <br />
                ● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport, passport-sized photographs, and any
                additional documents that are specific to the type of visa you
                are applying for. You will also need to provide proof of your
                enrollment in an educational institution in Bulgaria, such as a
                letter of acceptance or enrollment certificate.
                <br />
                <br />● Contact your educational institution and ask them to
                apply for a residence permit on your behalf. Your educational
                institution will generally be responsible for applying for a
                residence permit and will need to provide the necessary
                documents, such as a copy of your passport and a criminal
                background check.
                <br />
                <br />● Find the Bulgarian embassy or consulate in your country
                of residence and make an appointment to submit your visa
                application. You may be able to schedule an appointment online
                or by phone.
                <br />
                <br />● Attend your appointment and bring all of the required
                documents with you. You may also be asked to provide biometric
                data, such as fingerprints, at this time.
                <br />
                <br />● Wait for a decision on your visa application. Processing
                times can vary, so it is a good idea to apply for your visa well
                in advance of your intended travel date.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Bulgaria student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Bulgaria, you will
                generally need to provide the following documents as part of
                your application:
                <br />
                <br />● A completed visa application form, which you can obtain
                from the Bulgarian embassy or consulate in your country of
                residence.
                <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least three months beyond the date you
                intend to leave Bulgaria.
                <br />
                <br />● Two recent passport-sized photographs.
                <br />
                <br />● A cover letter explaining the purpose of your visit to
                Bulgaria and details of your studies, including your letter of
                acceptance from an educational institution in Bulgaria.
                <br />
                <br />● Proof of sufficient financial means to cover your
                expenses while in Bulgaria, such as bank statements or a letter
                of sponsorship.
                <br />
                <br />● Proof of accommodation in Bulgaria, such as a hotel
                reservation or a letter of invitation from a host in Bulgaria.
                <br />
                <br />● Proof of your enrollment in an educational institution
                in Bulgaria, such as a letter of acceptance or enrollment
                certificate.
                <br />
                <br />
                <span className="font-bold">
                  If you are applying for a specific type of student visa, such
                  as a student exchange program visa, you may also need to
                  provide additional documents, such as evidence of your
                  participation in the exchange program.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Bulgaria student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to study in Bulgaria
                will depend on the length of your stay and the type of visa you
                are applying for.
                <br />
                <br /> If you are applying for a long-stay visa to study in
                Bulgaria, the visa will generally be valid for the duration of
                your studies, up to a maximum of one year. After one year, you
                may be able to apply for a residence permit, which will allow
                you to stay in Bulgaria for the remainder of your studies.
                <br />
                <br />
                <span className="font-bold">
                  The price of a student visa to study in Bulgaria will
                  generally depend on the embassy or consulate where you are
                  applying and the specific type of visa you are applying for.
                  You may be required to pay a visa fee, which can vary
                  depending on the embassy or consulate where you are applying.
                  It is a good idea to check with the embassy or consulate for
                  the most up-to-date information on the price of a student visa
                  to study in Bulgaria.
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

export default Bulgaria;
