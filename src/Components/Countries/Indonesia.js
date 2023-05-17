import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Indonesia = () => {
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
        <title>Indonesia</title>
        <meta name="description" content="Indonesia" />
        <meta
          name="keywords"
          content="Indonesia travel visa, Indonesia work visa, Indonesia study visa, How to apply for an Indonesia visa, Indonesia visa requirements, Indonesia tourist visa, Indonesia student visa, Indonesia business visa, Indonesia visa processing time, Indonesia visa application process, Indonesia visa for Americans, Indonesia visa for Europeans, Indonesia visa for Indonesians, Indonesia visa for Canadians, Indonesia visa for Indonesians, Indonesia visa for Chinese, Indonesia visa for Africans, Indonesia visa for Asians, Indonesia visa for South Americans, Indonesia visa for Middle Easterners, Indonesia visa for UK citizens, Indonesia visa for EU citizens, Indonesia visa for Schengen area, Indonesia visa for non-EU citizens, Indonesia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Indonesia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Indonesia is a country in Southeast Asia that is known for its
              tropical climate, beautiful beaches, and rich culture. The country
              is known for its impressive volcanoes, including Mount Bromo and
              Mount Merapi, which are popular with hikers and adventure seekers.
              Indonesia is also known for its unique cultural traditions,
              including its vibrant music and dance scene, and its rich artistic
              heritage, including its traditional batik textiles and wayang
              kulit shadow puppets. Additionally, Indonesia is known for its
              delicious cuisine, which includes dishes such as nasi goreng and
              satay.
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
                Who can enter Indonesia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are a number of countries whose citizens are able to enter
                Indonesia without a visa for a
                <span className="font-bold">
                  &nbsp;short stay of up to 30 days
                </span>
                . These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Albania, Algeria, Argentina, Australia, Austria, Bahrain,
                  Belgium, Brazil, Bulgaria, Chile, China, Colombia, Croatia,
                  Cyprus, Czech Republic, Denmark, Egypt, Estonia, Fiji,
                  Finland, France, Germany, Greece, Hungary, Iceland, India,
                  Ireland, Italy, Japan, Kuwait, Latvia, Lithuania, Luxembourg,
                  Malta, Mexico, Morocco, Netherlands, New Zealand, Norway,
                  Oman, Peru, Philippines, Poland, Portugal, Qatar, Romania,
                  Russia, Saudi Arabia, Serbia, Singapore, Slovakia, Slovenia,
                  South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan,
                  Thailand, Tunisia, Turkey, United Arab Emirates, United
                  Kingdom, United States, Vietnam.
                </span>
                <br />
                <br />
                Citizens of these countries are able to enter Indonesia without
                a visa for tourism, business, social, cultural, or sporting
                activities. If you plan to stay in Indonesia for longer than 30
                days or if you plan to engage in activities other than those
                listed above, you will need to apply for a visa before your
                trip.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the rules for visa-free entry to
                  Indonesia are subject to change, so it's always a good idea to
                  check the most up-to-date information before planning a trip.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Indonesia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Indonesia, you will generally need
                to provide the following documents:
                <br />
                <br />● A completed visa application form.
                <br />
                <br />● A passport that is valid for at least six months from
                the date of arrival in Indonesia and has at least two blank
                pages for the visa.
                <br />
                <br />● A recent passport-size photograph.
                <br />
                <br />● A letter of invitation or sponsorship from an individual
                or organization in Indonesia, if applicable.
                <br />
                <br />
                ● Proof of sufficient funds to support your stay in Indonesia,
                such as bank statements or a letter of financial support.
                <br />
                <br />
                ● Supporting documents, such as a copy of your round-trip
                ticket, a hotel reservation, or a letter from your employer.
                <br />
                <br />
                <span className="font-bold">
                  The specific requirements and procedures for applying for a
                  visa to Indonesia may vary based on your country of origin,
                  the purpose of your trip, and the duration of your stay. It's
                  always a good idea to check the most up-to-date visa
                  requirements and procedures before planning a trip to
                  Indonesia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Indonesia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Indonesia, you will generally need
                to follow these steps:
                <br />
                <br />● Determine the type of visa you need: There are several
                types of visas available for Indonesia, including tourist visas,
                business visas, social and cultural visas, and work visas.
                Choose the one that best fits your purpose of travel to
                Indonesia.
                <br />
                <br />● Check the eligibility requirements: Make sure you meet
                the eligibility requirements for the type of visa you are
                applying for.
                <br />
                <br />● Gather the required documents: Assemble the necessary
                documents, including your passport, photograph, letter of
                invitation or sponsorship, proof of sufficient funds, and any
                other supporting documents required for your specific visa type.
                <br />
                <br />● Complete the online visa application form: You can
                complete the visa application form online at the official
                website of the Ministry of Foreign Affairs.
                <br />
                <br />● Pay the visa fee: You will need to pay the visa fee
                using a credit card or debit card.
                <br />
                <br />● Submit your application: Submit your completed
                application, along with all required documents, to the nearest
                Indonesian embassy or consulate.
                <br />
                <br />● Wait for your visa to be processed: The processing time
                for a visa to Indonesia varies depending on the type of visa and
                the time of year. You should allow sufficient time for your visa
                to be processed before your intended date of travel.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific process for applying
                  for a visa to Indonesia may vary based on your country of
                  origin. It's always a good idea to check the most up-to-date
                  visa requirements and procedures before planning a trip to
                  Indonesia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Indonesia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are able to stay in Indonesia depends on
                the type of visa you have and the purpose of your trip.
                <br />
                <br />
                If you are entering Indonesia
                <span className="font-bold">&nbsp;on a tourist visa</span>
                , you will generally be able to stay for a period of up to 30
                days. If you want to stay longer, you will need to apply for a
                different type of visa or extend your tourist visa through the
                immigration authorities in Indonesia.
                <br />
                <br />
                If you are entering Indonesia
                <span className="font-bold">&nbsp;on a business visa</span>
                , you will generally be able to stay for a period of up to 60
                days. If you want to stay longer, you will need to apply for a
                work visa or extend your business visa through the immigration
                authorities in Indonesia.
                <br />
                <br />
                If you are entering Indonesia
                <span className="font-bold">
                  &nbsp;on a social or cultural visa
                </span>
                , you will generally be able to stay for a period of up to 60
                days. If you want to stay longer, you will need to apply for a
                different type of visa or extend your social or cultural visa
                through the immigration authorities in Indonesia.
                <br />
                <br />
                If you are entering Indonesia
                <span className="font-bold">&nbsp;on a work visa</span>
                , you will generally be able to stay for the duration of your
                employment contract, up to a maximum of two years. If you want
                to stay longer, you will need to apply for an extension through
                the immigration authorities in Indonesia.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific length of time you
                  are able to stay in Indonesia may vary based on your country
                  of origin and the type of visa you have. It's always a good
                  idea to check the most up-to-date visa requirements and
                  procedures before planning a trip to Indonesia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Indonesia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens with the purpose of leisure travel can enter
                the territory of the Republic of Indonesia with the following
                conditions: Through the specified airports and seaports; Having
                received a COVID-19 vaccine; and A short-visit visa or other
                entry permit.
                <br />
                <br />
                If you have received a booster along with the two initial
                vaccinations, you can travel without showing a negative COVID 19
                test result. Travellers who have received two vaccinations must
                show a negative antigen test taken within 1x24 hours or a
                negative RT-PCR test obtained 3x24 hours prior to departure.
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
                A diplomatic passport is a type of passport that is issued to
                individuals who are accredited as diplomats or other
                representatives of a government. Diplomatic passports are issued
                by the government of the country to which the individual is
                accredited and are typically valid for the duration of the
                diplomatic assignment.
                <br />
                <br />
                In Indonesia, diplomatic passports are issued by the Ministry of
                Foreign Affairs to individuals who are accredited as diplomats
                or other representatives of the Indonesian government.
                Diplomatic passports are valid for a period of five years and
                are renewable.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while in Indonesia, as well as in
                other countries. These privileges and immunities are granted to
                facilitate the work of diplomats and to ensure their safety and
                security while they are abroad. Some of the privileges and
                immunities granted to holders of diplomatic passports include:
                <br />
                <br />
                <span className="font-bold">
                  Immunity from arrest and detention
                  <br />
                  <br />
                  Immunity from prosecution for criminal offenses
                  <br />
                  <br />
                  Exemption from customs duties and taxes
                  <br />
                  <br />
                  Exemption from immigration controls
                  <br />
                  <br />
                  Access to consular assistance and protection
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the privileges and immunities
                  granted to holders of diplomatic passports are not absolute
                  and may be waived by the government of Indonesia or the
                  government of the country where the diplomat is accredited.
                  Diplomats are expected to respect the laws and regulations of
                  the host country and to refrain from any activity that could
                  be considered a violation of the host country's sovereignty.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Indonesia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Indonesia, you will generally need to
                apply for a work visa. A work visa allows you to stay in
                Indonesia for the duration of your employment contract, up to a
                maximum of two years.
                <br />
                <br />
                The specific requirements and procedures for applying for a work
                visa to Indonesia may vary based on your country of origin. It's
                always a good idea to check the most up-to-date visa
                requirements and procedures before planning a trip to Indonesia.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that you will need to obtain a work
                  permit from the Ministry of Manpower in Indonesia before you
                  can begin working in the country. You will need to submit a
                  work permit application to the ministry along with your work
                  visa application. The process for obtaining a work permit in
                  Indonesia can be complex and time-consuming, so it's a good
                  idea to start the process as early as possible.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Indonesia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa to enter Indonesia, you will generally
                need to follow these steps:
                <br />
                <br />
                ● Determine your eligibility: Make sure you meet the eligibility
                requirements for a work visa to Indonesia. This typically
                includes having a job offer from an employer in Indonesia and
                having the necessary qualifications and experience for the
                position.
                <br />
                <br />● Gather the required documents: Assemble the necessary
                documents, including your passport, photograph, letter of
                employment or contract, recommendation letter from your embassy
                or consulate, certificate of good conduct, medical certificate,
                and copy of your educational qualifications.
                <br />
                <br />● Complete the online visa application form: You can
                complete the visa application form online at the official
                website of the Ministry of Foreign Affairs.
                <br />
                <br />● Pay the visa fee: You will need to pay the visa fee
                using a credit card or debit card.
                <br />
                <br />● Submit your application: Submit your completed
                application, along with all required documents, to the nearest
                Indonesian embassy or consulate.
                <br />
                <br />
                ● Wait for your visa to be processed: The processing time for a
                work visa to Indonesia varies depending on the time of year. You
                should allow sufficient time for your visa to be processed
                before your intended date of travel.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that you will also need to obtain a
                  work permit from the Ministry of Manpower in Indonesia before
                  you can begin working in the country. You will need to submit
                  a work permit application to the ministry along with your work
                  visa application. The process for obtaining a work permit in
                  Indonesia can be complex and time-consuming, so it's a good
                  idea to start the process as early as possible.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  The specific process for applying for a work visa to Indonesia
                  may vary based on your country of origin. It's always a good
                  idea to check the most up-to-date visa requirements and
                  procedures before planning a trip to Indonesia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Indonesia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas available for Indonesia,
                depending on the nature of your employment and the duration of
                your stay. Some of the most common types of work visas for
                Indonesia include:
                <br />
                <br />
                <span className="font-bold">Single-entry work visa</span>
                : This type of visa is issued for a specific purpose and allows
                you to enter Indonesia one time for the duration of your
                employment contract, up to a maximum of two years.
                <br />
                <br />
                <span className="font-bold">Multiple-entry work visa</span>
                : This type of visa allows you to enter Indonesia multiple times
                for the duration of your employment contract, up to a maximum of
                two years.
                <br />
                <br />
                <span className="font-bold">Temporary stay visa</span>
                : This type of visa is issued for a specific purpose and allows
                you to stay in Indonesia for a short period of time, up to a
                maximum of six months.
                <br />
                <br />
                <span className="font-bold">Limited stay visa</span>
                : This type of visa is issued for a specific purpose and allows
                you to stay in Indonesia for a longer period of time, up to a
                maximum of two years.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  procedures for obtaining a work visa to Indonesia may vary
                  based on your country of origin, the nature of your
                  employment, and the duration of your stay. It's always a good
                  idea to check the most up-to-date visa requirements and
                  procedures before planning a trip to Indonesia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Indonesia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa to Indonesia, you will generally need
                to provide the following documents:
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />● A passport that is valid for at least six months from
                the date of arrival in Indonesia and has at least two blank
                pages for the visa.
                <br />
                <br />
                ● A recent passport-size photograph.
                <br />
                <br />
                ● A letter of employment or contract from your employer in
                Indonesia.
                <br />
                <br />● A recommendation letter from your embassy or consulate
                in Indonesia.
                <br />
                <br />
                ● A certificate of good conduct from your embassy or consulate
                in Indonesia.
                <br />
                <br />
                ● A medical certificate indicating that you are in good health.
                <br />
                <br />
                ● A copy of your educational qualifications.
                <br />
                <br />
                The specific requirements and procedures for applying for a work
                visa to Indonesia may vary based on your country of origin, the
                nature of your employment, and the duration of your stay. It's
                always a good idea to check the most up-to-date visa
                requirements and procedures before planning a trip to Indonesia.
                <br />
                <br />
                In addition to the above documents, you may also be required to
                provide the following:
                <br />
                <br />● A police clearance certificate from your country of
                residence.
                <br />
                <br />
                ● A letter of permission from your parent or guardian, if you
                are under the age of 18.
                <br />
                <br />
                ● Proof of sufficient funds to support your stay in Indonesia,
                such as bank statements or a letter of financial support.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to start the visa application process as
                  early as possible to ensure that you have sufficient time to
                  gather all required documents and complete the application
                  process before your intended date of travel.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Indonesia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa to Indonesia, you will generally need
                to submit your application to the nearest Indonesian embassy or
                consulate in your country of residence. You can find a list of
                Indonesian embassies and consulates on the official website of
                the Ministry of Foreign Affairs.
                <br />
                <br />
                You can generally apply for a work visa to Indonesia at any
                time, but it's a good idea to start the process as early as
                possible to ensure that you have sufficient time to gather all
                required documents and complete the application process before
                your intended date of travel.
                <br />
                <br />
                When applying for a work visa to Indonesia, you will need to
                provide a letter of employment or contract from your employer in
                Indonesia, as well as a recommendation letter from your embassy
                or consulate in Indonesia. You may also be required to provide a
                certificate of good conduct from your embassy or consulate, as
                well as a medical certificate indicating that you are in good
                health.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  procedures for applying for a work visa to Indonesia may vary
                  based on your country of origin, the nature of your
                  employment, and the duration of your stay. It's always a good
                  idea to check the most up-to-date visa requirements and
                  procedures before planning a trip to Indonesia.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Indonesia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Indonesia, you will generally need to
                apply for a student visa. A student visa allows you to stay in
                Indonesia for the duration of your study program, up to a
                maximum of five years.
                <br />
                <br />
                The specific requirements and procedures for applying for a
                student visa to Indonesia may vary based on your country of
                origin and the duration of your stay. It's always a good idea to
                check the most up-to-date visa requirements and procedures
                before planning a trip to Indonesia.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that you will also need to obtain a
                  study permit from the Ministry of Education and Culture in
                  Indonesia before you can begin studying in the country. You
                  will need to submit a study permit application to the ministry
                  along with your student visa application. The process for
                  obtaining a study permit in Indonesia can be complex and
                  time-consuming, so it's a good idea to start the process as
                  early as possible.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Indonesia Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to enter Indonesia, you will
                generally need to follow these steps:
                <br />
                <br />
                ● Determine your eligibility: Make sure you meet the eligibility
                requirements for a student visa to Indonesia. This typically
                includes having an acceptance letter from an educational
                institution in Indonesia and having the necessary qualifications
                and experience for your study program.
                <br />
                <br />
                ● Gather the required documents: Assemble the necessary
                documents, including your passport, photograph, acceptance
                letter from your educational institution, recommendation letter
                from your embassy or consulate, certificate of good conduct,
                medical certificate, and copy of your educational
                qualifications.
                <br />
                <br />
                ● Complete the online visa application form: You can complete
                the visa application form online at the official website of the
                Ministry of Foreign Affairs.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay the visa fee using a
                credit card or debit card.
                <br />
                <br />
                ● Submit your application: Submit your completed application,
                along with all required documents, to the nearest Indonesian
                embassy or consulate.
                <br />
                <br />
                ● Wait for your visa to be processed: The processing time for a
                student visa to Indonesia varies depending on the time of year.
                You should allow sufficient time for your visa to be processed
                before your intended date of travel.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that you will also need to obtain a
                  study permit from the Ministry of Education and Culture in
                  Indonesia before you can begin studying in the country. You
                  will need to submit a study permit application to the ministry
                  along with your student visa application. The process for
                  obtaining a study permit in Indonesia can be complex and
                  time-consuming, so it's a good idea to start the process as
                  early as possible.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  The specific process for applying for a student visa to
                  Indonesia may vary based on your country of origin. It's
                  always a good idea to check the most up-to-date visa
                  requirements and procedures before planning a trip to
                  Indonesia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Indonesia Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A completed visa application form
                <br />
                <br />
                ● A passport that is valid for at least six months from the date
                of arrival in Indonesia and has at least two blank pages for the
                visa
                <br />
                <br />
                ● A recent passport-size photograph
                <br />
                <br />
                ● An acceptance letter from your educational institution in
                Indonesia
                <br />
                <br />
                ● A recommendation letter from your embassy or consulate in
                Indonesia
                <br />
                <br />
                ● A certificate of good conduct from your embassy or consulate
                in Indonesia
                <br />
                <br />
                ● A medical certificate indicating that you are in good health
                <br />
                <br />
                ● A copy of your educational qualifications
                <br />
                <br />
                The specific requirements and procedures for applying for a
                student visa to Indonesia may vary based on your country of
                origin and the duration of your stay. It's always a good idea to
                check the most up-to-date visa requirements and procedures
                before planning a trip to Indonesia.
                <br />
                <br />
                In addition to the above documents, you may also be required to
                provide the following:
                <br />
                <br />
                ● A police clearance certificate from your country of residence
                <br />
                <br />
                ● A letter of permission from your parent or guardian, if you
                are under the age of 18
                <br />
                <br />
                ● Proof of sufficient funds to support your stay in Indonesia,
                such as bank statements or a letter of financial support
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to start the visa application process as
                  early as possible to ensure that you have sufficient time to
                  gather all required documents and complete the application
                  process before your intended date of travel.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Indonesia Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa to Indonesia depends on the
                duration of your study program. Student visas to Indonesia are
                generally valid for the duration of your study program, up to a
                maximum of five years.
                <br />
                <br />
                The price of a student visa to Indonesia varies depending on
                your country of origin and the duration of your stay. You will
                need to pay a visa fee when you submit your visa application.
                The visa fee for a student visa to Indonesia is typically paid
                in Indonesian rupiah and is subject to change.
                <br />
                <br />
                It's important to note that the specific requirements and
                procedures for applying for a student visa to Indonesia, as well
                as the associated visa fee, may vary based on your country of
                origin and the duration of your stay. It's always a good idea to
                check the most up-to-date visa requirements and procedures, as
                well as the current visa fee, before planning a trip to
                Indonesia.
                <br />
                <br />
                <span className="font-bold">
                  In addition to the visa fee, you may also need to pay other
                  fees, such as a processing fee or a service fee, when applying
                  for a student visa to Indonesia. It's a good idea to check
                  with the Indonesian embassy or consulate where you are
                  applying for your visa for information on any additional fees
                  that may be required.
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

export default Indonesia;
