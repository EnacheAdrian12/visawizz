import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Albania = () => {
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
        <title>Albania</title>
        <meta name="description" content="Albania" />
        <meta
          name="keywords"
          content="Albania travel visa, Albania work visa, Albania study visa, How to apply for an Albania visa, Albania visa requirements, Albania tourist visa, Albania student visa, Albania business visa, Albania visa processing time, Albania visa application process, Albania visa for Americans, Albania visa for Europeans, Albania visa for Australians, Albania visa for Canadians, Albania visa for Indians, Albania visa for Chinese, Albania visa for Africans, Albania visa for Asians, Albania visa for South Americans, Albania visa for Middle Easterners, Albania visa for UK citizens, Albania visa for EU citizens, Albania visa for Schengen area, Albania visa for non-EU citizens, Albania visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Albania
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Albania is a country located in the Balkan Peninsula in Southeast
              Europe. It is known for its beautiful beaches and mountainous
              terrain, as well as its rich culture and history. Albania is also
              known for its production of high-quality agricultural products,
              such as olives, grapes, and tobacco. Additionally, the country is
              known for its vibrant music and dance traditions, and its
              distinctive cuisine, which includes dishes such as byrek, a savory
              pastry filled with vegetables or meat.
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
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2783623389813476"
                data-ad-slot="1695238359"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Who can enter Albania without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Albania
                without a visa for stays of up to 90 days within a 180-day
                period.
                <br />
                <br /> These countries include:{" "}
                <span className="font-bold">
                  Andorra, Antigua and Barbuda, Argentina, Australia, Austria,
                  Bahamas, Barbados, Belgium, Bosnia and Herzegovina, Brazil,
                  Brunei, Bulgaria, Canada, Chile, Costa Rica, Croatia, Cyprus,
                  Czech Republic, Denmark, El Salvador, Estonia, Finland,
                  France, Germany, Greece, Guatemala, Honduras, Hong Kong (Sar
                  China), Hungary, Iceland, Ireland, Israel, Italy, Japan,
                  Kosovo, Latvia, Liechtenstein, Lithuania, Luxembourg, Macao
                  (SAR China), Macedonia, Malaysia, Malta, Mauritius, Mexico,
                  Moldova, Monaco, Montenegro, Netherlands, New Zealand,
                  Nicaragua, Norway, Panama, Paraguay, Peru, Poland, Portugal,
                  Romania, San Marino, Serbia, Seychelles, Singapore, Slovakia,
                  Slovenia, South Korea, Spain, Sweden, Switzerland, Taiwan,
                  Thailand, Ukraine, United Arab Emirates, United Kingdom,
                  United States, Uruguay, Vatican City.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the list of countries that are
                  allowed to enter Albania without a visa may be subject to
                  change, and it is always best to check with the Albanian
                  embassy or consulate in your home country for the most
                  up-to-date information on visa requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Albania Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for an Albania visa, you will need to provide the
                following documents:
                <br />
                <br />● A completed and signed Albania visa application form.
                <br />
                <br />● A valid passport or travel document with at least 6
                months of remaining validity and at least two blank pages.
                <br />
                <br />● Passport-sized photos taken within the last 6 months.
                <br />
                <br />● Proof of sufficient financial means, such as bank
                statements or a letter from your employer.
                <br />
                <br />● Evidence of the purpose of your trip, such as a letter
                of invitation from an Albanian host, a confirmed hotel
                reservation, or a letter from your employer if you are traveling
                for business.
                <br />
                <br />● Evidence of your travel arrangements, such as a
                round-trip ticket or a confirmed itinerary.
                <br />
                <br />● Any additional documents that may be required for your
                specific purpose of travel, such as a medical certificate if you
                are traveling for medical treatment, or a letter of acceptance
                if you are attending a conference or academic program.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific documents required
                  for an Albania visa may vary depending on your nationality and
                  the purpose of your trip. It is always best to check with the
                  nearest Albanian embassy or consulate for the most up-to-date
                  requirements before applying for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Albania Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are several steps you will need to follow to apply for an
                Albania visa:
                <br />
                <br />● Determine the type of Albania visa you need based on the
                purpose of your trip. Albania offers several types of visas,
                including tourist visas, business visas, and student visas.
                <br />
                <br />● Gather the required documents for your Albania visa
                application. This will typically include a completed and signed
                Albania visa application form, a valid passport or travel
                document, passport-sized photos, proof of sufficient financial
                means, and evidence of the purpose of your trip.
                <br />
                <br />● Contact the nearest Albanian embassy or consulate to
                schedule an appointment to submit your visa application. You may
                be able to apply for an Albania visa through a visa application
                center, depending on your location.
                <br />
                <br />● Attend your appointment and submit your Albania visa
                application, along with all required documents. You may also
                need to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision on your Albania visa application.
                Processing times for Albania visas can vary, so it is best to
                apply as early as possible to allow sufficient time for your
                application to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for an Albania visa may vary depending on your nationality and
                  the purpose of your trip. It is always best to check with the
                  nearest Albanian embassy or consulate for the most up-to-date
                  information before applying for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Albania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Albania depends on the type
                of visa you have been issued. Albania offers several types of
                visas, including tourist visas, business visas, and student
                visas.
                <br />
                <br />{" "}
                <span className="font-bold">If you have a tourist visa</span>,
                you will generally be allowed to stay in Albania for up to 90
                days within a 180-day period. This means that you can stay in
                Albania for 90 days within any 6-month period, but you cannot
                stay for more than 90 days in total during any one visit.
                <br />
                <br />{" "}
                <span className="font-bold">If you have a business visa</span>,
                you will generally be allowed to stay in Albania for up to 90
                days within a 180-day period. This visa is typically issued for
                a single entry and is valid for the duration of your business
                trip.
                <br />
                <br />{" "}
                <span className="font-bold">If you have a student visa</span>,
                you will generally be allowed to stay in Albania for the
                duration of your study program.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific length of time you
                  can stay in Albania may vary depending on your nationality and
                  the purpose of your trip. It is always best to check with the
                  nearest Albanian embassy or consulate for the most up-to-date
                  information before traveling to Albania.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Albania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are in Albania, you should adhere to instructions and
                follow the advice of the local authorities. As of 1 May 2022,
                the curfew has been lifted and the wearing of face masks is no
                longer mandatory.
                <br />
                <br />
                <span className="font-bold">
                  There are currently no restrictions on movement within
                  Albania.
                </span>
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
                In Albania, a diplomatic passport is a special type of passport
                issued to diplomats and other high-ranking government officials
                for official travel abroad. It is issued by the Ministry of
                Foreign Affairs in Albania. Diplomatic passports are granted to
                individuals who represent the Albanian government in official
                capacities, such as ambassadors, consuls, and other high-ranking
                officials. They are generally issued for the duration of an
                individual's term of office or assignment. Diplomatic passports
                are typically blue in color and have special designations and
                markings that distinguish them from regular passports. They also
                provide special privileges and immunities to the holder while
                abroad.
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Albania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Albania, you will generally need
                to obtain a worker visa before traveling to the country. Albania
                offers several types of worker visas, including short-term and
                long-term worker visas.
                <br />
                <br />
                To apply for a worker visa in Albania, you will typically need
                to provide the following documents:
                <br />
                <br />● A completed and signed Albania worker visa application
                form.
                <br />
                <br />● A valid passport or travel document with at least 6
                months of remaining validity and at least two blank pages.
                <br />
                <br />● Passport-sized photos taken within the last 6 months.
                <br />
                <br />● Evidence of your employment in Albania, such as a job
                offer letter or a contract of employment.
                <br />
                <br />● Evidence of sufficient financial means, such as bank
                statements or a letter from your employer.
                <br />
                <br />● Any additional documents that may be required for your
                specific type of worker visa, such as a medical certificate or a
                police clearance certificate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  worker visa in Albania may vary depending on your nationality
                  and the type of work you will be doing in the country. It is
                  always best to check with the nearest Albanian embassy or
                  consulate for the most up-to-date information before applying
                  for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Albania Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several steps you will need to follow to apply for a
                worker visa in Albania:
                <br />
                <br />
                ● Determine the type of worker visa you need based on the nature
                of your employment in Albania. Albania offers several types of
                worker visas, including short-term and long-term worker visas.
                <br />
                <br />● Gather the required documents for your Albania worker
                visa application. This will typically include a completed and
                signed Albania worker visa application form, a valid passport or
                travel document, passport-sized photos, evidence of your
                employment in Albania, and evidence of sufficient financial
                means.
                <br />
                <br />● Contact the nearest Albanian embassy or consulate to
                schedule an appointment to submit your worker visa application.
                You may be able to apply for a worker visa through a visa
                application center, depending on your location.
                <br />
                <br />● Attend your appointment and submit your Albania worker
                visa application, along with all required documents. You may
                also need to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision on your Albania worker visa
                application. Processing times for worker visas in Albania can
                vary, so it is best to apply as early as possible to allow
                sufficient time for your application to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a worker visa in Albania may vary depending on your
                  nationality and the type of work you will be doing in the
                  country. It is always best to check with the nearest Albanian
                  embassy or consulate for the most up-to-date information
                  before applying for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Albania Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Albania, foreign nationals who wish to work in the country
                will typically need to obtain a worker visa. The worker visa is
                a type of long-term visa that allows foreign nationals to enter
                Albania for the purpose of working. To apply for a worker visa,
                you will typically need to have a job offer from an Albanian
                employer and be able to provide evidence of your employment,
                such as a contract or a letter from your employer.
                <br />
                <br />
                In addition to a worker visa, you may also need to obtain a work
                permit in order to legally work in Albania. The work permit is a
                document issued by the Albanian government that allows you to
                work in the country for a specific employer and in a specific
                occupation. To obtain a work permit, you will typically need to
                have a valid worker visa and provide evidence of your
                employment, such as a contract or a letter from your employer.
                <br />
                <br />
                Albania offers several types of worker visas, including:
                <br />
                <br />● Short-term worker visa: This visa is issued for a single
                entry and is valid for up to 90 days. It is typically issued for
                temporary work assignments or short-term projects.
                <br />
                <br />● Long-term worker visa: This visa is issued for multiple
                entries and is valid for up to one year. It is typically issued
                for longer-term employment or for work assignments that are
                expected to last for more than 90 days.
                <br />
                <br />● Seasonal worker visa: This visa is issued for multiple
                entries and is valid for up to six months. It is typically
                issued for temporary, seasonal work assignments in sectors such
                as agriculture, tourism, or construction.
                <br />
                <br />● Highly skilled worker visa: This visa is issued for
                multiple entries and is valid for up to one year. It is
                typically issued for highly skilled workers who are expected to
                contribute to the development and growth of the Albanian
                economy.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  each type of worker visa in Albania may vary depending on your
                  nationality and the type of work you will be doing in the
                  country. It is always best to check with the nearest Albanian
                  embassy or consulate for the most up-to-date information
                  before applying for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Albania Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A completed and signed Albania worker visa application form.
                <br />
                <br />● A valid passport or travel document with at least 6
                months of remaining validity and at least two blank pages.
                <br />
                <br />● Passport-sized photos taken within the last 6 months.
                <br />
                <br />● Evidence of your employment in Albania, such as a job
                offer letter or a contract of employment.
                <br />
                <br />● Evidence of sufficient financial means, such as bank
                statements or a letter from your employer.
                <br />
                <br />● Any additional documents that may be required for your
                specific type of worker visa, such as a medical certificate or a
                police clearance certificate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  worker visa in Albania may vary depending on your nationality
                  and the type of work you will be doing in the country. It is
                  always best to check with the nearest Albanian embassy or
                  consulate for the most up-to-date information before applying
                  for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Albania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Albania, you will need to contact
                the nearest Albanian embassy or consulate to schedule an
                appointment to submit your worker visa application. You may be
                able to apply for a worker visa through a visa application
                center, depending on your location.
                <br />
                <br />
                It is important to apply for your worker visa as early as
                possible to allow sufficient time for your application to be
                processed. Processing times for worker visas in Albania can
                vary, so it is best to check with the embassy or consulate for
                the most up-to-date information on processing times and to
                schedule your appointment accordingly.
                <br />
                <br />
                It is also important to note that you will generally need to
                apply for a worker visa from your home country or from a country
                where you are legally present. It is not usually possible to
                apply for a worker visa from within Albania.
                <br />
                <br />
                If you are already in Albania on a different type of visa and
                you wish to apply for a worker visa, you will need to contact
                the nearest Albanian embassy or consulate to find out the
                specific process for applying for a worker visa while you are in
                the country.
                <br />
                <br />
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Albania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Albania for more than 90 days,
                you will generally need to obtain a student visa before
                traveling to the country. Albania offers student visas for both
                undergraduate and graduate studies.
                <br />
                <br /> To apply for a student visa in Albania, you will
                typically need to provide the following documents:
                <br />
                <br />● A completed and signed Albania student visa application
                form.
                <br />
                <br />● A valid passport or travel document with at least 6
                months of remaining validity and at least two blank pages.
                <br />
                <br />● Passport-sized photos taken within the last 6 months.
                <br />
                <br />● A letter of acceptance from an Albanian educational
                institution.
                <br />
                <br />● Evidence of sufficient financial means to support your
                studies in Albania, such as bank statements or a letter of
                sponsorship.
                <br />
                <br />● Any additional documents that may be required by the
                Albanian embassy or consulate, such as a medical certificate or
                a police clearance certificate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for a
                  student visa in Albania may vary depending on your nationality
                  and the educational institution you will be attending. It is
                  always best to check with the nearest Albanian embassy or
                  consulate for the most up-to-date information before applying
                  for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Albania Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● Determine the type of student visa you need based on your
                study program in Albania. Albania offers student visas for both
                undergraduate and graduate studies.
                <br />
                <br />● Gather the required documents for your Albania student
                visa application. This will typically include a completed and
                signed Albania student visa application form, a valid passport
                or travel document, passport-sized photos, a letter of
                acceptance from an Albanian educational institution, and
                evidence of sufficient financial means to support your studies
                in Albania.
                <br />
                <br />● Contact the nearest Albanian embassy or consulate to
                schedule an appointment to submit your student visa application.
                You may be able to apply for a student visa through a visa
                application center, depending on your location.
                <br />
                <br />● Attend your appointment and submit your Albania student
                visa application, along with all required documents. You may
                also need to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision on your Albania student visa
                application. Processing times for student visas in Albania can
                vary, so it is best to apply as early as possible to allow
                sufficient time for your application to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a student visa in Albania may vary depending on your
                  nationality and the educational institution you will be
                  attending. It is always best to check with the nearest
                  Albanian embassy or consulate for the most up-to-date
                  information before applying for a student visa.
                </span>
              </p>
            </Container>

            <Container>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Albania student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To obtain a student visa for Albania, you will need to provide
                the following documents:
                <br />
                <br />
                ● A valid passport.
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A recent passport-size photograph.
                <br />
                <br />
                ● Proof of acceptance to a university or academic institution in
                Albania.
                <br />
                <br />
                ● Proof of sufficient financial resources to cover your living
                expenses while in Albania.
                <br />
                <br />
                ● A letter of sponsorship, if applicable.
                <br />
                <br />
                ● A health insurance policy.
                <br />
                <br />
                ● Any additional documents required by the Albanian embassy or
                consulate where you will apply for the visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for a student
                  visa may vary depending on your country of origin and the
                  length of your stay in Albania. It is best to check with the
                  Albanian embassy or consulate in your country for the most
                  up-to-date requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Albania Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of an Albania student visa will depend on
                the length of your study program in Albania and the specific
                requirements of the Albanian embassy or consulate where you are
                applying for your visa.
                <br />
                <br /> In general, a student visa for Albania is typically
                issued for multiple entries and is valid for the duration of
                your study program, up to a maximum of one year. If your study
                program is expected to last for more than one year, you may need
                to apply for a renewal of your student visa.
                <br />
                <br /> The price of a student visa for Albania will also vary
                depending on the embassy or consulate where you are applying and
                the specific requirements of your visa. It is best to check with
                the embassy or consulate for the most up-to-date information on
                the price of a student visa and any applicable fees.
                <br />
                <br /> It is important to note that the specific requirements
                for a student visa in Albania may vary depending on your
                nationality and the educational institution you will be
                attending. It is always best to check with the nearest Albanian
                embassy or consulate for the most up-to-date information before
                applying for a student visa.
              </p>
            </Container>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Albania;
