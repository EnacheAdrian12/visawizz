import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Belgium = () => {
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
        <title>Belgium</title>
        <meta name="description" content="Belgium" />
        <meta
          name="keywords"
          content="Belgium travel visa, Belgium work visa, Belgium study visa, How to apply for an Belgium visa, Belgium visa requirements, Belgium tourist visa, Belgium student visa, Belgium business visa, Belgium visa processing time, Belgium visa application process, Belgium visa for Americans, Belgium visa for Europeans, Belgium visa for Belgiumns, Belgium visa for Canadians, Belgium visa for Indians, Belgium visa for Chinese, Belgium visa for Africans, Belgium visa for Asians, Belgium visa for South Americans, Belgium visa for Middle Easterners, Belgium visa for UK citizens, Belgium visa for EU citizens, Belgium visa for Schengen area, Belgium visa for non-EU citizens, Belgium visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Belgium
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Belgium is a small country located in Western Europe, and it is
              well known for its beautiful cities, delicious cuisine, and rich
              cultural heritage. Some of the most notable things that Belgium is
              known for include its historic buildings, such as the medieval
              town of Bruges and the Atomium in Brussels, its famous chocolate
              and beer, and its vibrant music and art scenes. Additionally,
              Belgium is known for its beautiful countryside, which includes the
              rolling hills of the Ardennes region and the picturesque canals of
              Ghent and Bruges.
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
                Who can enter Belgium without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Belgium without
                a visa for short stays (up to 90 days) for tourism or business
                purposes. This includes citizens of the European Union (EU)
                member states, the European Economic Area (EEA) countries
                (Iceland, Liechtenstein, and Norway), and a number of other
                countries, such as the United States, Canada, and Australia.
                <br />
                <br />
                If you are a citizen of a country that is not on the list of
                visa-exempt countries, you will need to obtain a visa in order
                to enter Belgium. The type of visa you need will depend on the
                purpose of your visit and the length of your stay.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check the most up-to-date
                  information on visa requirements before planning a trip to
                  Belgium, as the requirements may change. You can find more
                  information on the website of the Belgian Federal Public
                  Service Foreign Affairs.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Belgium Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Belgium, you will need to submit a
                number of documents as part of your application. The specific
                documents required will depend on the type of visa you are
                applying for and the purpose of your visit.
                <br />
                <br /> In general, you will need to provide the following
                documents:
                <br />
                <br />● A completed visa application form, which you can obtain
                from the Belgian embassy or consulate in your country of
                residence.
                <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least three months beyond the date you
                intend to leave Belgium.
                <br />
                <br />● Two recent passport-sized photographs. A cover letter
                explaining the purpose of your visit and details of your travel
                plans.
                <br />
                <br />● Proof of sufficient financial means to cover your
                expenses while in Belgium, such as bank statements or a letter
                from your employer.
                <br />
                <br />● Proof of accommodation in Belgium, such as a hotel
                reservation or a letter of invitation from a host in Belgium.
                <br />
                <br />● Any additional documents that are specific to the type
                of visa you are applying for, such as a work contract or proof
                of enrollment in a Belgian educational institution.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belgium Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Belgium, you will need to follow
                these steps: <br />
                <br />● Determine the type of visa you need based on the purpose
                of your visit and the length of your stay. There are several
                types of visas available for Belgium, including short-stay visas
                for tourism or business, long-stay visas for study or work, and
                family reunification visas. <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport, passport-sized photographs, a cover
                letter, and any additional documents that are specific to the
                type of visa you are applying for. <br />
                <br />● Find the Belgian embassy or consulate in your country of
                residence and make an appointment to submit your application.
                You may be able to schedule an appointment online or by phone.{" "}
                <br />
                <br />
                ● Attend your appointment and bring all of the required
                documents with you. You may also be asked to provide biometric
                data, such as fingerprints, at this time. <br />
                <br />● Wait for a decision on your visa application. Processing
                times can vary, so it is a good idea to apply for your visa well
                in advance of your intended travel date.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Belgium ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Belgium depends on
                the type of visa you have and the purpose of your visit.
                <br />
                <br />
                If you have a <span className="font-bold">short-stay visa</span>
                , also known as a Schengen visa, you will be allowed to stay in
                Belgium for up to 90 days within a 180-day period. This type of
                visa is issued for tourism, business, or other short-term
                purposes.
                <br />
                <br />
                If you have a <span className="font-bold">long-stay visa</span>,
                you will be allowed to stay in Belgium for a period of longer
                than 90 days. This type of visa is issued for study, work, or
                other long-term purposes. The length of your stay will depend on
                the specific type of long-stay visa you have.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Belgium ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The Belgian Government has eased COVID-19 restrictions. However,
                wearing a face mask remains mandatory for those above 12 years
                old in hospitals. Restrictions can differ across regions.
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
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials for official
                travel. In Belgium, diplomatic passports are issued by the
                Belgian Ministry of Foreign Affairs to Belgian diplomats and
                other officials who are accredited to represent the Belgian
                government abroad.
                <br />
                <br />
                <span className="font-bold">
                  Diplomatic passports are different from regular passports in
                  that they are issued in the name of the Belgian state, rather
                  than in the name of an individual. They are also typically
                  valid for a longer period of time and are issued with fewer
                  restrictions on travel than regular passports. Diplomatic
                  passports are not intended for personal travel, but rather for
                  official business on behalf of the Belgian government. If you
                  have any further questions about diplomatic passports in
                  Belgium, please let me know.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Belgium ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a non-EU/EEA citizen and you want to work in Belgium,
                you will generally need to obtain a worker visa. The specific
                type of worker visa you will need will depend on the length of
                your stay and the nature of your work.
                <br />
                <br /> For stays of up to 90 days, you may be able to obtain a
                short-stay visa, also known as a Schengen visa, which allows you
                to work in Belgium for a limited period of time. This type of
                visa is issued for business or other short-term purposes and is
                valid for up to 90 days within a 180-day period.
                <br />
                <br /> For stays of more than 90 days, you will need to obtain a
                long-stay visa. This type of visa is issued for work or other
                long-term purposes and allows you to stay in Belgium for a
                period of longer than 90 days. The specific type of long-stay
                visa you will need will depend on the nature of your work, such
                as whether you will be working as an employee or as a
                self-employed person.
                <br />
                <br />
                <span className="font-bold">
                  In order to apply for a worker visa, you will generally need
                  to have a job offer from a Belgian employer and provide a
                  number of documents as part of your application, such as a
                  completed visa application form, a valid passport, and proof
                  of your employment in Belgium. It is a good idea to check with
                  the Belgian embassy or consulate in your country of residence
                  for the most up-to-date information on the specific
                  requirements for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belgium Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to enter Belgium, you will need to
                follow these steps:
                <br />
                <br />● Determine the type of worker visa you need based on the
                length of your stay and the nature of your work. If you will be
                working in Belgium for a period of up to 90 days, you may be
                able to obtain a short-stay visa, also known as a Schengen visa.
                If you will be working in Belgium for a longer period of time,
                you will need to obtain a long-stay visa.
                <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport, passport-sized photographs, and any
                additional documents that are specific to the type of visa you
                are applying for. You will also need to provide proof of your
                employment in Belgium, such as a job offer from a Belgian
                employer or a work contract.
                <br />
                <br />● Find the Belgian embassy or consulate in your country of
                residence and make an appointment to submit your application.
                You may be able to schedule an appointment online or by phone.
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
                Types of Belgium Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for non-EU/EEA
                citizens who want to work in Belgium. The specific type of visa
                you will need will depend on the length of your stay and the
                nature of your work.
                <br />
                <br /> Some common types of worker visas for Belgium include:
                <br />
                <br />● A <span className="font-bold">short-stay visa</span>,
                also known as a Schengen visa, which allows you to work in
                Belgium for a limited period of time. This type of visa is
                issued for business or other short-term purposes and is valid
                for up to 90 days within a 180-day period.
                <br />
                <br />● A <span className="font-bold">long-stay visa</span>,
                which allows you to work in Belgium for a longer period of time.
                There are several types of long-stay visas available, including
                the following:
                <br />
                <br />● A <span className="font-bold">work permit visa</span>,
                which is issued to non-EU/EEA citizens who have a job offer from
                a Belgian employer. This type of visa allows you to work in
                Belgium as an employee for a specific employer.
                <br />
                <br />● A{" "}
                <span className="font-bold">self-employed worker visa</span>,
                which is issued to non-EU/EEA citizens who want to work in
                Belgium as self-employed persons. This type of visa allows you
                to work as a self-employed person in Belgium and start your own
                business.
                <br />
                <br />● An{" "}
                <span className="font-bold">intra-corporate transfer visa</span>
                , which is issued to non-EU/EEA citizens who are transferring to
                a Belgian branch or subsidiary of their employer. This type of
                visa allows you to work in Belgium as an employee for a specific
                employer.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Belgium Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to enter Belgium, you will need to
                provide a number of documents as part of your application. The
                specific documents required will depend on the type of worker
                visa you are applying for and the nature of your work in
                Belgium. <br />
                <br /> In general, you will need to provide the following
                documents: <br />
                <br />● A completed visa application form, which you can obtain
                from the Belgian embassy or consulate in your country of
                residence. <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least three months beyond the date you
                intend to leave Belgium. <br />
                <br />● Two recent passport-sized photographs. <br />
                <br />● A cover letter explaining the purpose of your visit and
                details of your work in Belgium, including your job offer or
                work contract. <br />
                <br />● Proof of sufficient financial means to cover your
                expenses while in Belgium, such as bank statements or a letter
                from your employer. <br />
                <br />● Proof of accommodation in Belgium, such as a hotel
                reservation or a letter of invitation from a host in Belgium.{" "}
                <br />
                <br />
                <span className="font-bold">
                  If you are applying for a work permit visa or an
                  intra-corporate transfer visa, you will also need to provide
                  proof of your employment in Belgium, such as a job offer from
                  a Belgian employer or a work contract. If you are applying for
                  a self-employed worker visa, you will need to provide a
                  business plan and proof that you have the necessary skills and
                  experience to start a business in Belgium.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Belgium ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to enter Belgium, you will need to
                submit your application to the Belgian embassy or consulate in
                your country of residence. You will generally need to make an
                appointment to submit your application in person.
                <br />
                <br /> It is a good idea to apply for your worker visa well in
                advance of your intended travel date, as processing times can
                vary. You should also be prepared to provide any additional
                documents or information that may be required as part of your
                application.
                <br />
                <br />
                <span className="font-bold">
                  To find the Belgian embassy or consulate in your country of
                  residence, you can visit the website of the Belgian Federal
                  Public Service Foreign Affairs. This website provides contact
                  information and details on the visa application process for
                  embassies and consulates around the world.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Belgium ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a non-EU/EEA citizen and you want to study in
                Belgium, you will generally need to obtain a long-stay visa.
                This type of visa allows you to stay in Belgium for a period of
                longer than 90 days and is issued for study or other long-term
                purposes.
                <br />
                <br /> To apply for a long-stay visa to study in Belgium, you
                will generally need to have been accepted to a recognized
                educational institution in Belgium and provide a number of
                documents as part of your application, such as a completed visa
                application form, a valid passport, and proof of your enrollment
                in a Belgian educational institution.
                <br />
                <br />
                <span className="font-bold">
                  If you are accepted to a recognized educational institution in
                  Belgium, you may also be able to apply for a scholarship or
                  grant to cover the cost of your studies. You can find more
                  information on scholarships and grants on the website of the
                  Belgian Federal Public Service Foreign Affairs.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belgium student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Belgium, you will need
                to follow these steps:
                <br />
                <br />● Determine the type of student visa you need based on the
                length of your stay and the nature of your studies in Belgium.
                You will generally need to obtain a long-stay visa, which allows
                you to stay in Belgium for a period of longer than 90 days.
                <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport, passport-sized photographs, and any
                additional documents that are specific to the type of visa you
                are applying for. You will also need to provide proof of your
                enrollment in a recognized educational institution in Belgium.
                <br />
                <br />● Find the Belgian embassy or consulate in your country of
                residence and make an appointment to submit your application.
                You may be able to schedule an appointment online or by phone.
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
                Belgium student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Belgium, you will
                generally need to provide the following documents as part of
                your application:
                <br />
                <br />● A completed visa application form, which you can obtain
                from the Belgian embassy or consulate in your country of
                residence.
                <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least three months beyond the date you
                intend to leave Belgium.
                <br />
                <br />● Two recent passport-sized photographs.
                <br />
                <br />
                ● A cover letter explaining the purpose of your visit and
                details of your studies in Belgium, including your acceptance to
                a recognized educational institution in Belgium.
                <br />
                <br />● Proof of sufficient financial means to cover your
                expenses while in Belgium, such as bank statements or a letter
                of sponsorship.
                <br />
                <br />● Proof of accommodation in Belgium, such as a letter of
                acceptance from a hostel or dormitory. <br />
                <br />
                ● Proof of your enrollment in a recognized educational
                institution in Belgium, such as a letter of acceptance or a copy
                of your enrollment contract.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the list of required documents
                  may vary depending on the embassy or consulate where you are
                  applying, and you may be asked to provide additional documents
                  as needed. It is a good idea to check with the embassy or
                  consulate for the most up-to-date information on the documents
                  required for your specific situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Belgium student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to study in Belgium
                will depend on the specific type of visa you are applying for
                and the length of your stay. <br />
                <br /> If you are applying for a long-stay visa to study in
                Belgium, your visa will generally be valid for the duration of
                your studies. The length of your stay will depend on the
                specific type of long-stay visa you have and the duration of
                your studies. <br />
                <br />
                <span className="font-bold">
                  The price of a student visa to study in Belgium will also
                  depend on the specific type of visa you are applying for and
                  the length of your stay. In general, visa fees are payable in
                  the local currency of the embassy or consulate where you are
                  applying. You can find more information on visa fees on the
                  website of the Belgian Federal Public Service Foreign Affairs.
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

export default Belgium;
