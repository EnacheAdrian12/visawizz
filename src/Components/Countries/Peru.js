import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Peru = () => {
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
        <title>Peru</title>
        <meta name="description" content="Peru" />
        <meta
          name="keywords"
          content="Peru travel visa, Peru work visa, Peru study visa, How to apply for an Peru visa, Peru visa requirements, Peru tourist visa, Peru student visa, Peru business visa, Peru visa processing time, Peru visa application process, Peru visa for Americans, Peru visa for Europeans, Peru visa for Peruns, Peru visa for Canadians, Peru visa for Peruns, Peru visa for Chinese, Peru visa for Africans, Peru visa for Asians, Peru visa for South Americans, Peru visa for Middle Easterners, Peru visa for UK citizens, Peru visa for EU citizens, Peru visa for Schengen area, Peru visa for non-EU citizens, Peru visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Peru
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Peru is a country in South America, known for its rich culture,
              beautiful landscapes, and abundant wildlife. The country has a
              long and complex history, with roots in the ancient civilizations
              of the Andes region, including the Inca Empire. Today, Peru is
              known for its beautiful landscapes, including the Amazon
              rainforest, the Andes mountains, and the Peruvian coast, which are
              popular with hikers and outdoor enthusiasts. The capital city of
              Lima is a major cultural and economic hub, with many historic
              landmarks, museums, and cultural institutions. Peru is also known
              for its vibrant music and arts scene, and its rich folk traditions
              that have been preserved and celebrated by generations of
              Peruvians. The country is a popular tourist destination, with many
              visitors coming to experience its beautiful landscapes and rich
              culture.
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
                Who can enter Peru without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Peru has a visa waiver agreement with certain countries, which
                allows citizens of those countries to enter Peru without a visa
                for a certain period of time. The list of countries and the
                duration of stay allowed without a visa can change over time and
                it's recommend to check the Peruvian immigration website or with
                the nearest Peruvian embassy or consulate for the most
                up-to-date information.
                <br /> <br />
                Currently, as of my knowledge cut-off, the citizens of the
                following countries do not require a visa to enter Peru for a
                stay of up to 183 days:
                <span className="font-bold">
                  &nbsp;Argentina, Australia, Austria, Belgium, Bolivia, Brazil,
                  Canada, Chile, Colombia, Costa Rica, Croatia, Cyprus, Czech
                  Republic, Denmark, Ecuador, El Salvador, Estonia, Finland,
                  France, Germany, Greece, Guatemala, Honduras, Hong Kong,
                  Hungary, Iceland, Ireland, Israel, Italy, Japan, Latvia,
                  Liechtenstein, Lithuania, Luxembourg, Malta, Mexico, Monaco,
                  Netherlands, New Zealand, Nicaragua, Norway, Panama, Paraguay,
                  Poland, Portugal, Puerto Rico, Romania, Russia, San Marino,
                  Slovakia, Slovenia, South Korea, Spain, Sweden, Switzerland,
                  Taiwan, Trinidad and Tobago, United Kingdom, United States,
                  Uruguay, Vatican City, Venezuela.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Please note that this list may change and it is always best to
                  check with the Peruvian immigration website or with the
                  nearest Peruvian embassy or consulate for the most up-to-date
                  information. Additionally, Visitors may be required to show
                  proof of onward travel, hotel reservation and enough funds to
                  support themselves during their stay in Peru.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Peru Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Peru, you will generally need to
                provide the following documents: <br /> <br />● A valid
                passport: Your passport must be valid for at least 6 months
                beyond the date you plan to leave Peru. <br /> <br />● A
                completed visa application form: You can download the
                application form from the website of the Peruvian embassy or
                consulate in your country, or you can obtain it in person at the
                embassy or consulate. <br /> <br />● Passport-sized photographs:
                You will need to provide one or more passport-sized photographs
                with your application. <br /> <br />● Proof of payment: You will
                need to pay a visa fee in order to apply for a visa. You can
                typically pay this fee by credit card, money order, or cashier's
                check.
                <br /> <br />● Evidence of your travel plans: You will need to
                provide evidence of your travel plans, such as a confirmed hotel
                reservation or a letter of invitation from a host in Peru.
                <br /> <br />● Other supporting documents: Depending on your
                specific circumstances, you may need to provide additional
                documents, such as proof of employment, proof of financial
                support, or a criminal record check.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Peru Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Peru, you will generally need to
                follow these steps: <br /> <br />● Determine the type of visa
                you need: There are several types of visas available for travel
                to Peru, including tourist visas, business visas, student visas,
                and work visas. You will need to determine the type of visa that
                is appropriate for your specific purpose of travel.
                <br /> <br />● Gather the required documents: You will need to
                gather the necessary documents in order to apply for your visa.
                These may include your passport, a completed visa application
                form, passport-sized photographs, proof of payment, and evidence
                of your travel plans, among other things. <br /> <br />● Submit
                your application: You can typically submit your visa application
                in person at the Peruvian embassy or consulate in your country,
                or you may be able to apply online through the website of the
                embassy or consulate. <br /> <br />● Wait for a decision: Once
                you have submitted your application, it may take several weeks
                for a decision to be made on your visa request. You should not
                make any travel arrangements until you have received a decision
                on your application. <br /> <br />● Obtain your visa: If your
                visa application is approved, you will need to pay a visa
                issuance fee and provide any additional documents that may be
                required. You will then be issued with a visa, which you will
                need to present to immigration authorities when you arrive in
                Peru.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Peru?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Peru depends
                on the type of visa you have obtained and the purpose of your
                visit.
                <br /> <br />
                If you have a <span className="font-bold">tourist visa</span>,
                you will typically be allowed to stay in Peru for up to 183
                days. If you have a business visa, you may be allowed to stay
                for a longer period of time, depending on the specific terms of
                your visa.
                <br /> <br />
                If you are a{" "}
                <span className="font-bold">student or are traveling</span> to
                Peru for work, you will typically be allowed to stay for the
                duration of your studies or work, up to a maximum of 183 days.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the length of time you are
                  allowed to stay in Peru may be affected by other factors, such
                  as your immigration status and your activities while in the
                  country. It is always a good idea to check the specific
                  requirements that apply to your situation before planning your
                  trip. You can find more information on the website of the
                  Peruvian embassy or consulate in your country, or by
                  contacting the Peruvian immigration authorities.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Peru?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Direct flights to Peru from the U.S. are available. Travelers
                should check{" "}
                <span className="font-bold">https://travel.state.gov/</span> for
                country-specific travel information before traveling.
                <br />
                <br />
                Notarized Travel Authorizations for Minors: Peruvian regulations
                require that minors present in Peru for more than 180 days must
                have a notarized travel letter to depart the country if they are
                not traveling with the parent(s) listed on the birth
                certificate. Travel with one parent when two are listed on the
                birth certificate requires the notarized consent of the
                non-traveling parent. This notarized letter must be presented to
                immigration officials prior to boarding a flight. For more
                information on minor travel authorizations, visit the Embassy
                site (in English) here.
                <br />
                <br />
                Is a negative COVID-19 test (PCR and/or serology) required for
                entry? No Travelers are advised to contact their airline days
                prior your flight to gather the proper documentation and to
                regularly consult the airport website for the latest guidance.
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
                A diplomatic passport is a special type of passport that is
                issued to individuals who are working in a diplomatic capacity
                for their country, such as diplomats and members of a diplomatic
                mission. In Peru, the Ministry of Foreign Affairs is responsible
                for issuing diplomatic passports to eligible individuals.
                <br />
                <br />
                To obtain a diplomatic passport in Peru, an individual must meet
                certain criteria and provide certain documents, such as:
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
                Diplomatic passport holders are generally granted certain
                privileges and immunity from certain laws in the country where
                they are posted. This includes immunity from arrest and
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
                  Passport in Peru can change over time. It's recommended to
                  check with the Ministry of Foreign Affairs of Peru for more
                  updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Peru?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you plan to work in Peru, you will generally need to obtain a
                worker visa. There are several types of worker visas available
                in Peru, including temporary worker visas, permanent worker
                visas, and self-employment visas.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Peru Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Peru, you will generally need to
                follow these steps: <br /> <br />● Determine the type of worker
                visa you need: There are several types of worker visas available
                in Peru, including temporary worker visas, permanent worker
                visas, and self-employment visas. You will need to determine the
                type of worker visa that is appropriate for your specific
                purpose of work in Peru. <br /> <br />● Gather the required
                documents: You will need to gather the necessary documents in
                order to apply for your worker visa. These may include your
                passport, a completed visa application form, passport-sized
                photographs, proof of payment, and evidence of your employment,
                among other things. <br /> <br />● Submit your application: You
                can typically submit your worker visa application in person at
                the Peruvian embassy or consulate in your country, or you may be
                able to apply online through the website of the embassy or
                consulate. <br /> <br />● Wait for a decision: Once you have
                submitted your application, it may take several weeks for a
                decision to be made on your worker visa request. You should not
                make any travel arrangements until you have received a decision
                on your application. <br /> <br />● Obtain your worker visa: If
                your worker visa application is approved, you will need to pay a
                visa issuance fee and provide any additional documents that may
                be required. You will then be issued with a worker visa, which
                you will need to present to immigration authorities when you
                arrive in Peru.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Peru Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available in Peru,
                including: <br /> <br />●{" "}
                <span className="font-bold">Temporary worker visa</span>: A
                temporary worker visa is for people who are traveling to Peru
                for a specific period of time to work. This type of visa is
                typically valid for up to 183 days, but it can be extended if
                necessary.
                <br /> <br />●{" "}
                <span className="font-bold">Permanent worker visa</span>: A
                permanent worker visa is for people who are traveling to Peru to
                work on a long-term basis. This type of visa is typically valid
                for up to five years, and it can be renewed if necessary. <br />{" "}
                <br />● <span className="font-bold">Self-employment visa</span>:
                A self-employment visa is for people who are traveling to Peru
                to work as self-employed individuals. This type of visa is
                typically valid for up to 183 days, and it can be extended if
                necessary.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Peru Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Peru, you will generally need to
                provide the following documents: <br /> <br />● A valid
                passport: Your passport must be valid for at least 6 months
                beyond the date you plan to leave Peru. <br /> <br />● A
                completed visa application form: You can download the
                application form from the website of the Peruvian embassy or
                consulate in your country, or you can obtain it in person at the
                embassy or consulate.
                <br /> <br />● Passport-sized photographs: You will need to
                provide one or more passport-sized photographs with your
                application. <br /> <br />● Proof of payment: You will need to
                pay a visa fee in order to apply for a worker visa. You can
                typically pay this fee by credit card, money order, or cashier's
                check.
                <br /> <br />● Evidence of your employment: You will need to
                provide evidence of your employment, such as a letter of offer
                from your employer in Peru or a contract of employment. <br />{" "}
                <br />● Other supporting documents: Depending on your specific
                circumstances, you may need to provide additional documents,
                such as proof of your education and qualifications, or a
                criminal record check.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Peru?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can typically apply for a worker visa in Peru at the
                Peruvian embassy or consulate in your country of residence. Some
                embassies and consulates may allow you to apply online through
                their website, while others may require you to submit your
                application in person.
                <br /> <br />
                It is a good idea to begin the process of applying for a worker
                visa as soon as possible, as the process can take several weeks
                or even months. You should not make any travel arrangements
                until you have received a decision on your worker visa
                application.
                <br /> <br />
                <span className="font-bold">
                  You should also be aware that the requirements and application
                  process for a worker visa in Peru may vary depending on your
                  specific circumstances and the purpose of your work in the
                  country. It is always a good idea to carefully review the
                  requirements and to follow the instructions provided by the
                  embassy or consulate when applying for a worker visa. You can
                  find more information on the website of the Peruvian embassy
                  or consulate in your country, or by contacting the Peruvian
                  immigration authorities.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Peru?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Peru, you will generally need to
                obtain a student visa. The specific requirements and procedures
                for obtaining a student visa in Peru may vary depending on your
                nationality, the duration of your studies, and the institution
                you will be attending.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Peru student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Peru, you will generally need to
                follow these steps: <br /> <br />● Determine the type of student
                visa you need: There are several types of student visas
                available in Peru, including short-term study visas and
                long-term study visas. You will need to determine the type of
                student visa that is appropriate for your specific purpose of
                study in Peru. <br /> <br />● Gather the required documents: You
                will need to gather the necessary documents in order to apply
                for your student visa. These may include your passport, a
                completed visa application form, passport-sized photographs,
                proof of payment, and evidence of your enrollment in a Peruvian
                educational institution, among other things. <br /> <br />●
                Submit your application: You can typically submit your student
                visa application in person at the Peruvian embassy or consulate
                in your country, or you may be able to apply online through the
                website of the embassy or consulate. <br /> <br />● Wait for a
                decision: Once you have submitted your application, it may take
                several weeks for a decision to be made on your student visa
                request. You should not make any travel arrangements until you
                have received a decision on your application. <br /> <br />●
                Obtain your student visa: If your student visa application is
                approved, you will need to pay a visa issuance fee and provide
                any additional documents that may be required. You will then be
                issued with a student visa, which you will need to present to
                immigration authorities when you arrive in Peru.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Peru student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Peru, you will typically need to
                provide the following documents: <br /> <br />● A valid
                passport: Your passport must be valid for at least 6 months
                beyond the date you plan to leave Peru. <br /> <br />● A
                completed visa application form: You can download the
                application form from the website of the Peruvian embassy or
                consulate in your country, or you can obtain it in person at the
                embassy or consulate. <br /> <br />● Passport-sized photographs:
                You will need to provide one or more passport-sized photographs
                with your application. <br /> <br />● Proof of payment: You will
                need to pay a visa fee in order to apply for a student visa. You
                can typically pay this fee by credit card, money order, or
                cashier's check. <br /> <br />● Evidence of your enrollment in a
                Peruvian educational institution: You will need to provide
                evidence of your enrollment in a Peruvian educational
                institution, such as a letter of acceptance or a copy of your
                enrollment contract. <br /> <br />● Other supporting documents:
                Depending on your specific circumstances, you may need to
                provide additional documents, such as proof of your financial
                resources, a criminal record check, or a medical certificate.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Peru student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Peru may vary
                depending on the specific type of student visa that you are
                applying for and the purpose of your studies in the country.
                <br /> <br />
                Short-term student visas in Peru are typically valid for up to
                183 days, and they may be issued at a lower fee than long-term
                student visas. Long-term student visas, on the other hand, are
                typically valid for up to five years, and they may be issued at
                a higher fee. <br /> <br />
                The specific fee for a student visa in Peru may also vary
                depending on the country in which you are applying and the type
                of payment method you are using. You can find more information
                on the fee for a student visa in Peru on the website of the
                Peruvian embassy or consulate in your country, or by contacting
                the Peruvian immigration authorities. <br /> <br />
                <span className="font-bold">
                  It is always a good idea to carefully review the requirements
                  and fees for a student visa in Peru before applying, as the
                  requirements and fees may vary depending on your specific
                  circumstances and the purpose of your studies in the country.
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

export default Peru;
