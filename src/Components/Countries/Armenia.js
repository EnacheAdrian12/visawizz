import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Armenia = () => {
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
        <title>Armenia</title>
        <meta name="description" content="Armenia" />
        <meta
          name="keywords"
          content="Armenia travel visa, Armenia work visa, Armenia study visa, How to apply for an Armenia visa, Armenia visa requirements, Armenia tourist visa, Armenia student visa, Armenia business visa, Armenia visa processing time, Armenia visa application process, Armenia visa for Americans, Armenia visa for Europeans, Armenia visa for Australians, Armenia visa for Canadians, Armenia visa for Indians, Armenia visa for Chinese, Armenia visa for Africans, Armenia visa for Asians, Armenia visa for South Americans, Armenia visa for Middle Easterners, Armenia visa for UK citizens, Armenia visa for EU citizens, Armenia visa for Schengen area, Armenia visa for non-EU citizens, Armenia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Armenia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Armenia is a country located in the Caucasus region of Eurasia. It
              is known for its beautiful landscapes, including the mountains of
              the Lesser Caucasus range and the forests of the Armenian
              highlands. Armenia is also known for its rich culture and history,
              including its art, music, and literature. Additionally, the
              country is known for its production of high-quality brandy, which
              is enjoyed around the world. Armenia is also known for its ancient
              Christian heritage, and it is home to many historic churches and
              monasteries.
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
                Who can enter Armenia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Armenia has visa-free or visa-on-arrival policies with a number
                of countries, which allows citizens of these countries to enter
                Armenia without a visa for a certain period of time.
                <br />
                <br />
                As of 2021, citizens of the following countries are allowed to
                enter Armenia without a visa for up to 180 days within a
                one-year period:
                <br />
                <br />
                <span className="font-bold">
                  Belarus, Georgia, Kazakhstan, Kyrgyzstan, Moldova, Russia,
                  Serbia, Tajikistan, Ukraine.
                </span>
                <br />
                <br />
                Citizens of the following countries are also allowed to enter
                Armenia without a visa for up to 90 days within a one-year
                period:
                <br />
                <br />
                <span className="font-bold">
                  Albania, Andorra, Bosnia and Herzegovina, Hong Kong (SAR),
                  Kosovo, Macao (SAR), Montenegro, North Macedonia.
                </span>
                <br />
                <br />
                Citizens of the following countries are also allowed to enter
                Armenia with a visa-on-arrival for up to 120 days within a
                one-year period:
                <br />
                <br />
                <span className="font-bold">
                  Australia, Canada, Japan, South Korea, United States.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these policies are subject to
                  change, so it's always a good idea to check with the embassy
                  or consulate of Armenia before you travel to confirm the most
                  current visa requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Armenia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Armenia, you will typically need to
                provide the following documents:
                <br />
                <br />● A completed visa application form. This can usually be
                found on the embassy or consulate's website, or you may be able
                to request one in person.
                <br />
                <br />● A valid passport with at least six months of validity
                remaining. Make sure your passport has enough blank pages for
                any visa stamps you may need.
                <br />
                <br />● Two recent passport-sized photographs. These should be
                in color and taken against a white background.
                <br />
                <br />● A letter of invitation or sponsorship, if required. This
                could be from a host or sponsor in Armenia, or from a tour
                company if you are planning to participate in a tour.
                <br />
                <br />● Proof of sufficient funds to cover your expenses while
                in Armenia. This could include bank statements, credit card
                statements, or a letter from your sponsor outlining their
                financial support.
                <br />
                <br />
                ● Any additional documents that may be required based on the
                purpose of your visit and your nationality. This could include
                proof of employment, proof of education and qualifications, or
                other documents related to your trip.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements may vary
                  depending on your nationality and the embassy or consulate
                  where you are applying. It's always a good idea to check with
                  the embassy or consulate to confirm the exact requirements for
                  your visa application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Armenia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Armenia, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of visa you need. Armenia offers a
                variety of visas, including tourist visas, business visas, and
                student visas. Choose the type of visa that best fits your needs
                based on the purpose of your visit.
                <br />
                <br />● Gather the required documents. This will typically
                include a completed visa application form, a valid passport with
                at least six months of validity remaining, two passport-sized
                photographs, and other documents such as a letter of invitation
                or sponsorship and proof of sufficient funds to cover your
                expenses while in the country.
                <br />
                <br />● Contact the embassy or consulate of Armenia to confirm
                the specific requirements for your visa application. Some
                countries may have additional requirements based on your
                nationality or the purpose of your visit.
                <br />
                <br />● Submit your application. You can usually submit your
                application in person at the embassy or consulate, or you may be
                able to apply online or by mail. Be sure to check the specific
                requirements and procedures of the embassy or consulate where
                you are applying.
                <br />
                <br />● Pay the visa fee. You will need to pay a fee to process
                your visa application. Check with the embassy or consulate for
                the current fee amount.
                <br />
                <br />● Wait for a decision. It can take several weeks or even
                months to process a visa application. Be patient and do not make
                any travel arrangements until you have received your visa.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the visa application process can
                  vary depending on the embassy or consulate where you are
                  applying, so it's always a good idea to check with the
                  specific embassy or consulate for the most up-to-date
                  information and requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Armenia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Armenia will
                depend on the type of visa you have and the purpose of your
                visit.
                <br />
                <br />
                Tourist visas to Armenia are typically issued for a period of up
                to 180 days within a one-year period. This means that you can
                stay in Armenia for up to 180 days within a one-year period, but
                you will need to leave the country before the 180-day period is
                up.
                <br />
                <br />
                Business visas to Armenia are typically issued for a period of
                up to 180 days within a one-year period. This means that you can
                stay in Armenia for up to 180 days within a one-year period, but
                you will need to leave the country before the 180-day period is
                up.
                <br />
                <br />
                Student visas to Armenia are typically issued for the duration
                of your study program, plus a period of time before and after
                the program to allow for travel.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these policies are subject to
                  change, so it's always a good idea to check with the embassy
                  or consulate of Armenia before you travel to confirm the most
                  current visa requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Armenia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID test is not required when arriving in Armenia.
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
                A diplomatic passport is a special type of passport that is
                issued to individuals who are traveling abroad on official
                government business, such as diplomats, government officials,
                and other high-ranking officials.
                <br />
                <br />
                In Armenia, diplomatic passports are issued by the Ministry of
                Foreign Affairs to individuals who are traveling abroad on
                official government business. Diplomatic passports are valid for
                a period of five years and are typically used for travel to
                countries that have diplomatic relations with Armenia.
                <br />
                <br />
                Holders of diplomatic passports are generally entitled to a
                range of privileges and exemptions while traveling, such as
                visa-free travel to certain countries, diplomatic immunity, and
                other privileges and protections.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the issuance and use of diplomatic
                  passports is governed by international laws and agreements,
                  and the specific privileges and exemptions associated with
                  diplomatic passports may vary depending on the country you are
                  visiting.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Armenia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Armenia, you will generally need
                to obtain a worker visa. The specific requirements for a worker
                visa in Armenia will depend on the nature of your work and the
                length of your stay in the country.
                <br />
                <br />
                To apply for a worker visa in Armenia, you will typically need
                to provide the following documents:
                <br />
                <br />
                ● A completed worker visa application form. This can usually be
                found on the embassy or consulate's website, or you may be able
                to request one in person.
                <br />
                <br />
                ● A valid passport with at least six months of validity
                remaining. Make sure your passport has enough blank pages for
                any visa stamps you may need.
                <br />
                <br />
                ● Two recent passport-sized photographs. These should be in
                color and taken against a white background.
                <br />
                <br />
                ● A letter of employment from your employer in Armenia. This
                letter should outline the terms of your employment and the
                duration of your stay in the country.
                <br />
                <br />
                ● Proof of sufficient funds to cover your expenses while in
                Armenia. This could include bank statements, credit card
                statements, or a letter from your employer confirming that they
                will be providing financial support.
                <br />
                <br />
                ● Any additional documents that may be required based on the
                nature of your work and the length of your stay. This could
                include a resume, proof of your education and qualifications, or
                other documents related to your work.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements may vary
                  depending on your nationality and the embassy or consulate
                  where you are applying. It's always a good idea to check with
                  the embassy or consulate to confirm the exact requirements for
                  your worker visa application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Armenia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Armenia, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need. Armenia offers a
                variety of worker visas, including short-term worker visas and
                long-term worker visas. Choose the type of visa that best fits
                your needs based on the length of your stay in the country and
                the nature of your work.
                <br />
                <br />● Gather the required documents. This will typically
                include a completed worker visa application form, a valid
                passport with at least six months of validity remaining, two
                passport-sized photographs, and other documents such as a letter
                of employment or a letter of invitation from your employer in
                Armenia and proof of sufficient funds to cover your expenses
                while in the country.
                <br />
                <br />● Contact the embassy or consulate of Armenia to confirm
                the specific requirements for your worker visa application. Some
                countries may have additional requirements based on your
                nationality or the nature of your work.
                <br />
                <br />● Submit your application. You can usually submit your
                application in person at the embassy or consulate, or you may be
                able to apply online or by mail. Be sure to check the specific
                requirements and procedures of the embassy or consulate where
                you are applying.
                <br />
                <br />● Pay the visa fee. You will need to pay a fee to process
                your worker visa application. Check with the embassy or
                consulate for the current fee amount.
                <br />
                <br />● Wait for a decision. It can take several weeks or even
                months to process a worker visa application. Be patient and do
                not make any travel arrangements until you have received your
                visa.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the worker visa application
                  process can vary depending on the embassy or consulate where
                  you are applying, so it's always a good idea to check with the
                  specific embassy or consulate for the most up-to-date
                  information and requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Armenia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Armenia offers a variety of worker visas, including short-term
                worker visas and long-term worker visas.
                <br />
                <br />
                <span className="font-bold">Short-term worker</span> visas are
                typically issued for a period of up to 180 days within a
                one-year period. These visas are intended for individuals who
                will be working in Armenia for a shorter period of time, such as
                temporary or seasonal workers.
                <br />
                <br />
                <span className="font-bold">Long-term worker</span> visas are
                typically issued for a period of up to one year and are
                renewable. These visas are intended for individuals who will be
                working in Armenia for a longer period of time, such as
                permanent or contract workers.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements for a
                  worker visa in Armenia may vary depending on the nature of
                  your work and the length of your stay in the country. It's
                  always a good idea to check with the embassy or consulate of
                  Armenia to confirm the most current visa requirements before
                  you apply.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Armenia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Armenia, you will typically need
                to provide the following documents:
                <br />
                <br />● A completed worker visa application form. This can
                usually be found on the embassy or consulate's website, or you
                may be able to request one in person.
                <br />
                <br />● A valid passport with at least six months of validity
                remaining. Make sure your passport has enough blank pages for
                any visa stamps you may need.
                <br />
                <br />
                ● Two recent passport-sized photographs. These should be in
                color and taken against a white background.
                <br />
                <br />
                ● A letter of employment or a letter of invitation from your
                employer in Armenia. This letter should outline the terms of
                your employment and the duration of your stay in the country.
                <br />
                <br />● Proof of sufficient funds to cover your expenses while
                in Armenia. This could include bank statements, credit card
                statements, or a letter from your employer confirming that they
                will be providing financial support.
                <br />
                <br />● Any additional documents that may be required based on
                the nature of your work and the length of your stay. This could
                include a resume, proof of your education and qualifications, or
                other documents related to your work.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements may vary
                  depending on your nationality and the embassy or consulate
                  where you are applying. It's always a good idea to check with
                  the embassy or consulate to confirm the exact requirements for
                  your worker visa application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Armenia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Armenia, you will typically need
                to visit the embassy or consulate of Armenia in your country of
                residence. You can usually find the nearest embassy or consulate
                by visiting the website of the Ministry of Foreign Affairs of
                Armenia or by searching online for "Armenian embassy" or
                "Armenian consulate" followed by the name of your country.
                <br />
                <br />
                You can usually apply for a worker visa in Armenia at any time,
                but it's a good idea to start the process well in advance of
                your planned travel date to allow enough time for your
                application to be processed. Processing times for worker visas
                can vary depending on the embassy or consulate where you are
                applying, so it's always a good idea to check with the specific
                embassy or consulate for the most up-to-date information and
                requirements.
                <br />
                <br />
                When you apply for a worker visa in Armenia, you will typically
                need to provide a completed worker visa application form, a
                valid passport with at least six months of validity remaining,
                two passport-sized photographs, and other documents such as a
                letter of employment or a letter of invitation from your
                employer in Armenia and proof of sufficient funds to cover your
                expenses while in the country. You may also need to pay a visa
                fee to process your application.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  procedures for applying for a worker visa in Armenia may vary
                  depending on your nationality and the embassy or consulate
                  where you are applying. It's always a good idea to check with
                  the embassy or consulate to confirm the most current visa
                  requirements and procedures before you apply.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Armenia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Armenia, you will generally need
                to obtain a student visa. The specific requirements for a
                student visa in Armenia will depend on the length of your study
                program and your nationality.
                <br />
                <br />
                To apply for a student visa in Armenia, you will typically need
                to provide the following documents:
                <br />
                <br />● A completed student visa application form. This can
                usually be found on the embassy or consulate's website, or you
                may be able to request one in person.
                <br />
                <br />● A valid passport with at least six months of validity
                remaining. Make sure your passport has enough blank pages for
                any visa stamps you may need.
                <br />
                <br />● Two recent passport-sized photographs. These should be
                in color and taken against a white background.
                <br />
                <br />● A letter of acceptance from your educational institution
                in Armenia. This letter should outline the terms of your
                enrollment and the duration of your study program.
                <br />
                <br />● Proof of sufficient funds to cover your expenses while
                in Armenia. This could include bank statements, credit card
                statements, or a letter from your sponsor outlining their
                financial support.
                <br />
                <br />● Any additional documents that may be required based on
                the length of your study program and your nationality. This
                could include proof of your education and qualifications, or
                other documents related to your studies.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements may vary
                  depending on your nationality and the embassy or consulate
                  where you are applying. It's always a good idea to check with
                  the embassy or consulate to confirm the exact requirements for
                  your student visa application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Armenia Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Armenia, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of student visa you need. Armenia
                offers a variety of student visas, including short-term student
                visas and long-term student visas. Choose the type of visa that
                best fits your needs based on the length of your study program.
                <br />
                <br />● Gather the required documents. This will typically
                include a completed student visa application form, a valid
                passport with at least six months of validity remaining, two
                passport-sized photographs, and other documents such as a letter
                of acceptance from your educational institution in Armenia and
                proof of sufficient funds to cover your expenses while in the
                country.
                <br />
                <br />● Contact the embassy or consulate of Armenia to confirm
                the specific requirements for your student visa application.
                Some countries may have additional requirements based on your
                nationality or the length of your study program.
                <br />
                <br />● Submit your application. You can usually submit your
                application in person at the embassy or consulate, or you may be
                able to apply online or by mail. Be sure to check the specific
                requirements and procedures of the embassy or consulate where
                you are applying.
                <br />
                <br />● Pay the visa fee. You will need to pay a fee to process
                your student visa application. Check with the embassy or
                consulate for the current fee amount.
                <br />
                <br />
                ● Wait for a decision. It can take several weeks or even months
                to process a student visa application. Be patient and do not
                make any travel arrangements until you have received your visa.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the student visa application
                  process can vary depending on the embassy or consulate where
                  you are applying, so it's always a good idea to check with the
                  specific embassy or consulate for the most up-to-date
                  information and requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Armenia Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A completed student visa application form. This can usually be
                found on the embassy or consulate's website, or you may be able
                to request one in person.
                <br />
                <br />● A valid passport with at least six months of validity
                remaining. Make sure your passport has enough blank pages for
                any visa stamps you may need.
                <br />
                <br />● Two recent passport-sized photographs. These should be
                in color and taken against a white background.
                <br />
                <br />● A letter of acceptance from your educational institution
                in Armenia. This letter should outline the terms of your
                enrollment and the duration of your study program.
                <br />
                <br />● Proof of sufficient funds to cover your expenses while
                in Armenia. This could include bank statements, credit card
                statements, or a letter from your sponsor outlining their
                financial support.
                <br />
                <br />● Any additional documents that may be required based on
                the length of your study program and your nationality. This
                could include proof of your education and qualifications, or
                other documents related to your studies.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements may vary
                  depending on your nationality and the embassy or consulate
                  where you are applying. It's always a good idea to check with
                  the embassy or consulate to confirm the exact requirements for
                  your student visa application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Armenia Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price for a student visa in Armenia will depend
                on the length of your study program and your nationality.
                <br />
                <br />
                Student visas to Armenia are typically issued for the duration
                of your study program, plus a period of time before and after
                the program to allow for travel. This means that your student
                visa will be valid for the length of your study program, plus a
                few weeks or months before and after the program to allow you to
                travel to and from Armenia.
                <br />
                <br />
                The price of a student visa in Armenia will depend on the
                embassy or consulate where you are applying and your
                nationality. It's always a good idea to check with the embassy
                or consulate to confirm the current price of a student visa
                before you apply.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the validity and price of a
                  student visa in Armenia are subject to change, so it's always
                  a good idea to check with the embassy or consulate for the
                  most current information and requirements before you apply.
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

export default Armenia;
