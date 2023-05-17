import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Turkey = () => {
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
        <title>Turkey</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Turkey travel visa, Turkey work visa, Turkey study visa, How to apply for an Turkey visa, Turkey visa requirements, Turkey tourist visa, Turkey student visa, Turkey business visa, Turkey visa processing time, Turkey visa application process, Turkey visa for Americans, Turkey visa for Europeans, Turkey visa for Sudanns, Turkey visa for Canadians, Turkey visa for Sudanns, Turkey visa for Chinese, Turkey visa for Africans, Turkey visa for Asians, Turkey visa for South Americans, Turkey visa for Middle Easterners, Turkey visa for UK citizens, Turkey visa for EU citizens, Turkey visa for Schengen area, Turkey visa for non-EU citizens, Turkey visa fees and charges"
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Turkey
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Turkey is a large country in the Middle East and southeastern
              Europe that is known for its rich culture, fascinating history,
              and beautiful landscapes. It is a popular tourist destination, and
              its main attractions include the city of Istanbul, which straddles
              the border between Europe and Asia and is known for its beautiful
              architecture and vibrant nightlife, and the Cappadocia region,
              which is known for its unique landscape of 'fairy chimneys' and
              underground cities. Additionally, Turkey is known for its
              delicious cuisine, which is heavily influenced by Mediterranean
              and Middle Eastern flavors and features a variety of meats,
              vegetables, and grains. The country is also known for its vibrant
              music and dance traditions, which are heavily influenced by its
              rich history and diverse culture.
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
                Who can enter Turkey without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                As of 2021, citizens of the following countries are able to
                enter Turkey without a visa for stays of up to 90 days within a
                180-day period:
                <br />
                <br />
                <span className="font-bold">
                  Albania Andorra, Angola, Antigua and Barbuda, Argentina,
                  Australia, Austria, Bahamas, Bahrain, Barbados, Belarus,
                  Belgium, Belize, Bosnia and Herzegovina, Brazil, Brunei,
                  Bulgaria, Canada, Cape Verde, Chile, Colombia, Costa Rica,
                  Croatia, Cuba, Cyprus, Czech Republic, Denmark, Dominica,
                  Dominican Republic, Ecuador, El Salvador, Estonia, Finland,
                  France, Gambia, Georgia, Germany, Greece, Grenada, Guatemala,
                  Guyana, Haiti, Honduras, Hong Kong, Hungary, Iceland, Ireland,
                  Italy, Jamaica, Japan, Kosovo, Kuwait, Kyrgyzstan, Latvia,
                  Lebanon, Lithuania, Luxembourg, Macau, Macedonia, Madagascar,
                  Malawi, Malaysia, Maldives, Malta, Mauritius, Mexico, Moldova,
                  Monaco, Montenegro, Morocco, Namibia, Netherlands, New
                  Zealand, Nicaragua, North Korea, Norway, Oman, Panama,
                  Paraguay, Peru, Poland, Portugal, Qatar, Romania, Russia,
                  Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the
                  Grenadines, San Marino, Saudi Arabia, Serbia, Seychelles,
                  Singapore, Slovakia, Slovenia, South Africa, South Korea,
                  Spain, Suriname, Sweden, Switzerland, Taiwan, Tajikistan,
                  Thailand, Trinidad and Tobago, Tunisia, Turkmenistan, Ukraine,
                  United Arab Emirates, United Kingdom, United States, Uruguay,
                  Uzbekistan, Vatican City.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for visa-free travel to
                  Turkey may vary depending on your specific circumstances and
                  the country where you are traveling from. It is recommended
                  that you check the specific requirements for travel to Turkey
                  before your trip and contact the embassy or consulate of
                  Turkey in your country for more information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Turkey Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Turkey, you will typically need to
                provide the following documents:
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A valid passport or travel document with at least two blank
                pages for visa stamps.
                <br />
                <br />
                ● Two recent passport-size photographs, taken against a white
                background.
                <br />
                <br />
                ● A copy of your round-trip ticket or a confirmed travel
                itinerary.
                <br />
                <br />
                ● Evidence of sufficient financial means to cover your expenses
                during your stay in Turkey, such as bank statements or a letter
                from your sponsor.
                <br />
                <br />
                ● A letter of invitation from a Turkish host or sponsor, if
                applicable.
                <br />
                <br />
                ● A hotel reservation or proof of accommodation in Turkey.
                <br />
                <br />
                ● A certificate of travel health insurance that covers the
                entire period of your stay in Turkey.
                <br />
                <br />
                ● Any other documents required for the specific type of visa you
                are applying for, such as a letter of acceptance from a
                recognized educational institution if you are applying for a
                student visa or a job offer if you are applying for a work visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for a visa to
                  Turkey may vary depending on the specific circumstances of
                  your visit and the country where you are applying. It is
                  recommended that you contact the embassy or consulate of
                  Turkey in your country for more information on the specific
                  documents required for a visa application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Turkey Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Turkey, you will need to follow these
                steps:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of visas available for Turkey, including tourist visas, business
                visas, work visas, student visas, and more. The specific type of
                visa you will need will depend on the purpose of your visit and
                the length of your stay in Turkey.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                completed and signed visa application form, a valid passport or
                travel document, two recent passport-size photographs, and other
                documents as required. The specific documents required will
                depend on the type of visa you are applying for and the country
                where you are applying.
                <br />
                <br />
                ● Pay the visa processing fee: You will need to pay a fee to
                cover the cost of processing your visa application. The fee
                amount will depend on the type of visa you are applying for and
                the country where you are applying.
                <br />
                <br />
                ● Submit your application: You will need to submit your visa
                application, along with all required documents and the visa
                processing fee, to the embassy or consulate of Turkey in your
                country. You may be required to attend an interview as part of
                the application process.
                <br />
                <br />
                ● Wait for a decision on your application: The processing time
                for a Turkish visa can vary, but it is usually within 15 days of
                the date of submission. You will be notified of the decision on
                your application by the embassy or consulate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  visa to Turkey may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of Turkey in your country for more information on
                  the specific process for applying for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Turkey?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Turkey will depend on the
                type of visa you have obtained and the specific circumstances of
                your visit.
                <br />
                <br />
                <span className="font-bold">Tourist visas</span>,{" "}
                <span className="font-bold">business visas</span>, and other{" "}
                <span className="font-bold">short-term visas</span> are
                typically valid for stays of up to 90 days within a 180-day
                period. You will need to leave Turkey before the end of this
                period or apply for a new visa if you wish to stay longer.
                <br />
                <br />
                <span className="font-bold">
                  Work visas and student visas
                </span>{" "}
                are typically valid for the duration of your employment or
                studies in Turkey. You will be able to stay in Turkey as long as
                you are employed or enrolled in a recognized educational
                institution.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of time you can stay
                  in Turkey may vary depending on the specific circumstances of
                  your visit and the type of visa you have obtained. It is
                  recommended that you contact the embassy or consulate of
                  Turkey in your country for more information on the specific
                  length of time you are allowed to stay in Turkey.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Turkey?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                No travel is risk-free during the COVID-19 pandemic. Countries
                may further restrict travel or bring in new rules at short
                notice, for example, due to a new COVID-19 variant. Check with
                your travel company or airline for any transport changes which
                may delay your journey home.
                <br />
                <br />
                If you test positive for COVID-19, you will need to stay where
                you are for seven days. If you do not have a place to stay,
                government authorities will direct you to a designated hotel if
                you do not have a permanent residence. Your details will be
                taken so the authorities can monitor your isolation.
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
                A diplomatic passport is a type of passport issued to
                individuals who are representing their country in an official
                capacity, such as diplomats, consular officers, and other
                government officials.
                <br />
                <br />
                In Turkey, diplomatic passports are issued to Turkish citizens
                who are going abroad on official business as representatives of
                the Turkish government. Diplomatic passports are typically valid
                for a period of five years and are issued to individuals who are
                traveling on official business, such as conducting negotiations,
                attending conferences, or representing Turkey in international
                organizations.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and exemptions while traveling abroad, such as
                immunity from arrest and detention, tax exemptions, and access
                to consular assistance.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules and regulations
                  regarding diplomatic passports may vary from country to
                  country. If you are a Turkish citizen and have been issued a
                  diplomatic passport, it is recommended that you contact the
                  embassy or consulate of Turkey in your country for more
                  information on the specific privileges and exemptions you are
                  entitled to while traveling abroad.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Turkey?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Turkey, you will typically need
                to obtain a work visa before you can start working in the
                country.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for a work visa
                  to Turkey may vary depending on the specific circumstances of
                  your visit and the country where you are applying. It is
                  recommended that you contact the embassy or consulate of
                  Turkey in your country for more information on the specific
                  requirements for a work visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Turkey Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Turkey, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of work visa you need: There are several
                types of work visas available for Turkey, including short-term
                work visas and long-term work visas. The specific type of visa
                you will need will depend on the length of your stay in Turkey
                and the purpose of your work.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                completed and signed visa application form, a valid passport or
                travel document, two recent passport-size photographs, and other
                documents as required. The specific documents required will
                depend on the type of work visa you are applying for and the
                country where you are applying.
                <br />
                <br />
                ● Pay the visa processing fee: You will need to pay a fee to
                cover the cost of processing your work visa application. The fee
                amount will depend on the type of work visa you are applying for
                and the country where you are applying.
                <br />
                <br />
                ● Submit your application: You will need to submit your work
                visa application, along with all required documents and the visa
                processing fee, to the embassy or consulate of Turkey in your
                country. You may be required to attend an interview as part of
                the application process.
                <br />
                <br />
                ● Wait for a decision on your application: The processing time
                for a Turkish work visa can vary, but it is usually within 15
                days of the date of submission. You will be notified of the
                decision on your application by the embassy or consulate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  work visa to Turkey may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of Turkey in your country for more information on
                  the specific process for applying for a work visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Turkey Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas available for Turkey,
                including:
                <br />
                <br />
                <span className="font-bold">Short-term worker visa</span>: These
                visas are issued for a period of up to 90 days and are typically
                used for business visits, short-term work assignments, or
                internships.
                <br />
                <br />
                <span className="font-bold">Long-term worker visa</span>
                : These visas are issued for a period of up to one year and are
                typically used for long-term work assignments or employment in
                Turkey.
                <br />
                <br />
                <span className="font-bold">Work and residence permits</span>:
                If you are planning to work in Turkey for an extended period of
                time, you may be eligible to apply for a work and residence
                permit. This permit allows you to live and work in Turkey for up
                to two years, after which it can be renewed.
                <br />
                <br />
                <span className="font-bold">Self-employed worker visa</span>:
                These visas are issued to individuals who are planning to work
                as self-employed individuals in Turkey.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  conditions for each type of work visa may vary. It is
                  recommended that you contact the embassy or consulate of
                  Turkey in your country for more information on the specific
                  requirements and conditions for each type of work visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Turkey Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Turkey, you will typically need to
                provide the following documents:
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A valid passport or travel document with at least two blank
                pages for visa stamps.
                <br />
                <br />
                ● Two recent passport-sized photographs, taken against a white
                background.
                <br />
                <br />
                ● A copy of your round-trip ticket or a confirmed travel
                itinerary.
                <br />
                <br />
                ● Evidence of sufficient financial means to cover your expenses
                during your stay in Turkey, such as bank statements or a letter
                from your sponsor.
                <br />
                <br />
                ● A job offer from a Turkish employer, including a letter of
                employment and any other relevant documents.
                <br />
                <br />
                ● Proof of your qualifications and skills, such as a degree,
                professional certification, or work experience.
                <br />
                <br />
                ● A medical certificate indicating that you are in good health.
                <br />
                <br />
                ● A police clearance certificate from your country of origin or
                residence, indicating that you have no criminal record.
                <br />
                <br />
                ● Any other documents required for the specific type of work
                visa you are applying for, such as proof of self-employment if
                you are applying for a self-employed work visa or a letter of
                acceptance from a recognized educational institution if you are
                applying for a student visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for a work visa
                  to Turkey may vary depending on the specific circumstances of
                  your visit and the country where you are applying. It is
                  recommended that you contact the embassy or consulate of
                  Turkey in your country for more information on the specific
                  documents required for a work visa application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Turkey?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You will typically need to apply for a work visa for Turkey at
                the embassy or consulate of Turkey in your country of origin or
                legal residence. It is recommended that you apply for your work
                visa well in advance of your planned travel date to allow
                sufficient time for the processing of your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  work visa to Turkey may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of Turkey in your country for more information on
                  the specific process for applying for a work visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Turkey?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Turkey, you will typically need
                to obtain a student visa before you can begin your studies.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for a student
                  visa to Turkey may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of Turkey in your country for more information on
                  the specific requirements for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Turkey student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Turkey, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of student visa you need: There are several
                types of student visas available for Turkey, including
                short-term student visas and long-term student visas. The
                specific type of visa you will need will depend on the length of
                your studies in Turkey.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                completed and signed visa application form, a valid passport or
                travel document, two recent passport-size photographs, and other
                documents as required. The specific documents required will
                depend on the type of student visa you are applying for and the
                country where you are applying.
                <br />
                <br />
                ● Pay the visa processing fee: You will need to pay a fee to
                cover the cost of processing your student visa application. The
                fee amount will depend on the type of student visa you are
                applying for and the country where you are applying.
                <br />
                <br />
                ● Submit your application: You will need to submit your student
                visa application, along with all required documents and the visa
                processing fee, to the embassy or consulate of Turkey in your
                country. You may be required to attend an interview as part of
                the application process.
                <br />
                <br />
                ● Wait for a decision on your application: The processing time
                for a Turkish student visa can vary, but it is usually within 15
                days of the date of submission. You will be notified of the
                decision on your application by the embassy or consulate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  student visa to Turkey may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of Turkey in your country for more information on
                  the specific process for applying for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Turkey student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa for Turkey, you will typically
                need to meet the following requirements:
                <br />
                <br />
                ● Have been accepted to a recognized educational institution in
                Turkey: You will need to have been accepted to a recognized
                educational institution in Turkey in order to apply for a
                student visa. You will need to provide a letter of acceptance
                from the educational institution as part of your visa
                application.
                <br />
                <br />
                ● Have a valid passport or travel document: You will need to
                have a valid passport or travel document that is valid for at
                least six months after the planned end of your stay in Turkey
                and has at least two blank pages for visa stamps.
                <br />
                <br />
                ● Meet the specific requirements for the type of student visa
                you are applying for: There are several types of student visas
                available for Turkey, including short-term student visas and
                long-term student visas. The specific requirements for each type
                of visa may vary, and you will need to meet the specific
                requirements for the type of visa you are applying for.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for a student
                  visa to Turkey may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of Turkey in your country for more information on
                  the specific requirements for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Turkey student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price for a student visa for Turkey will depend
                on the type of student visa you are applying for and the country
                where you are applying.
                <br />
                <br />
                There are several types of student visas available for Turkey,
                including:
                <br />
                <br />
                <span className="font-bold">Short-term student visas</span>:
                These visas are issued for a period of up to 90 days and are
                typically used for short-term study programs or exchange
                programs.
                <br />
                <br />
                <span className="font-bold">Long-term student visas</span>:
                These visas are issued for a period of up to one year and are
                typically used for long-term study programs or degree programs
                in Turkey.
                <br />
                <br />
                The price of a student visa for Turkey will depend on the type
                of student visa you are applying for and the country where you
                are applying. It is recommended that you contact the embassy or
                consulate of Turkey in your country for information on the
                specific price of a student visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the validity and price of a
                  student visa to Turkey may vary depending on the specific
                  circumstances of your visit and the country where you are
                  applying. It is recommended that you contact the embassy or
                  consulate of Turkey in your country for more information on
                  the specific validity and price of a student visa.
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

export default Turkey;
