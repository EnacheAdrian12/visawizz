import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Finland = () => {
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
        <title>Finland</title>
        <meta name="description" content="Finland" />
        <meta
          name="keywords"
          content="Finland travel visa, Finland work visa, Finland study visa, How to apply for an Finland visa, Finland visa requirements, Finland tourist visa, Finland student visa, Finland business visa, Finland visa processing time, Finland visa application process, Finland visa for Americans, Finland visa for Europeans, Finland visa for Finlandns, Finland visa for Canadians, Finland visa for Indians, Finland visa for Chinese, Finland visa for Africans, Finland visa for Asians, Finland visa for South Americans, Finland visa for Middle Easterners, Finland visa for UK citizens, Finland visa for EU citizens, Finland visa for Schengen area, Finland visa for non-EU citizens, Finland visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Finland
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Finland is well known for several things, including its beautiful
              natural landscapes, its high-quality education system, and its
              strong emphasis on gender equality. It is also known for its
              technology industry and its pioneering use of renewable energy
              sources. Additionally, Finland is famous for its saunas and winter
              sports.
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
                Who can enter Finland without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Finland is a member of the European Union (EU) and the Schengen
                Area, which allows for free movement of people between member
                states. As a result, citizens of EU countries and countries that
                are part of the Schengen Agreement do not need a visa to enter
                Finland for stays of up to 90 days within a 180-day period.
                <br />
                <br />
                In addition to EU and Schengen countries, there are a number of
                other countries whose citizens do not need a visa to enter
                Finland for stays of up to 90 days within a 180-day period.
                These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Albania, Andorra, Antigua and Barbuda, Argentina, Australia,
                  Bahamas, Barbados, Bosnia and Herzegovina, Brazil, Brunei,
                  Canada, Chile, Costa Rica, Commonwealth of Dominica, El
                  Salvador, Georgia, Grenada, Guatemala, Holy See, Honduras,
                  Hong Kong, Iceland, Israel, Japan, Kiribati, Kosovo, Macao,
                  Macedonia, Malaysia, Marshall Islands, Mauritius, Mexico,
                  Micronesia, Moldova, Montenegro, New Zealand, Nicaragua, North
                  Macedonia, Norway, Palau, Panama, Paraguay, Peru, Saint Kitts
                  and Nevis, Saint Lucia, Saint Vincent and the Grenadines,
                  Samoa, San Marino, Serbia, Seychelles, Singapore, Solomon
                  Islands, South Korea, Taiwan, Timor-Leste, Tonga, Trinidad and
                  Tobago, Tuvalu, Ukraine, United Arab Emirates, United States,
                  Uruguay, Vanuatu.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa-free travel rules for
                  Finland may change over time, so it is advisable to consult
                  the Finnish embassy or consulate in your country of residence
                  or the Finnish Immigration Service for the most up-to-date
                  information on visa requirements for travel to Finland.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Finland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Finland, you will generally need to
                provide the following documents as part of your application:
                <br />
                <br />● A valid passport with at least two blank pages. Your
                passport must be valid for at least three months beyond the
                planned date of your departure from Finland.
                <br />
                <br />● A completed visa application form. You will need to
                complete an online application form or a paper form, depending
                on the specific requirements of the embassy or consulate where
                you are applying.
                <br />
                <br />● Two recent passport-style photographs. These photographs
                should meet the specific requirements of the embassy or
                consulate where you are applying, such as size, background
                color, and facial expression.
                <br />
                <br />● Evidence of your purpose of travel. Depending on the
                type of visa you are applying for, you may need to provide
                evidence of your purpose of travel, such as a letter of
                invitation from a host company or organization, a letter of
                acceptance from a school or university, or evidence of your
                employment or financial resources.
                <br />
                <br />● Evidence of your ties to your home country. You may be
                required to provide evidence of your ties to your home country,
                such as a copy of your employment contract, proof of ownership
                of property or assets, or evidence of your family relationships.
                <br />
                <br />
                ● Other supporting documents. Depending on your specific
                circumstances, you may be required to provide other supporting
                documents as part of your visa application, such as a police
                clearance certificate, a medical examination report, or proof of
                travel insurance.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the documents required for a visa
                  application can vary depending on your specific circumstances
                  and the regulations in the region where you will be traveling.
                  It is advisable to consult the Finnish embassy or consulate in
                  your country of residence or the Finnish Immigration Service
                  for the most up-to-date information on the documents required
                  for a visa to Finland.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Finland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Finland, you will need to follow these
                steps:
                <br />
                <br />● Determine the type of visa you need. There are several
                types of visas available for travel to Finland, including
                tourist visas, business visas, and student visas. You will need
                to determine the type of visa that is most appropriate for your
                specific purpose of travel and the length of your stay.
                <br />
                <br />● Gather the necessary documents. You will need to provide
                several documents as part of your visa application, including a
                valid passport, a completed visa application form, two recent
                passport-style photographs, and evidence of your purpose of
                travel and ties to your home country.
                <br />
                <br />● Submit your application. You will need to submit your
                visa application to the Finnish embassy or consulate in your
                country of residence or the nearest Finnish mission in your
                region. You may be required to attend an interview as part of
                the application process.
                <br />
                <br />● Wait for a decision. The processing time for visa
                applications can vary, so it is important to allow sufficient
                time for your application to be reviewed. If your application is
                approved, you will receive a visa stamp in your passport.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa process can be complex
                  and may vary depending on your specific circumstances and the
                  regulations in the region where you will be traveling. It is
                  advisable to consult the Finnish embassy or consulate in your
                  country of residence or the Finnish Immigration Service for
                  the most up-to-date information on the process for applying
                  for a visa to Finland.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Finland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Finland depends on the type
                of visa you have and the specific purpose of your trip. If you
                are a citizen of an EU country or a country that is part of the
                Schengen Agreement, you do not need a visa to enter Finland and
                can stay for up to 90 days within a 180-day period for tourism
                or business purposes.
                <br />
                <br />
                If you are a citizen of a country that is not part of the EU or
                the Schengen Agreement, you will generally need a visa to enter
                Finland. The length of time you can stay in Finland on a visa
                will depend on the specific type of visa you have and the
                purpose of your trip. For example, if you have a tourist visa,
                you may be able to stay in Finland for up to 90 days within a
                180-day period. If you have a business visa, you may be able to
                stay in Finland for up to 90 days within a 180-day period. If
                you have a student visa, you may be able to stay in Finland for
                the duration of your studies, up to a maximum of five years.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of time you can stay
                  in Finland can vary depending on your specific circumstances
                  and the regulations in the region where you will be traveling.
                  It is advisable to consult the Finnish embassy or consulate in
                  your country of residence or the Finnish Immigration Service
                  for the most up-to-date information on the length of time you
                  can stay in Finland.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Finland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Anyone can travel to Finland if they can show proof of
                vaccination or a negative COVID-19 test.
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
                A diplomatic passport is a type of passport issued to diplomats
                and other government officials for official travel on behalf of
                their country. In Finland, diplomatic passports are issued by
                the Ministry for Foreign Affairs to Finnish diplomats and other
                officials who are traveling on official business.
                <br />
                <br />
                Holders of a Finnish diplomatic passport are entitled to certain
                privileges and immunities while traveling abroad, as provided
                for under international law and bilateral agreements between
                Finland and other countries. These privileges and immunities may
                include exemption from visa requirements, the right to use
                diplomatic channels for communication and travel, and protection
                from arrest or detention in certain circumstances.
                <br />
                <br />
                To be eligible for a Finnish diplomatic passport, you must be a
                Finnish citizen and hold a position as a diplomat or other
                government official that requires you to travel on official
                business on behalf of Finland. You will need to provide evidence
                of your official status, such as a letter of appointment or a
                certificate of diplomatic rank, as part of your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for obtaining a
                  Finnish diplomatic passport can vary depending on your
                  specific circumstances and the regulations in the region where
                  you will be traveling. It is advisable to consult the Finnish
                  Ministry for Foreign Affairs or a legal professional for more
                  information on the process for obtaining a diplomatic passport
                  in Finland.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Finland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU country or a country that is part
                of the European Economic Area (EEA), you do not need a visa to
                work in Finland. As a member of the EU and the EEA, Finland
                allows for the free movement of people between member states,
                which means that you are entitled to work in Finland without the
                need for a work permit.
                <br />
                <br />
                If you are a citizen of a country that is not part of the EU or
                the EEA, you may need a work permit to work in Finland. The
                process for obtaining a work permit in Finland depends on the
                specific circumstances of your employment and the length of your
                stay.
                <br />
                <br />
                In general, you will need to have a job offer from a Finnish
                employer before you can apply for a work permit. Your employer
                will need to apply for a work permit on your behalf and provide
                evidence of your qualifications and the need for your
                employment. You will also need to provide documentation such as
                a valid passport and a police clearance certificate as part of
                your work permit application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for obtaining a work
                  permit in Finland can vary depending on your specific
                  circumstances and the regulations in the region where you will
                  be working. It is advisable to consult the Finnish Immigration
                  Service or a legal professional for more information on the
                  process for obtaining a work permit in Finland.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Finland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of a country that is not part of the
                European Union (EU) or the European Economic Area (EEA), you may
                need a work permit to work in Finland. To apply for a work
                permit in Finland, you will need to follow these steps:
                <br />
                <br />
                ● Find a job in Finland. Before you can apply for a work permit,
                you must have a job offer from a Finnish employer. Your employer
                will need to apply for a work permit on your behalf and provide
                evidence of your qualifications and the need for your
                employment.
                <br />
                <br />● Gather the necessary documents. You will need to provide
                several documents as part of your work permit application.
                <br />
                <br />● Submit your application. You will need to submit your
                work permit application to the Finnish Immigration Service or
                the Finnish embassy or consulate in your country of residence.
                You may be required to attend an interview as part of the
                application process.
                <br />
                <br />● Wait for a decision. The processing time for work permit
                applications can vary, so it is important to allow sufficient
                time for your application to be reviewed. If your application is
                approved, you will receive a work permit that allows you to work
                in Finland for a specific period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for obtaining a work
                  permit in Finland can vary depending on your specific
                  circumstances and the regulations in the region where you will
                  be working. It is advisable to consult the Finnish Immigration
                  Service or a legal professional for more information on the
                  process for obtaining a work permit in Finland.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Finland Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Finland, there are several types of work permits available
                depending on the specific circumstances of your employment and
                the length of your stay. These include:
                <br />
                <br />
                <span className="font-bold">Fixed-term work permit</span>
                . A fixed-term work permit is issued for a specific period of
                time and is typically valid for up to two years. This type of
                work permit is suitable for individuals who have a temporary job
                offer from a Finnish employer.
                <br />
                <br />
                <span className="font-bold">Continuous work permit</span>
                . A continuous work permit is issued for an indefinite period of
                time and is typically valid for up to four years. This type of
                work permit is suitable for individuals who have a permanent job
                offer from a Finnish employer.
                <br />
                <br />
                <span className="font-bold">
                  Self-employed person's work permit
                </span>
                . A self-employed person's work permit is issued to individuals
                who are planning to work as a self-employed person in Finland.
                This type of work permit is suitable for individuals who are
                starting their own business or working as a freelancer in
                Finland.
                <br />
                <br />
                <span className="font-bold">
                  Intra-corporate transfer work permit
                </span>
                . An intra-corporate transfer work permit is issued to employees
                of an international company who are being transferred to a
                Finnish branch of the company. This type of work permit is
                suitable for individuals who are being transferred to Finland
                for a specific period of time to work for their employer.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the types of work permits
                  available in Finland can vary depending on your specific
                  circumstances and the regulations in the region where you will
                  be working. It is advisable to consult the Finnish Immigration
                  Service or a legal professional for more information on the
                  types of work permits available in Finland.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Finland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit in Finland, you will need to provide
                several documents as part of your application. These may
                include:
                <br />
                <br />● A valid passport with at least six months of remaining
                validity.
                <br />
                <br />● A completed work permit application form. You may need
                to complete an online application form or a paper form,
                depending on the specific requirements of the Finnish
                Immigration Service or the Finnish embassy or consulate where
                you are applying.
                <br />
                <br />
                ● Two recent passport-style photographs. These photographs
                should meet the specific requirements of the Finnish Immigration
                Service or the embassy or consulate where you are applying, such
                as size, background color, and facial expression.
                <br />
                <br />
                ● A police clearance certificate. You may be required to provide
                a police clearance certificate from your country of residence to
                demonstrate that you have no criminal record.
                <br />
                <br />● Evidence of your qualifications and work experience. You
                will need to provide evidence of your qualifications and work
                experience, such as a resume or CV, copies of your educational
                certificates, and reference letters from previous employers.
                <br />
                <br />● A copy of your employment contract. You will need to
                provide a copy of your employment contract with your Finnish
                employer, including details of your job duties and the length of
                your employment.
                <br />
                <br />
                ● Other supporting documents. Depending on your specific
                circumstances, you may be required to provide other supporting
                documents as part of your work permit application, such as a
                medical examination report or proof of travel insurance.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the documents required for a work
                  permit application can vary depending on your specific
                  circumstances and the regulations in the region where you will
                  be working. It is advisable to consult the Finnish Immigration
                  Service or a legal professional for more information on the
                  documents required for a work permit in Finland.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Finland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU country or a country that is part
                of the European Economic Area (EEA), you do not need a work
                permit to work in Finland. As a member of the EU and the EEA,
                Finland allows for the free movement of people between member
                states, which means that you are entitled to work in Finland
                without the need for a work permit.
                <br />
                <br />
                If you are a citizen of a country that is not part of the EU or
                the EEA, you may need a work permit to work in Finland. To apply
                for a work permit in Finland, you will need to follow these
                steps:
                <br />
                <br />
                <span className="font-bold">
                  - Find a job in Finland. Before you can apply for a work
                  permit, you must have a job offer from a Finnish employer.
                  Your employer will need to apply for a work permit on your
                  behalf and provide evidence of your qualifications and the
                  need for your employment.
                  <br />
                  <br />- Gather the necessary documents. You will need to
                  provide several documents as part of your work permit
                  application.
                  <br />
                  <br />- Submit your application. You will need to submit your
                  work permit application to the Finnish Immigration Service or
                  the Finnish embassy or consulate in your country of residence.
                  You may be required to attend an interview as part of the
                  application process.
                  <br />
                  <br />- Wait for a decision. The processing time for work
                  permit applications can vary.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Finland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU country or a country that is part
                of the European Economic Area (EEA), you do not need a visa to
                study in Finland. As a member of the EU and the EEA, Finland
                allows for the free movement of people between member states,
                which means that you are entitled to study in Finland without
                the need for a student visa.
                <br />
                <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not part of the EU
                  or the EEA, you will generally need a student visa to study in
                  Finland. The student visa allows you to stay in Finland for
                  the duration of your studies, up to a maximum of five years.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Finland Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to Finland, you will need to follow
                these steps:
                <br />
                <br />
                <span className="font-bold">
                  - Accept an offer of admission from a Finnish educational
                  institution. You will need to have an offer of admission from
                  a Finnish educational institution before you can apply for a
                  student visa.
                  <br />
                  <br />- Gather the necessary documents. You will need to
                  provide several documents as part of your student visa
                  application.
                  <br />
                  <br />- Submit your application. You will need to submit your
                  student visa application to the Finnish embassy or consulate
                  in your country of residence or the nearest Finnish mission in
                  your region. You may be required to attend an interview as
                  part of the application process.
                  <br />
                  <br />- Wait for a decision. The processing time for student
                  visa applications can vary, so it is important to allow
                  sufficient time for your application to be reviewed. If your
                  application is approved, you will receive a student visa that
                  allows you to study in Finland for the duration of your
                  studies, up to a maximum of five years.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for obtaining a
                  student visa to Finland can vary depending on your specific
                  circumstances and the regulations in the region where you will
                  be studying. It is advisable to consult the Finnish embassy or
                  consulate in your country of residence or the Finnish
                  Immigration Service for more information on the process for
                  obtaining a student visa to Finland.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Finland Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A valid passport with at least six months of remaining
                validity.
                <br />
                <br />● A completed student visa application form. You may need
                to complete an online application form or a paper form,
                depending on the specific requirements of the Finnish embassy or
                consulate where you are applying.
                <br />
                <br />● Two recent passport-style photographs. These photographs
                should meet the specific requirements of the Finnish embassy or
                consulate where you are applying, such as size, background
                color, and facial expression.
                <br />
                <br />● Evidence of your acceptance to a Finnish educational
                institution. You will need to provide evidence of your
                acceptance to a Finnish educational institution, such as a
                letter of acceptance or an enrollment certificate.
                <br />
                <br />● Evidence of your financial resources. You will need to
                provide evidence of your financial resources, such as bank
                statements or a scholarship letter, to demonstrate that you have
                sufficient funds to cover the cost of your studies in Finland.
                <br />
                <br />● A police clearance certificate. You may be required to
                provide a police clearance certificate from your country of
                residence to demonstrate that you have no criminal record.
                <br />
                <br />● A medical examination report. You may be required to
                undergo a medical examination and provide a report from a
                licensed physician as part of your student visa application.
                <br />
                <br />
                ● Proof of travel insurance. You will need to provide proof of
                travel insurance that covers the duration of your stay in
                Finland.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the documents required for a
                  student visa application can vary depending on your specific
                  circumstances and the regulations in the region where you will
                  be studying. It is advisable to consult the Finnish embassy or
                  consulate in your country of residence or the Finnish
                  Immigration Service for more information on the documents
                  required for a student visa to Finland.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Finland Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa to Finland is generally
                determined by the length of your studies. A student visa is
                typically valid for up to five years, or the duration of your
                studies, whichever is shorter.
                <br />
                <br />
                The price of a student visa to Finland depends on several
                factors, including the specific requirements of the Finnish
                embassy or consulate where you are applying and the processing
                fees charged by the Finnish Immigration Service. In general, you
                can expect to pay a fee for the processing of your student visa
                application, as well as any additional fees for services such as
                medical examinations or translations.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the price of a student visa to
                  Finland can vary depending on your specific circumstances and
                  the regulations in the region where you will be studying. It
                  is advisable to consult the Finnish embassy or consulate in
                  your country of residence or the Finnish Immigration Service
                  for more information on the price of a student visa to
                  Finland.
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

export default Finland;
