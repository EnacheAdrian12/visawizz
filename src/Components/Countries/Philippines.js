import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Philippines = () => {
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
        <title>Philippines</title>
        <meta name="description" content="Philippines" />
        <meta
          name="keywords"
          content="Philippines travel visa, Philippines work visa, Philippines study visa, How to apply for an Philippines visa, Philippines visa requirements, Philippines tourist visa, Philippines student visa, Philippines business visa, Philippines visa processing time, Philippines visa application process, Philippines visa for Americans, Philippines visa for Europeans, Philippines visa for Philippinesns, Philippines visa for Canadians, Philippines visa for Philippinesns, Philippines visa for Chinese, Philippines visa for Africans, Philippines visa for Asians, Philippines visa for South Americans, Philippines visa for Middle Easterners, Philippines visa for UK citizens, Philippines visa for EU citizens, Philippines visa for Schengen area, Philippines visa for non-EU citizens, Philippines visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Philippines
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              The Philippines is a country in Southeast Asia that is known for
              its beautiful beaches, crystal-clear waters, and rich culture and
              history. It is home to many islands, including Luzon, Visayas, and
              Mindanao, which offer a wide variety of landscapes and activities,
              such as diving, surfing, and hiking. The Philippines is also known
              for its vibrant and diverse culture, which has been influenced by
              its indigenous peoples, its Spanish and American colonial history,
              and its location in the Pacific Ocean. Additionally, the
              Philippines is known for its rich natural resources, including
              timber, minerals, and agricultural products, which are important
              to its economy.
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
                Who can enter Philippines without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The Philippines has visa-free policies for certain foreign
                nationals who wish to visit the country for a short period of
                time. Depending on your nationality and the purpose of your
                visit, you may be able to enter the Philippines without a visa
                for a stay of up to 30 days.
                <br /> <br /> Here is a list of some of the countries whose
                citizens are eligible for visa-free entry to the Philippines:
                <span className="font-bold">
                  &nbsp;Andorra, Argentina, Australia, Austria, Bahamas,
                  Bahrain, Barbados, Belgium, Belize, Bermuda, Bolivia, Bosnia
                  and Herzegovina, Brazil, Brunei, Bulgaria, Canada, Chile,
                  Colombia, Costa Rica, Croatia, Cyprus, Czech Republic,
                  Denmark, Dominica, Ecuador, Estonia, Fiji, Finland, France,
                  Germany, Greece, Grenada, Honduras, Hungary, Iceland, Ireland,
                  Israel, Italy, Japan, Kiribati, Kuwait, Latvia, Liechtenstein,
                  Lithuania, Luxembourg, Macau, Macedonia, Malaysia, Maldives,
                  Malta, Marshall Islands, Mauritius, Mexico, Micronesia,
                  Moldova, Monaco, Montenegro, Netherlands, New Zealand,
                  Nicaragua, Norway, Oman, Palau, Panama, Papua New Guinea,
                  Peru, Poland, Portugal, Qatar, Romania, Russia, Saint Kitts
                  and Nevis, Saint Lucia, Saint Vincent and the Grenadines,
                  Samoa, San Marino, Saudi Arabia, Serbia, Singapore, Slovakia,
                  Slovenia, Solomon Islands, South Africa, South Korea, Spain,
                  Sweden, Switzerland, Taiwan, Thailand, Timor-Leste, Tonga,
                  Trinidad and Tobago, Turkey, Tuvalu, Ukraine, United Arab
                  Emirates, United Kingdom, United States, Uruguay, Vanuatu,
                  Vatican City, Venezuela, Vietnam, Saint Vincent and the
                  Grenadines, Samoa, San Marino, Saudi Arabia, Serbia,
                  Seychelles, Singapore, Slovakia, Slovenia, Solomon Islands,
                  South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan,
                  Tonga, Trinidad and Tobago, Tuvalu, Ukraine, United Arab
                  Emirates, United Kingdom, United States, Uruguay, Vanuatu,
                  Vatican City.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the list of countries eligible
                  for visa-free entry to the Philippines may change from time to
                  time. It is recommended that you check the official website of
                  the Philippine Department of Foreign Affairs or the embassy or
                  consulate of the Philippines in your country of residence for
                  the most up-to-date information on visa-free entry to the
                  Philippines.
                </span>
                <br /> <br />
                <span className="font-bold">
                  If you are a foreign national who is not eligible for
                  visa-free entry to the Philippines, you will need to obtain a
                  visa before you travel to the country. There are several types
                  of visas available for foreign nationals who wish to visit the
                  Philippines, including tourist visas, business visas, and
                  student visas. It is recommended that you contact the embassy
                  or consulate of the Philippines in your country of residence
                  for specific information on the visa application process and
                  requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Philippines Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                If you are a foreign national who wishes to apply for a visa to
                visit the Philippines, you will need to provide the following
                documents: <br /> <br />
                ● A completed visa application form, which can be obtained from
                the embassy or consulate of the Philippines in your country of
                residence. <br /> <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least two blank pages for the visa stamp. <br /> <br />
                ● A passport-sized photograph, taken within the past 6 months.
                <br /> <br />
                ● Evidence of sufficient funds to cover your expenses during
                your stay in the Philippines, such as bank statements or a
                letter from your sponsor stating that you will be financially
                supported during your trip. <br /> <br />
                ● A letter of invitation from a host or sponsor in the
                Philippines, if applicable. <br /> <br />
                ● Proof of onward or return travel, such as a confirmed airline
                ticket or a travel itinerary. <br /> <br />● Any other documents
                required by the embassy or consulate of the Philippines in your
                country of residence, such as a letter of employment or a letter
                of enrollment in a study program.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Philippines Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to visit the Philippines, you will need to
                follow the steps below: <br /> <br />
                ● Determine if you are eligible for a visa to visit the
                Philippines. Depending on your nationality and the purpose of
                your visit, you may be able to enter the Philippines without a
                visa for a stay of up to 30 days. If you are not eligible for
                visa-free entry, you will need to apply for a visa. <br />{" "}
                <br />
                ● Gather all the necessary documents, including a completed visa
                application form, a valid passport, a passport-sized photograph,
                and any other documents required by the embassy or consulate.
                <br /> <br />
                ● Submit your application and required documents in person or by
                mail to the embassy or consulate of the Philippines in your
                country of residence. Some embassies and consulates may allow
                you to submit your application online. <br /> <br />
                ● Pay the visa application fee, which varies depending on the
                type of visa you are applying for. <br /> <br />● Wait for a
                decision on your visa application. Processing times may vary, so
                it is recommended that you apply for your visa well in advance
                of your planned trip to the Philippines
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Philippines?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in the Philippines as a foreign
                national will depend on the type of visa you hold and the
                purpose of your visit.
                <br /> <br /> If you are a foreign national who is eligible for
                visa-free entry to the Philippines, you will be able to stay in
                the country for a period of up to 30 days. This visa-free stay
                is typically granted for tourist or business purposes.
                <br /> <br /> If you are a foreign national who holds a tourist
                visa to the Philippines, you will typically be able to stay in
                the country for a period of up to 59 days. This type of visa can
                be extended for an additional 29 days by the Bureau of
                Immigration in the Philippines, provided that you meet certain
                requirements.
                <br /> <br /> If you are a foreign national who holds a business
                visa to the Philippines, you will typically be able to stay in
                the country for a period of up to 59 days. This type of visa can
                also be extended for an additional 29 days by the Bureau of
                Immigration in the Philippines, provided that you meet certain
                requirements.
                <br /> <br /> If you are a foreign national who holds a student
                visa to the Philippines, you will typically be able to stay in
                the country for the duration of your studies, up to 2 years.
                After your studies are completed, you may be able to extend your
                student visa or apply for a different type of visa, such as a
                temporary residence visa or a work visa, depending on your
                specific circumstances and the nature of your stay in the
                Philippines.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Philippines?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                All arrivals to the Philippines must present a negative test no
                older than 24 hours and proof of vaccination. Fully vaccinated
                arrivals are exempt.
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
                In Philippines, a diplomatic passport is issued to individuals
                who are working in a diplomatic capacity for their country, such
                as diplomats and members of a diplomatic mission. The Department
                of Foreign Affairs (DFA) is responsible for issuing diplomatic
                passports to eligible individuals in the Philippines.
                <br />
                <br />
                To obtain a diplomatic passport in the Philippines, an
                individual must meet certain criteria and provide certain
                documents, such as:
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
                Diplomatic passport holders in Philippines are generally granted
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
                  Passport in Philippines can change over time. It's recommended
                  to check with the Department of Foreign Affairs of Philippines
                  for more updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Philippines?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national who wishes to work in the
                Philippines, you will need to obtain a work visa. This type of
                visa allows you to legally work in the Philippines for a
                specific employer or company.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Philippines Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in the Philippines, you will need to
                follow the steps below: <br /> <br />
                ● Determine if you are eligible for a work visa in the
                Philippines. To be eligible for a work visa, you must have a job
                offer from a Philippine employer. <br /> <br />
                ● Gather all the necessary documents, including a completed visa
                application form, a valid passport, a passport-sized photograph,
                and any other documents required by the embassy or consulate.
                <br /> <br />
                ● Submit your application and required documents in person or by
                mail to the embassy or consulate of the Philippines in your
                country of residence. Some embassies and consulates may allow
                you to submit your application online. <br /> <br />
                ● Pay the visa application fee, which varies depending on the
                type of visa you are applying for. <br /> <br />● Wait for a
                decision on your visa application. Processing times may vary, so
                it is recommended that you apply for your visa well in advance
                of your planned trip to the Philippines.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Philippines Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for foreign
                nationals who wish to work in the Philippines: <br /> <br />●{" "}
                <span className="font-bold">Alien Employment Permit (AEP)</span>
                : This is a permit issued by the Philippine Department of Labor
                and Employment (DOLE) that allows a foreign national to work in
                the Philippines for a specific employer or company. To be
                eligible for an AEP, you must have a job offer from a Philippine
                employer and meet the requirements set by DOLE. <br /> <br />●{" "}
                <span className="font-bold">Special Work Permit (SWP)</span>:
                This is a permit issued by the Bureau of Immigration (BI) that
                allows a foreign national to work in the Philippines for a
                specific employer or company for a limited period of time. To be
                eligible for an SWP, you must have a job offer from a Philippine
                employer and meet the requirements set by BI. <br /> <br />●{" "}
                <span className="font-bold">
                  Pre-Arranged Employee (PAE) Visa
                </span>
                : This is a visa issued by the Philippine embassy or consulate
                in your country of residence that allows a foreign national to
                work in the Philippines for a specific employer or company. To
                be eligible for a PAE visa, you must have a job offer from a
                Philippine employer and meet the requirements set by the embassy
                or consulate. <br /> <br />●{" "}
                <span className="font-bold">Treaty Trader (9D) Visa</span>: This
                is a visa issued by the Philippine embassy or consulate in your
                country of residence that allows a foreign national who is a
                citizen of a country that has a treaty of commerce and
                navigation with the Philippines to work in the country. To be
                eligible for a 9D visa, you must be engaged in trade or business
                activities on behalf of your company, and meet the requirements
                set by the embassy or consulate!
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Philippines Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in the Philippines, you will
                typically need to provide the following documents: <br /> <br />
                ● A completed visa application form, which can be obtained from
                the embassy or consulate of the Philippines in your country of
                residence. <br /> <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least two blank pages for the visa stamp. <br /> <br />
                ● A passport-sized photograph, taken within the past 6 months.
                <br /> <br />
                ● Evidence of sufficient funds to cover your expenses during
                your stay in the Philippines, such as bank statements or a
                letter from your employer stating that you will be financially
                supported during your trip. <br /> <br />
                ● A job offer or employment contract from a Philippine employer,
                stating the purpose of your visit and the length of your
                employment. <br /> <br />● Any other documents required by the
                embassy or consulate of the Philippines in your country of
                residence, such as a letter of recommendation or proof of your
                qualifications.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Philippines?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in the Philippines, you will
                typically need to submit your application and required documents
                to the embassy or consulate of the Philippines in your country
                of residence. Some embassies and consulates may allow you to
                submit your application online.
                <br /> <br /> It is recommended that you apply for your worker
                visa well in advance of your planned trip to the Philippines, as
                processing times may vary.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the process of obtaining a worker
                  visa in the Philippines may vary depending on your specific
                  circumstances and the nature of your employment in the
                  country. It is recommended that you contact the embassy or
                  consulate of the Philippines in your country of residence or
                  the Bureau of Immigration in the Philippines for specific
                  information on the worker visa application process.
                </span>
                <br /> <br />
                <span className="font-bold">
                  In addition to obtaining a worker visa, you will also need to
                  obtain a temporary residence permit in order to legally work
                  in the Philippines. This permit can be obtained from the
                  Philippine immigration authorities after you arrive in the
                  country.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Philippines?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, if you are a foreign national who wishes to study in the
                Philippines, you will need to obtain a student visa. This type
                of visa allows you to legally study in the Philippines at a
                recognized educational institution.
                <br /> <br />
                <span className="font-bold">
                  To apply for a student visa in the Philippines, you will
                  typically need to have been accepted to a study program at a
                  recognized educational institution in the Philippines. The
                  educational institution will typically initiate the process of
                  obtaining the student visa on your behalf.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Philippines student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in the Philippines, you will need to
                follow the steps below: <br /> <br />
                ● Determine if you are eligible for a student visa in the
                Philippines. To be eligible for a student visa, you must have
                been accepted to a study program at a recognized educational
                institution in the Philippines. <br /> <br />
                ● Gather all the necessary documents, including a completed visa
                application form, a valid passport, a passport-sized photograph,
                and any other documents required by the embassy or consulate.
                <br /> <br />
                ● Submit your application and required documents in person or by
                mail to the embassy or consulate of the Philippines in your
                country of residence. Some embassies and consulates may allow
                you to submit your application online. <br /> <br />
                ● Pay the visa application fee, which varies depending on the
                type of visa you are applying for. <br /> <br />● Wait for a
                decision on your visa application. Processing times may vary, so
                it is recommended that you apply for your visa well in advance
                of your planned trip to the Philippines. Once you have obtained
                a student visa, you will also need to obtain a temporary
                residence permit in order to legally study in the Philippines.
                This permit can be obtained from the Philippine immigration
                authorities after you arrive in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Philippines student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in the Philippines, you will
                typically need to provide the following documents: <br /> <br />
                ● A completed visa application form, which can be obtained from
                the embassy or consulate of the Philippines in your country of
                residence. <br /> <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least two blank pages for the visa stamp. <br /> <br />
                ● A passport-sized photograph, taken within the past 6 months.
                <br /> <br />
                ● Evidence of sufficient funds to cover your expenses during
                your stay in the Philippines, such as bank statements or a
                letter from your sponsor stating that you will be financially
                supported during your trip. <br /> <br />
                ● Acceptance letter or enrollment certificate from a recognized
                educational institution in the Philippines, stating the purpose
                of your visit and the length of your studies. <br /> <br />● Any
                other documents required by the embassy or consulate of the
                Philippines in your country of residence, such as a letter of
                recommendation or proof of your qualifications.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Philippines student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in the Philippines will
                depend on the specific circumstances of your visit and the
                nature of your studies in the country. <br /> <br />
                Student visas in the Philippines are typically valid for the
                duration of your studies, up to 2 years. After your studies are
                completed, you may be able to extend your student visa or apply
                for a different type of visa, such as a temporary residence visa
                or a work visa, depending on your specific circumstances and the
                nature of your stay in the Philippines.
                <br /> <br /> The price of a student visa in the Philippines
                will vary depending on the type of visa you are applying for and
                the embassy or consulate where you are applying. It is
                recommended that you contact the embassy or consulate of the
                Philippines in your country of residence or the Bureau of
                Immigration in the Philippines for specific information on the
                price of a student visa in the Philippines.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the rules and regulations
                  regarding the validity and price of a student visa in the
                  Philippines may vary depending on your specific circumstances
                  and the nature of your studies in the country. It is
                  recommended that you contact the embassy or consulate of the
                  Philippines in your country of residence or the Bureau of
                  Immigration in the Philippines for specific information on the
                  validity and price of a student visa in the Philippines.
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

export default Philippines;
