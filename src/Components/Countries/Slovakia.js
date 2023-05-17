import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Slovakia = () => {
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
        <title>Slovakia</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Slovakia travel visa, Slovakia work visa, Slovakia study visa, How to apply for an Slovakia visa, Slovakia visa requirements, Slovakia tourist visa, Slovakia student visa, Slovakia business visa, Slovakia visa processing time, Slovakia visa application process, Slovakia visa for Americans, Slovakia visa for Europeans, Slovakia visa for Slovakians, Slovakia visa for Canadians, Slovakia visa for Slovakians, Slovakia visa for Chinese, Slovakia visa for Africans, Slovakia visa for Asians, Slovakia visa for South Americans, Slovakia visa for Middle Easterners, Slovakia visa for UK citizens, Slovakia visa for EU citizens, Slovakia visa for Schengen area, Slovakia visa for non-EU citizens, Slovakia visa fees and charges"

        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Slovakia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Slovakia is a small country located in Central Europe. It is known
              for its beautiful mountain scenery, including the Carpathian
              Mountains and the Tatra Mountains. Slovakia is also famous for its
              historic castles and medieval towns, which reflect its rich
              cultural heritage. In addition, the country is known for its
              production of automobiles, including the popular car brand, Škoda.
              Slovakia is also a popular destination for winter sports, with
              many ski resorts located in the country's mountainous regions.
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
                Who can enter Slovakia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the European Union (EU), the European Economic Area
                (EEA), and Switzerland are able to enter Slovakia without a visa
                for stays of up to 90 days within a 180-day period.
                <br />
                <br />
                Citizens of certain countries, including the United States,
                Canada, Australia, and Japan, are also able to enter Slovakia
                without a visa for stays of up to 90 days within a 180-day
                period.
                <br />
                <br />
                If you are a citizen of a country that is not on the list of
                visa-exempt countries, you will need to apply for a visa before
                entering Slovakia.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out if
                  you need a visa to enter Slovakia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Slovakia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Slovakia, you will need to submit
                the following documents:
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A valid passport or other travel document, with at least two
                blank pages and a validity of at least three months beyond the
                intended stay in Slovakia.
                <br />
                <br />
                ● Two recent passport-size photographs, taken against a white
                background.
                <br />
                <br />
                ● A valid medical insurance policy that covers the entire period
                of your stay in Slovakia.
                <br />
                <br />
                ● Evidence of sufficient funds to support your stay in Slovakia,
                such as bank statements or a letter from your employer.
                <br />
                <br />
                ● A valid return ticket or proof of onward travel, if
                applicable.
                <br />
                <br />
                ● Any additional documents required for the specific type of
                visa you are applying for, such as a letter of invitation from a
                host in Slovakia, a certificate of employment, or proof of
                enrollment in a school or university.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out
                  what documents you need to apply for a visa to enter Slovakia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Slovakia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Slovakia visa, you will need to follow these
                steps:
                <br />
                <br />
                ● Determine which type of visa you need. Slovakia offers several
                types of visas, including short-term visas for tourism and
                business, long-term visas for study and work, and transit visas
                for travelers passing through Slovakia.
                <br />
                <br />
                ● Collect the necessary documents. To apply for a Slovakia visa,
                you will need to submit a completed and signed visa application
                form, a valid passport or travel document, passport-sized
                photographs, proof of medical insurance, and any additional
                documents required for the specific type of visa you are
                applying for.
                <br />
                <br />
                ● Make an appointment. You will need to schedule an appointment
                at the Embassy of Slovakia or a consulate of Slovakia in your
                home country to submit your visa application.
                <br />
                <br />
                ● Attend your appointment and submit your application. Bring all
                of the required documents with you to your appointment and be
                prepared to pay the visa processing fee.
                <br />
                <br />
                ● Wait for a decision on your application. The processing time
                for a Slovakia visa can vary, but it typically takes several
                weeks to obtain a decision.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out how
                  to apply for a Slovakia visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Slovakia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are permitted to stay in Slovakia
                depends on the type of visa that you have.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;short-term visa</span>, such
                as a tourist visa or a business visa, you will typically be
                allowed to stay in Slovakia for up to 90 days within a 180-day
                period.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;long-term visa</span>, such as
                a study visa or a work visa, you will typically be allowed to
                stay in Slovakia for the duration of your study program or
                employment contract, up to a maximum of one year.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out how
                  long you are permitted to stay in Slovakia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Slovakia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID-19 travel restrictions were lifted in Slovakia. Travellers
                are not required to provide proof of vaccination, recovery from
                COVID-19 or a negative test result. You can find the latest
                information on air travel regulations for this country on the
                IATA website.
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
                A diplomatic passport is a special type of passport issued to
                diplomats and other government officials who are traveling
                abroad on official business. Diplomatic passports are issued by
                the government of the country that the diplomat represents and
                are typically valid for a limited period of time.
                <br />
                <br />
                In Slovakia, diplomatic passports are issued by the Ministry of
                Foreign and European Affairs of Slovakia to Slovak diplomats and
                other government officials who are traveling abroad on official
                business. Diplomatic passports are valid for a maximum of five
                years and allow the holder to enter and exit foreign countries
                without a visa, as well as receive other privileges and
                immunities while traveling abroad.
                <br />
                <br />
                <span className="font-bold">
                  Only individuals who are appointed by the government of
                  Slovakia to serve as diplomats or other government officials
                  are eligible to receive a diplomatic passport. If you are not
                  a diplomat or government official, you will not be able to
                  obtain a diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Slovakia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Slovakia, you will typically need
                to obtain a worker visa before entering the country.
                <br />
                <br />
                There are several types of worker visas available in Slovakia,
                including short-term worker visas and long-term worker visas.
                The type of worker visa that you need will depend on the length
                of your employment contract and the nature of your work.
                <br />
                <br />
                To apply for a worker visa in Slovakia, you will need to submit
                a completed and signed visa application form, a valid passport
                or travel document, passport-sized photographs, proof of medical
                insurance, and a written employment contract or other
                documentation indicating that you have been offered a job in
                Slovakia.
                <br />
                <br />
                You will also need to pay a visa processing fee and may be
                required to undergo a medical examination.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out how
                  to apply for a worker visa in Slovakia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Slovakia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Slovakia worker visa, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine which type of worker visa you need. Slovakia offers
                several types of worker visas, including short-term worker visas
                for employment contracts of up to 90 days and long-term worker
                visas for employment contracts of more than 90 days.
                <br />
                <br />
                ● Collect the necessary documents. To apply for a Slovakia
                worker visa, you will need to submit a completed and signed visa
                application form, a valid passport or travel document,
                passport-sized photographs, proof of medical insurance, and a
                written employment contract or other documentation indicating
                that you have been offered a job in Slovakia.
                <br />
                <br />
                ● Make an appointment. You will need to schedule an appointment
                at the Embassy of Slovakia or a consulate of Slovakia in your
                home country to submit your worker visa application.
                <br />
                <br />
                ● Attend your appointment and submit your application. Bring all
                of the required documents with you to your appointment and be
                prepared to pay the visa processing fee.
                <br />
                <br />
                ● Wait for a decision on your application. The processing time
                for a Slovakia worker visa can vary, but it typically takes
                several weeks to obtain a decision.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out how
                  to apply for a Slovakia worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Slovakia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are two main types of worker visas available in Slovakia:
                <br />
                <br />●{" "}
                <span className="font-bold">Short-term worker visa</span>: This
                type of visa is intended for individuals who are coming to
                Slovakia to work for a period of up to 90 days. It is typically
                issued for a single entry and is valid for the duration of the
                employment contract.
                <br />
                <br />● <span className="font-bold">Long-term worker visa</span>
                : This type of visa is intended for individuals who are coming
                to Slovakia to work for a period of more than 90 days. It is
                typically issued for multiple entries and is valid for the
                duration of the employment contract, up to a maximum of one
                year.
                <br />
                <br />
                Both short-term and long-term worker visas can be extended if
                necessary, but the extension process can be complex and may
                require the submission of additional documentation.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out
                  which type of worker visa is appropriate for your situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Slovakia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Slovakia worker visa, you will need to submit the
                following documents:
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A valid passport or other travel document, with at least two
                blank pages and a validity of at least three months beyond the
                intended stay in Slovakia.
                <br />
                <br />
                ● Two recent passport-sized photographs, taken against a white
                background.
                <br />
                <br />
                ● A valid medical insurance policy that covers the entire period
                of your stay in Slovakia.
                <br />
                <br />
                ● A written employment contract or other documentation
                indicating that you have been offered a job in Slovakia. This
                should include information about the duration and nature of your
                work, as well as the name and address of your employer.
                <br />
                <br />
                ● Evidence of sufficient funds to support your stay in Slovakia,
                such as bank statements or a letter from your employer.
                <br />
                <br />
                ● A valid return ticket or proof of onward travel, if
                applicable.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out
                  what documents you need to apply for a Slovakia worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Slovakia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Slovakia, you will need to
                schedule an appointment at the Embassy of Slovakia or a
                consulate of Slovakia in your home country.
                <br />
                <br />
                You should apply for your worker visa as soon as you have
                received a written employment contract or other documentation
                indicating that you have been offered a job in Slovakia. It is
                important to start the visa process early, as it can take
                several weeks to obtain a decision on your worker visa
                application.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out how
                  to schedule an appointment to apply for a worker visa in
                  Slovakia.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Slovakia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Slovakia for a period of more
                than 90 days, you will typically need to obtain a student visa
                before entering the country.
                <br />
                <br />
                To apply for a student visa in Slovakia, you will need to submit
                a completed and signed visa application form, a valid passport
                or travel document, passport-sized photographs, proof of medical
                insurance, and a letter of acceptance from a school or
                university in Slovakia. You will also need to pay a visa
                processing fee and may be required to undergo a medical
                examination.
                <br />
                <br />
                If you are planning to study in Slovakia for a period of 90 days
                or less, you may be able to enter the country with a short-term
                visa, such as a tourist visa or a business visa. However, you
                should check with the Embassy of Slovakia or the Ministry of
                Foreign and European Affairs of Slovakia to confirm the most
                current visa requirements and to find out if you need a student
                visa to study in Slovakia.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out how
                  to apply for a student visa in Slovakia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Slovakia student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Slovakia student visa, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine which type of student visa you need. If you are
                planning to study in Slovakia for a period of more than 90 days,
                you will typically need to apply for a long-term student visa.
                If you are planning to study in Slovakia for a period of 90 days
                or less, you may be able to enter the country with a short-term
                visa, such as a tourist visa or a business visa.
                <br />
                <br />
                ● Collect the necessary documents. To apply for a Slovakia
                student visa, you will need to submit a completed and signed
                visa application form, a valid passport or travel document,
                passport-sized photographs, proof of medical insurance, and a
                letter of acceptance from a school or university in Slovakia.
                <br />
                <br />
                ● Make an appointment. You will need to schedule an appointment
                at the Embassy of Slovakia or a consulate of Slovakia in your
                home country to submit your student visa application.
                <br />
                <br />
                ● Attend your appointment and submit your application. Bring all
                of the required documents with you to your appointment and be
                prepared to pay the visa processing fee.
                <br />
                <br />
                ● Wait for a decision on your application. The processing time
                for a Slovakia student visa can vary, but it typically takes
                several weeks to obtain a decision.
                <br />
                <br />
                <span className="font-bold">
                  I recommend checking with the Embassy of Slovakia or the
                  Ministry of Foreign and European Affairs of Slovakia to
                  confirm the most current visa requirements and to find out how
                  to apply for a Slovakia student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Slovakia student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Slovakia, you will need to meet
                the following requirements:
                <br />
                <br />
                ● Have a valid passport.
                <br />
                <br />
                ● Have been accepted to a recognized educational institution in
                Slovakia.
                <br />
                <br />
                ● Provide proof of sufficient financial resources to cover your
                living expenses and tuition during your stay in Slovakia.
                <br />
                <br />
                ● Provide a health insurance policy that is valid in Slovakia.
                <br />
                <br />
                ● Provide a police clearance certificate from your country of
                origin.
                <br />
                <br />
                ● Provide a medical certificate proving that you do not have any
                contagious diseases.
                <br />
                <br />
                ● Provide evidence of your knowledge of the Slovak language, if
                required by the educational institution you will be attending.
                <br />
                <br />
                You will also need to pay a visa processing fee and provide
                biometric information as part of the application process. It is
                recommended that you start the visa application process as early
                as possible, as it can take several weeks to complete.
                <br />
                <br />
                <span className="font-bold">
                  Note that the requirements for a student visa may vary
                  depending on your country of origin and the specific
                  circumstances of your study program in Slovakia. It is
                  advisable to contact the embassy or consulate of Slovakia in
                  your country for more specific information on the requirements
                  for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Slovakia student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Slovakia will
                depend on the length of your study program and the specific
                circumstances of your stay in the country.
                <br />
                <br />
                Student visas are typically valid for the duration of your study
                program, up to a maximum of one year. If your study program is
                longer than one year, you may need to apply for a long-term visa
                or residence permit.
                <br />
                <br />
                The price of a student visa for Slovakia will depend on the visa
                processing fees and any other costs associated with the
                application process. It is recommended that you contact the
                embassy or consulate of Slovakia in your country for information
                on the specific costs and fees associated with obtaining a
                student visa.
                <br />
                <br />
                <span className="font-bold">
                  In addition to the visa fees, you will also need to budget for
                  the cost of living in Slovakia, including housing, food, and
                  other expenses. It is important to have a realistic
                  understanding of your financial needs before you travel to
                  Slovakia so that you can make the necessary arrangements to
                  cover your expenses during your stay.
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

export default Slovakia;
