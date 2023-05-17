import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Poland = () => {
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
        <title>Poland</title>
        <meta name="description" content="Poland" />
        <meta
          name="keywords"
          content="Poland travel visa, Poland work visa, Poland study visa, How to apply for an Poland visa, Poland visa requirements, Poland tourist visa, Poland student visa, Poland business visa, Poland visa processing time, Poland visa application process, Poland visa for Americans, Poland visa for Europeans, Poland visa for Polandns, Poland visa for Canadians, Poland visa for Polandns, Poland visa for Chinese, Poland visa for Africans, Poland visa for Asians, Poland visa for South Americans, Poland visa for Middle Easterners, Poland visa for UK citizens, Poland visa for EU citizens, Poland visa for Schengen area, Poland visa for non-EU citizens, Poland visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Poland
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Poland is a country in Central Europe, known for its rich history
              and cultural heritage. It is bordered by Germany to the west, the
              Czech Republic and Slovakia to the south, Ukraine and Belarus to
              the east, and the Baltic Sea and Russia to the north. Poland is
              known for its beautiful landscapes, including the Carpathian
              Mountains, the Masurian Lakes, and the Tatra Mountains, and for
              its vibrant cities, such as the capital city, Warsaw. Poland is
              also known for its rich cultural heritage, including its music,
              art, and literature, and for its delicious cuisine, which features
              a blend of Eastern European and Jewish influences.
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
                Who can enter Poland without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Poland without a
                visa for stays of up to 90 days within a 180-day period,
                provided that they are traveling for tourist or business
                purposes.
                <br /> <br /> The countries whose citizens are eligible for
                visa-free entry to Poland include: European Union (EU) member
                states European Free Trade Association (EFTA) member states
                (Iceland, Liechtenstein, Norway, and Switzerland) Andorra,
                Argentina, Australia, Bolivia, Brazil, Brunei, Canada, Chile,
                Costa Rica, Croatia, El Salvador, Georgia, Guatemala, Honduras,
                Hong Kong (Special Administrative Region), Israel, Japan,
                Kosovo, Macao (Special Administrative Region), Malaysia, Mexico,
                Moldova, Monaco, Montenegro, New Zealand, Nicaragua, Panama,
                Paraguay, Peru, Serbia, South Korea, Taiwan, United Arab
                Emirates, United States, Uruguay, and Vatican City
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the rules and regulations
                  regarding visa-free entry to Poland may vary depending on your
                  specific circumstances and the nature of your visit. It is
                  recommended that you check with the embassy or consulate of
                  Poland in your country of residence for specific information
                  on visa requirements for Poland.
                </span>
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not eligible for
                  visa-free entry to Poland, or if you are planning to stay in
                  Poland for more than 90 days within a 180-day period, you will
                  need to obtain a visa in order to enter the country.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Poland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Poland, you will need to provide
                the following documents to the embassy or consulate of Poland in
                your country of residence: <br /> <br />
                ● A completed visa application form, which can be obtained from
                the embassy or consulate of Poland or downloaded from the
                website of the Ministry of Foreign Affairs of Poland. <br />{" "}
                <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least two blank pages for the visa stamp. <br /> <br />
                ● A passport-sized photograph, taken within the past 6 months.
                <br /> <br />
                ● Evidence of sufficient funds to cover your expenses during
                your stay in Poland, such as bank statements or a letter from
                your sponsor stating that you will be financially supported
                during your trip. <br /> <br />
                ● A letter of invitation or a letter of support from a host or
                sponsor in Poland, if applicable. <br /> <br />
                ● A travel insurance policy that covers medical expenses and
                repatriation for the duration of your stay in Poland. <br />{" "}
                <br />● Any other documents required by the embassy or consulate
                of Poland in your country of residence, depending on the purpose
                of your visit and the type of visa you are applying for.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Poland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Poland, you will need to follow the
                steps below: <br /> <br />
                ● Determine if you are eligible for a visa to enter Poland. To
                be eligible for a visa, you must have a valid passport and meet
                the requirements set by the embassy or consulate of Poland in
                your country of residence. <br /> <br />
                ● Gather all the necessary documents, including a completed visa
                application form, a valid passport, a passport-sized photograph,
                and any other documents required by the embassy or consulate.
                <br /> <br />
                ● Submit your application and required documents in person or by
                mail to the embassy or consulate of Poland in your country of
                residence. Some embassies and consulates may allow you to submit
                your application online. <br /> <br />
                ● Pay the visa application fee, which varies depending on the
                type of visa you are applying for. <br /> <br />● Wait for a
                decision on your visa application. Processing times may vary, so
                it is recommended that you apply for your visa well in advance
                of your planned trip to Poland.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Poland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Poland will
                depend on the type of visa you have obtained and the purpose of
                your visit.
                <br /> <br /> If you have obtained a{" "}
                <span className="font-bold">
                  tourist visa or a business visa
                </span>
                , you will typically be allowed to stay in Poland for up to 90
                days within a 180-day period.
                <br /> <br /> If you have obtained a different type of visa,
                such as a{" "}
                <span className="font-bold">student visa or a work visa</span>,
                you will typically be allowed to stay in Poland for the duration
                of your studies or employment, up to 2 years.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Poland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Present a vaccination certificate when crossing the border.
                quarantine after crossing the border. possess a negative
                SARS-CoV-2 diagnostic test result when crossing the Polish
                border from countries outside of the Schengen/EU zone.
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
                Informations about Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Poland, a diplomatic passport is issued to individuals who
                are working in a diplomatic capacity for their country, such as
                diplomats and members of a diplomatic mission. The Ministry of
                Foreign Affairs is responsible for issuing diplomatic passports
                to eligible individuals in Poland.
                <br />
                <br />
                To obtain a diplomatic passport in Poland, an individual must
                meet certain criteria and provide certain documents, such as:
                <br />
                <br />●{" "}
                <span className="font-bold">
                  Proof of employment as a diplomat or member of a diplomatic
                  mission.
                </span>
                <br />● <span className="font-bold">A valid ID document.</span>
                <br />●{" "}
                <span className="font-bold">
                  A recent passport-size photograph.
                </span>
                <br />●{" "}
                <span className="font-bold">A completed application form.</span>
                <br />●{" "}
                <span className="font-bold">
                  Payment of any applicable fees.
                </span>
                <br />
                <br />
                Diplomatic passport holders in Poland are generally granted
                certain privileges and immunity from certain laws in the country
                where they are posted. This includes immunity from arrest and
                detention, as well as certain customs and tax exemptions.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that Diplomatic passport should be used
                  for official travel and diplomatic activities, and it's not
                  meant for personal travel. Misuse of a diplomatic passport can
                  result in revocation of the passport, and could lead to other
                  consequences as well.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that the information provided is based on my
                  knowledge cut-off and the regulations regarding Diplomatic
                  Passport in Poland can change over time. It's recommended to
                  check with the Ministry of Foreign Affairs of Poland for more
                  updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Poland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national who wishes to work in Poland, you
                will typically need to obtain a work visa in order to legally
                work in the country.
                <br /> <br />
                <span className="font-bold">
                  To be eligible for a work visa in Poland, you will typically
                  need to have a job offer from a Polish employer and meet the
                  requirements set by the embassy or consulate of Poland in your
                  country of residence.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Poland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Poland, you will need to follow the
                steps below: <br /> <br />● Determine if you are eligible for a
                work visa in Poland. To be eligible for a work visa, you must
                have a job offer from a Polish employer and meet the
                requirements set by the embassy or consulate of Poland in your
                country of residence. <br /> <br />● Gather all the necessary
                documents, including a completed visa application form, a valid
                passport, a passport-sized photograph, and any other documents
                required by the embassy or consulate. <br /> <br />● Submit your
                application and required documents in person or by mail to the
                embassy or consulate of Poland in your country of residence.
                Some embassies and consulates may allow you to submit your
                application online. <br /> <br />● Pay the visa application fee,
                which varies depending on the type of visa you are applying for.
                <br /> <br />● Wait for a decision on your visa application.
                Processing times may vary, so it is recommended that you apply
                for your visa well in advance of your planned trip to Poland.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Poland Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visa available in Poland,
                depending on the individual's specific situation and the type of
                work they will be doing in Poland. Here are a few examples of
                worker visas that are available in Poland:
                <br />
                <br />● <span className="font-bold">Employment visa</span>: This
                type of visa is for individuals who have been offered a job in
                Poland and will be working for a Polish employer. This visa is
                valid for the duration of the employment contract and can be
                renewed for up to three years.
                <br />
                <br />● <span className="font-bold">Business visa</span>: This
                type of visa is for individuals who will be doing business in
                Poland, such as setting up a company, investing or participating
                in trade fairs. This visa is valid for up to one year.
                <br />
                <br />● <span className="font-bold">Seasonal work visa</span>:
                This type of visa is for individuals who will be working in
                Poland on a seasonal basis, such as in agriculture or tourism.
                This visa is valid for up to 6 months.
                <br />
                <br />●{" "}
                <span className="font-bold">Intra-corporate transfer visa</span>
                : This type of visa is for employees of international companies
                who are being transferred to a Polish branch of the company.
                This visa is valid for up to three years.
                <br />
                <br />● <span className="font-bold">Blue Card visa</span>: This
                type of visa is for highly-skilled workers and is similar to the
                EU Blue Card. It allows the holder to work and live in Poland
                for up to three years, with the possibility of renewal.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the type of visa you will need
                  will depend on your specific circumstances, and it's
                  recommended to check with the Polish embassy or consulate in
                  your home country or the Polish Office for Foreigners for more
                  detailed information and requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Poland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Poland, you will typically need to
                provide the following documents to the embassy or consulate of
                Poland in your country of residence: <br /> <br />
                ● A completed visa application form, which can be obtained from
                the embassy or consulate of Poland or downloaded from the
                website of the Ministry of Foreign Affairs of Poland. <br />{" "}
                <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least two blank pages for the visa stamp. <br /> <br />●
                A passport-sized photograph, taken within the past 6 months.{" "}
                <br /> <br />
                ● A copy of your employment contract or a letter from your
                employer in Poland, stating the purpose of your visit and the
                duration of your employment. <br /> <br />
                ● Evidence of sufficient funds to cover your expenses during
                your stay in Poland, such as bank statements or a letter from
                your sponsor stating that you will be financially supported
                during your trip. <br /> <br />
                ● A travel insurance policy that covers medical expenses and
                repatriation for the duration of your stay in Poland. <br />{" "}
                <br />● Any other documents required by the embassy or consulate
                of Poland in your country of residence, depending on the nature
                of your employment and the type of visa you are applying for.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Poland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Poland, you will need to submit your
                application and required documents to the embassy or consulate
                of Poland in your country of residence. You can typically apply
                for a work visa up to 3 months before your planned trip to
                Poland.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the embassy or consulate of
                  Poland may have specific requirements and procedures for
                  submitting a work visa application. It is recommended that you
                  contact the embassy or consulate of Poland in your country of
                  residence or the Ministry of Foreign Affairs of Poland for
                  specific information on the process for applying for a work
                  visa in Poland.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is also important to note that the embassy or consulate of
                  Poland may request additional documents or require an
                  interview with you as part of the visa application process. It
                  is recommended that you follow the instructions provided by
                  the embassy or consulate and submit all required documents in
                  a timely manner to avoid delays in the processing of your visa
                  application.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is recommended that you apply for your work visa well in
                  advance of your planned trip to Poland, as the processing
                  times for visa applications may vary and it is important to
                  ensure that you have your visa in hand before you travel.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Poland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national who wishes to study in Poland, you
                will typically need to obtain a student visa in order to legally
                study in the country. To be eligible for a student visa in
                Poland, you will typically need to have been accepted to a
                recognized educational institution in Poland and meet the
                requirements set by the embassy or consulate of Poland in your
                country of residence.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Poland student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Poland, you will need to follow
                the steps below: <br /> <br />
                ● Determine if you are eligible for a student visa in Poland. To
                be eligible for a student visa, you must have been accepted to a
                recognized educational institution in Poland and meet the
                requirements set by the embassy or consulate of Poland in your
                country of residence. <br /> <br />
                ● Gather all the necessary documents, including a completed visa
                application form, a valid passport, a passport-sized photograph,
                and any other documents required by the embassy or consulate.
                <br /> <br />
                ● Submit your application and required documents in person or by
                mail to the embassy or consulate of Poland in your country of
                residence. Some embassies and consulates may allow you to submit
                your application online. <br /> <br />
                ● Pay the visa application fee, which varies depending on the
                type of visa you are applying for. <br /> <br />
                ● Wait for a decision on your visa application. Processing times
                may vary, so it is recommended that you apply for your visa well
                in advance of your planned trip to Poland.
                <br /> <br />
                <span className="font-bold">
                  It is also important to note that the embassy or consulate of
                  Poland may request additional documents or require an
                  interview with you as part of the visa application process. It
                  is recommended that you follow the instructions provided by
                  the embassy or consulate and submit all required documents in
                  a timely manner to avoid delays in the processing of your visa
                  application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Poland student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in Poland, you will typically
                need to meet the following requirements: <br /> <br />● You must
                have been accepted to a recognized educational institution in
                Poland. <br /> <br />● You must be able to demonstrate that you
                have sufficient funds to cover your expenses during your stay in
                Poland, such as tuition fees, accommodation, and living
                expenses. <br /> <br />● You must have a valid passport with at
                least 6 months of remaining validity and at least two blank
                pages for the visa stamp. <br /> <br />● You must have a clean
                criminal record and not pose a threat to national security or
                public order in Poland. <br /> <br />● You must have a travel
                insurance policy that covers medical expenses and repatriation
                for the duration of your stay in Poland.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Poland student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Poland may vary
                depending on the specific circumstances of your visit and the
                type of visa you are applying for.
                <br /> <br /> Student visas in Poland are typically valid for
                the duration of your studies, up to a maximum of 3 years. After
                you have completed your studies, you may be able to apply for a
                work visa or a temporary residence permit in order to stay in
                Poland and work or travel.
                <br /> <br /> The price of a student visa in Poland may vary
                depending on the type of visa you are applying for and the
                country in which you are applying. It is recommended that you
                contact the embassy or consulate of Poland in your country of
                residence or the Ministry of Foreign Affairs of Poland for
                specific information on the price of a student visa in Poland.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that you may need to pay additional
                  fees for processing your visa application and for any
                  additional services, such as expedited processing or courier
                  delivery of your visa. It is recommended that you carefully
                  review all fees associated with your visa application and
                  budget accordingly.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is also important to note that the embassy or consulate of
                  Poland may request additional documents or require an
                  interview with you as part of the visa application process. It
                  is recommended that you follow the instructions provided by
                  the embassy or consulate and submit all required documents in
                  a timely manner to avoid delays in the processing of your visa
                  application.
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

export default Poland;
