import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Liechtenstein = () => {
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
        <title>Liechtenstein</title>
        <meta name="description" content="Liechtenstein" />
        <meta
          name="keywords"
          content="Liechtenstein travel visa, Liechtenstein work visa, Liechtenstein study visa, How to apply for an Liechtenstein visa, Liechtenstein visa requirements, Liechtenstein tourist visa, Liechtenstein student visa, Liechtenstein business visa, Liechtenstein visa processing time, Liechtenstein visa application process, Liechtenstein visa for Americans, Liechtenstein visa for Europeans, Liechtenstein visa for Liechtensteinns, Liechtenstein visa for Canadians, Liechtenstein visa for Liechtensteinns, Liechtenstein visa for Chinese, Liechtenstein visa for Africans, Liechtenstein visa for Asians, Liechtenstein visa for South Americans, Liechtenstein visa for Middle Easterners, Liechtenstein visa for UK citizens, Liechtenstein visa for EU citizens, Liechtenstein visa for Schengen area, Liechtenstein visa for non-EU citizens, Liechtenstein visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Liechtenstein
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Liechtenstein is a small, alpine country in Central Europe,
              bordered by Switzerland and Austria. It is known for its stunning
              mountain scenery, picturesque villages, and its role as a center
              of the global financial industry. Liechtenstein is also known for
              its strong economy and low unemployment rate, and for its strong
              cultural traditions, including its annual National Day
              celebrations and its folk music and dance. The capital city,
              Vaduz, is known for its medieval castle and its picturesque old
              town.
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
                Who can enter Liechtenstein without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Liechtenstein is a small country located in Europe that is a
                member of the Schengen Area. The Schengen Area is a group of 26
                European countries that have agreed to allow free movement of
                people within their borders.
                <br />
                <br />
                Citizens of the European Union (EU), the European Economic Area
                (EEA), and Switzerland are allowed to enter Liechtenstein
                without a visa and stay for up to 90 days for tourism or
                business purposes.
                <br />
                <br />
                Citizens of certain other countries are also allowed to enter
                Liechtenstein without a visa for stays of up to 90 days. These
                countries include:
                <br />
                <br />
                <span className="font-bold">
                  Andorra Antigua and Barbuda, Argentina, Australia, Bahamas,
                  Barbados, Bosnia and Herzegovina, Brazil, Brunei, Canada,
                  Chile, Costa Rica, Dominica, El Salvador, Georgia, Grenada,
                  Honduras, Israel, Japan, Kiribati, Macao (SAR of China),
                  Macedonia, Malaysia, Marshall Islands, Mauritius, Mexico,
                  Micronesia, Moldova, Monaco, Montenegro, New Zealand,
                  Nicaragua, Palau, Panama, Paraguay, Peru, Saint Kitts and
                  Nevis, Saint Lucia, Saint Vincent and the Grenadines, Samoa,
                  San Marino, Serbia, Seychelles, Singapore, Solomon Islands,
                  South Korea, Taiwan, Timor-Leste, Tonga, Trinidad and Tobago,
                  Tuvalu, Ukraine, United Arab Emirates, United States of
                  America, Uruguay, Vanuatu, Vatican City, Venezuela.
                </span>
                <br />
                <br />
                Citizens of other countries will need to apply for a visa to
                enter Liechtenstein. The specific type of visa that you will
                need will depend on the purpose of your visit and the duration
                of your stay.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for entering
                  Liechtenstein may change from time to time, and you should
                  check with the embassy or consulate of Liechtenstein for the
                  most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Liechtenstein Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Liechtenstein, you will generally
                need to provide the following documents:
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
                ● Evidence of your purpose of visit: You will need to provide
                evidence of the purpose of your visit to Liechtenstein, such as
                a letter of invitation from a host in Liechtenstein, proof of
                your travel itinerary, or a letter from your employer if you are
                traveling for business.
                <br />
                <br />
                ● Evidence of your financial means: You will need to provide
                evidence of your financial means, such as bank statements or a
                letter from a sponsor, to show that you have sufficient funds to
                cover your living expenses while in Liechtenstein.
                <br />
                <br />
                ● Health insurance: You will need to provide proof of health
                insurance that covers you while you are in Liechtenstein.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate showing that you are in good health.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Liechtenstein to confirm the specific requirements for
                  obtaining a visa. The requirements may vary depending on the
                  type of visa you are applying for and the purpose of your
                  visit to Liechtenstein.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Liechtenstein Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Liechtenstein, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of visas available for travel to Liechtenstein, including
                short-term visas and long-term visas. You will need to determine
                which type of visa is appropriate for the purpose of your visit
                and the duration of your stay.
                <br />
                <br />
                ● Check the visa requirements: You will need to check the visa
                requirements for your country of residence to ensure that you
                meet all of the necessary criteria for obtaining a visa to
                Liechtenstein. This may include providing evidence of your
                purpose of visit, evidence of your financial means, and proof of
                health insurance.
                <br />
                <br />
                ● Complete the visa application form: You will need to complete
                a visa application form and provide a recent passport-style
                photograph.
                <br />
                <br />
                ● Submit the required documents: You will need to submit the
                required documents, including your passport, evidence of your
                purpose of visit, and any other required documents.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee, which
                will vary depending on the type of visa you are applying for and
                the duration of your stay.
                <br />
                <br />
                ● Wait for your visa to be processed: The processing time for a
                visa to Liechtenstein will vary depending on the embassy or
                consulate and the type of visa you are applying for. You should
                allow sufficient time for your application to be processed
                before your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Liechtenstein to confirm the specific requirements for your
                  visa application. The requirements may vary depending on the
                  type of visa you are applying for and the purpose of your
                  visit to Liechtenstein.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Liechtenstein?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you can stay in Liechtenstein will depend on
                the type of visa you have obtained and the purpose of your
                visit.
                <br />
                <br />
                If you are a citizen of the European Union (EU), the European
                Economic Area (EEA), or Switzerland, you are allowed to enter
                Liechtenstein without a visa and stay for up to 90 days for
                tourism or business purposes.
                <br />
                <br />
                If you are a citizen of a country that is not in the EU, EEA, or
                Switzerland, you will need to apply for a visa to enter
                Liechtenstein. The specific type of visa that you will need will
                depend on the purpose of your visit and the duration of your
                stay.
                <br />
                <br />
                For example, if you are visiting Liechtenstein for tourism
                purposes, you may be able to obtain a short-term visa that
                allows you to stay in the country for a period of up to 90 days.
                If you are visiting Liechtenstein for a longer period of time,
                such as to study or work, you may need to apply for a long-term
                visa that allows you to stay in the country for a longer period
                of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for entering
                  Liechtenstein may change from time to time, and you should
                  check with the embassy or consulate of Liechtenstein for the
                  most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Liechtenstein?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Liechtenstein has lifted all COVID-19 pandemic restrictions
                there are no social distancing or mask wearing measures in
                place. There is no mandatory isolation requirement if you test
                positive for COVID-19. Local restrictions or mandatory mask
                wearing and proof of vaccination may be in place in hospitals or
                care homes. Within Liechtenstein, there is no certificate
                requirement at the national level.
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
                and other representatives of a country who are traveling abroad
                on official business. Diplomatic passports typically have
                special privileges, such as being exempt from certain visa
                requirements and customs duties.
                <br />
                <br />
                Liechtenstein, like most countries, issues diplomatic passports
                to its diplomats and other officials who are traveling abroad on
                official business. Diplomatic passports issued by Liechtenstein
                are valid for a period of five years and can be used for travel
                to any country in the world.
                <br />
                <br />
                To be eligible for a diplomatic passport in Liechtenstein, you
                must be a citizen of Liechtenstein and hold a diplomatic or
                consular position in the government. You must also be traveling
                abroad on official business on behalf of the government of
                Liechtenstein.
                <br />
                <br />
                It is important to note that diplomatic passports are only
                issued to individuals who are traveling on official business and
                are not intended for personal travel. Misuse of a diplomatic
                passport can result in the revocation of the passport and other
                consequences.
                <br />
                <br />
                <span className="font-bold">
                  If you are a citizen of Liechtenstein and are interested in
                  obtaining a diplomatic passport, you should contact the
                  Ministry of Foreign Affairs in Liechtenstein for more
                  information on the process and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Liechtenstein?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa to work in Liechtenstein
                will depend on your citizenship and the duration of your stay in
                the country.
                <br />
                <br />
                If you are a citizen of the European Union (EU), the European
                Economic Area (EEA), or Switzerland, you are allowed to enter
                Liechtenstein without a visa and work in the country for up to
                90 days without a worker visa.
                <br />
                <br />
                If you are a citizen of a country that is not in the EU, EEA, or
                Switzerland, you will need to apply for a worker visa to work in
                Liechtenstein. The specific type of worker visa that you will
                need will depend on the duration of your stay and the type of
                work you will be doing in the country.
                <br />
                <br />
                For example, if you are coming to Liechtenstein to work for a
                short period of time, you may be able to obtain a short-term
                worker visa that allows you to work in the country for a period
                of up to 90 days. If you are coming to Liechtenstein to work for
                a longer period of time, you may need to apply for a long-term
                worker visa that allows you to work in the country for a longer
                period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for working in
                  Liechtenstein may change from time to time, and you should
                  check with the embassy or consulate of Liechtenstein for the
                  most up-to-date information. You may also need to obtain a
                  work permit from the Office of Immigration in Liechtenstein in
                  order to legally work in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Liechtenstein Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Liechtenstein, you will
                need to follow these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need: There are several
                types of worker visas available for working in Liechtenstein,
                including short-term visas and long-term visas. You will need to
                determine which type of worker visa is appropriate for the
                duration of your stay and the type of work you will be doing in
                the country.
                <br />
                <br />
                ● Check the worker visa requirements: You will need to check the
                worker visa requirements for your country of residence to ensure
                that you meet all of the necessary criteria for obtaining a
                worker visa to Liechtenstein. This may include providing
                evidence of your employment or job offer, evidence of your
                financial means, and proof of health insurance.
                <br />
                <br />
                ● Complete the worker visa application form: You will need to
                complete a worker visa application form and provide a recent
                passport-style photograph.
                <br />
                <br />
                ● Submit the required documents: You will need to submit the
                required documents, including your passport, evidence of your
                employment or job offer, and any other required documents.
                <br />
                <br />
                ● Pay the worker visa fee: You will need to pay the worker visa
                fee, which will vary depending on the type of worker visa you
                are applying for and the duration of your stay.
                <br />
                <br />● Wait for your worker visa to be processed: The
                processing time for a worker visa to Liechtenstein will vary
                depending on the embassy or consulate and the type of worker
                visa you are applying for. You should allow sufficient time for
                your application to be processed before your planned travel
                date.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Liechtenstein to confirm the specific requirements for your
                  worker visa application. The requirements may vary depending
                  on the type of worker visa you are applying for and the type
                  of work you will be doing in Liechtenstein.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Liechtenstein Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for working in
                Liechtenstein, depending on the duration of your stay and the
                type of work you will be doing in the country.
                <br />
                <br />
                Here are some of the types of worker visas that are available
                for working in Liechtenstein:
                <br />
                <br />
                <span className="font-bold">Short-term worker visa</span>
                : A short-term worker visa is for individuals who are coming to
                Liechtenstein to work for a period of up to 90 days. This type
                of visa is suitable for individuals who are coming to
                Liechtenstein for a short-term assignment or project.
                <br />
                <br />
                <span className="font-bold">Long-term worker visa</span>
                : A long-term worker visa is for individuals who are coming to
                Liechtenstein to work for a period of more than 90 days. This
                type of visa is suitable for individuals who are coming to
                Liechtenstein to work on a longer-term assignment or to take up
                permanent employment in the country.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : A seasonal worker visa is for individuals who are coming to
                Liechtenstein to work in a specific sector, such as agriculture
                or tourism, during the peak season. This type of visa is usually
                valid for a period of up to six months.
                <br />
                <br />
                <span className="font-bold">Self-employed worker visa</span>
                : A self-employed worker visa is for individuals who are coming
                to Liechtenstein to work as self-employed professionals, such as
                artists or writers. This type of visa is suitable for
                individuals who are coming to Liechtenstein to work on a
                freelance basis.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  each type of worker visa may vary, and you should check with
                  the embassy or consulate of Liechtenstein for the most
                  up-to-date information. You may also need to obtain a work
                  permit from the Office of Immigration in Liechtenstein in
                  order to legally work in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Liechtenstein Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Liechtenstein, you will
                generally need to provide the following documents:
                <br />
                <br />
                ● A completed worker visa application form.
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
                ● Evidence of your employment or job offer: You will need to
                provide evidence of your employment or job offer in
                Liechtenstein, such as a contract of employment or a letter from
                your employer.
                <br />
                <br />
                ● Evidence of your financial means: You will need to provide
                evidence of your financial means, such as bank statements or a
                letter from a sponsor, to show that you have sufficient funds to
                cover your living expenses while in Liechtenstein.
                <br />
                <br />
                ● Health insurance: You will need to provide proof of health
                insurance that covers you while you are in Liechtenstein.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate showing that you are in good health.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Liechtenstein to confirm the specific requirements for
                  obtaining a worker visa. The requirements may vary depending
                  on the type of worker visa you are applying for and the type
                  of work you will be doing in Liechtenstein.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Liechtenstein?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Liechtenstein, you will
                need to submit your application to the embassy or consulate of
                Liechtenstein in your country of residence. You can usually find
                information on the location and contact details of the embassy
                or consulate of Liechtenstein on the website of the Ministry of
                Foreign Affairs in Liechtenstein.
                <br />
                <br />
                It is important to note that the processing time for a worker
                visa to Liechtenstein may vary depending on the embassy or
                consulate and the type of worker visa you are applying for. You
                should allow sufficient time for your application to be
                processed before your planned travel date.
                <br />
                <br />
                It is also recommended that you start the worker visa
                application process as early as possible, as it can take several
                weeks or even months to complete the process. You should check
                with the embassy or consulate of Liechtenstein for the most
                up-to-date information on processing times and the availability
                of appointments.
                <br />
                <br />
                <span className="font-bold">
                  You may be required to attend an in-person interview at the
                  embassy or consulate of Liechtenstein as part of the worker
                  visa application process. You will need to bring all of the
                  required documents with you to the interview and be prepared
                  to answer questions about your employment and your plans while
                  in Liechtenstein.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Liechtenstein?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a visa to study in Liechtenstein will
                depend on your citizenship and the duration of your stay in the
                country.
                <br />
                <br />
                If you are a citizen of the European Union (EU), the European
                Economic Area (EEA), or Switzerland, you are allowed to enter
                Liechtenstein without a visa and study in the country for up to
                90 days without a student visa.
                <br />
                <br />
                If you are a citizen of a country that is not in the EU, EEA, or
                Switzerland, you will need to apply for a student visa to study
                in Liechtenstein. The specific type of student visa that you
                will need will depend on the duration of your stay and the type
                of study you will be doing in the country.
                <br />
                <br />
                For example, if you are coming to Liechtenstein to study for a
                short period of time, such as for an exchange program or a
                summer school, you may be able to obtain a short-term student
                visa that allows you to study in the country for a period of up
                to 90 days. If you are coming to Liechtenstein to study for a
                longer period of time, such as to complete a degree program, you
                may need to apply for a long-term student visa that allows you
                to study in the country for a longer period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for studying in
                  Liechtenstein may change from time to time, and you should
                  check with the embassy or consulate of Liechtenstein for the
                  most up-to-date information. You may also need to obtain a
                  study permit from the Office of Immigration in Liechtenstein
                  in order to legally study in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Liechtenstein Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Liechtenstein, you will
                need to follow these steps:
                <br />
                <br />
                ● Determine the type of student visa you need: There are several
                types of student visas available for studying in Liechtenstein,
                including short-term visas and long-term visas. You will need to
                determine which type of student visa is appropriate for the
                duration of your stay and the type of study you will be doing in
                the country.
                <br />
                <br />
                ● Check the student visa requirements: You will need to check
                the student visa requirements for your country of residence to
                ensure that you meet all of the necessary criteria for obtaining
                a student visa to Liechtenstein. This may include providing
                evidence of your acceptance into a study program, evidence of
                your financial means, and proof of health insurance.
                <br />
                <br />
                ● Complete the student visa application form: You will need to
                complete a student visa application form and provide a recent
                passport-style photograph.
                <br />
                <br />
                ● Submit the required documents: You will need to submit the
                required documents, including your passport, evidence of your
                acceptance into a study program, and any other required
                documents.
                <br />
                <br />
                ● Pay the student visa fee: You will need to pay the student
                visa fee, which will vary depending on the type of student visa
                you are applying for and the duration of your stay.
                <br />
                <br />
                ● Wait for your student visa to be processed: The processing
                time for a student visa to Liechtenstein will vary depending on
                the embassy or consulate and the type of student visa you are
                applying for. You should allow sufficient time for your
                application to be processed before your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Liechtenstein to confirm the specific requirements for your
                  student visa application. The requirements may vary depending
                  on the type of student visa you are applying for and the type
                  of study you will be doing in Liechtenstein.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Liechtenstein Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Liechtenstein, you will
                generally need to provide the following documents:
                <br />
                <br />
                ● A completed student visa application form.
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
                ● Evidence of your acceptance into a study program: You will
                need to provide evidence of your acceptance into a study program
                in Liechtenstein, such as a letter of acceptance from the
                educational institution.
                <br />
                <br />
                ● Evidence of your financial means: You will need to provide
                evidence of your financial means, such as bank statements or a
                letter from a sponsor, to show that you have sufficient funds to
                cover your living expenses while in Liechtenstein.
                <br />
                <br />
                ● Health insurance: You will need to provide proof of health
                insurance that covers you while you are in Liechtenstein.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate showing that you are in good health.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you check with the embassy or consulate
                  of Liechtenstein to confirm the specific requirements for
                  obtaining a student visa. The requirements may vary depending
                  on the type of student visa you are applying for and the type
                  of study you will be doing in Liechtenstein.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Liechtenstein Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Liechtenstein will
                depend on the type of student visa you are applying for and the
                duration of your stay in the country.
                <br />
                <br />
                Here are some general guidelines on the validity and price of
                student visas for Liechtenstein:
                <br />
                <br />
                <span className="font-bold">Short-term student visa</span>: A
                short-term student visa is valid for a period of up to 90 days
                and is suitable for individuals who are coming to Liechtenstein
                to study for a short period of time, such as for an exchange
                program or a summer school. The price of a short-term student
                visa will vary depending on the embassy or consulate and the
                currency in which the fee is paid.
                <br />
                <br />
                <span className="font-bold">Long-term student visa</span>: A
                long-term student visa is valid for a period of more than 90
                days and is suitable for individuals who are coming to
                Liechtenstein to study for a longer period of time, such as to
                complete a degree program. The price of a long-term student visa
                will vary depending on the embassy or consulate and the currency
                in which the fee is paid.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the validity and price of student
                  visas for Liechtenstein may change from time to time, and you
                  should check with the embassy or consulate of Liechtenstein
                  for the most up-to-date information. You may also need to pay
                  a fee for a study permit, which is required for studying in
                  Liechtenstein for a period of more than 90 days.
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

export default Liechtenstein;
