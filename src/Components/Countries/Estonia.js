import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Estonia = () => {
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
        <title>Estonia</title>
        <meta name="description" content="Estonia" />
        <meta
          name="keywords"
          content="Estonia travel visa, Estonia work visa, Estonia study visa, How to apply for an Estonia visa, Estonia visa requirements, Estonia tourist visa, Estonia student visa, Estonia business visa, Estonia visa processing time, Estonia visa application process, Estonia visa for Americans, Estonia visa for Europeans, Estonia visa for Estonians, Estonia visa for Canadians, Estonia visa for Indians, Estonia visa for Chinese, Estonia visa for Africans, Estonia visa for Asians, Estonia visa for South Americans, Estonia visa for Middle Easterners, Estonia visa for UK citizens, Estonia visa for EU citizens, Estonia visa for Schengen area, Estonia visa for non-EU citizens, Estonia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Estonia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Estonia is a country located in Northern Europe. It is known for
              its beautiful landscapes, including its forests, lakes, and the
              Gulf of Finland. The country is also known for its rich cultural
              heritage and history. Estonia is home to many species of plants
              and animals, including the national tree, the oak, and the
              national animal, the brown bear. The country is also known for its
              music and traditional folk dances, as well as its vibrant
              contemporary art scene. Additionally, Estonia is known for its
              advancements in technology and its strong economy.
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
                Who can enter Estonia without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Estonia without
                a visa for short stays of up to 90 days within a 180-day period.
                These countries include the European Union (EU) and European
                Economic Area (EEA) countries, as well as several other
                countries around the world.
                <br /> <br /> If you are a citizen of one of the following
                countries, you are able to enter Estonia without a visa:
                <br /> <br />● EU and EEA countries:
                <span className="font-bold">
                  Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic,
                  Denmark, Finland, France, Germany, Greece, Hungary, Iceland,
                  Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg,
                  Malta, Netherlands, Norway, Poland, Portugal, Romania,
                  Slovakia, Slovenia, Spain, Sweden, Switzerland{" "}
                </span>
                <br /> <br />● Other countries:
                <span className="font-bold">
                  Andorra, Antigua and Barbuda, Argentina, Australia, Bahamas,
                  Barbados, Bosnia and Herzegovina, Brazil, Brunei, Canada,
                  Chile, Colombia, Costa Rica, Dominica, El Salvador, Georgia,
                  Grenada, Guatemala, Holy See, Honduras, Hong Kong SAR, Israel,
                  Japan, Kiribati, Kosovo, Macau SAR, Malaysia, Marshall
                  Islands, Mauritius, Mexico, Micronesia, Moldova, Monaco,
                  Montenegro, New Zealand, Nicaragua, Palau, Panama, Paraguay,
                  Peru, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and
                  the Grenadines, Samoa, San Marino, Serbia, Seychelles,
                  Singapore, Solomon Islands, South Korea, Taiwan, Timor-Leste,
                  Tonga, Trinidad and Tobago, Tuvalu, Ukraine, United Arab
                  Emirates, United States, Uruguay, Vanuatu, Venezuela{" "}
                </span>{" "}
                <br /> <br />
                If you are a citizen of a country that is not on this list, you
                will generally need to obtain a visa in order to enter Estonia.
                The type of visa you will need will depend on the purpose of
                your stay in Estonia and the length of your intended stay.
                <br /> <br />
                <span className="font-bold">
                  It's always a good idea to check with the Estonian embassy or
                  consulate in your country of residence for the most up-to-date
                  information on visa requirements for Estonia. They can provide
                  you with specific information based on your individual
                  circumstances and the purpose of your visit to the country.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Estonia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                If you need to apply for a visa to enter Estonia, you will
                generally need to provide the following documents as part of
                your visa application:
                <br /> <br />● A completed visa application form. You can obtain
                the application form from the Estonian embassy or consulate in
                your country of residence, or online from the website of the
                Estonian Police and Border Guard Board.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least three months beyond the date of your intended departure
                from Estonia.
                <br /> <br />● Passport-sized photographs. You will need to
                provide two passport-sized photographs of yourself, taken within
                the past six months.
                <br /> <br />● Evidence of the purpose of your trip. You will
                need to provide evidence of the purpose of your trip to Estonia,
                such as a letter of invitation from an Estonian host, a letter
                of acceptance from an Estonian educational institution, or a
                letter from your employer if you are traveling for business.
                <br /> <br />● Evidence of sufficient financial means. You will
                need to provide evidence that you have enough money to support
                yourself during your stay in Estonia. This could be in the form
                of bank statements, credit card statements, or a letter from
                your sponsor stating that they will be providing you with
                financial support during your stay in the country.
                <br /> <br />● Evidence of travel insurance. You will need to
                provide evidence of travel insurance that covers the duration of
                your stay in Estonia.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. For example, you may need to provide a
                medical certificate or a police clearance certificate. It's
                always a good idea to check with the Estonian embassy or
                consulate in your country of residence for a complete list of
                documents required for your visa application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Estonia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Estonia, you will need to follow
                these steps:
                <br /> <br />● Determine if you need a visa. If you are a
                citizen of one of the countries that is able to enter Estonia
                without a visa for short stays of up to 90 days within a 180-day
                period, you will not need to apply for a visa. If you are a
                citizen of a country that is not on this list, you will
                generally need to obtain a visa in order to enter Estonia.
                <br /> <br />
                ● Gather the required documents. You will need to collect a
                number of documents in order to apply for a visa, including a
                completed visa application form, a valid passport,
                passport-sized photographs, and evidence of the purpose of your
                trip to Estonia. You may also need to provide other documents
                depending on your specific circumstances.
                <br /> <br />● Contact the Estonian embassy or consulate in your
                country of residence. You will need to submit your visa
                application in person at the Estonian embassy or consulate in
                your country of residence. You can find contact information for
                the embassy or consulate on the website of the Estonian Police
                and Border Guard Board
                <br /> <br />
                ●. Schedule an appointment to submit your application. You will
                generally need to schedule an appointment to submit your visa
                application in person at the Estonian embassy or consulate. Make
                sure to allow enough time to schedule your appointment and
                gather all of the required documents.
                <br /> <br />● Submit your application. On the day of your
                appointment, bring all of the required documents to the Estonian
                embassy or consulate. You will also need to pay a visa fee when
                you submit your application.
                <br /> <br />● Wait for a decision on your application. It may
                take several weeks for the embassy or consulate to process your
                visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Estonia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you are able to stay in Estonia will depend
                on your specific circumstances and the type of visa you have
                obtained.
                <br /> <br /> If you are a citizen of one of the countries that
                is able to enter Estonia without a visa for short stays of up to
                90 days within a 180-day period, you are allowed to stay in
                Estonia for up to 90 days within a 180-day period. This means
                that you can enter and leave Estonia as many times as you like
                within this period, as long as the total amount of time you
                spend in the country does not exceed 90 days.
                <br /> <br /> If you are a citizen of a country that is not on
                this list and you have obtained a visa to enter Estonia, the
                length of your stay will generally be determined by the type of
                visa you have obtained and the purpose of your visit. For
                example, if you have obtained a tourist visa, you will generally
                be allowed to stay in Estonia for up to 90 days within a 180-day
                period. If you have obtained a student visa, the length of your
                stay will generally be determined based on the duration of your
                studies in Estonia.
                <br /> <br />
                <span className="font-bold">
                  It's always a good idea to check with the Estonian embassy or
                  consulate in your country of residence for the most up-to-date
                  information on the length of time you are able to stay in
                  Estonia based on your specific circumstances and the type of
                  visa you have obtained.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Estonia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID-19 travel restrictions have been lifted in Estonia.
                Travellers are not required to provide proof of vaccination,
                recovery from COVID-19 or a negative test result. The citizens
                of third countries have to have a valid Schengen visa in order
                to be able to enter the country.
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
                issued to individuals who are representing their country in an
                official capacity, such as diplomats, consular officers, and
                other government officials. Diplomatic passports are issued by a
                country's Ministry of Foreign Affairs and are typically valid
                for a period of five years.
                <br /> <br /> Holders of diplomatic passports are entitled to
                certain privileges and immunities when traveling abroad, as
                defined by international law and agreements between countries.
                These privileges and immunities may include immunity from arrest
                or detention, exemption from customs duties and taxes, and the
                ability to bring in certain items duty-free.
                <br /> <br /> In order to obtain a diplomatic passport,
                individuals must be appointed to a diplomatic or consular
                position by their country's government. Diplomatic passports are
                not available to the general public and are issued only to
                individuals who have been formally appointed to represent their
                country in an official capacity.
                <br /> <br />
                <span className="font-bold">
                  If you are interested in obtaining a diplomatic passport, you
                  should contact your country's Ministry of Foreign Affairs for
                  more information on the requirements and application process.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Estonia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In order to work in Estonia, you will need to obtain a work
                permit unless you are a citizen of an EU/EEA member state or of
                Switzerland. If you are a citizen of a country outside of the
                EU/EEA and you wish to work in Estonia, you will need to apply
                for a worker's visa at the nearest Estonian embassy or consulate
                in your home country before coming to Estonia. The process for
                obtaining a worker's visa will vary depending on your country of
                citizenship, so it is best to contact the embassy or consulate
                for more information.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Estonia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker's visa for Estonia, you will need to
                follow the following steps:
                <br /> <br />● Determine which type of worker's visa you need.
                There are several types of worker's visas available for Estonia,
                including a short-term work visa, a long-term work visa, and a
                seasonal work visa.
                <br /> <br />● Gather all required documents. This will
                typically include a valid passport, a completed visa application
                form, a recent photograph, proof of employment or a job offer in
                Estonia, and any other supporting documents that may be
                required.
                <br /> <br />● Schedule an appointment with the nearest Estonian
                embassy or consulate. You will need to schedule an appointment
                to submit your application and have your biometric data
                collected.
                <br /> <br />● Attend your appointment and submit your
                application. You will need to bring all required documents with
                you to your appointment, as well as any applicable fees.
                <br /> <br />● Wait for a decision on your application. The
                processing time for a worker's visa for Estonia can vary, so it
                is best to allow plenty of time for your application to be
                processed.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the exact requirements and
                  process for obtaining a worker's visa for Estonia may vary
                  depending on your country of citizenship, so it is best to
                  contact the nearest Estonian embassy or consulate for more
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Estonia Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker's visas available for Estonia,
                including:
                <br /> <br />● Short-term work visa: This type of visa allows
                you to work in Estonia for up to 90 days within a 180-day
                period.
                <br /> <br />● Long-term work visa: This type of visa allows you
                to work in Estonia for a period of up to 365 days.
                <br /> <br />● Seasonal work visa: This type of visa is
                specifically for individuals who are coming to Estonia to work
                in a seasonal or temporary capacity, such as farm workers or
                construction workers.
                <br /> <br />
                <span className="font-bold">
                  The type of worker's visa that you will need will depend on
                  the length and nature of your stay in Estonia. It is important
                  to note that you will need to apply for the appropriate visa
                  before coming to Estonia, as it is not possible to change your
                  visa status once you are in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Estonia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker's visa for Estonia, you will typically
                need to provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond the date that you are scheduled to
                leave Estonia.
                <br /> <br />● A completed visa application form: This form can
                be obtained from the nearest Estonian embassy or consulate, or
                downloaded from their website.
                <br /> <br />● A recent photograph: This should be a
                passport-style photograph, taken within the past six months.
                <br /> <br />
                ● Proof of employment or a job offer in Estonia: This could
                include a contract of employment, a letter of offer, or other
                documentation showing that you have been offered a job in
                Estonia.
                <br /> <br />● Evidence of sufficient financial means: You will
                need to demonstrate that you have sufficient financial means to
                support yourself while you are in Estonia, such as bank
                statements or a letter from your employer stating that they will
                be providing financial support.
                <br /> <br />● Health insurance: You will need to have health
                insurance coverage for the duration of your stay in Estonia.
                <br /> <br />
                ● Accommodation: You will need to provide evidence of where you
                will be staying in Estonia, such as a rental agreement or a
                letter from a host.
                <br /> <br />● Any other documents that may be required: The
                exact documents that you will need to provide will depend on
                your individual circumstances, so it is best to check with the
                nearest Estonian embassy or consulate for a complete list of
                requirements.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Estonia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker's visa for Estonia, you will need to
                schedule an appointment at the nearest Estonian embassy or
                consulate in your home country. You can find a list of Estonian
                embassies and consulates on the website of the Ministry of
                Foreign Affairs of Estonia.
                <br /> <br /> It is important to apply for your worker's visa as
                early as possible, as the processing time can vary and you will
                want to make sure that you have your visa in hand before you
                travel to Estonia. You should also make sure to allow plenty of
                time for your application to be processed, as it is not possible
                to change your visa status once you are in the country.
                <br /> <br />
                <span className="font-bold">
                  It is also a good idea to contact the embassy or consulate to
                  confirm the exact documents and fees required for your
                  application, as these can vary depending on your country of
                  citizenship and the type of worker's visa you are applying
                  for.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Estonia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Estonia for more than 90 days,
                you will need to obtain a student visa before coming to the
                country!
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Estonia student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Estonia, you will need to follow
                the following steps: Determine which type of student visa you
                need. There are two types of student visas available for
                Estonia: a short-term study visa, which allows you to stay in
                the country for up to 90 days, and a long-term study visa, which
                allows you to stay for a period of up to 365 days.
                <br /> <br />● Gather all required documents. This will
                typically include a valid passport, a completed visa application
                form, a recent photograph, proof of acceptance to a school or
                university in Estonia, and any other supporting documents that
                may be required.
                <br /> <br />● Schedule an appointment with the nearest Estonian
                embassy or consulate. You will need to schedule an appointment
                to submit your application and have your biometric data
                collected.
                <br /> <br />● Attend your appointment and submit your
                application. You will need to bring all required documents with
                you to your appointment, as well as any applicable fees.
                <br /> <br />● Wait for a decision on your application. The
                processing time for a student visa for Estonia can vary, so it
                is best to allow plenty of time for your application to be
                processed.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Estonia student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Estonia, you will typically need
                to provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond the date that you are scheduled to
                leave Estonia.
                <br /> <br />● A completed visa application form: This form can
                be obtained from the nearest Estonian embassy or consulate, or
                downloaded from their website.
                <br /> <br />● A recent photograph: This should be a
                passport-style photograph, taken within the past six months.
                <br /> <br />
                ● Proof of acceptance to a school or university in Estonia: This
                could include a letter of acceptance or a certificate of
                enrollment.
                <br /> <br />● Evidence of sufficient financial means: You will
                need to demonstrate that you have sufficient financial means to
                support yourself while you are in Estonia, such as bank
                statements or a letter from your school or university stating
                that they will be providing financial support.
                <br /> <br />● Health insurance: You will need to have health
                insurance coverage for the duration of your stay in Estonia.
                <br /> <br />
                ● Accommodation: You will need to provide evidence of where you
                will be staying in Estonia, such as a rental agreement or a
                letter from a host.
                <br /> <br />● Any other documents that may be required: The
                exact documents that you will need to provide will depend on
                your individual circumstances, so it is best to check with the
                nearest Estonian embassy or consulate for a complete list of
                requirements.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Estonia student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are two types of student visas available for Estonia: a
                short-term study visa, which allows you to stay in the country
                for up to 90 days, and a long-term study visa, which allows you
                to stay for a period of up to 365 days.
                <br /> <br /> The price for a student visa for Estonia will vary
                depending on the type of visa you are applying for and your
                country of citizenship. You will typically be required to pay a
                fee when you submit your visa application, as well as any
                additional fees that may be required.
                <br /> <br />
                <span className="font-bold">
                  It is best to check with the nearest Estonian embassy or
                  consulate for the most up-to-date information on visa fees, as
                  these can change over time. You can find a list of Estonian
                  embassies and consulates on the website of the Ministry of
                  Foreign Affairs of Estonia.
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

export default Estonia;
